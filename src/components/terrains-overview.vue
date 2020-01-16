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
          {text:"name", value:"name"},
          {text:"code", value:"code"}
        ],
        items:[
          {name:"scouts", code:"23"},
          {name:"chiro", code:"34"}
        ]
      }
    },
    methods: {
      RowClicked(){
        alert("row clicked")
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
