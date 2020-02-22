<template lang="html">

  <section class="common-details">
    <v-card>
    <v-container>
      <v-row
      key="1"
      >
        <v-col
          key="1"
          cols="12"
          sm="6"
        >
          Naam
        </v-col>
        <v-col
          key="2"
          cols="12"
          sm="6"
        >
          {{model.Name}}
        </v-col>
      </v-row>
      <v-row
      key="2"
      >
        <v-col
          key="1"
          cols="12"
          sm="6"
        >
          Website
        </v-col>
        <v-col
          key="2"
          cols="12"
          sm="6"
        >
          {{model.Website}}
        </v-col>
      </v-row>
      <v-row
      key="3"
      >
        <v-col
          key="1"
          cols="12"
          sm="6"
        >
          Aantal personen
        </v-col>
        <v-col
          key="2"
          cols="12"
          sm="6"
        >
          {{model.AmountPersons}}
        </v-col>
      </v-row>
      <v-row
      key="4"
      >
        <v-col
          key="1"
          cols="12"
          sm="6"
        >
          Stad
        </v-col>
        <v-col
          key="2"
          cols="12"
          sm="6"
        >
          {{model.City}}
        </v-col>
      </v-row>
    </v-container>
    </v-card>
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
        model: this.$route.params.selectedCampPlace
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
