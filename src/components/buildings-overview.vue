<template lang="html">

  <section class="buildings-overview">
    <h1>buildings overview</h1>
    <div>
      {{testField}}
    </div>
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
          {text:"dormitories", value:"Dormitories"}
        ],
        items: []
      }
    },
    beforeMount(){
      this.FillDataTableBuildings();
    },
    methods: {
      RowClicked(selectedRow){
        this.$router.push('/details', {props: selectedRow})
      },
      FillDataTableBuildings(){
        axios.get('https://localhost:44307/api/building')
          //.then(resp => this.testField = resp.data)
          .then(resp => this.items = resp.data)
          .catch(error => alert(error))
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
