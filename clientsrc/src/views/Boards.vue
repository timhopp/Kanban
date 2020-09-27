<template>
  <div class="boards text-primary">
    <div class="row justify-content-center m-3">
      <div class="col-7 mr-2 text-right">
        <h1 class="">Your Boards</h1>
      </div>
      <div class="col text-right mr-3">
        <button
          class="btn btn-outline-success"
          data-toggle="modal"
          data-target="#boardModal"
        >
          Create Board
        </button>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="boardModal"
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
            <h3 class="">Create A Board</h3>
            <form @submit.prevent="addBoard">
              <div
                class="input-group input-group-lg justify-content-center m-2 p-2"
              >
                <div class="row justify-content-center mb-2">
                  <input
                    class="rounded m-2 col-11"
                    type="text"
                    placeholder="title"
                    v-model="newBoard.title"
                    required
                  />

                  <input
                    class="rounded m-2 col-11"
                    type="text"
                    placeholder="description"
                    v-model="newBoard.description"
                  />
                </div>
                <button
                  id="closeBoardModal"
                  type="submit"
                  class="btn btn-block btn-outline-success"
                >
                  Submit Board
                </button>
                <button
                  type="button"
                  class="btn btn-block btn-outline-danger"
                  data-dismiss="modal"
                  @click="clearBoardCreate()"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row justify-content-center">
        <div
          class="bg-light rounded text-success m-2 p-2 col-3 hover pointer"
          @click="setActiveBoard(board.id)"
          v-for="board in boards"
          :key="board.id"
        >
          <h3>{{ board.title }}</h3>
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
    $("#boardModal").on("hidden.bs.modal", () => {
      this.clearBoardCreate();
    });
    $("#closeBoardModal").on("click", () => {
      $("#boardModal").modal("hide");
    });
  },
  data() {
    return {
      newBoard: {
        title: "",
        description: "",
      },
    };
  },
  computed: {
    boards() {
      return this.$store.state.boards;
    },
  },
  methods: {
    addBoard() {
      this.$store.dispatch("addBoard", this.newBoard);
      this.newBoard = { title: "", description: "" };
    },
    setActiveBoard(boardId) {
      this.$store.dispatch("setActiveBoard", boardId);
      this.$router.push({
        name: "board",
        params: { boardId: boardId },
      });
    },
    clearBoardCreate() {
      this.newBoard = {};
    },
  },
};
</script>
<style>
.hover {
  transition: all 0.3s ease;
}
.hover:hover {
  box-shadow: 3px 10px #b3f2dd77 !important;
  transform: translateY(-3px);
}
.pointer {
  cursor: pointer;
}
</style>