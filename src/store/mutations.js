import {app} from '../main'
import * as types from './mutation-types'

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
  }
}

