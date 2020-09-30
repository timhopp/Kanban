import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router/index";
import { STATES } from "mongoose";

Vue.use(Vuex);

//Allows axios to work locally or live
let base = window.location.host.includes("localhost")
  ? "//localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true,
});

export default new Vuex.Store({
  state: {
    user: "",
    boards: [],
    activeBoard: {},
    lists: [],
    tasks: [],
    tempTask: {},
    currentTask: {},
    modalOpen: false,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setBoards(state, boards) {
      state.boards = boards;
    },
    setActiveBoard(state, activeBoard) {
      state.activeBoard = activeBoard;
    },
    setLists(state, lists) {
      state.lists = lists;
    },
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    setItemToMove(state, taskData) {
      state.tempTask = taskData;
    },
    setCurrentTask(state, currentTask) {
      state.currentTask = currentTask;
    },
  },
  actions: {
    //#region -- AUTH STUFF --
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("/profile");
        commit("setUser", res.data);
      } catch (err) {
        console.error(err);
      }
    },
    setTaskToMove({ commit, dispatch }, data) {
      commit("setTaskToMove", data);
    },
    async moveTask({ commit, dispatch }, moveData) {
      console.log(moveData);
      try {
        let res = await api.put("tasks/" + moveData.taskToMove.id, {
          listId: moveData.listId,
        });
      } catch (error) {
        console.error(error);
      }
      commit("setItemToMove");
      dispatch("getAllTasks");
    },
    //#endregion

    //#region -- BOARDS --
    getBoards({ commit, dispatch }) {
      api.get("boards").then((res) => {
        commit("setBoards", res.data);
      });
    },
    addBoard({ commit, dispatch }, boardData) {
      api.post("boards", boardData).then((serverBoard) => {
        dispatch("getBoards");
      });
    },

    async setActiveBoard({ commit, dispatch }, boardId) {
      // let activeBoard = this.state.boards.find(board => boardId == board.id)
      try {
        let res = await api.get("boards/" + boardId);
        commit("setActiveBoard", res.data);
      } catch (error) {
        console.error(error);
      }
    },

    addList({ commit, dispatch }, listData) {
      api.post("lists", listData).then((serverList) => {
        dispatch("getListsByBoardId", listData.boardId);
      });
      console.log(this.state);
    },

    deleteTask({ commit, dispatch }, taskId) {
      api.delete("tasks/" + taskId).then((serverList) => {
        dispatch("getAllTasks");
      });
    },
    //#endregion
    deleteTasksByListId({ commit, dispatch }, listId) {
      api.delete("tasks", listId).then((serverList) => {
        dispatch("getAllTasks");
      });
    },

    currentTask({ commit, dispatch, state }, taskId) {
      let currentTask = state.tasks.find((task) => task.id == taskId);
      commit("setCurrentTask", currentTask);
    },

    //#region -- LISTS --
    /*addList({ commit, dispatch }, newList) {
      api.post('boards', newList) {

    }
  },*/

    async getListsByBoardId({ commit, dispatch }, id) {
      try {
        let res = await api.get("boards/" + id + "/lists");
        commit("setLists", res.data);
      } catch (error) {
        console.error(error);
      }
    },

    //#endregion
    //#region --  TASKS --
    addTask({ commit, dispatch }, taskData) {
      api.post("tasks", taskData).then((serverList) => {
        dispatch("getAllTasks");
      });
    },
    async getTasksByListId({ commit, dispatch }, id) {
      try {
        let res = await api.get("lists/" + id + "/tasks");
        commit("setTasks", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getAllTasks({ commit, dispatch }) {
      try {
        let res = await api.get("tasks");
        commit("setTasks", res.data);
      } catch (error) {
        console.error(error);
      }
    },

    deleteBoard({ commit, dispatch }, boardId) {
      api.delete("boards/" + boardId).then((serverList) => {
        dispatch("getBoards");
      });
    },

    //#endregion

    //#region --  COMMENTS --
    addComment({ commit, dispatch }, payload) {
      api
        .post("tasks/" + payload.taskId + "/comments", payload)
        .then((serverList) => {
          dispatch("getAllTasks");
        });
    },

    deleteList({ commit, dispatch }, payload) {
      api.delete("lists/" + payload.listId).then((serverList) => {
        dispatch("getListsByBoardId", payload.boardId);
      });
    },

    deleteComment({ commit, dispatch }, payload) {
      api
        .delete(
          "tasks/" + payload.theTaskId + "/comments/" + payload.theCommentId
        )
        .then((serverList) => {
          dispatch("getAllTasks");
        });
    },

    getComments({ commit, dispatch, state }, taskId) {
      try {
        let foundTask = state.tasks.find((task) => task.id == taskId);
        let res = foundTask.comments;
      } catch (error) {
        console.error(error);
      }
    },

    //#endregion
  },
});
