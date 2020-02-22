<template lang="html">

  <section class="new-common">
    <h1>Nieuwe kampplaats</h1>
    <v-card class="form">
      <h2>Algemeen</h2>
      <v-form>
        <v-text-field v-model="model.Name" label="Naam" outlined/>
        <v-text-field v-model="model.Website" label="Website" outlined/>
        <v-text-field v-model="model.AmountPersons" label="Aantal personen" outlined/>
        <v-switch v-model="model.Forest" label="Bos"/>
        <v-text-field v-model="model.Area" label="Oppervlakte" outlined/>
      </v-form>
    </v-card>
    <v-card class="form">
      <h2>Verhuurder</h2>
      <v-form>
        <v-text-field v-model="model.Person.FirstName" label="Voornaam" outlined/>
        <v-text-field v-model="model.Person.LastName" label="Familienaam" outlined/>
        <v-text-field v-model="model.Person.MailAdress" label="Email" outlined/>
        <v-text-field v-model="model.Person.TelephoneNumber" label="Telefoonnummer" outlined/>
      </v-form>
    </v-card>
    <v-card class="form">
      <h2>Plaats</h2>
      <v-form>
        <v-text-field v-model="model.Place.Street" label="Straat" outlined/>
        <v-text-field v-model="model.Place.HouseNumber" label="Nummer" outlined/>
        <v-text-field v-model="model.Place.PostNumber" label="Postcode" outlined/>
        <v-text-field v-model="model.Place.City" label="Stad" outlined/>
        <v-text-field v-model="model.Place.Province" label="Provincie" outlined/>
        <v-text-field v-model="model.Place.Country" label="Land" outlined/>
      </v-form>
    </v-card>
    <v-form>
      <v-btn @click="type = 'terrain'">Terrein</v-btn>
      <v-btn @click="type = 'building'">Gebouw</v-btn>
    </v-form>

    <v-card class="form" v-if="type == 'terrain'">
      <h2>Terrein</h2>
      <v-form>
        <v-switch v-model="model.Water" label="Water"/>
        <v-switch v-model="model.Electricity" label="Electriciteit"/>
        <v-switch v-model="model.Toilets" label="Toiletten"/>
      </v-form>
    </v-card>
    <v-card class="form" v-if="type == 'building'">
      <h2>Gebouw</h2>
      <v-form>
        <v-text-field v-model="model.Dormitories" label="Aantal slaapzalen" outlined/>
        <v-text-field v-model="model.DaySpaces" label="Aantal dagzalen" outlined/>
        <v-switch v-model="model.KitchenGear" label="Keukenmateriaal aanwezig" outlined/>
        <v-switch v-model="model.Beds" label="Bedden" outlined/>
      </v-form>
    </v-card>
    <v-btn class="fullwidth" @click="SendNewCampPlace">Verzenden</v-btn>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'new-common',
    props: [],
    mounted () {

    },
    data () {
      return {
        model:{
          Person:{},
          Place:{}
        },
        type: ''
      }
    },
    methods: {
      SendNewCampPlace(){
        if (this.type == 'terrain'){
          this.$http.PostNewTerrain(this.model)
        }
        else{
          this.$http.PostNewBuilding(this.model)
        }
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .new-common {
    padding: 2%;
  }
  .form{
    padding: 2%;
  }
  button{
    width: 48%;
    margin: 1%;
  }
  .btn-fixed{
    position:absolute;
    bottom: 2%;
    z-index: 25;
    right: 2%;
  }
  .fullwidth{
    width: 100%;
  }
</style>
