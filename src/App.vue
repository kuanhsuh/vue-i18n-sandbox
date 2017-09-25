<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <span>
    <h2>{{ $t("hello123") }}</h2>
    <h2>{{ $t("bye123")}}</h2>
    <p>{{ $tc('car') }}</p>
    <p>{{ $tc('car', 10, { count: 10}) }}</p>
    </span>
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
    <br />
    <h3>with dynamic locale</h3>
    <button @click="setLangNew('cn')">cn</button>
    <button @click="setLangNew('tw')">tw</button>
    <button @click="setLangNew('es')">es</button>
    <button @click="setLangNew('en')">en</button>
  </div>
</template>

<script>
import i18n from './lang/lang'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Vue+Vuex+Vuei18n'
    }
  },
  methods: {
    switchLang: function(lang){
      if (lang in vue.$i18n.messages) {
        console.log('no ajax')
        this.$i18n.locale = lang
      } else {
        this.loadLocaleMessage(lang, (err, message) => {
        if (err) {
          console.error(err)
          return
        }
          i18n.setLocaleMessage(lang, message)
          this.$i18n.locale = lang
        })
      }
    },
    setLangNew: function(lang){
      this.$store.dispatch('setLangNew', lang)
    },
    setLang: function(lang){
      this.$store.dispatch('setLang', lang)
    },
    loadLocaleMessage: function(locale, cb) {
      console.log('locale', locale);
      return fetch(`./src/lang/${locale}.json` , {
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then((res) => {
          console.log('success');
        return res.json()
      }).then((json) => {
        if (Object.keys(json).length === 0) {
          return Promise.reject(new Error('locale empty !!'))
        } else {
          return Promise.resolve(json)
        }
      }).then((message) => {
        cb(null, message)
      }).catch((error) => {
        cb(error)
      })
    }
  },
  // created () {
  //   console.log('created')
  //   this.loadLocaleMessage('cn', (err, message) => {
  //     console.log('testing');
  //     if (err) {
  //       console.error(err)
  //       return
  //     }
  //     i18n.setLocaleMessage('cn', message)
  //     console.log('message', message);
  //   })
  // }
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
<!-- 
// function loadLocaleMessage (locale, cb) {
//     console.log('locale', locale);
//     return fetch(`./src/lang/${locale}.json` , {
//       method: 'get',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       }
//     }).then((res) => {
//         console.log('success');
//       return res.json()
//     }).then((json) => {
//       if (Object.keys(json).length === 0) {
//         return Promise.reject(new Error('locale empty !!'))
//       } else {
//         return Promise.resolve(json)
//       }
//     }).then((message) => {
//       cb(null, message)
//     }).catch((error) => {
//       cb(error)
//     })
//   }

//   app.loading = 'loading ...'
//   loadLocaleMessage(locale, (err, message) => {
//     console.log('testing');
//     if (err) {
//       app.loading = ''
//       console.error(err)
//       return
//     }
//     i18n.setLocaleMessage(locale, message)
//     console.log('message', message);
//     app.loading = ''
//   })

-->