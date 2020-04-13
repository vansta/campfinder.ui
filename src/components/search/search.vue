<template lang="html">

  <section >
    <div :class="hide">
    <v-card class="searchGeneral">
      <v-form>
        <v-text-field v-model="$store.state.searchModel.name"  label="Naam" outlined/>
        <v-text-field v-model="$store.state.searchModel.amountPersons"  label="Aantal personen" outlined/>
        <v-combobox :items="provinces" v-model="$store.state.searchModel.province" multiple clearable chips label="provincie" outlined/>
        <v-row>
          <v-col>
            <v-switch v-model="$store.state.searchModel.foreign" label='Buitenland'/>
          </v-col>
          <v-col>
            <v-btn  @click="listType = 'list'" :color="GetListTypeColor('list')" :depressed="this.listType != 'list'">Lijst</v-btn>
            <v-btn  @click="listType = 'fiche'" :color="GetListTypeColor('fiche')" :depressed="this.listType != 'fiche'">Fiches</v-btn>
          </v-col>
        </v-row>
        
      </v-form>
    </v-card>
    <v-card class="searchSpecific">
      <v-btn link @click="type = 'terrain', PostSearch" :color="GetColor('terrain')" :depressed="this.type != 'terrain'">
        Terreinen
      </v-btn>
      <v-btn @click="type = 'building', PostSearch" :color="GetColor('building')" :depressed="this.type != 'building'">
        Gebouwen
      </v-btn>
      <searchBuilding v-if="this.type == 'building'"/>
      <searchTerrain v-if="this.type == 'terrain'"/>
    </v-card>
    
    </div>
    <h1>Overzicht {{title}}</h1>
    <v-btn block @click="PostSearch" color="primary" :loading="loading">Zoeken</v-btn>
    
    <v-item-group v-if="listType == 'fiche'">
      <v-row>
        <v-col
          v-for="(item, i) in items"
          :key=i
        >
        <v-card
      :loading="loading"
      class="mx-auto my-12"
      max-width="374"
      horizontal
      min-width="300"
    >
      <!-- <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img> -->
  
      <v-card-title>{{item.name}}</v-card-title>
  
      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
          <v-rating
            :value="item.averageScore"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>
  
          <div class="grey--text ml-4">{{item.averageScore}}</div>
        </v-row>

        <div class="my-4 subtitle-1">
          <a :href="item.website">{{item.website}}</a>
        </div>
  
        <div class="my-4 subtitle-1">
          {{item.amountPersons}} personen
        </div>
  
        <div>{{item.city}}</div>
      </v-card-text>
  
      <v-divider class="mx-4"></v-divider>
  
      <v-card-title v-if="type == 'building'">Gebouw</v-card-title>
      <v-card-title v-if="type == 'terrain'">Terrein</v-card-title>

      <v-card-text v-if="type == 'building'">
        <div class="my-4 subtitle-1">
          {{item.dormitories}} slaapzalen
        </div>
        <div class="my-4 subtitle-1" v-if="item.beds">
          Bedden aanwezig
        </div>
      </v-card-text>

      <v-card-text v-if="type == 'terrain'">
        <div class="my-4 subtitle-1" v-if="item.toilets">
          Toiletten aanwezig
        </div>
      </v-card-text>
  
      <v-card-actions>
        <v-btn
          color="deep-purple lighten-2"
          text
          @click="RowClicked(item)"
        >
          Details
        </v-btn>
      </v-card-actions>
    </v-card>
        </v-col>
      </v-row>
    </v-item-group>
    <v-data-table
      v-if="listType == 'list'"
      :headers="headers"
      :items="items"
      @click:row="RowClicked"
    >
    <!-- <template v-slot:item.averageScore="{ item }">
           <span><v-rating v-model="item.averageScore"></v-rating></span>
         </template> -->
    </v-data-table>
  </section>

</template>

<script lang="js">

  import searchTerrain from '../search/search-terrain.vue';
  import searchBuilding from '../search/search-building.vue';

  export default  {
    name: 'search',
    props: [],
    mounted () {
      this.GetHeaders(),
      this.PostSearch()
    },
    data () {
      return {
        searchModel: {},
        provinces: ["West-Vlaanderen", "Oost-Vlaanderen", "Antwerpen", "Limburg", "Vlaams-Brabant", "Henegouwen", "Waals-Brabant", "Luik", "Luxemburg", "Namen"],
        type: 'building',
        hide: '',
        headers: [], 
        items: this.$store.state.items,
        title: this.Title(),
        loading: false,
        listType: 'fiche'
      }
    },
    methods: {
      hideSearch(){
        if (this.hide == ""){
          this.hide = "hide"
        }
        else{
          this.hide = ""
        }
      },
      PostSearch(){
        this.loading = true;
        if(this.type == 'building'){
            this.$http.PostBuildingSearch(this.$store.state.searchModel)
              .then(resp => this.items = resp.data)
              .then(() => this.loading = false)
        }
        else{
              this.$http.PostTerrainSearch(this.$store.state.searchModel)
                .then(resp => this.items = resp.data)
                .then(() => this.loading = false)
        }
      },
      GetHeaders(){
        if(this.type == 'building'){
            this.headers = [
              {text:"Naam", value:"name"},
              {text:"Slaapzalen", value:"dormitories"},
              {text:"Aantal personen", value:"amountPersons"},
              {text:"Stad", value:"city"},
              {text:"Website", value:"website"}
            ]
        }
        else{
              this.headers = [
                {text:"Naam", value:"name"},
                {text:"Oppervlakte", value:"area"},
                {text:"Aantal personen", value:"amountPersons"},
                {text:"Stad", value:"city"},
                {text:"Website", value:"website"},
                {text:"Water", value:"water"},
                {text:"Score", value:"averageScore", dataType:'rating'}
              ]
            
        }
      },
      RowClicked(selectedRow){
        if (this.type == 'building'){
          this.$http.GetBuildingDetails(selectedRow.id)
          .then(resp => this.$store.commit('SetCampPlace', resp.data))
          .then(() => this.$router.push({name: 'buildingDetails'}))
        }
        else{
          this.$http.GetTerrainDetails(selectedRow.id)
          .then(resp => this.$store.commit('SetCampPlace', resp.data))
          .then(() => this.$router.push({name: 'terrainDetails'}))
        }
      },
      Title(){
        if (this.type == 'building'){
          this.title = 'gebouwen'
        }
        else{
          this.title = 'terreinen'
        }
      },
      GetColor(buttonType){
        if (this.type == buttonType){
          return 'primary'
        }
        else{
          return 'indigo lighten-5'
        }
      },
      GetListTypeColor(buttonType){
        if (this.listType == buttonType){
          return 'primary'
        }
        else{
          return 'indigo lighten-5'
        }
      }
    },
    computed: {

    },
    components: {
      searchBuilding,
      searchTerrain
    },
    watch: {
      type: function () {
        this.GetHeaders(),
        this.PostSearch(),
        this.Title()
      }
    }
}


</script>

<style scoped lang="scss">
  form{
    padding: 2%;
  }
  .searchGeneral{
    width:50%;
    float: left;
  }
  .searchSpecific{
    width: 50%;
    float: left;
  }
  .hide{
    display:none;
  }
  button{
    width:50%;
  }
  
  h1{
    clear: both;
  }
</style>
