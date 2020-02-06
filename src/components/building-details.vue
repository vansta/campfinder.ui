<template lang="html">

  <section class="building-details">
    <h1>building-details Component</h1>
    <commonDetails/>
  </section>
  

</template>

<script lang="js">

  import commonDetails from "common-details";

  export default  {
    name: 'building-details',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    },
    components:{
      commonDetails
    }
}


</script>

<style scoped lang="scss">
  .building-details {

  }
</style>
