<template lang="html">

  <section class="terrain-overview">
    <h1>{{model.Name}}</h1>
    <commonDetails/>
    <v-card>
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
          <v-switch v-model="model.forest"/>
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
          <v-switch v-model="model.water"/>
          
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
          <v-switch v-model="model.electricity"/>
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
          <v-switch v-model="model.toilets"/>
        </v-col>
      </v-row>
    </v-container>
    </v-card>
  </section>

</template>

<script lang="js">

  import commonDetails from '../components/common-details.vue'

  export default  {

    

    name: 'terrain-overview',
    props: [],
    mounted () {

    },
    data () {
      return {
        model: this.$route.params.selectedCampPlace
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
  .terrain-overview {
    padding: 2%;
  }
</style>
