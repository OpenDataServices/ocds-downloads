
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
        { text: 'License', value: 'license', width: 155 },
        { text: 'Country/Category', value: 'scraper_info-category' },
        { text: 'Info', value: 'scraper_info-extra_info-Domain', width: 200 },
        { text: 'Processes', value: 'table_stats-release', width: 120 },
        { text: 'Download Formats', value: 'download_links', sortable: false },
        { text: 'Collected', value: 'job_info-latest_info-finish_time' }
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
