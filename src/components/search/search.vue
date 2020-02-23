<template lang="html">

  <section class="search">
    <h1>Zoeken</h1>
    <v-card>
      <v-form>
        <v-text-field v-model="searchModel.Name"  label="Naam" outlined/>
        <v-text-field v-model="searchModel.AmountPersons"  label="Aantal personen" outlined/>
        <v-combobox :items="provinces" multiple clearable chips label="provincie" outlined/>
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
        searchModel: {},
        provinces: ["West-Vlaanderen", "Oost-Vlaanderen", "Antwerpen", "Limburg", "Vlaams-Brabant", "Henegouwen", "Waals-Brabant", "Luik", "Luxemburg", "Namen"]
      }
    },
    methods: {

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
