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
          {{model.Place.Street}}
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
          {{model.Place.HouseNumber}}
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
          {{model.Place.City}}
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
          {{model.Place.PostNumber}}
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
          {{model.Place.Province}}
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
          Country
        </v-col>
        <v-col
          key="2"
          cols="12"
          sm="6"
        >
          {{model.Place.Country}}
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
          {{model.Person.FirstName}}
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
          {{model.Person.LastName}}
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
          {{model.Person.MailAdress}}
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
          {{model.Person.TelephoneNumber}}
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
