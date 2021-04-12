
<template>
  <v-container v-if="sourceData">
    <v-row dense>
      <v-col cols=12 lg=6 xl=4>
        <v-row dense>
          <v-col cols=12>
            <v-card elevation="0" color="white">
              <v-card-title class="capitalize-source text-h4">
                {{name.replace(/_/g, ' ')}}
              </v-card-title>
              <v-card-text>
                <p> This page contains downloads for <span class="capitalize-source">{{name.replace(/_/g, ' ')}}</span> </p>
                <p> This data is from {{sourceData["scraper_info-category"]}} </p>
                <p> Data gathered using the {{ name }} scraper on {{sourceData["field_info-latest_date"]}} </p>
                <p> More info on the source can be found in <a :href="sourceData['scraper_info-docs_link']"> Collect Docs </a></p>
                <v-dialog :scrollable=true width=800 v-model="fetchInfoDialog">
                  <template v-slot:activator="{ on, attrs }">
                    <a
                      v-bind="attrs"
                      v-on="on"
                    >
                      Fetch Info
                      <v-tooltip top v-if="originalSourceData.job_info.latest_info.fileerror_count">
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon
                            small
                            color="yellow darken-2"
                            v-bind="attrs"
                            class="ml-1 mb-1"
                            v-on="on">
                            mdi-alert-circle-outline
                          </v-icon>
                        </template>
                        <span> There were {{ originalSourceData.job_info.latest_info.fileerror_count }} errors when fetching, so data might be incomplete. </span>
                      </v-tooltip>
                    </a>
                  </template>

                  <v-card>
                    <v-card-title>
                      Fetch Info
                    </v-card-title>

                    <v-card-text style="height: 500px;">
                      <v-simple-table dense=true>
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
                  <v-simple-table dense>
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
                          <td><a href="#" v-scroll-to="'#table-' + table.object_type"> {{ table.object_type }} </a></td>
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
          <v-row dense>
            <v-col cols=12 xl=6>
              <v-card elevation="4" class="ml-2 mr-2">
                <v-card-title>
                  <span> Postgres Database Dump </span>
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
                  <p> Download is a PG dump in custom (compressed) format.  You need to run "pg_restore" on a database instance to load it, eg:</p>
                  <pre> pg_restore -d [db] --no-owner -c [source].pg_dump </pre>
                  <br/>
                  <p> A new schema "{{name}}" will be created with the tables in the table list.</p>
                  <p> Additional table "_compiled_releases" also in schema with raw JSON of compiled release. A list of releases that where compiled is also in "_compiled_release" table if source provided "release" data.</p>
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
                  <p> Link takes you to BigQuery console</p>
                  <p> You may need to use the Explorer section on the left to naviage the to this dataset again.</p>
                  <p> The schema and field docs can be seen by clicking on a table in the Explorer section.</p>
                  <p> A Google account is required to query the data but a free 1TB per month of Query data processing is available without providing payment.</p>
                  <p> See <a href="https://cloud.google.com/bigquery/docs/quickstarts/quickstart-web-ui"> BigQuery quickstart guide </a>  for more info </p>
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
                  <p> Contains a zip file of csv files named in the table list.</p>
                  <p> An extra csv file named fields.csv with the table of fields are in each table for reference.</p>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols=12 xl=6>
              <v-card elevation="4" class="ml-2 mr-2">
                <v-card-title>
                  <span> Excel (xlsx) </span>
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
                  <p> Excel file contains a tab named after each table in the table list</p>
                  <p> An extra table named "Field Infromation" has detail of fields that are in each table</p>
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
                  <p> Contains sqlite database file. with each table in the table list. </p>
                  <p> Use local tool such as <a href="https://sqlitebrowser.org/">sqlitebrowser</a> to open </p>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols=12 xl=6>
              <v-card elevation="4" class="ml-2 mr-2">
                <v-card-title>
                  <span> Colab Notebook </span>
                  <v-chip
                    class="ml-auto"
                    color="green darken-3"
                    text-color="white"
                    :active="Boolean(noteBookUrl)"
                    :href="noteBookUrl"
                  >
                  Colab Notebook
                  </v-chip>
                </v-card-title>
                <v-card-text>
                  <p> Link to colab notebook that sets up SQL environment to analyse the data.</p>
                  <p> Instruction on use found inside notebook</p>
                  <p> You will need to copy the notebook to your own drive to start using.</p>
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
              <v-row dense>
                <v-col v-for="table in fieldTypes" cols=12  :key='table.object_type'>
                  <v-card elevation="4" class="ml-2 mr-2">
                    <v-card-title :id='"table-" + table.object_type'>
                      {{table.object_type}}
                    </v-card-title>
                    <v-simple-table dense>
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
      fetchInfoDialog: false
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
    replaceVersionLang: function (text) {
      text = text.replace('{{lang}}', 'en')
      text = text.replace('{{version}}', '1.1')
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
    },
    fetchNotebook: async function (sourceData) {
      if (!sourceData) {
        return
      }
      console.log(sourceData)
      console.log(sourceData.notebookIdFile)
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
