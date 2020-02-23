<template lang="html">

  <section class="search-terrain">
    <v-card>
      <v-form>
        <v-switch v-model="$store.state.searchModel.Forest" label="Bos"/>
        <v-switch v-model="$store.state.searchModel.Water" label="Water"/>
        <v-switch v-model="$store.state.searchModel.Electricity" label="Electriciteit"/>

        <v-btn id="searchBtn" @click="PostTerrainSearch">Zoeken</v-btn>
      </v-form>
    </v-card>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'search-terrain',
    props: [],
    mounted () {

    },
    data () {
      return {
        searchModel:{}
      }
    },
    methods: {
      PostTerrainSearch(){
        this.$http.PostTerrainSearch(this.$store.state.searchModel)
          .then(resp => this.$store.commit('setItems', resp.data))
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  form {
    padding: 2%;
  }
</style>
