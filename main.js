var STORAGE_KEY = 'todo-vuejs-demo'
var todoStorage = {


  fetch: function(){
    var todos = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
      )
    todos.forEach(function(todo, index){
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save: function(todos){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}



const app = new Vue({
  el: '#app',
  data: {
    todos:[],
    options:[
    {value:-1 ,label:'すべて'},
    {value:0 ,label:'支出'},
    {value:1 ,label:'収入'},
    {value:2 ,label:'日付選択'}
    ],
    select_calender: '',

    current: -1
  },
  methods: {
    doAdd: function(event, value){
      var comment = this.$refs.comment
      var amount = this.$refs.amount
      var item = this.$refs.item
      var detail = this.$refs.detail
      var calender = this.$refs.calender
      if(!comment.value.length){
        return
      }else if(item.value == 'none'){
        alert("項目を選択してください！")
        return
      }
      this.todos.push({
        id: todoStorage.uid++,
        comment: comment.value,
        state: 0,
        amount: amount.value,
        item: item.value,
        detail: detail.value,
        calender: calender.value

      })
console.log("amount", amount);
      comment.value = ''
      amount.value = 0


    },
    doChangeState: function(item){
      item.state = item.state ? 0:1
    },
    doRemove: function(item){
      var index = this.todos.indexOf(item)
      this.todos.splice(index,1)
    },
    editTodo: function(id){
      var newText = window.prompt('以下の内容で更新します。');
      if(newText === ''){
        alert('入力欄が空欄です！');
      }else if(newText !== null){
        this.edit(id, newText);
      }
    },
    edit: function(id, comment){
      var editIndex = '';
      this.todos.some(function(value,index){
        if(value.id === id){
          editIndex = index;
        }
      });
      this.todos[editIndex].comment = comment;
    }
  },
  
  watch:{
    todos: {
      handler: function(todos){
        todoStorage.save(todos)
      },
      deep: true
    }
  },
  
  created(){
    this.todos = todoStorage.fetch()
  },

  computed:{
    computedTodos: function(){
      return this.todos.filter(function(el){
        // return this.current < 0 ? true : this.current === el.state
        // console.log("select_calender", this.select_calender);
        // console.log("el.calender", el.calender);
        // console.log("this" , this)
        if(this.current < 0){
          return true
        }else if(this.current === 0 || this.current === 1){
          return this.current === el.state
        }else if(this.current === 2){
          return this.select_calender === el.calender
        }
      }, this)
    },
    labels(){
      return this.options.reduce(function(a,b){
        return Object.assign(a, { [b.value]: b.label })
      },{})
    }
  }
})


