<template lang="html">

  <section class="reviews">
    <v-card>
      <h2>Algemeen</h2>
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
          {{model.name}}
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
          {{model.website}}
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
          {{model.amountPersons}}
        </v-col>
      </v-row>     
    </v-container>
    </v-card>
    <v-item-group>
      <v-row>
        <v-col
          v-for="(review, i) in reviews"
          :key=i
        >
        <v-card>
          {{review}}
        </v-card>
        </v-col>
      </v-row>
    </v-item-group>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'reviews',
    props: [],
    mounted () {
      if (this.model != null){
        this.$http.GetReviewsById(this.model.id)
          .then(resp => this.reviews = resp.data)
          .catch(error => alert(error))
      }
    },
    data () {
      return {
        model: this.$route.params.model,
        reviews:['test','test2','test3']
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .reviews {
    padding: 2%;
  }
  .v-card{
    padding:2%;
  }
  .container{
    padding: 1%;
  }
</style>
