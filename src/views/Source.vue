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
import VueMarkdown from 'vue-markdown-render'
import { homeText } from '@/text'

export default {
  props: ['allData', 'name', 'originalData'],
  components: {
    VueMarkdown
  },
  data () {
    return {
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
