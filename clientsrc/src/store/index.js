import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from '../router/index'
import { STATES } from "mongoose"

Vue.use(Vuex)

//Allows axios to work locally or live
let base = window.location.host.includes('localhost') ? '//localhost:3000/' : '/'

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {},
    boards: [],
    activeBoard: {},
    lists: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setBoards(state, boards) {
      state.boards = boards
    },
    setActiveBoard(state, activeBoard) {
      state.activeBoard = activeBoard
    },
    setLists(state, lists) {
      state.lists = lists
    },
  },
  actions: {
    //#region -- AUTH STUFF --
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("/profile")
        commit("setUser", res.data)
      } catch (err) {
        console.error(err)
      }
    },
    //#endregion


    //#region -- BOARDS --
    getBoards({ commit, dispatch }) {
      api.get('boards')
        .then(res => {
          commit('setBoards', res.data)
        })
    },
    addBoard({ commit, dispatch }, boardData) {
      api.post('boards', boardData)
        .then(serverBoard => {
          dispatch('getBoards')
        })
    },

    async setActiveBoard({ commit, dispatch }, boardId) {
      // let activeBoard = this.state.boards.find(board => boardId == board.id)
      try {
        let res = await api.get('boards/' + boardId)
        commit('setActiveBoard', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    //#endregion


    //#region -- LISTS --
    /*addList({ commit, dispatch }, newList) {
      api.post('boards', newList) {

    }
  },*/

    async getListsByBoardId({ commit, dispatch }, id) {
      try {
        debugger
        let res = await api.get('boards/' + id + '/lists')
        commit("setLists", res.data)
      } catch (error) {
        console.error(error)
      }
    },


    //#endregion

    //#region --  COMMENTS --



    //#endregion
  }
})
