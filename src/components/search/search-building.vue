<template lang="html">

  <section class="search-building">
    <v-card>
      <v-form>
        <v-switch v-model="searchModel.Beds" label="Bedden"/>
        <v-switch v-model="searchModel.KitchenGear" label="Keukenmateriaal"/>

        <v-btn id="searchBtn" @click="PostBuildingSearch">Zoeken</v-btn>
      </v-form>
    </v-card>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'search-building',
    props: [],
    mounted () {

    },
    data () {
      return {
        searchModel: {}
      }
    },
    methods: {
      PostBuildingSearch(){
        this.$http.PostBuildingSearch(this.searchModel)
          .then(resp => this.$store.commit('setItems', resp.data))
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
form{
  padding: 2%;
}
</style>
