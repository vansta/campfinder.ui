<template lang="html">

  <section class="terrains-overview">
    <h1>Terrainoverview</h1>
    <v-data-table
      :headers="headers"
      :items="items"
      @click:row="RowClicked"
    >
    </v-data-table>
  </section>

</template>

<script lang="js">

  import axios from '../../node_modules/axios'

  export default  {
    name: 'terrains-overview',
    props: [],
    mounted () {

    },
    data () {
      return {
        headers: [
          {text:"Naam", value:"Name"},
          {text:"Oppervlakte", value:"Area"},
          {text:"Aantal personen", value:"AmountPersons"},
          {text:"Stad", value:"City"},
          {text:"Website", value:"Website"},
          {text:"Water", value:"Water"}
        ],
        items:[]
      }
    },
    beforeMount(){
      this.FillDataTableBuildings();
    },
    methods: {
      RowClicked(selectedRow){
        axios.get('https://localhost:44307/api/terrain',
        {params: {id: selectedRow.Id}} )
          .then(resp => this.RouteToDetails(resp.data))
        
      },
      FillDataTableBuildings(){
        axios.get('https://localhost:44307/api/terrain')
          .then(resp => this.items = resp.data)
          .catch(error => alert(error))
      },
      RouteToDetails(selectedCampPlace){
        this.$router.push({name: 'terrainDetails', params: {selectedCampPlace: selectedCampPlace }})
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .terrains-overview {

  }
</style>
