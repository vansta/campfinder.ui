<template lang="html">

  <section class="building-details">
    <commonDetails/>
    <v-card>
    <h2>Gebouw</h2>
    <v-container>
      <v-row key="1">
        <v-col
          key="1"
          cols="12"
          sm="6"
        >
          Slaapzalen
        </v-col>
        <v-col
          key="2"
          cols="12"
          sm="6"
        >
          {{model.dormitories}}
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
          <v-checkbox v-model="model.beds" disabled/>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          key="1"
          cols="12"
          sm="6"
        >
          Keuken materiaal aanwezig
        </v-col>
        <v-col
          key="2"
          cols="12"
          sm="6"
        >
          <v-checkbox v-model="model.kitchenGear" disabled/>
          
        </v-col>
      </v-row>
      <v-row>
        <v-col
          key="1"
          cols="12"
          sm="6"
        >
          Bedden
        </v-col>
        <v-col
          key="2"
          cols="12"
          sm="6"
        >
          <v-checkbox v-model="model.beds" disabled/>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          key="1"
          cols="12"
          sm="6"
        >
          Aantal dagzalen
        </v-col>
        <v-col
          key="2"
          cols="12"
          sm="6"
        >
          {{model.daySpaces}}
        </v-col>
      </v-row>
    </v-container>
    </v-card>
  </section>
  

</template>

<script lang="js">

  import commonDetails from "../details/common-details.vue";

  export default  {
    name: 'building-details',
    props: [],
    mounted () {
      // this.$http.GetBuildingDetails(this.$route.params.id)
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
