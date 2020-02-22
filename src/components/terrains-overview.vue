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
        this.$http.GetTerrainDetails(selectedRow.Id)
          .then(resp => this.RouteToDetails(resp.data))
        
      },
      FillDataTableBuildings(){
        this.$http.GetTerrainsOverview()
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
