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
            <!-- <v-btn  @click="listType = 'list'" :color="GetListTypeColor('list')" :depressed="this.listType != 'list'">Lijst</v-btn>
            <v-btn  @click="listType = 'fiche'" :color="GetListTypeColor('fiche')" :depressed="this.listType != 'fiche'">Fiches</v-btn> -->
            <v-btn @click="items = favorites">Favorieten</v-btn>
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
      <v-form>
        <v-rating v-model="$store.state.searchModel.minimumScore" half-increments clearable label="Minimum score"/>
        <v-slider v-model="$store.state.searchModel.accessibility" label="Bereikbaarheid in uren" thumb-label max="12" dense ticks step="0.5"/>
      </v-form>
    </v-card>
    
    </div>
    <h1>Overzicht {{title}}</h1>
    <v-btn block @click="PostSearch" color="primary" :loading="loading">Zoeken</v-btn>
    <v-data-table
      v-if="listType == 'list'"
      :headers="headers"
      :items="items"
      @click:row="RowClicked"
    >
    <template v-slot:item="row">
          <tr @click="RowClicked(row.item)">
            <td>{{row.item.name}}</td>
            <td>{{row.item.amountPersons}}</td>
            <td>{{row.item.city}}</td>
            <td>{{row.item.website}}</td>
            <td>
              <v-rating v-model="row.item.averageScore" dense small readonly half-increments/>
            </td>
            <td>
                <v-btn icon color="pink" @click.stop="NewFavorite(row.item)">
                    <v-icon v-if="IsFavorite(row.item.id)">favorite</v-icon>
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
      this.GetHeaders(),
      this.PostSearch(),
      this.Title(),
      this.InitLocalStorage(),
      this.GetFavorites()
    },
    data () {
      return {
        searchModel: {},
        provinces: ["West-Vlaanderen", "Oost-Vlaanderen", "Antwerpen", "Limburg", "Vlaams-Brabant", "Henegouwen", "Waals-Brabant", "Luik", "Luxemburg", "Namen"],
        type: localStorage.type,
        hide: '',
        headers: [], 
        items: this.$store.state.items,
        title: this.Title(),
        loading: false,
        listType: localStorage.listType,
        favorites: []
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
              .then(() => this.loading = false);
        }
        else{
              this.$http.PostTerrainSearch(this.$store.state.searchModel)
                .then(resp => this.items = resp.data)
                .then(() => this.loading = false);
        }
      },
      GetHeaders(){
        this.headers = [
              {text:"Naam", value:"name"},              
              {text:"Aantal personen", value:"amountPersons"},
              {text:"Stad", value:"city"},
              {text:"Website", value:"website"},
              {text:"Score", value:  "averageScore"},
              {text:"Favoriet"}
            ]
      },
      RowClicked(selectedRow){
        if (selectedRow.type == 'building'){          
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
      },
      SetLocalStorage(type, value){
        switch(type){
          case 'type':
            localStorage.type = value;
            break;
          case 'listType':
            localStorage.listType = value;
            break;
        }
      },
      InitLocalStorage(){
        if (localStorage.type == null){
          localStorage.type = 'building';
          this.type = 'building';
        }
        if(localStorage.listType == null){
          localStorage.listType = 'list';
          this.listType = 'list';
        }
      },
      NewFavorite(item){
        if (!this.IsFavorite(item.id)){
          this.favorites.push(item);
        }
        else{
          this.RemoveFavorite(item.id);
        }
        this.saveFavorites();
      },
      saveFavorites(){
        const parsed = JSON.stringify(this.favorites);
        localStorage.favorites = parsed;
      },
      IsFavorite(id){
        for (var i = 0; i < this.favorites.length; i++){
          if (this.favorites[i].id == id){
            return true;
          }
        }
        return false;
      },
      GetFavorites(){
        this.favorites = JSON.parse(localStorage.favorites)
      },
      RemoveFavorite(id){
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
        this.GetHeaders(),
        this.PostSearch(),
        this.Title()
        this.SetLocalStorage('type', this.type)
      },
      listType: function (){
        this.SetLocalStorage('listType', this.listType)
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
