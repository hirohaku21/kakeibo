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
    {value:0 ,label:'作業中'},
    {value:1 ,label:'完了'}
    ],
    current: -1
  },
  methods: {
    doAdd: function(event, value){
      var comment = this.$refs.comment
      if(!comment.value.length){
        return
      }
      this.todos.push({
        id: todoStorage.uid++,
        comment: comment.value,
        state: 0
      })
      comment.value = ''
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
      }else if(newText !== ''){
        this.edit(id, newText);
      }
    },
    edit: function(id, text){
      var editIndex = '';
      this.todos.some(function(value,index){
        if(value.id === id){
          editIndex = index;
        }
      });
      this.list[editIndex].text = text;
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
        console.log("hogehoge");
        return this.current < 0 ? true : this.current === el.state
      }, this)
    },
    labels(){
      return this.options.reduce(function(a,b){
        return Object.assign(a, { [b.value]: b.label })
      },{})
    }
  }
})


