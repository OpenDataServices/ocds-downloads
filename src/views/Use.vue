<template>
  <v-container>
    <v-row>
      <v-col cols=12 xl=6>
        <v-card>
          <v-card-title>
            Use the Data
          </v-card-title>
          <v-card-text class="md-content">
            <vue-markdown :source="useText[0]"></vue-markdown>

            <span class="text-subtitle-2">
               Sample Field Information
            </span>
            <v-divider/>
            <v-simple-table :dense=true>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">
                      Field
                    </th>
                    <th class="text-left">
                      Type
                    </th>
                    <th class="text-left">
                      OCDS Schema Type
                    </th>
                    <th class="text-left">
                      Docs
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="field in fields"
                    :key="field.name"
                  >
                    <td>{{ field.name }}</td>
                    <td>{{ field.type }}</td>
                    <td>{{ field.schema_type }}</td>
                    <td> <vue-markdown :source="replaceVersionLang(field.description)"></vue-markdown></td>
                  </tr>
                </tbody>
                <pre>{{fieldExample}}</pre>
              </template>
            </v-simple-table>
            <v-divider class="mb-4"/>

            <vue-markdown :source="useText[2]"></vue-markdown>

            <span class="text-subtitle-2">
               Sample Release Table
            </span>
            <v-divider/>
            <v-simple-table :dense=true>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th v-for="column in releases.columns" class="text-left" :key="column">
                      {{ column }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="row in releases.rows"
                    :key="row"
                  >
                    <td v-for="(cell, index) in row" :key="index">{{ cell }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <v-divider class="mb-4"/>

            <vue-markdown :source="useText[4]"></vue-markdown>

            <span class="text-subtitle-2">
               Sample Awards Table
            </span>
            <v-divider/>
            <v-simple-table :dense=true>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th v-for="column in awards.columns" class="text-left" :key="column">
                      {{ column }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="row in awards.rows"
                    :key="row"
                  >
                    <td v-for="(cell, index) in row" :key="index">{{ cell }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <v-divider class="mb-4"/>

            <vue-markdown :source="useText[6]"></vue-markdown>

          </v-card-text>
        </v-card>
      </v-col>
      <v-spacer/>
    </v-row>
  </v-container>
</template>

<script>
import VueMarkdown from 'vue-markdown-render'
import { useText } from '@/text'
import releases from '@/samples/release.json'
import fields from '@/samples/fields.json'
import awards from '@/samples/awards.json'

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
      useText,
      releases,
      awards,
      fields
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
