import Vue from 'vue'
import Vuex from 'vuex'

// import movie from './modules/movie'
// import activities from './modules/activities'
// import book from './modules/book'
// import subject from './modules/subject'
// import group from './modules/group'
// import search from './modules/search'
// import user from './modules/user'

// import userInfo from './modules/userinfo.js'
import theme from '@/store/modules/theme.js'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // userInfo,
    theme
  }
})
