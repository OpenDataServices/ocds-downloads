<template>
  <v-app>
    <v-system-bar
      app
      color="red"
      absolute
      height=20
    >
      <span class="white--text">Tool in alpha. Please do not rely on data within this page to be updated regularly. </span>
    </v-system-bar>
    <v-app-bar
      app
      absolute
      color="white"
      flat
    >
    <v-row>
      <v-col>
        <v-container class="py-0 fill-height">

          <router-link to="/" v-slot="{href, navigate}" custom >
            <v-btn text class="title mr-10 normal-case" :href="href" @click="navigate">
              OCDS Data Downloads
            </v-btn>
          </router-link>

          <router-link to="/about" v-slot="{href, navigate}" custom>
            <v-btn text :href="href" @click="navigate">
              About
            </v-btn>
          </router-link>

          <v-spacer></v-spacer>
        </v-container>
      </v-col>
    </v-row>
    </v-app-bar>
    <v-main class="grey lighten-3">
      <v-container>
        <router-view :allData="allData" :originalData="originalData"></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios'
import flatten from 'flat'

export default {
  name: 'App',
  data: () => ({
    allData: [],
    originalData: []
  }),
  async created () {
    try {
      const response = await axios.get('https://ocdsdata.fra1.digitaloceanspaces.com/metadata/stats.json')

      this.originalData = response.data
      for (const [key, value] of Object.entries(this.originalData)) {
        const flatValue = flatten(value, { delimiter: '-' })
        flatValue.source = key
        this.allData.push(flatValue)
      }
    } catch (err) {
    }
  }
}
</script>

<style>
.normal-case {
   text-transform: none !important
}
</style>
