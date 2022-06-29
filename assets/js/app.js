const app = Vue.createApp({
  data() {
    return {
      todoList: [],
    };
  },
  methods: {
    addTodo(event) {
      if (event.target.value !== "") {
        this.todoList.push({
          id: new Date().getTime(),
          text: event.target.value,
          completed: false,
        });
      }

      event.target.value = "";
    },
    itemClicked(todo) {
      todo.completed = !todo.completed;
    },
    removeItem(todoItem) {
      this.todoList = this.todoList.filter((todo) => todo !== todoItem);
    },
  },
}).mount("#app");
