import Vue from 'vue'
import VueI18n from 'vue-i18n'

// import App from './modules/App/'
// import HeaderNav from './modules/HeaderNav/'
// import PlayInfo from './modules/PlayInfo/'
// import GameInfo from './modules/GameInfo/'
// import AddNewGameInfo from './modules/AddNewGameInfo/'
// import NewsEvents from './modules/NewsEvents/'
// import ReportList from './modules/ReportList/'
// import GamePlayer from './modules/GamePlayer/'

Vue.use(VueI18n)

const locale = localStorage['locale'] || 'cn'

const messages = {
    cn: {
        lang: '簡體中文',
        message: {
            hello: '簡體中文'
        }
    },
    tw: {
        lang: '繁體中文',
        message: {
            hello: '繁體中文'
        }
    },
    en: {
        lang: 'English',
        message: {
            hello: 'English'
        }
    },
    es: {
        lang: 'Spanish',
        message: {
            hello: 'Hola'
        }
    },
}

const i18n = new VueI18n({
    /** 默认值 */
    locale,
    messages
})

export default i18n