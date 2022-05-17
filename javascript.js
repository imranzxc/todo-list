function createTodoList() {
  const todoListObject = {
    items: [
      {
        text: "Завершить текущий челлендж",
        completed: false,
      },
      {
        text: "Отдохнуть во время перерыва",
        completed: false,
      },
      {
        text: "Помочь напарнику понять код",
        completed: false,
      },
      {
        text: "Выиграть в мафию",
        completed: true,
      },
    ],

    printAll: function () {
      for (let i = 0; i < this.items.length; i++) {
        this.print(this.items[i].text);
      }
    },

    add: function (a) {
      this.items = [...this.items, { text: a, completed: false }];
      console.log(this.printAll());
    },

    remove: function (index) {
      this.items.splice(index, 1);
      console.log(this.printAll());
    },

    print: function (index) {
      let done = `[x]${this.items[index].text}`;
      let notdone = `[ ]${this.items[index].text}`;
      if (this.items[index].completed) {
        console.log(done);
      }
      if (!this.items[index].completed) {
        console.log(notdone);
      }
    },
    complete: function (i) {
      this.items[i].completed = true;
      console.log(this.items);
    },
  };

  return todoListObject;
}

const todoList = createTodoList();

