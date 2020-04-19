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
        >
          Website
        </v-col>
        <v-col
          key="2"
        >
          {{model.website}}
        </v-col>
      </v-row>
      <v-row
      key="3"
      >
        <v-col
          key="1"
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
        >
        </v-col>
        <v-col
          key="2"
        >
          <v-btn type="submit" class="fullwidth" @click="enableNew = !enableNew">Nieuwe review</v-btn>
        </v-col>
      </v-row>  
    </v-container>
    </v-card>
    <v-card v-if="enableNew">
      <v-form v-model="valid">
        <v-textarea v-model="newReview.note" label="Opmerking" outlined/>
          <v-row key="1">
        <v-col
          key="1"
          cols="12"
          sm="4"
        >
          <v-rating v-model="newReview.score" half-increments label="Score"/>
        </v-col>
        <v-col
          key="2"
          cols="12"
          sm="4"
        >
          <v-menu
          v-model="menu"
          :close-on-content-click="true"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="newReview.date"
              label="Datum"
              readonly
              v-on="on"
              outlined
              :rules="[rules.required]"
            ></v-text-field>
          </template>
          <v-date-picker  v-model="newReview.date" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
          </v-date-picker>
        </v-menu>
        </v-col>
        <v-col
          key="3"
          cols="12"
          sm="4"
        >
          <v-btn :disabled="!valid" type="submit" class="fullwidth" @click="SendNewReview" :loading="loading">Verzenden</v-btn>
        </v-col>
      </v-row>
      </v-form>
    </v-card>
    <v-item-group>
      <v-row>
        <v-col
          v-for="(review, i) in reviews"
          :key=i
        >
        <v-card>
          <div class="text-center">
            
            {{review.date | formatDate}}
            <v-rating readonly v-model="review.score"/>
            {{review.note}}
          </div>
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
        model: this.$store.state.selectedCampPlace,
        reviews:[],
        newReview:{},
        rules: {
          required: value => !!value || "Verplicht veld."
        },
        valid: false,
        enableNew: this.$route.params.enableNew,
        menu: false,
        loading: false
      }
    },
    methods: {
      FormatDate(date){
        if (date){
          return String(date).format('ddMMyyyy')
        }
      },
      SendNewReview(){
        if (this.valid){
          this.loading = true;
          this.newReview.campPlaceId = this.model.id
          this.$http.PostNewReview(this.newReview)
            .then(resp => this.reviews.push(resp.data))
            .then(() => this.newReview = {})
            .then(() => this.loading = false)
            .catch(error => alert(error))
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
  .container{
    padding: 1%;
  }
  button{
    float:right;
  }
</style>
