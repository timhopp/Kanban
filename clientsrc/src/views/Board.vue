<template>
  <div class="board">
    <h1>{{board.title}}</h1>
    <form @submit.prevent="addList">
      <div  class="form-group">
        <label for="exampleInputEmail1">Create A List</label>
        <input
          v-model="newList.title"
          type="text"
          class="form-control"
          id="createlist"
          placeholder="Enter List Name Here"
        />
      </div>
      <Button type="submit" class="btn btn-block btn-warning">Submit List</Button>
    </form>
    <div class="row">
      <list
        class="car col-4 border rounded mb-3 square bg-info text-light"
        v-for="listItem in lists"
        :list="listItem"
        :key="listItem.id"
      ></list>
    </div>
  </div>
</template>


<script>
import List from "../components/List";
export default {
  name: "board",
  props: ["boardId",
  "list"
  ],
  data() {
    return {
      newList: {},
    };
  },
  mounted() {
    this.$store.dispatch("getListsByBoardId", this.$route.params.boardId);
  },
  computed: {
    board() {
      return this.$store.state.activeBoard;
    },
    lists() {
      return this.$store.state.lists;
    },
  },
  methods: {
    addList() {
      
      this.$store.dispatch("addList", {
        title: this.newList.title,
        boardId: this.$route.params.boardId,
      });
      console.log(this.newList.title, this.$route.params.boardId)
    },
  },
  components: {
    List,
  },
};
</script>
