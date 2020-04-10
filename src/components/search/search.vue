<template lang="html">

  <section >
    <h1 @click="hideSearch">Zoeken</h1>
    <div :class="hide">
    <v-card class="searchGeneral">
      <v-form>
        <v-text-field v-model="$store.state.searchModel.name"  label="Naam" outlined/>
        <v-text-field v-model="$store.state.searchModel.amountPersons"  label="Aantal personen" outlined/>
        <v-combobox :items="provinces" v-model="$store.state.searchModel.province" multiple clearable chips label="provincie" outlined/>
        <v-switch v-model="$store.state.searchModel.foreign" label='Buitenland'/>
      </v-form>
    </v-card>
    <searchBuilding v-if="this.type == 'building'" class="searchSpecific"/>
    <searchTerrain v-if="this.type == 'terrain'" class="searchSpecific"/>
    </div>
  </section>

</template>

<script lang="js">

  import searchTerrain from '../search/search-terrain.vue';
  import searchBuilding from '../search/search-building.vue';

  export default  {
    name: 'search',
    props: [],
    mounted () {

    },
    data () {
      return {
        searchModel: {},
        provinces: ["West-Vlaanderen", "Oost-Vlaanderen", "Antwerpen", "Limburg", "Vlaams-Brabant", "Henegouwen", "Waals-Brabant", "Luik", "Luxemburg", "Namen"],
        type: this.$store.state.type,
        hide: ''
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
      }
    
    },
    computed: {

    },
    components: {
      searchBuilding,
      searchTerrain
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
</style>
