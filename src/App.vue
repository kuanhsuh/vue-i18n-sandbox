<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>{{ $t("message.hello") }}</h2>
    <h3>without Vuex</h3>
    <button @click="switchLang('cn')">cn</button>
    <button @click="switchLang('tw')">tw</button>
    <button @click="switchLang('es')">es</button>
    <button @click="switchLang('en')">en</button>
    <br />
    <h3>with Vuex</h3>
    <button @click="setLang('cn')">cn</button>
    <button @click="setLang('tw')">tw</button>
    <button @click="setLang('es')">es</button>
    <button @click="setLang('en')">en</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Vue+Vuex+Vuei18n'
    }
  },
  methods: {
    switchLang: function(lang){
      this.$i18n.locale = lang
    },
    setLang: function(lang){
      this.$store.dispatch('setLang', lang)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
