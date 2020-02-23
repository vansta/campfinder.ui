<template lang="html">

  <section class="buildings-overview">
    {{$store.state.items}}
    <div class="searchBlock">
      <search class="search"/>
      <searchBuilding class="searchBuilding"/>
    </div>
    
    <h1>Overzicht gebouwen</h1>
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
  import searchBuilding from '../components/search/search-building.vue';


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
      this.FillDataTableBuildings();
    },
    methods: {
      RowClicked(selectedRow){
        this.$http.GetBuildingDetails(selectedRow.Id)
          .then(resp => this.RouteToDetails(resp.data))
      },
      FillDataTableBuildings(){
        this.$http.GetBuildingsOverview()
          .then(resp => this.$store.commit('setItems', resp.data))
          .catch(error => alert(error))
      },
      
      RouteToDetails(selectedCampPlace){
        this.$router.push({name: 'buildingDetails', params: {selectedCampPlace: selectedCampPlace }})
      }
    },
    computed: {

    },
    
    components:{
      search,
      searchBuilding
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
  .search{
    width:50%;
    float: left;
  }
  .searchBuilding{
    width: 50%;
    float: left;
    margin-top: 28px;
  }
</style>
