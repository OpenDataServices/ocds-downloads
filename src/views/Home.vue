
<template>
  <v-container>
    <v-row>
      <v-col cols=12 xl=3>
        <v-card elevation="0" color="white">
          <v-card-title class="text-h5"> Data Sources </v-card-title>
          <v-card-text class="body-1">
            <p> This page contains a list of OCDS data gathered using <a href="https://kingfisher-collect.readthedocs.io/en/latest/"> OCDS Kingfisher Collect </a> and processed through a data pipeline using <a href="https://airflow.apache.org/"> Apache Airflow </a>. Click on the data source for more detail about the data within each source, as well as some usage guidance. </p>

            <p> Slight additions to the OCDS Data Standard have been made to the data, as well as converting the original JSON into a relational data form.  All data in the orginal JSON should appear in the outputs. Please read the <router-link to='About'>about</router-link> page for caveats with the current output and more information about the data processing involved in getting the data to this form.</p>

            To track and see the status of each sources please see the <a href="https://ocdsdata.opendataservices.coop/">Airflow homepage for this pipeline</a>, which is available in read-only form publically.  There is no guarantee this service will be available but best efforts will be made to make sure the latest version of each source will kept online along with this website.

          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols=12 xl=9>
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
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export default {
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
        { text: 'OCDS Source', value: 'source' },
        { text: 'Contracting Processes', value: 'table_stats-release' },
        { text: 'Download Formats', value: 'download_links', sortable: false },
        { text: 'Last Fetched', value: 'job_info-latest_info-finish_time' }
      ],
      search: '',
      error: undefined
    }
  }
}

</script>

<style>
.capitalize-source {
   text-transform: capitalize
}
</style>
