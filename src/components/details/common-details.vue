<template lang="html">

  <section class="common-details">
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
          <a :href="model.website">{{model.website}}</a>
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
      <v-row
      key="4"
      >
        <v-col
          key="1"
          cols="12"
          sm="6"
        >
          Score
        </v-col>
        <v-col
          key="2"
          cols="12"
          sm="6"
        >
          <v-rating readonly v-model="model.averageScore"/>
        </v-col>
      </v-row>
       <v-row
      key="5"
      >
          <v-btn type="button" @click="RouteToReviews">Reviews</v-btn>
          <v-btn type="button" @click="RouteToNewReview">Nieuwe review</v-btn>
      </v-row>
      
      
    </v-container>
    </v-card>
    <v-card>
      <h2>Plaats</h2>
    <v-container>
      <v-row
      key="1"
      >
        <v-col
          key="1"
          cols="12"
          sm="6"
        >
          Straat
        </v-col>
        <v-col
          key="2"
          cols="12"
          sm="6"
        >
          {{model.place.street}}
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
          Huisnummer
        </v-col>
        <v-col
          key="2"
          cols="12"
          sm="6"
        >
          {{model.place.houseNumber}}
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
          Stad
        </v-col>
        <v-col
          key="2"
          cols="12"
          sm="6"
        >
          {{model.place.city}}
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
          Postcode
        </v-col>
        <v-col
          key="2"
          cols="12"
          sm="6"
        >
          {{model.place.postNumber}}
        </v-col>
      </v-row>
      <v-row
      key="5"
      >
        <v-col
          key="1"
          cols="12"
          sm="6"
        >
          Provincie
        </v-col>
        <v-col
          key="2"
          cols="12"
          sm="6"
        >
          {{model.place.province}}
        </v-col>
      </v-row>
      <v-row
      key="6"
      >
        <v-col
          key="1"
          cols="12"
          sm="6"
        >
          Country
        </v-col>
        <v-col
          key="2"
          cols="12"
          sm="6"
        >
          {{model.place.country}}
        </v-col>
      </v-row>
    </v-container>
    </v-card>

    <v-card>
      <h2>Verhuurder</h2>
    <v-container>
      <v-row
      key="1"
      >
        <v-col
          key="1"
          cols="12"
          sm="6"
        >
          Voornaam
        </v-col>
        <v-col
          key="2"
          cols="12"
          sm="6"
        >
          {{model.person.firstName}}
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
          Familienaam
        </v-col>
        <v-col
          key="2"
          cols="12"
          sm="6"
        >
          {{model.person.lastName}}
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
          Email
        </v-col>
        <v-col
          key="2"
          cols="12"
          sm="6"
        >
          {{model.person.mailAdress}}
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
          Telefoon
        </v-col>
        <v-col
          key="2"
          cols="12"
          sm="6"
        >
          {{model.person.telephoneNumber}}
        </v-col>
      </v-row>
      
    </v-container>
    </v-card>
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
        model: this.$store.state.selectedCampPlace, //this.$route.params.selectedCampPlace,
        general: true,
        place: true,
        person: true

      }
    },
    methods: {
      RouteToReviews(){
        if(this.$route.path != '/reviews'){
          this.$router.push({name:'reviews', params: {enableNew: false}});
        }
      },
      RouteToNewReview(){
        if(this.$route.path != '/reviews'){
          this.$router.push({name:'reviews', params: {enableNew: true}});
        }
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .common-details {

  }
  .v-card{
    padding:2%;
  }
  .container{
    padding: 1%;
  }
</style>
