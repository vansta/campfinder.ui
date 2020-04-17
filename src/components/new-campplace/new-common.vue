<template lang="html">

  <section class="new-common">
    <v-card class="form">
      <h2>Algemeen</h2>
      <v-form v-model="valid">
        <v-text-field v-model="model.Name" label="Naam" :rules="[rules.required]" outlined/>
        <v-text-field v-model="model.Website" label="Website" outlined/>
        <v-text-field v-model="model.AmountPersons" label="Aantal personen" :rules="[rules.required, rules.int]" outlined/>
        <v-switch v-model="model.Forest" label="Bos"/>
        <v-text-field v-model="model.Area" label="Oppervlakte" :rules="[rules.double]" outlined hint="Schatting in m²"/>
      </v-form>
    </v-card>
    <v-card class="form">
      <h2>Verhuurder</h2>
      <v-form v-model="valid">
        <v-text-field v-model="model.Person.FirstName" label="Voornaam" outlined/>
        <v-text-field v-model="model.Person.LastName" label="Familienaam" outlined/>
        <v-text-field v-model="model.Person.MailAdress" label="Email" outlined/>
        <v-text-field v-model="model.Person.TelephoneNumber" label="Telefoonnummer" outlined/>
      </v-form>
    </v-card>
    <v-card class="form">
      <h2>Plaats</h2>
      <v-form v-model="valid">
        <v-text-field v-model="model.Place.Street" label="Straat" :rules="[rules.required]" outlined/>
        <v-text-field v-model="model.Place.HouseNumber" label="Nummer" outlined/>
        <v-text-field v-model="model.Place.PostNumber" label="Postcode" outlined/>
        <v-text-field v-model="model.Place.City" label="Stad" :rules="[rules.required]" outlined/>
        <v-combobox v-model="model.Place.Province" label="Province" :rules="[rules.required]" outlined :items="provinces"/>
        <v-combobox v-model="model.Place.Country" label="Land" :rules="[rules.required]" outlined :items="countries"/>
        <v-slider v-model="model.Place.Accessibility" label="Bereikbaarheid in uren" thumb-label max="12" ticks step="0.5">
          <template v-slot:prepend>
          </template>
        </v-slider>
        <v-textarea v-model="model.Place.AccessibilityNote" label="Opmerking" outlined/>
      </v-form>
    </v-card>
    <v-form>
      <v-btn @click="type = 'terrain'" :color="GetColor('terrain')" :depressed="this.type != 'terrain'">Terrein</v-btn>
      <v-btn @click="type = 'building'" :color="GetColor('building')" :depressed="this.type != 'building'">Gebouw</v-btn>
    </v-form>

    <v-card class="form" v-if="type == 'terrain'">
      <h2>Terrein</h2>
      <v-form v-model="valid">
        <v-switch v-model="model.Water" label="Water"/>
        <v-switch v-model="model.Electricity" label="Electriciteit"/>
        <v-switch v-model="model.Toilets" label="Toiletten"/>
      </v-form>
    </v-card>
    <v-card class="form" v-if="type == 'building'">
      <h2>Gebouw</h2>
      <v-form v-model="valid">
        <v-text-field v-model="model.Dormitories" :rules="[rules.required, rules.int]" label="Aantal slaapzalen" outlined/>
        <v-text-field v-model="model.DaySpaces" :rules="[rules.required, rules.int]" label="Aantal dagzalen" outlined/>
        <v-switch v-model="model.KitchenGear" label="Keukenmateriaal aanwezig" outlined/>
        <v-switch v-model="model.Beds" label="Bedden" outlined/>
      </v-form>
    </v-card>
    <v-btn block color="primary" @click="SendNewCampPlace" :disabled="!valid">Verzenden</v-btn>
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
        type: 'building',
        provinces: ["West-Vlaanderen", "Oost-Vlaanderen", "Antwerpen", "Limburg", "Vlaams-Brabant", "Henegouwen", "Waals-Brabant", "Luik", "Luxemburg", "Namen"],
        countries: ["België", "Nederland", "Frankrijk", "Duitsland"],
        rules: {
          int: value => {
            const pattern = /^[0-9]*$/
            return pattern.test(value) || "Waarde moet een getal zijn."
          },
          required: value => !!value || "Verplicht veld.",
          double: value => {
            const pattern = /(^(\d+)(,\d+|\.\d+)?|(^)|NULL)$/
            return pattern.test(value) || "Waarde moet een getal zijn."
          }
        },
        valid: false
      }
    },
    methods: {
      SendNewCampPlace(){
        if (this.valid){
          if (this.type == 'terrain'){
            this.$http.PostNewTerrain(this.model)
              .then(() => this.$router.push({name: 'terrainOverview'}))
          }
          else{
            this.$http.PostNewBuilding(this.model)
              .then(() => this.$router.push({name: 'buildingOverview'}))
          }
        }
      },
      GetColor(buttonType){
        if (this.type == buttonType){
          return 'primary'
        }
        else{
          return 'indigo lighten-5'
        }
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .form{
    padding: 2%;
  }
  button{
    margin-top: 1%;
    margin-bottom: 1%;
    width: 50%;
  }
  .btn-fixed{
    position:absolute;
    bottom: 2%;
    z-index: 25;
    right: 2%;
  }
</style>
