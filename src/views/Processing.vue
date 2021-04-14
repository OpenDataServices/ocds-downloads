<template>
  <v-container>
    <v-row>
      <v-col cols=12 xl=6>
        <v-card>
          <v-card-title>
            Processing Pipeline
          </v-card-title>
          <v-card-text class="md-content">
           <vue-markdown :source="processingText"></vue-markdown>
          </v-card-text>
        </v-card>
      </v-col>
      <v-spacer/>
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
