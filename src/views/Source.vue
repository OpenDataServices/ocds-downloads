
<template>
  <v-container v-if="sourceData">
    <v-row :dense=true>
      <v-col cols=12 lg=6 xl=4>
        <v-row :dense=true>
          <v-col cols=12>
            <v-card elevation="0" color="white">
              <v-card-title class="capitalize-source text-h4">
                {{name.replace(/_/g, ' ')}}
              </v-card-title>
              <v-card-text>
                <p> <b> Last Updated: </b> {{sourceData["field_info-latest_date"]}} </p>
                <p> Check which tables and fields are included in this data source and choose a format to download. </p>

                <p> Read the <a :href="sourceData['scraper_info-docs_link']">Kingfisher Collect Spider Documentation</a> for more information about this data source.
                <p> This page contains downloads for <span class="capitalize-source">{{name.replace(/_/g, ' ')}}</span> </p>
                <p><span v-if="originalSourceData.job_info.latest_info.fileerror_count">There were {{ originalSourceData.job_info.latest_info.fileerror_count }} data collection errors, so the data may be incomplete.</span>
                   <span v-else> There were no data collection errors.</span>
                <v-dialog :scrollable=true width=800 v-model="fetchInfoDialog">
                  <template v-slot:activator="{ on, attrs }">
                    <a
                      v-bind="attrs"
                      v-on="on"
                    >
                      View the Kingfisher Collect Stats for more information.
                    </a>
                  </template>

                  <v-card>
                    <v-card-title>
                      Kingfisher Collect Stats
                    </v-card-title>

                    <v-card-text style="height: 500px;">
                      <v-simple-table :dense=true>
                        <template v-slot:default>
                          <tbody>
                            <tr
                              v-for="(value, name) in originalSourceData.job_info.latest_info"
                              :key="name"
                            >
                              <td class="font-weight-medium">{{ name }}</td>
                              <td>{{ value }}</td>
                            </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn
                        color="blue darken-3"
                        text
                        @click="fetchInfoDialog = false"
                      >
                        Close
                      </v-btn>
                    </v-card-actions>

                  </v-card>
                </v-dialog>
                </p>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols=12>
            <div v-if='!fieldInfo.empty'>
              <v-card elevation="0" color="white">
                <v-card-title class="text-h5">
                  Tables
                </v-card-title>
                <v-card-text>
                  <p> Each download contains the following tables: </p>
                  <v-simple-table :dense=true>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">
                            Table Name
                          </th>
                          <th class="text-left">
                            Row Count
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="table in fieldTypes"
                          :key="table.object_type"
                        >
                          <td><a v-scroll-to="{el: '#table-' + table.object_type, onDone: scrollDone}" :href="'#table-' + table.object_type"> {{ table.object_type }} </a></td>
                          <td>{{ sourceData['table_stats-' + table.object_type].toLocaleString() }}</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-card-text>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols=12 lg=6 xl=8>
        <v-card elevation="0">
          <v-card-title class="text-h5">
            Formats
          </v-card-title>
          <v-row :dense=true>
            <v-col v-if="sourceData['sqlite_gz-url']" cols=12 xl=6>
              <v-card elevation="4" class="ml-2 mr-2">
                <v-card-title>
                  <span> Notebooks </span>
                  <span class="ml-auto">
                    <v-chip
                      color="green darken-3"
                      text-color="white"
                      :href="sourceData['ipynb-url']"
                    >
                    Jupyter
                    </v-chip>
                    <v-chip
                      class="ml-1"
                      color="grey darken-3"
                      text-color="white"
                      :href="noteBookUrl"
                    >
                    Colab
                    </v-chip>
                  </span>
                </v-card-title>
                <v-card-text>
                  <vue-markdown :source="sourceText.notebook"></vue-markdown>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols=12 xl=6>
              <v-card elevation="4" class="ml-2 mr-2">
                <v-card-title>
                  <span> PostgreSQL Dump </span>
                  <v-chip
                    class="ml-auto"
                    color="blue-grey darken-1"
                    text-color="white"
                    :active="Boolean(sourceData['pg_dump-url'])"
                    :href="sourceData['pg_dump-url']"
                  >
                   Download DB Dump
                  </v-chip>
                </v-card-title>
                <v-card-text>
                  <vue-markdown :source="sourceText.pg_dump.replace('{name}', name)"></vue-markdown>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols=12 xl=6>
              <v-card elevation="4" class="ml-2 mr-2">
                <v-card-title>
                  <span> BigQuery </span>
                  <v-chip
                    class="ml-auto"
                    color="teal darken-1"
                    text-color="white"
                    :active="Boolean(sourceData['big_query-url'])"
                    :href="sourceData['big_query-url']"
                  >
                  BigQuery Console
                  </v-chip>
                </v-card-title>
                <v-card-text>
                  <vue-markdown :source="sourceText.bigquery"></vue-markdown>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols=12 xl=6>
              <v-card elevation="4" class="ml-2 mr-2">
                <v-card-title>
                  <span> CSV </span>
                  <v-chip
                    class="ml-auto"
                    color="blue darken-3"
                    text-color="white"
                    :active="Boolean(sourceData['csv-url'])"
                    :href="sourceData['csv-url']"
                  >
                  Download CSV
                  </v-chip>
                </v-card-title>
                <v-card-text>
                  <vue-markdown :source="sourceText.csv"></vue-markdown>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols=12 xl=6>
              <v-card elevation="4" class="ml-2 mr-2">
                <v-card-title>
                  <span> Excel </span>
                  <v-chip
                    class="ml-auto"
                    color="deep-orange darken-3"
                    text-color="white"
                    :active="Boolean(sourceData['xlsx-url'])"
                    :href="sourceData['xlsx-url']"
                  >
                  Download XLSX
                  </v-chip>
                </v-card-title>
                <v-card-text v-if="!sourceData['xlsx-url']">
                  <p> No Excel download availibale as data is too large</p>
                </v-card-text>
                <v-card-text v-if="sourceData['xlsx-url']">
                  <vue-markdown :source="sourceText.xlsx"></vue-markdown>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col v-if="sourceData['sqlite-url']" cols=12 xl=6>
              <v-card elevation="4" class="ml-2 mr-2">
                <v-card-title>
                  <span> SQLite </span>
                  <v-chip
                    class="ml-auto"
                    color="deep-purple darken-4"
                    text-color="white"
                    :href="sourceData['sqlite-url']"
                  >
                  Download Sqlite
                  </v-chip>
                </v-card-title>
                <v-card-text>
                  <vue-markdown :source="sourceText.sqlite"></vue-markdown>
                </v-card-text>
              </v-card>
            </v-col>

          </v-row>
        </v-card>

      </v-col>
      <v-col>
        <v-row>
          <v-col>
            <v-card>
              <v-card-title class="text-h5">
                Field Detail
              </v-card-title>
              <v-row :dense=true>
                <v-col v-for="table in fieldTypes" cols=12  :key='table.object_type'>
                  <v-card elevation="4" class="ml-2 mr-2">
                    <v-card-title :id='"table-" + table.object_type'>
                      {{table.object_type}}
                    </v-card-title>
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
                              Field Usage Count
                            </th>
                            <th class="text-left">
                              Docs
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="field in table.object_details"
                            :key="field.name"
                          >
                            <td>{{ field.name }}</td>
                            <td>{{ field.type }}</td>
                            <td>{{ field.schema_type }}</td>
                            <td>{{ fieldInfo[table.object_type][field.name].count.toLocaleString() }}</td>
                            <td> <vue-markdown :source="replaceVersionLang(field.description)"></vue-markdown></td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
import VueMarkdown from 'vue-markdown-render'
import { sourceText } from '@/text'
import VueScrollTo from 'vue-scrollto'

export default {
  props: ['allData', 'name', 'originalData'],
  components: {
    VueMarkdown
  },
  data () {
    return {
      fieldInfo: { empty: true },
      fieldTypes: [],
      noteBookUrl: '',
      fetchInfoDialog: false,
      sourceText
    }
  },
  computed: {
    sourceData: function () {
      return this.allData.find(x => x.source === this.name)
    },
    originalSourceData: function () {
      return this.originalData[this.name]
    }
  },
  created: function () {
    this.fetchFieldInfo(this.sourceData)
    this.fetchFieldTypes(this.sourceData)
    this.fetchNotebook(this.sourceData)
  },
  methods: {
    scrollDone: function (el) {
      window.location.hash = '#' + el.id
    },
    replaceVersionLang: function (text) {
      text = text.replace('{{lang}}', 'en')
      text = text.replace('{{version}}', '1.1')
      // temporary change in text before scrapers update
      text = text.replace('Link to this row that can be found in other rows', 'Link to this row that can be found in other tables')
      return text
    },
    fetchFieldInfo: async function (fieldInfoData) {
      if (!fieldInfoData || !fieldInfoData['field_info-latest']) {
        this.fieldInfo = { empty: true }
        return
      }
      const response = await axios.get(fieldInfoData['field_info-latest'])
      const fieldInfo = {}
      response.data.forEach(item => {
        if (!fieldInfo[item.object_type]) {
          fieldInfo[item.object_type] = {}
        }
        fieldInfo[item.object_type][item.key] = item
      })

      this.fieldInfo = fieldInfo
    },
    fetchFieldTypes: async function (fieldTypesData) {
      if (!fieldTypesData || !fieldTypesData['field_types-latest']) {
        this.fieldTypes = []
        return
      }
      const response = await axios.get(fieldTypesData['field_types-latest'])
      this.fieldTypes = response.data
      this.$nextTick(() => VueScrollTo.scrollTo(window.location.hash))
    },
    fetchNotebook: async function (sourceData) {
      if (!sourceData) {
        return
      }
      const response = await axios.get(sourceData.notebookIdFile)
      if (response.data.id) {
        this.noteBookUrl = 'https://colab.research.google.com/drive/' + response.data.id
      }
    }
  },
  watch: {
    sourceData: function (newData) {
      this.fetchFieldInfo(newData)
      this.fetchFieldTypes(newData)
      this.fetchNotebook(newData)
    }
  }
}

</script>

<style>
.capitalize-source {
   text-transform: capitalize
}
</style>
