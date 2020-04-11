<template lang="html">

  <section class="terrain-overview">
    
    <commonDetails/>
    <v-card>
      <h2>Terrein</h2>
    <v-container>
      <v-row key="1">
        <v-col
          key="1"
          cols="12"
          sm="6"
        >
          Oppervlakte
        </v-col>
        <v-col
          key="2"
          cols="12"
          sm="6"
        >
          {{model.area}} m2
        </v-col>
      </v-row>
      <v-row key="2">
        <v-col
          key="1"
          cols="12"
          sm="6"
        >
          Bos
        </v-col>
        <v-col
          key="2"
          cols="12"
          sm="6"
        >
          <v-checkbox v-model="model.forest" disabled/>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          key="1"
          cols="12"
          sm="6"
        >
          Water
        </v-col>
        <v-col
          key="2"
          cols="12"
          sm="6"
        >
          <v-checkbox v-model="model.water" disabled/>
          
        </v-col>
      </v-row>
      <v-row>
        <v-col
          key="1"
          cols="12"
          sm="6"
        >
          Electriciteit
        </v-col>
        <v-col
          key="2"
          cols="12"
          sm="6"
        >
          <v-checkbox v-model="model.electricity" disabled/>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          key="1"
          cols="12"
          sm="6"
        >
          Toiletten
        </v-col>
        <v-col
          key="2"
          cols="12"
          sm="6"
        >
          <v-checkbox v-model="model.toilets" disabled/>
        </v-col>
      </v-row>
    </v-container>
    </v-card>
  </section>

</template>

<script lang="js">

  import commonDetails from '../details/common-details.vue'

  export default  {

    

    name: 'terrain-overview',
    props: [],
    mounted () {
      // this.$http.GetTerrainDetails(this.$route.params.id)
      //   //.then(resp => this.model = resp.data)
      //   .then(resp => this.$store.commit('SetCampPlace', resp.data))
      //   .catch(error => alert(error))
    },
    data () {
      return {
        model: this.$store.state.selectedCampPlace
      }
    },
    methods: {

    },
    computed: {

    },
    components:{
      commonDetails
    }
}


</script>

<style scoped lang="scss">
  .v-card{
    padding:2%;
  }
  .container{
    padding: 1%;
  }
</style>
