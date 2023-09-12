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
  components: {
    VueMarkdown
  },
  methods: {
    replaceVersionLang: function (text) {
      text = text.replace('{{lang}}', 'en')
      text = text.replace('{{version}}', '1.1')
      return text
    }
  },
  data () {
    return {
      homeText
    }
  }
}
</script>

<style>
.md-content h3 {
  margin-bottom: 8px;
}
.md-content ul {
  margin-bottom: 16px;
}
</style>
