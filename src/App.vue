<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>{{ $t("message.hello") }}</h2>
    <button @click="switchLang('cn')">cn</button>
    <button @click="switchLang('tw')">tw</button>
    <button @click="switchLang('es')">es</button>
    <button @click="switchLang('en')">en</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    toggleLang: function(){
      const currentLang = vue.$i18n.locale
      if(currentLang == 'cn') {
        vue.$i18n.locale = 'en'
      } else {
        vue.$i18n.locale = 'cn'
      }
    },
    switchLang: function(lang){
      console.log(lang)
      vue.$i18n.locale = lang
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
