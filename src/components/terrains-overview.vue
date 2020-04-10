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
    <!-- <template v-slot:item.averageScore="{ item }">
           <span><v-rating v-model="item.averageScore"></v-rating></span>
         </template> -->
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
          {text:"Naam", value:"name"},
          {text:"Oppervlakte", value:"area"},
          {text:"Aantal personen", value:"amountPersons"},
          {text:"Stad", value:"city"},
          {text:"Website", value:"website"},
          {text:"Water", value:"water"},
          {text:"Score", value:"averageScore", dataType:'rating'}
        ],
        items: []
      }
    },
    beforeMount(){
      this.PostTerrainSearch();
    },
    methods: {
      RowClicked(selectedRow){
        this.$http.GetTerrainDetails(selectedRow.id)
          .then(resp => this.$store.commit('SetCampPlace', resp.data))
          .then(() => this.RouteToDetails())
      },
      RouteToDetails(){
        this.$router.push({name: 'terrainDetails'})
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
