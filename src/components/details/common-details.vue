<template lang="html">

  <section class="common-details">
    <v-card>
      <h2 @click="general = !general" class="text-uppercase">Algemeen</h2>
    <v-container v-if="general">

      <v-row
      key="1"
      >
        <v-col
          key="1"
          class="header"
        >
          Naam
        </v-col>
        <v-col
          key="2"
        >
          {{model.name}}
        </v-col>
      </v-row>
      <v-row
      key="2"
      >
        <v-col
          key="1"
          class="header"
        >
          Website
        </v-col>
        <v-col
          key="2"
        >
          <a :href="model.website">{{model.website}}</a>
        </v-col>
      </v-row>
      <v-row
      key="3"
      >
        <v-col
          key="1"
          class="header"
        >
          Aantal personen
        </v-col>
        <v-col
          key="2"
        >
          {{model.amountPersons}}
        </v-col>
      </v-row>
      <v-row
      key="4"
      >
        <v-col
          key="1"
          class="header"
        >
          Score
        </v-col>
        <v-col
          key="2"
        >
          <v-rating readonly v-model="model.averageScore" half-increments/>
        </v-col>
      </v-row>
       <v-row
      key="5"
      >
          <v-btn type="button" @click="RouteToReviews" color="secondary">Reviews</v-btn>
          <v-btn type="button" @click="RouteToNewReview" color="secondary">Nieuwe review</v-btn>
      </v-row>
      
      
    </v-container>
    </v-card>
    <v-card>
      <h2 @click="place = !place" class="text-uppercase">Plaats</h2>
    <v-container  v-if="place">
      <v-row
      key="1"
      >
        <v-col
          key="1"
          class="header"
        >
          Straat
        </v-col>
        <v-col
          key="2"
        >
          {{model.place.street}}
        </v-col>
      </v-row>
      <v-row
      key="2"
      >
        <v-col
          key="1"
          class="header"
        >
          Huisnummer
        </v-col>
        <v-col
          key="2"
        >
          {{model.place.houseNumber}}
        </v-col>
      </v-row>
      <v-row
      key="3"
      >
        <v-col
          key="1"
          class="header"
        >
          Stad
        </v-col>
        <v-col
          key="2"
        >
          {{model.place.city}}
        </v-col>
      </v-row>
      <v-row
      key="4"
      >
        <v-col
          key="1"
          class="header"
        >
          Postcode
        </v-col>
        <v-col
          key="2"
        >
          {{model.place.postNumber}}
        </v-col>
      </v-row>
      <v-row
      key="5"
      >
        <v-col
          key="1"
          class="header"
        >
          Provincie
        </v-col>
        <v-col
          key="2"
        >
          {{model.place.province}}
        </v-col>
      </v-row>
      <v-row
      key="6"
      >
        <v-col
          key="1"
          class="header"
        >
          Land
        </v-col>
        <v-col
          key="2"
        >
          {{model.place.country}}
        </v-col>
      </v-row>
      <v-row
      key="7"
      >
        <v-col
          key="1"
          cols="12"
          sm="6"
          class="header"
        >
          Bereikbaarheid in uren
        </v-col>
        <v-col
          key="2"
          cols="12"
          sm="6"
        >
          {{model.place.accessibility}}h
        </v-col>
      </v-row>
      <v-row
      key="8"
      >
        <v-col
          key="1"
          cols="12"
          sm="6"
          class="header"
        >
          Opmerking
        </v-col>
        <v-col
          key="2"
          cols="12"
          sm="6"
        >
          {{model.place.accessibilityNote}}
        </v-col>
      </v-row>
    </v-container>
    </v-card>

    <v-card>
      <h2 @click="person = !person" class="text-uppercase">Verhuurder</h2>
    <v-container v-if="person">
      <v-row
      key="1"
      >
        <v-col
          key="1"
          class="header"
        >
          Voornaam
        </v-col>
        <v-col
          key="2"
        >
          {{model.person.firstName}}
        </v-col>
      </v-row>
      <v-row
      key="2"
      >
        <v-col
          key="1"
          class="header"
        >
          Familienaam
        </v-col>
        <v-col
          key="2"
        >
          {{model.person.lastName}}
        </v-col>
      </v-row>
      <v-row
      key="3"
      >
        <v-col
          key="1"
          class="header"
        >
          Email
        </v-col>
        <v-col
          key="2"
        >
          {{model.person.mailAdress}}
        </v-col>
      </v-row>
      <v-row
      key="4"
      >
        <v-col
          key="1"
          class="header"
        >
          Telefoon
        </v-col>
        <v-col
          key="2"
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
    props: {
      model: Object
    },
    mounted () {
      
    },
    data () {
      return {
        // model: this.$store.state.selectedCampPlace, //this.$route.params.selectedCampPlace,
        general: true,
        place: true,
        person: true

      }
    },
    methods: {
      RouteToReviews(){
        if(this.$route.path != '/reviews'){
          this.$router.push({name:'reviews', params: { enableNew: false, id: this.$route.params.id }});
        }
      },
      RouteToNewReview(){
        if(this.$route.path != '/reviews'){
          this.$router.push({name:'reviews', params: { enableNew: true, id: this.$route.params.id }});
        }
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .v-card{
    padding:2%;
  }
</style>
