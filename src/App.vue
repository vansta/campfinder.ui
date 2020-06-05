<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center clickable" @click="routeToSearch" >
        <v-img
          alt="Scouting Roeselare Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <h2 class="d-none d-sm-flex">Kampenzoeker</h2>
      </div>



      <v-spacer></v-spacer>

      <v-btn
        @click="routeToNewCampPlace"
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
    routeToNewCampPlace(){
      if (this.$route.path != 'new'){
        if (this.$store.state.newCampPlace.id != undefined){
          this.$store.commit('clearNewCampPlace');
        }
        this.$router.push({name:"new"})
      }
    },
    routeToOverview(type){
      this.$store.commit('setType', type)
      this.$router.push({name: type + 'Overview'})
    },
    routeToSearch(){
      if (this.$route.path != '/')
        this.$router.push({name: 'search'})
    }
  }
};
</script>
<style>
  .clickable{
    cursor: pointer;
  }
  .v-content{
    margin:1%;
  }
  .header{
    font-weight: bold;
  }
</style>
