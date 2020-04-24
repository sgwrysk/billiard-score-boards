<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" absolute temporary app>
      <v-container>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title grey--text text--darken-2">
              Menu
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list nav dense>
          <v-list-item v-for="navigation in navigations" :key="navigation.name" :to="navigation.path">
            <v-list-item-icon>
              <v-icon>{{ navigation.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ navigation.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-container>
    </v-navigation-drawer>
    <v-app-bar class="d-print-none" color="primary" dark dense app>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ page_title }}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
        <router-view></router-view>
    </v-content>

    <v-footer class="d-print-none" color="primary" dark app>
      <v-layout justify-center align-center>
      ©︎ Copyright Seekers
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return{
      page_title: 'Tiny Tips',
      drawer: false,
      navigations: [
        {name: 'Home', icon: 'mdi-home', path: '/', page_title: 'Tiny Tips'},
//        {name: '100マス計算', icon: 'mdi-calculator-variant', path: '/materials/box100'},
//        {name: '漢字書くのだ！', icon: 'mdi-pen', path: '/materials/kanji25'},
      ],
    }
  },
  props: [],
  created: function() {
    this.update_page_title();
  },
  updated: function() {
    this.update_page_title();
  },
  computed: {
  },
  methods: {
    update_page_title: function() {
      let navigation = this.navigations.find(n => n.path == this.$route.path);
      this.page_title = navigation.page_title || navigation.name;
    }
  },
};
</script>


<!--
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
-->