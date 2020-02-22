<template lang="html">

  <section class="buildings-overview">
    <h1>buildings overview</h1>
    <v-data-table
      :headers="headers"
      :items="items"
      @click:row="RowClicked"
    >
    </v-data-table>
  </section>

</template>

<script lang="js">

  import axios from "../../node_modules/axios";

  export default  {
    name: 'buildings-overview',
    props: [],
    mounted () {
      
    },
    data () {
      return {
        headers: [
          {text:"name", value:"Name"},
          {text:"Slaapzalen", value:"Dormitories"},
          {text:"Aantal personen", value:"AmountPersons"},
          {text:"Stad", value:"City"},
          {text:"Website", value:"Website"}
        ],
        items: []
      }
    },
    beforeMount(){
      this.FillDataTableBuildings();
    },
    methods: {
      RowClicked(selectedRow){
        axios.get('https://localhost:44307/api/building',
            {params: {id: selectedRow.Id}} )
          .then(resp => this.RouteToDetails(resp.data))
      },
      FillDataTableBuildings(){
        axios.get('https://localhost:44307/api/building')
          .then(resp => this.items = resp.data)
          .catch(error => alert(error))
      },
      
      RouteToDetails(selectedCampPlace){
        this.$router.push({name: 'buildingDetails', params: {selectedCampPlace: selectedCampPlace }})
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .buildings-overview {

  }
</style>
