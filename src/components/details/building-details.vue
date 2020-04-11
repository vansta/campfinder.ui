<template lang="html">

  <section class="building-details">
    <commonDetails/>
    <v-card>
    <h2 @click="Hide">Gebouw</h2>
    <v-container :class="specific">
      <v-row key="1">
        <v-col
          key="1"
          class="header"
        >
          Aantal slaapzalen
        </v-col>
        <v-col
          key="2"
        >
          {{model.dormitories}}
        </v-col>
      </v-row>
      
      <v-row>
        <v-col
          key="1"
          class="header"
        >
          Aantal dagzalen
        </v-col>
        <v-col
          key="2"
        >
          {{model.daySpaces}}
        </v-col>
      </v-row>
      <v-row key="2">
        <v-col
          key="1"
          class="header"
        >
          Bos
        </v-col>
        <v-col
          key="2"
        >
          <v-checkbox v-model="model.beds" disabled/>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          key="1"
          class="header"
        >
          Keuken materiaal aanwezig
        </v-col>
        <v-col
          key="2"
        >
          <v-checkbox v-model="model.kitchenGear" disabled/>
          
        </v-col>
      </v-row>
      <v-row>
        <v-col
          key="1"
          class="header"
        >
          Bedden
        </v-col>
        <v-col
          key="2"
        >
          <v-checkbox v-model="model.beds" disabled/>
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
        model: this.$store.state.selectedCampPlace,
        specific: ''
      }
    },
    methods: {
      Hide(){
        if (this.specific == ''){
          this.specific = 'hide'
        }
        else{
          this.specific = ''
        }
      }
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
  .hide{
    display: none;
  }
</style>
