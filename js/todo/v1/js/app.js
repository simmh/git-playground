var todos = [];
var inputTodo = document.querySelector('#input-todo');
var todoList = document.querySelector('#todo-list');
// todos 배열을 html로 변환한다.
function renderTodos() {
  if (!todos.length) {
    todoList.innerHTML = '';
    return;
  } // todos 가 0일땐 초기화 리턴

  var html = '';

  todos.forEach(function(todo) {
    var checked = todo.completed ? 'checked' : '';

    html += ' <li class="list-group-item">'
    html += '<div class="hover-anchor">'
    html += '<a class="hover-action text-muted">'
    html += '<span class="glyphicon glyphicon-remove-circle pull-right" data-id="' + todo.id + '"></span></a>'

    html += '<label class="i-checks" for="' + todo.id + '">';
    html += '<input type = "checkbox" id = "' + todo.id + '" ' + checked;
    html += '><i></i><span >';
    html += todo.content;

    html += '</span></label></div></li>'

    todoList.innerHTML = html;
  });
  console.log('[render var todos]: ')
  console.log(todos)
}
// 새롭게 추가될 새 todo의 id를 생성.
function generateID() {
  return todos.length ? Math.max.apply(null, todos.map(function(todo) {
    return todo.id
  })) + 1 : 1;
}

function addTodo(content) {
  todos = todos.concat({
    id: generateID(),
    content: content,
    completed: false
  });
  console.log('[add todo]', todos)
    // renderTodos();
}

// input 태그에 할일을 입력한 상태에서 엔터를 keyup하면 할일을 추가한다.
inputTodo.addEventListener('keyup', function(e) {
  var content = this.value;

  if (e.keyCode !== 13 || !content) return;

  addTodo(content);
  renderTodos();
  this.value = '';
});


// 1. li 요소를 클릭하면 todo.completed를 토글한다.
// 2. 삭제 버튼을 클릭하면 해당 todo를 제거한다.
todoList.addEventListener('click', function(e) {
  if (e.target && e.target.nodeName === 'LABEL') {
    console.log(e.target.getAttribute('for'))
    toggleCompletedById(e.target.getAttribute('for'));
    // li>div>label.for
    // toggleCompletedById(e.target.id);
  } else if (e.target && e.target.nodeName === 'SPAN') {
    removeTodoById(e.target.dataset.id);
    console.log('terget id: ' + e.target.dataset.id)
  }
  renderTodos();
});

// 인자로 주어진 id에 해당하는 todo의 completed를 반전한다
function toggleCompletedById(id) {
  todos = todos.map(function(todo) {
    return todo.id === +id ? Object.assign({}, todo, {
      completed: !todo.completed
    }) : todo;
  });
  console.log('[TOGGLE TODO] ', todos);
}

// 인자로 주어진 id에 해당하는 todo를 todos에서 제거한다.
function removeTodoById(id) {
  todos = todos.filter(function(todo) {
    return todo.id !== +id; //number !== str
  });
  // renderTodos();
  console.log('[REMOVE TODO] ', todos);
}

// 애플리케이션이 로드되면 서버로 부터 todos 데이터를 취득한다.(잠정 처리)
window.addEventListener('load', function() {
  todos = [{
    id: 1,
    content: 'HTML',
    completed: false
  }, {
    id: 2,
    content: 'CSS',
    completed: true
  }, {
    id: 3,
    content: 'Javascript',
    completed: false
  }];

  renderTodos();
});