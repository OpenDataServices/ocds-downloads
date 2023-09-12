<template>
  <v-app>
    <v-system-bar
      app
      color="red"
      absolute
    >
    <span class="white--text"><span class="hidden-xs-only"> Tool is deprecated and data will be out of date.  Please use <a href="https://data.open-contracting.org/">Official OCDS Data Registry.</a> Data has been deleted.</span> </span>
    </v-system-bar>
    <v-app-bar
      app
      absolute
      color="white"
      flat
    >
    <v-navigation-drawer
      app
      v-model="drawer"
      absolute
      temporary
    >

      <router-link to="/" v-slot="{href, navigate}" custom >
        <v-btn text class="title normal-case mb-4" :href="href" @click="navigate">
          OCDS Downloads
        </v-btn>
      </router-link>

      <router-link to="/use-the-data" v-slot="{href, navigate}" custom>
        <v-btn text :href="href" @click="navigate">
          Use The Data
        </v-btn>
      </router-link>

      <router-link to="/processing-pipeline" v-slot="{href, navigate}" custom>
        <v-btn text :href="href" @click="navigate">
          Processing Pipeline
        </v-btn>
      </router-link>

      <router-link to="/about" v-slot="{href, navigate}" custom>
        <v-btn text :href="href" @click="navigate">
          About
        </v-btn>
      </router-link>

    </v-navigation-drawer>

    <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-row>
      <v-col>
        <v-container class="py-0 fill-height">

          <router-link to="/" v-slot="{href, navigate}" custom>
            <v-btn text class="title mr-10 normal-case" :href="href" @click="navigate">
              OCDS Downloads
            </v-btn>
          </router-link>

          <router-link to="/use-the-data" v-slot="{href, navigate}" custom class="hidden-sm-and-down">
            <v-btn text :href="href" @click="navigate">
              Use The Data
            </v-btn>
          </router-link>

          <router-link to="/processing-pipeline" v-slot="{href, navigate}" custom class="hidden-sm-and-down">
            <v-btn text :href="href" @click="navigate">
              Processing Pipeline
            </v-btn>
          </router-link>

          <router-link to="/about" v-slot="{href, navigate}" custom class="hidden-sm-and-down">
            <v-btn text :href="href" @click="navigate">
              About
            </v-btn>
          </router-link>

          <v-spacer></v-spacer>
          <a href="https://opendataservices.coop/" class="d-none d-sm-flex"><img src="@/assets/developed_by.png" width="130px" class="mr-4"/></a>
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
import { licenseLookup } from '@/license'

export default {
  name: 'App',
  data: () => ({
    drawer: false,
    menuSelected: '',
    allData: [],
    originalData: []
  }),
  async created () {
    try {
      const response = await axios.get('https://ocdsdata.fra1.digitaloceanspaces.com/metadata/stats.json')

      this.originalData = response.data

      for (const [key, value] of Object.entries(this.originalData)) {
        value.license = ''
        if (key.split('_')[0] === 'digiwhist' || key.split('_')[1] === 'digiwhist') {
          value.package_info.licences = ['https://creativecommons.org/licenses/by-nc-sa/4.0/']
        }
        if (value.package_info.licences && value.package_info.licences[0]) {
          value.license = value.package_info.licences[0]
          value.licenseCode = licenseLookup[value.license]
        }
        const flatValue = flatten(value, { delimiter: '-' })
        flatValue.source = key
        flatValue.original = value
        this.allData.push(flatValue)
      }
    } catch (err) {
      console.log(err)
    }
  },
  mounted () {
    window.addEventListener('click', event => {
      // ensure we use the link, in case the click has been received by a subelement
      let { target } = event
      while (target && target.tagName !== 'A') target = target.parentNode
      // handle only links that do not reference external resources
      if (target && target.matches("a:not([href*='://'])") && target.href) {
        // some sanity checks taken from vue-router:
        // https://github.com/vuejs/vue-router/blob/dev/src/components/link.js#L106
        const { altKey, ctrlKey, metaKey, shiftKey, button, defaultPrevented } = event
        // don't handle with control keys
        if (metaKey || altKey || ctrlKey || shiftKey) return
        // don't handle when preventDefault called
        if (defaultPrevented) return
        // don't handle right clicks
        if (button !== undefined && button !== 0) return
        // don't handle if `target="_blank"`
        if (target && target.getAttribute) {
          const linkTarget = target.getAttribute('target')
          if (/\b_blank\b/i.test(linkTarget)) return
        }
        // don't handle same page links/anchors
        const url = new URL(target.href)
        const to = url.pathname
        if (window.location.pathname !== to && event.preventDefault) {
          event.preventDefault()
          this.$router.push(to)
        }
      }
    })
  }
}
</script>

<style>
.normal-case {
   text-transform: none !important
}
</style>
