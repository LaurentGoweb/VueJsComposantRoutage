<template>
  <div id="app" class="d-flex flex-column align-items-center">
    <Header></Header>
    <router-view></router-view>

   <Footer></Footer>

  </div>

</template>

<script>
import Footer from './components/widgets/Footer.vue'
import Header from './components/widgets/Header.vue'

// import Dropdown from 'bp-vuejs-dropdown'
export default {
  name: 'app',
  components: {
    // Dropdown,
    Footer,
    Header
      },
  data: function() {
    return {
  }
  }
}
</script>



<style lang="scss">
  @import './node_modules/bootstrap/scss/bootstrap.scss';
  @import './src/assets/css/main.scss';
</style>
<style>

  @media screen and (min-width:992px){

  .main-container{padding-left:265px;}
}
</style>

