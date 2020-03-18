<template lang="html">

  <section class="search-building">
    <v-card>
      <v-form >
        <v-switch v-model="$store.state.searchModel.Beds" label="Bedden"/>
        <v-switch v-model="$store.state.searchModel.KitchenGear" label="Keukenmateriaal"/>
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
     searchFormChanged(){
        this.$store.commit('setSearchModel', this.$store.state.searchModel)
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
