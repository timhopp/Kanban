<template>
  <div class="container-fluid board text-primary">
    <div class="row justify-content-between ml-2 mt-3 mr-3 px-2">
      <h1>{{ board.title }}</h1>
      <div>
        <button
          class="btn btn-outline-success"
          data-toggle="modal"
          data-target="#listModal"
        >
          Add List
        </button>
        <button @click="deleteBoard(board._id)" class="btn btn-outline-danger">
          Delete
        </button>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="listModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content bg-dark">
          <div class="modal-header text-center">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h3 class="">Create A List</h3>
            <form @submit.prevent="addList">
              <div class="form-group">
                <input
                  v-model="newList.title"
                  type="text"
                  class="form-control"
                  id="createlist"
                  placeholder="Enter List Name Here"
                />
              </div>
              <button
                id="closeListModal"
                type="submit"
                class="btn btn-block btn-outline-success"
              >
                Submit List
              </button>
              <button
                type="button"
                class="btn btn-block btn-outline-danger"
                data-dismiss="modal"
                @click="clearListCreate()"
              >
                Close
              </button>
            </form>
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>

    <div class="row">
      <list
        class="car col-3 rounded mb-3 square text-light"
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
  props: ["boardId", "list"],
  data() {
    return {
      newList: {},
    };
  },
  mounted() {
    this.$store.dispatch("getListsByBoardId", this.$route.params.boardId);
    $("#listModal").on("hidden.bs.modal", () => {
      this.clearListCreate();
    });
    $("#closeListModal").on("click", () => {
      $("#listModal").modal("hide");
    });
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
      console.log(this.newList.title, this.$route.params.boardId);
      this.clearListCreate();
    },

    deleteBoard(boardId) {
      this.$store.dispatch("deleteBoard", boardId);
      this.$router.push({ name: "boards", path: "/boards" });
    },
    clearListCreate() {
      this.newList = {};
    },
  },
  components: {
    List,
  },
};
</script>
