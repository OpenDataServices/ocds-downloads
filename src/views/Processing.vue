<template>
  <v-container>
    <v-row>
      <v-col cols=12 xl=3>
        <v-card>
          <v-card-title>
            Processing Pipeline
          </v-card-title>
          <v-card-text class="md-content">
           <vue-markdown :source="processingText[0]"></vue-markdown>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols=12 xl=9>
        <v-card>
          <v-card-text class="md-content">
           <vue-markdown :source="processingText[1]"></vue-markdown>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueMarkdown from 'vue-markdown-render'
import { processingText } from '@/text'

export default {
  components: {
    VueMarkdown
  },
  data () {
    return {
      processingText
    }
  }
}

</script>
