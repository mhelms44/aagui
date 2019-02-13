<template>
  <v-navigation-drawer permanent app>
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            AA Bot Dashboard
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider></v-divider>

    <v-list dense class="pt-0">
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        @click=""
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
        
          <v-btn @click="$emit('toggle')"> Toggle Dark Mode   
            <v-icon right>brightness_4</v-icon>
            </v-btn>
  </v-navigation-drawer>
</template>

<script>
  export default {
    props: ['dark'],
    data () {
      return {
        items: [
          { title: 'Main Dashboard', icon: 'dashboard' },
          { title: 'SRE Dashboard', icon: 'people' },
          { title: 'Action Dashboard', icon: 'check_circle_outline'},
        ],
        right: null,
      }
    }
  }

</script>