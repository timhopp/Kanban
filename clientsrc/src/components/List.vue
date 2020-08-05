<template>
  <div class="List">
    <div class="bg-dark text-white border rounded">
      <div>hello{{list.title}}</div>
      <form @submit.prevent="addTask(list.id)">
      <div  class="form-group">
        <label for="exampleInputEmail1">Add Task</label>
        <input
          v-model="newTask.title"
          type="text"
          class="form-control"
          id="createtask"
          placeholder="Enter Task"
        />
      </div>
      <Button type="submit" class="btn btn-block btn-warning">Add</Button>
    </form>
    </div>
  </div>
</template>


<script>
export default {
  name: "List",
  props: ["list"],
  data() {
    return {
      newTask: {
      },
    };
  },
  computed: {},
  methods: {
    addTask(currentListId){
      // let currentList = this.$store.state.lists.find(list => list.id == currentListId)
      this.$store.dispatch('addTask', {
        title: this.newTask.title,
        listId: currentListId,
      })
      console.log('sent talks', this.title, this.listId)
    }

  },
  components: {},
};
</script>


<style scoped>
</style>