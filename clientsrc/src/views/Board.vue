<template>
  <div class="board">
    <h1>{{board.title}}</h1>
    <form>
      <div @submit.prevent="addList" class="form-group">
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
      <List
        class="car col-4 border rounded mb-3 square bg-info text-light"
        v-for="list in lists"
        :key="list.id"
      ></List>
    </div>
  </div>
</template>


<script>
import List from "../components/List";
export default {
  name: "board",
  props: ["boardId"],
  data() {
    return {
      newList: {},
    };
  },
  mounted() {
    debugger;
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
        id: this.$store.state.activeBoard.id,
      });
    },
  },
  components: {
    List,
  },
};
</script>
