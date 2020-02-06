<template lang="html">

  <section class="common-details">
    <h1>Details</h1>
    <div>
      <p>Naam: {{model.Name}}</p>
      <p>Website: {{model.Website}}</p>
      <p>Personen: {{model.AmountPersons}}</p>
      <p>Bos: {{model.Forest}}</p>
      <p>Oppervlakte: {{model.Area}}</p>
    </div>
    <div>{{model}}</div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'common-details',
    props: [],
    mounted () {
      
    },
    data () {
      return {
        model: this.$route.params.selectedRow
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .common-details {

  }
</style>
