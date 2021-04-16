<template>
  <v-container>
    <v-row>
      <v-col cols=12 xl=9>
        <v-card>
          <v-card-title>
            About
          </v-card-title>
          <v-card-text>
           <vue-markdown :source="aboutText[0]"></vue-markdown>
           <vue-markdown :source="aboutText[1]"></vue-markdown>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueMarkdown from 'vue-markdown-render'
import { aboutText } from '@/text'

export default {
  components: {
    VueMarkdown
  },
  data () {
    return {
      aboutText
    }
  }
}

</script>
