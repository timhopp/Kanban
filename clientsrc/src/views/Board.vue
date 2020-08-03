<template>
  <div class="board">
    <h1>{{board.title}}</h1>
    <form>
  <div @submit.prevent="addList" class="form-group">
    <label for="exampleInputEmail1">Create A List</label>
    <input v-model="newList.title" type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter List Name Here">
  </div>
   <Button type="submit" class="btn btn-block btn-warning">Submit List</Button>
  </form>
  
  </div>
</template>

<script>
export default {
  name: "board",
  props: ["boardId"],
  data(){
    return{
      newList: {},
    };
  },
  mounted(){
  },
  computed: {
    board() {
      return this.$store.state.activeBoard;
    }
  },
  methods: {
    addList(){
      this.$store.dispatch("addList", this.newList)
    }
  }
 
};
</script>
