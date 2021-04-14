
<template>
  <v-container>
    <v-row>
      <v-col cols=12 xl=3>
        <v-card elevation="0" color="white">
          <v-card-text class="body-1">
            <vue-markdown :source="homeText"></vue-markdown>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols=12 xl=9>
        <v-card elevation="0" color="white">
          <v-card-title class="text-h5"> Data Sources </v-card-title>
          <v-card-text class="body-1">
            <v-data-table
                :headers="headers"
                :items="allData"
                :items-per-page="200"
                :disable-pagination=true
                :hide-default-footer=true
                :search="search"
                :dense=false
                :must-sort=true
                :sort-desc=true>
            <template v-slot:top>
              <v-text-field
                v-model="search"
                label="Search sources"
                class="ml-4 mt-0"
              ></v-text-field>
            </template>
            <template v-slot:item.source="{ item }">
              <router-link v-if="item['field_info-latest']" :to='{name: "Source", params: {"name": item.source}}' class="capitalize-source"> {{item.source.replace(/_/g, ' ')}}</router-link>
              <span class="capitalize-source" v-if="!item['field_info-latest']">{{item.source.replace(/_/g, ' ')}}</span>
              <v-tooltip top v-if="item['job_info-latest_info-fileerror_count'] || !item['field_info-latest']">
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    small
                    :color="!item['field_info-latest'] ? 'red' : 'yellow darken-2'"
                    v-bind="attrs"
                    class="ml-1"
                    v-on="on">
                    mdi-alert-circle-outline
                  </v-icon>
                </template>
                <span v-if="item['job_info-latest_info-fileerror_count']"> There were {{ item['job_info-latest_info-fileerror_count'] }} errors when fetching, so data might be incomplete. </span>
                <span v-if="!item['field_info-latest']"> Unable to fetch this source </span>
              </v-tooltip>
            </template>
            <template v-slot:item.job_info-latest_info-finish_time="{ item }">
              {{ day_from_now(item['job_info-latest_info-finish_time']) }}
            </template>
            <template v-slot:item.table_stats-release="{ item }">
              {{ (item['table_stats-release'] || 0).toLocaleString() }}
            </template>
            <template v-slot:item.download_links="{ item }">
              <v-chip
                class="ma-1"
                color="blue darken-3"
                text-color="white"
                :small=true
                :active="Boolean(item['csv-url'])"
                :href="item['csv-url']"
              >
              csv
              </v-chip>
              <v-chip
                class="ma-1"
                color="deep-purple darken-4"
                text-color="white"
                :small=true
                :active="Boolean(item['sqlite-url'])"
                :href="item['sqlite-url']"
              >
              sqlite
              </v-chip>
              <v-chip
                class="ma-1"
                color="deep-orange darken-3"
                text-color="white"
                :small=true
                :active="Boolean(item['xlsx-url'])"
                :href="item['xlsx-url']"
              >
              xlsx
              </v-chip>
              <v-chip
                class="ma-1"
                color="blue-grey darken-1"
                text-color="white"
                :small=true
                :active="Boolean(item['pg_dump-url'])"
                :href="item['pg_dump-url']"
              >
              pg dump
              </v-chip>
              <v-chip
                class="ma-1"
                color="teal darken-1"
                text-color="white"
                :small=true
                :active="Boolean(item['big_query-url'])"
                :href="item['big_query-url']"
              >
              bigquery
              </v-chip>
            </template>

          </v-data-table>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { homeText } from '@/text'
import VueMarkdown from 'vue-markdown-render'

dayjs.extend(relativeTime)

export default {
  components: { VueMarkdown },
  props: ['allData'],
  methods: {
    day_from_now (latestDate) {
      if (latestDate) {
        return dayjs(latestDate).fromNow()
      }
      return ''
    }
  },
  data () {
    return {
      headers: [
        { text: 'OCDS Source', value: 'source', width: 200 },
        { text: 'Country/Category', value: 'scraper_info-category' },
        { text: 'Info', value: 'scraper_info-extra_info-Domain', width: 200 },
        { text: 'Contracting Processes', value: 'table_stats-release' },
        { text: 'Download Formats', value: 'download_links', sortable: false },
        { text: 'Last Fetched', value: 'job_info-latest_info-finish_time' }
      ],
      search: '',
      error: undefined,
      homeText
    }
  }
}

</script>

<style>
.capitalize-source {
   text-transform: capitalize
}
</style>
