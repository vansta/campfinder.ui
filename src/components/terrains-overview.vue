<template lang="html">

  <section class="terrains-overview">
    <search/>
    <!-- <searchTerrain class="searchTerrain"/> -->
    <h1>Overzicht terreinen</h1>
    <v-btn id="searchBtn" @click="PostTerrainSearch">Zoeken</v-btn>
    <v-data-table
      :headers="headers"
      :items="items"
      @click:row="RowClicked"
    >
    </v-data-table>
  </section>

</template>

<script lang="js">

  import search from '../components/search/search.vue';
  //import searchTerrain from '../components/search/search-terrain.vue';

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
        items: []
      }
    },
    beforeMount(){
      this.PostTerrainSearch();
    },
    methods: {
      RowClicked(selectedRow){
        this.$http.GetTerrainDetails(selectedRow.Id)
          .then(resp => this.RouteToDetails(resp.data))
        
      },
      RouteToDetails(selectedCampPlace){
        this.$router.push({name: 'terrainDetails', params: {selectedCampPlace: selectedCampPlace }})
      },
      PostTerrainSearch(){
        this.$http.PostTerrainSearch(this.$store.state.searchModel)
          .then(resp => this.items = resp.data)
      }
    },
    computed: {

    },
    components:{
      search,
      //searchTerrain
    }
}


</script>

<style scoped lang="scss">
  .terrains-overview {
    padding: 2%;
  }
  h1{
    clear: both;
  }
  button{
    width: 100%;
  }
</style>
