<template lang="html">

  <section >
    <div>
    <v-card class="searchGeneral">
      <v-form>
        <v-text-field v-model="$store.state.searchModel.name" clearable  label="Naam" outlined/>
        <v-text-field v-model="$store.state.searchModel.amountPersons" clearable  label="Aantal personen" outlined/>
        <v-combobox :items="provinces" v-model="$store.state.searchModel.province" multiple clearable chips label="provincie" outlined/>
        <v-row>
          <v-col>
            <v-switch v-model="$store.state.searchModel.foreign" label='Buitenland'/>
          </v-col>
          <v-col>
            <!-- <v-btn  @click="listType = 'list'" :color="getListTypeColor('list')" :depressed="this.listType != 'list'">Lijst</v-btn>
            <v-btn  @click="listType = 'fiche'" :color="getListTypeColor('fiche')" :depressed="this.listType != 'fiche'">Fiches</v-btn> -->
            <v-btn id="favorites" @click="items = favorites" bottom type="toggle">
              Favorieten
              <v-spacer></v-spacer>
              <v-icon  color="pink">favorite</v-icon>              
            </v-btn>
          </v-col>
        </v-row>
        
      </v-form>
    </v-card>
    <v-card class="searchSpecific">
      <v-btn link @click="type = 'terrain', postSearch" :color="getColor('terrain')" :depressed="this.type != 'terrain'">
        Terrein
      </v-btn>
      <v-btn @click="type = 'building', postSearch" :color="getColor('building')" :depressed="this.type != 'building'">
        Gebouw
      </v-btn>
      <searchBuilding v-if="this.type == 'building'"/>
      <searchTerrain v-if="this.type == 'terrain'"/>
      <v-form>
        <v-rating v-model="$store.state.searchModel.minimumScore" half-increments clearable label="Minimum score"/>
        <v-slider v-model="$store.state.searchModel.accessibility" label="Bereikbaarheid in uren" thumb-label max="12" dense ticks step="0.5"/>
      </v-form>
    </v-card>
    
    </div>
    <h1>Overzicht {{title}}</h1>
    <v-alert :type="messageType" v-if="message != ''">{{message}}</v-alert>
    <v-btn block @click="postSearch" color="primary" :loading="loading">Zoeken</v-btn>
    <v-data-table
      v-if="listType == 'list'"
      :headers="headers"
      :items="items"
      @click:row="rowClicked"
    >
    <template v-slot:item="row">
          <tr @click="rowClicked(row.item)">
            <td>{{row.item.name}}</td>
            <td>{{row.item.amountPersons}}</td>
            <td>{{row.item.city}}</td>
            <td>{{row.item.website}}</td>
            <td>
              <v-rating v-model="row.item.averageScore" dense small readonly half-increments/>
            </td>
            <td>
                <v-btn icon color="pink" @click.stop="newFavorite(row.item)">
                    <v-icon v-if="isFavorite(row.item.id)">favorite</v-icon>
                    <v-icon v-else>favorite_border</v-icon>
                </v-btn>
            </td>
          </tr>
      </template>
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
      this.getHeaders(),
      this.postSearch(),
      this.getTitle(),
      this.initLocalStorage(),
      this.getFavorites()
    },
    data () {
      return {
        searchModel: {},
        provinces: ["West-Vlaanderen", "Oost-Vlaanderen", "Antwerpen", "Limburg", "Vlaams-Brabant", "Henegouwen", "Waals-Brabant", "Luik", "Luxemburg", "Namen"],
        type: localStorage.type,       
        headers: [], 
        items: [],
        title: this.getTitle(),
        loading: false,
        listType: localStorage.listType,
        favorites: [],
        message: "",
        messageType: "success"
      }
    },
    methods: {
      postSearch(){
        this.loading = true;
        if(this.type == 'building'){
            this.$http.postBuildingSearch(this.$store.state.searchModel)
              .then(resp => {
                this.items = resp.data;
                this.message = "";
              })     
              .catch(error => {
                this.messageType = "error";
                this.message = this.$error.getError(error);
              })         
              .finally(() => this.loading = false)
        }
        else{
              this.$http.postTerrainSearch(this.$store.state.searchModel)
                .then(resp => {
                  this.items = resp.data;
                  this.message = "";
                })  
                .catch(error => {
                  this.messageType = "error";
                  this.message = this.$error.getError(error);
                })              
                .finally(() => this.loading = false);
        }
      },
      getHeaders(){
        this.headers = [
              {text:"Naam", value:"name"},              
              {text:"Aantal personen", value:"amountPersons"},
              {text:"Stad", value:"city"},
              {text:"Website", value:"website"},
              {text:"Score", value:  "averageScore"},
              {text:"Favoriet"}
            ]
      },
      rowClicked(selectedRow){
        if (selectedRow.type == 'building'){          
          this.$http.getBuildingDetails(selectedRow.id)
          .then(resp => {
            this.$store.commit('setCampPlace', resp.data);
            this.$router.push({name: 'buildingDetails'});
          })
          .catch(error => {
            this.messageType = "error";
            this.message = this.$error.getError(error);
          }) 
        }
        else{
          this.$http.getTerrainDetails(selectedRow.id)
          .then(resp => {
            this.$store.commit('setCampPlace', resp.data);
            this.$router.push({name: 'terrainDetails'});
          })
          .catch(error => {
            this.messageType = "error";
            this.message = this.$error.getError(error);
          }) 
        }
      },
      getTitle(){
        if (this.type == 'building'){
          this.title = 'gebouwen'
        }
        else{
          this.title = 'terreinen'
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
      getListTypeColor(buttonType){
        if (this.listType == buttonType){
          return 'primary'
        }
        else{
          return 'indigo lighten-5'
        }
      },
      setLocalStorage(type, value){
        switch(type){
          case 'type':
            localStorage.type = value;
            break;
          case 'listType':
            localStorage.listType = value;
            break;
        }
      },
      initLocalStorage(){
        if (localStorage.type == null){
          localStorage.type = 'building';
          this.type = 'building';
        }
        if(localStorage.listType == null){
          localStorage.listType = 'list';
          this.listType = 'list';
        }
      },
      newFavorite(item){
        if (!this.isFavorite(item.id)){
          this.favorites.push(item);
        }
        else{
          this.removeFavorite(item.id);
        }
        this.saveFavorites();
      },
      saveFavorites(){
        const parsed = JSON.stringify(this.favorites);
        localStorage.favorites = parsed;
      },
      isFavorite(id){
        for (var i = 0; i < this.favorites.length; i++){
          if (this.favorites[i].id == id){
            return true;
          }
        }
        return false;
      },
      getFavorites(){
        this.favorites = JSON.parse(localStorage.favorites)
      },
      removeFavorite(id){
        for (var i = 0; i < this.favorites.length; i++){
          if (this.favorites[i].id == id){
            this.favorites.splice(i, 1);
          }
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
        this.getHeaders(),
        this.postSearch(),
        this.getTitle()
        this.setLocalStorage('type', this.type)
      },
      listType: function (){
        this.setLocalStorage('listType', this.listType)
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
  button{
    width:50%;
  }
  
  h1{
    clear: both;
  }
  #favorites{
    width: 80%;
  }
</style>
