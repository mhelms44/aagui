<template>
  <v-app :dark ='blah'>
    <side-menu/>
    <v-content>
      <hello-thar/>
    </v-content>
  </v-app>
</template>

<script>
import MyMenu from './components/SideMenu'

export default {
  name: 'App',
  components: {
    SideMenu
  },
  data () {
    return {
      blah:true
    }
  }
}
</script>
