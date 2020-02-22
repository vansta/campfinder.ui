<template lang="html">

  <section class="search">
    <h1>Zoeken</h1>
    <v-card>
      <v-form>
        <v-text-field v-model="searchModel.Name"  label="Naam" outlined/>
        <v-text-field v-model="searchModel.AmountPersons"  label="Aantal personen" outlined/>
        <v-switch v-model="searchModel.Foreign" label='Buitenland'/>
      </v-form>
    </v-card>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'search',
    props: [],
    mounted () {

    },
    data () {
      return {
        searchModel: {}
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .search {

  }
  form{
    padding: 2%;
  }
</style>
