<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn @click="RouteToOverview('terrain')">
        Terreinen
      </v-btn>
      <v-btn @click="RouteToOverview('building')">
        Gebouwen
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        @click="RouteToNewCampPlace"
        text
      >
        <span class="mr-2">Nieuwe kampplaats</span>
        <v-icon>mdi-border-color</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer padless>
      <v-col
        class="text-center"
        cols="12"
      >
      Scouting Roeselare - Vancraeynest Projects
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
  methods:{
    RouteToNewCampPlace(){
      this.$router.push({name:"newTerrain"})
    },
    RouteToOverview(type){
      this.$store.commit('setType', type)
      this.$router.push({name: type + 'Overview'})
    }
  }
};
</script>
