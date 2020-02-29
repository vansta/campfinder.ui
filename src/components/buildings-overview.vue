<template lang="html">

  <section class="buildings-overview">
      <search/>
    
    <h1>Overzicht gebouwen</h1>
    <v-btn id="searchBtn" @click="PostBuildingSearch">Zoeken</v-btn>
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
  //import searchBuilding from '../components/search/search-building.vue';


  export default  {
    name: 'buildings-overview',
    props: [],
    mounted () {
      
    },
    data () {
      return {
        headers: [
          {text:"Naam", value:"Name"},
          {text:"Slaapzalen", value:"Dormitories"},
          {text:"Aantal personen", value:"AmountPersons"},
          {text:"Stad", value:"City"},
          {text:"Website", value:"Website"}
        ],
        items: this.$store.state.items
      }
    },
    beforeMount(){
      this.PostBuildingSearch();
    },
    methods: {
      RowClicked(selectedRow){
        this.$http.GetBuildingDetails(selectedRow.Id)
          .then(resp => this.RouteToDetails(resp.data))
      },
      RouteToDetails(selectedCampPlace){
        this.$router.push({name: 'buildingDetails', params: {selectedCampPlace: selectedCampPlace }})
      },
       PostBuildingSearch(){
        this.$http.PostBuildingSearch(this.$store.state.searchModel)
          .then(resp => this.items = resp.data)
          .then(this.$nextTick())
      }
    },
    computed: {

    },
    
    components:{
      search,
      //searchBuilding
    }
}


</script>

<style scoped lang="scss">
  .buildings-overview {
    padding: 2%;
  }
  h1{
    clear: both;
  }
  button{
    width: 100%;
  }
</style>
