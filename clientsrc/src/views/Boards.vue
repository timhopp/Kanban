<template>
  <div class="boards">
   <h1>Your Boards</h1>
    <form @submit.prevent="addBoard">
      <div class="input-group input-group-lg justify-content-center m-2 p-2">
      <input class="rounded m-2" type="text" placeholder="title" v-model="newBoard.title" required />
      <input class="rounded m-2" type="text" placeholder="description" v-model="newBoard.description" />
      <button class="btn btn-success m-2" type="submit">Create Board</button>
      </div>
    </form>
    <div class="container-fluid">
      <div class="row justify-content-center">
    <div class="bg-secondary border rounded text-white m-2 p-2 col-3" @click="setActiveBoard(board.id)" v-for="board in boards" :key="board.id">
      <router-link :to="{name: 'board', params: {boardId: board.id}}"><h3>{{board.title}}</h3></router-link>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "boards",
  mounted() {
    this.$store.dispatch("getBoards");
  },
  data() {
    return {
      newBoard: {
        title: "",
        description: ""
      }
    };
  },
  computed: {
    boards() {
      return this.$store.state.boards;
    }
  },
  methods: {
    addBoard() {
      this.$store.dispatch("addBoard", this.newBoard);
      this.newBoard = { title: "", description: "" };
    },
    setActiveBoard(boardId) {
      this.$store.dispatch("setActiveBoard", boardId)
    }
  }
};
</script>