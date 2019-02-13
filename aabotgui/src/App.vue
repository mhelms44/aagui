<template>
  <v-app :dark ='blah'>
    <side-menu @toggle="blah = !blah"/>
    <v-content>
    </v-content>
  </v-app>
</template>

<script>
import SideMenu from './components/SideMenu'

export default {
  name: 'App',
  components: {
    SideMenu
  },
  data () {
    return {
      blah:false
    }
  }
}
</script>
