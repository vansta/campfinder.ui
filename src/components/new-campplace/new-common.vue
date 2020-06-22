<template lang="html">

  <section class="new-common">
    <v-card class="form">
      <h2 @click="general = !general" class="text-uppercase">Algemeen</h2>
      <v-form v-if="general" v-model="generalValid" ref="generalForm">
        <v-text-field v-model="model.name" label="Naam" :rules="[rules.required]" outlined/>
        <v-text-field v-model="model.website" label="Website" outlined/>
        <v-text-field v-model="model.amountPersons" label="Aantal personen" :rules="[rules.required, rules.int]" outlined/>
        <v-switch v-model="model.forest" label="Bos"/>
        <v-text-field v-model="model.area" label="Oppervlakte" :rules="[rules.double]" outlined hint="Schatting in m²"/>
      </v-form>
    </v-card>
    <v-card class="form">
      <h2 class="text-uppercase" @click="person = !person">Verhuurder</h2>
      <v-form v-model="personValid" ref="personForm" v-if="person">
        <v-text-field v-model="model.person.firstName" label="Voornaam" outlined/>
        <v-text-field v-model="model.person.lastName" label="Familienaam" outlined/>
        <v-text-field v-model="model.person.mailAdress" label="Email" outlined/>
        <v-text-field v-model="model.person.telephoneNumber" label="Telefoonnummer" outlined/>
      </v-form>
    </v-card>
    <v-card class="form">
      <h2 class="text-uppercase" @click="place = !place">Plaats</h2>
      <v-form v-model="placeValid" ref="placeForm" v-if="place">
        <v-text-field v-model="model.place.street" label="Straat" :rules="[rules.required]" outlined/>
        <v-text-field v-model="model.place.houseNumber" label="Nummer" outlined/>
        <v-text-field v-model="model.place.postNumber" label="Postcode" outlined/>
        <v-text-field v-model="model.place.city" label="Stad" :rules="[rules.required]" outlined/>
        <v-combobox v-model="model.place.province" label="Province" :rules="[rules.required]" outlined :items="provinces"/>
        <v-combobox v-model="model.place.country" label="Land" :rules="[rules.required]" outlined :items="countries"/>
        <v-slider v-model="model.place.accessibility" label="Bereikbaarheid in uren" thumb-label max="12" ticks step="0.5">
          <template v-slot:prepend>
          </template>
        </v-slider>
        <v-textarea v-model="model.place.accessibilityNote" label="Opmerking" outlined/>
      </v-form>
    </v-card>
    <v-form>
      <v-btn @click="type = 'terrain'" :color="getColor('terrain')" :depressed="this.type != 'terrain'">Terrein</v-btn>
      <v-btn @click="type = 'building'" :color="getColor('building')" :depressed="this.type != 'building'">Gebouw</v-btn>
    </v-form>

    <v-card class="form" v-if="type == 'terrain'">
      <h2 class="text-uppercase" @click="specific = !specific">Terrein</h2>
      <v-form v-model="valid" ref="form" v-if="specific">
        <v-switch v-model="model.water" label="Water"/>
        <v-switch v-model="model.electricity" label="Electriciteit"/>
        <v-switch v-model="model.toilets" label="Toiletten"/>
      </v-form>
    </v-card>
    <v-card class="form" v-if="type == 'building'">
      <h2 class="text-uppercase" @click="specific = !specific">Gebouw</h2>
      <v-form v-model="valid" ref="form" v-if="specific">
        <v-text-field v-model="model.dormitories" :rules="[rules.required, rules.int]" label="Aantal slaapzalen" outlined/>
        <v-text-field v-model="model.daySpaces" :rules="[rules.required, rules.int]" label="Aantal dagzalen" outlined/>
        <v-switch v-model="model.kitchenGear" label="Keukenmateriaal aanwezig" outlined/>
        <v-switch v-model="model.beds" label="Bedden" outlined/>
      </v-form>
    </v-card>
    <v-alert :type="messageType" v-if="message != ''">
      {{message}}
    </v-alert>
    <v-btn block color="primary" @click="sendNewCampPlace" :loading="loading">Verzenden</v-btn>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'new-common',
    props: [],
    mounted () {
      if (this.type == null){
        this.type = 'building';
      }
    },
    data () {
      return {
        model: this.$store.state.newCampPlace,
        type: this.$route.params.type,
        provinces: ["West-Vlaanderen", "Oost-Vlaanderen", "Antwerpen", "Limburg", "Vlaams-Brabant", "Henegouwen", "Waals-Brabant", "Luik", "Luxemburg", "Namen"],
        countries: ["België", "Nederland", "Frankrijk", "Duitsland"],
        rules: {
          int: value => {
            const pattern = /^[0-9]*$/
            return pattern.test(value) || "Waarde moet een getal zijn."
          },
          required: value => !!value || "Verplicht veld.",
          double: value => {
            const pattern = /(^(\d+)(,\d+|\.\d+)?|(^)|undefined)$/
            return pattern.test(value) || "Waarde moet een getal zijn."
          }
        },
        valid: true,
        generalValid: true,
        personValid: true,
        placeValid: true,
        message: "",
        messageType: "success",
        loading: false,
        general: true,
        place: true,
        person: true,
        specific: true
      }
    },
    methods: {
      sendNewCampPlace(){
        this.validate();
        if (this.isValid()){
          this.loading = true;
          if (this.type == 'terrain'){
            this.$http.postNewTerrain(this.model)
              .then(resp => {
                this.messageType = "success";
                this.message = resp.data;
                setTimeout(() => {                  
                  this.clearAndToHome();
                }, 2000);                
              })
              .catch(error => {
                this.messageType = "error";
                this.message = this.$error.getError(error);
              })
              .finally(() => this.loading = false);
          }
          else{
            this.$http.postNewBuilding(this.model)              
              .then(resp => {
                this.messageType = "success";
                this.message = resp.data;
                setTimeout(() => {                  
                  this.clearAndToHome();
                }, 2000);                
              })
              .catch(error => {
                this.messageType = "error";
                this.message = this.$error.getError(error);
              })
              .finally(() => this.loading = false);
          }
        }
      },
      getColor(buttonType){
        if (this.type == buttonType){
          return 'primary'
        }
        else{
          return 'indigo lighten-5'
        }
      },
      isValid(){
        return (this.generalValid && this.personValid && this.placeValid && this.valid);
      },
      clearAndToHome(){
        this.$store.commit('clearNewCampPlace');
        this.$router.push({name:'search'});
      },
      validate(){
        this.$refs.form.validate();
        this.$refs.generalForm.validate();
        this.$refs.personForm.validate();
        this.$refs.placeForm.validate();
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
