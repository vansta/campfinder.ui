<template lang="html">

  <section class="terrain-overview">
    
    <commonDetails/>
    <v-card>
      <h2 @click="Hide">Terrein</h2>
    <v-container :class='specific'>
      <v-row key="1">
        <v-col
          key="1"
          class="header"
        >
          Oppervlakte
        </v-col>
        <v-col
          key="2"
        >
          {{model.area}} m2
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
          Water
        </v-col>
        <v-col
          key="2"
        >
          <v-checkbox v-model="model.water" readonly/>
          
        </v-col>
      </v-row>
      <v-row>
        <v-col
          key="1"
          class="header"
        >
          Electriciteit
        </v-col>
        <v-col
          key="2"
        >
          <v-checkbox v-model="model.electricity" readonly/>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          key="1"
          class="header"
        >
          Toiletten
        </v-col>
        <v-col
          key="2"
        >
          <v-checkbox v-model="model.toilets" readonly/>
        </v-col>
      </v-row>
      <v-btn color="primary" @click="Update" absolute bottom right>Update</v-btn>
    </v-container>
    </v-card>
  </section>

</template>

<script lang="js">

  import commonDetails from '../details/common-details.vue'

  export default  {

    

    name: 'terrain-overview',
    props: [],
    mounted () {
      // this.$http.GetTerrainDetails(this.$route.params.id)
      //   //.then(resp => this.model = resp.data)
      //   .then(resp => this.$store.commit('SetCampPlace', resp.data))
      //   .catch(error => alert(error))
    },
    data () {
      return {
        model: this.$store.state.selectedCampPlace,
        specific: ''
      }
    },
    methods: {
      Hide(){
        if (this.specific == ''){
          this.specific = 'hide'
        }
        else{
          this.specific = ''
        }
      },
      Update(){
        this.$store.commit('SetNewCampPlace', this.model);
        this.$router.push({name: 'new', params: { type: 'terrain'} });
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
</style>
