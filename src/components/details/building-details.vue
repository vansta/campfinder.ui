<template lang="html">

  <section class="building-details">
    <commonDetails/>
    <v-card>
    <h2 @click="hide">Gebouw</h2>
    <v-container :class="specific">
      <v-row key="1">
        <v-col
          key="1"
          class="header"
        >
          Aantal slaapzalen
        </v-col>
        <v-col
          key="2"
        >
          {{model.dormitories}}
        </v-col>
      </v-row>
      
      <v-row>
        <v-col
          key="1"
          class="header"
        >
          Aantal dagzalen
        </v-col>
        <v-col
          key="2"
        >
          {{model.daySpaces}}
        </v-col>
      </v-row>
      <v-row key="2">
        <v-col
          key="1"
          class="header"
        >
          Bos
        </v-col>
        <v-col
          key="2"
        >
          <v-checkbox v-model="model.forest" readonly/>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          key="1"
          class="header"
        >
          Keuken materiaal aanwezig
        </v-col>
        <v-col
          key="2"
        >
          <v-checkbox v-model="model.kitchenGear" readonly/>
          
        </v-col>
      </v-row>
      <v-row>
        <v-col
          key="1"
          class="header"
        >
          Bedden
        </v-col>
        <v-col
          key="2"
        >
          <v-checkbox v-model="model.beds" readonly/>
        </v-col>
      </v-row>
      <span class="bottomright">
        <v-btn color="secondary" @click="update">update</v-btn>
        <v-dialog
          v-model="dialog"
        >
          <template v-slot:activator="{ on }">
            <v-btn 
              color="error"
              v-on="on"
              >
              Verwijderen
              </v-btn>
          </template>
          <v-card>
          <v-card-title
            class="headline grey lighten-2"
            primary-title
          >
            {{model.name}} verwijderen?
          </v-card-title>
  
          <v-card-text>
            Ben je zeker dat je {{model.name}} wil verwijderen?
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="remove"
            >
              Ja
            </v-btn>
          </v-card-actions>
        </v-card>
        </v-dialog>
      </span>
    </v-container>
    </v-card>
    <v-alert :type="messageType" v-if="message != ''">{{message}}</v-alert>
  </section>
  

</template>

<script lang="js">

  import commonDetails from "../details/common-details.vue";

  export default  {
    name: 'building-details',
    props: [],
    mounted () {
      // this.$http.GetBuildingDetails(this.$route.params.id)
      //   //.then(resp => this.model = resp.data)
      //   .then(resp => this.$store.commit('setCampPlace', resp.data))
      //   .catch(error => alert(error))
    },
    data () {
      return {
        model: this.$store.state.selectedCampPlace,
        specific: '',
        dialog: false,
        message: "",
        messageType: "success"
      }
    },
    methods: {
      hide(){
        if (this.specific == ''){
          this.specific = 'hide'
        }
        else{
          this.specific = ''
        }
      },
      update(){
        this.$store.commit('setNewCampPlace', this.model);
        this.$router.push({name: 'new', params: { type: 'building'} });
      },
      remove(){
        this.$http.RemoveBuilding(this.model.id)
          .then(resp => {    
            this.dialog = false;   
            this.messageType = "success";
            this.message = resp.data;
            setTimeout(() => {
               this.$router.push({name: 'search'});
            }, 2000);
          })
          .catch(error => {
            this.dialog = false;
            this.messageType = "error";
            this.message = this.$error.getError(error);
          });
      }
    },
    computed: {

    },
    components:{
      commonDetails
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
  .hide{
    display: none;
  }
  .bottomright{
    position:absolute;
    right: 2%;
    bottom: 5%;
  }
</style>
