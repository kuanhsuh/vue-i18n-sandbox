import {app} from '../main'
import * as types from './mutation-types'
import axios from 'axios'

export const state = {
  lang: 'en',
}

export const mutations = {
  [types.SET_LANG] (state, payload) {
    app.$i18n.locale = payload
  }
}

export const actions = {
  // setLang(context, payload) {
  //   context.commit(types.SET_LANG, payload)
  // }
  setLang({commit}, payload) {
    commit(types.SET_LANG, payload)
  },
  // setLangNew({commit}, payload){
  //   if (payload in app.$i18n.messages) {
  //     commit(types.SET_LANG, payload)
  //   } else {
  //     fetch(`./src/lang/${payload}.json` , {
  //     method: 'get',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     }
  //   }).then((res) => {
  //     console.log('success');
  //       return res.json()
  //     }).then((json) => {
  //       if (Object.keys(json).length === 0) {
  //         return Promise.reject(new Error('locale empty !!'))
  //       } else {
  //         return Promise.resolve(json)
  //       }
  //     }).then((message) => {
  //       app.$i18n.setLocaleMessage(payload, message)
  //       commit(types.SET_LANG, payload)
  //     }).catch((error) => {
  //       console.log(error)
  //     })
  //   }
  // },
  // setLangNew({commit}, payload){
  //   if (payload in app.$i18n.messages) {
  //     commit(types.SET_LANG, payload)
  //   } else {
  //    axios.get(`./src/lang/${payload}.json`)
  //     .then((res) => {
  //       app.$i18n.setLocaleMessage(payload, res.data)
  //       commit(types.SET_LANG, payload)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  //   }
  // }
  async setLangNew({commit}, payload){
    if (payload in app.$i18n.messages) {
      commit(types.SET_LANG, payload)
    } else {
      try {
        // const res = await axios.get(`./src/lang/${payload}.json`)
        // const res = await axios.get(`../../src/lang/${payload}.json`)
        const res = await import(`./src/lang/locale/${payload}.json`)
        app.$i18n.setLocaleMessage(payload, res.data)
        commit(types.SET_LANG, payload)
      }
      catch(e) {
        console.log(e)
      }
    }
  }
}
