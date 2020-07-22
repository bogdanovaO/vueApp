import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    documents: [
      {title: 'item title1', id: 1},
      {title: 'item title2', id: 2},
      {title: 'item title3', id: 3},
      {title: 'item title4', id: 4},
      {title: 'item title5', id: 5},
      {title: 'item title6', id: 6},
      {title: 'item title7', id: 7},
      {title: 'item title8', id: 8},
      {title: 'item title9', id: 9},
      {title: 'item title10', id: 10}
    ]
  },
  mutations: {
    newDocument(state, payload) {
      state.documents.push({title: payload.title, id: this.state.documents.length + 1})
    },
    removeDocument(state, index) {
      console.log(this.state.documents.indexOf(index))
      state.documents.splice(index, 1)
    }
  }
})