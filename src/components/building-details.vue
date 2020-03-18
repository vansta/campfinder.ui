<template lang="html">

  <section class="building-details">
    <h1>{{model.name}}</h1>
    <commonDetails/>
    <v-card>
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
          <v-switch>
            {{model.forest}}
          </v-switch>
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
          <v-switch v-model="model.kitchenGear"/>
          
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
          <v-switch v-model="model.beds"/>
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

  import commonDetails from "../components/common-details.vue";

  export default  {
    name: 'building-details',
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
  .building-details {
    padding: 2%;
  }
  v-switch{
    margin: 0;
  }
</style>
