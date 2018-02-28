(function() {
  var todos = [];

  var inputTodo = document.getElementById('input-todo');
  var todoList = document.getElementById('todo-list');

  var btnAll = document.getElementById('all');
  var btnActive = document.getElementById('active');
  var btnCompleted = document.getElementById('completed');

  var markAllComplete = document.querySelector('.i-checks > span');
  var chkAllComplete = document.getElementById('chk-allComplete');
  
  var btnClearCompleted = document.getElementById('btn-removeCompletedTodos');
  // var markAllCompleted = document.getElementById('i-checks');

  

  var renderTodos = function(arr = todos) {
    var html = '';

    arr.forEach(function(todo) {
      var checked = todo.completed ? 'checked' : '';

      html += '<li class="list-group-item"> \
        <div class="hover-anchor"> \
          <a class="hover-action text-muted"> \
            <span class="glyphicon glyphicon-remove-circle pull-right" data-id="' + todo.id + '"></span> \
          </a> \
          <label class="i-checks" for="' + todo.id + '"> \
            <input type="checkbox" id="' + todo.id + '"' + checked + '><i></i> \
            <span>' + todo.content + '</span> \
          </label> \
        </div> \
      </li>';
    });

    todoList.innerHTML = html;

    var spanTextNode = document.getElementById('completedTodos').firstChild;
    spanTextNode.nodeValue = arrCompleted().length;

    var strongTextNode = document.getElementById('activeTodos').firstChild;
    strongTextNode.nodeValue = arrActive().length;

    // btntoggle(status)
    // markList()
  };

  var generateTodoId = function() {
    return todos.length ? Math.max.apply(null, todos.map(function(todo) {
      return todo.id;
    })) + 1 : 1;
  };

  var getTodos = function() {
    // 서버로부터 todos를 취득(잠정 처리)
    todos = [
      { id: 3, content: 'HTML', completed: false },
      { id: 2, content: 'CSS', completed: true },
      { id: 1, content: 'Javascript', completed: false }
    ];
    renderTodos();
    console.log('[GET]\n', todos);
  };

  var addTodo = function(content) {
    todos = [{ id: generateTodoId(), content: content, completed: false }].concat(todos);
    // todos = [{ id: generateTodoId(), content, completed: false }, ...todos];
    renderTodos();
    console.log('[ADD]\n', todos);
  };

  var removeTodo = function(id) {
    todos = todos.filter(function(todo) {
      return todo.id != id;
    });
    renderTodos();
    console.log('[REMOVE]\n', todos);
  };

  // var toggleTodoComplete = function(id) {
  //   todos = todos.map(function(todo) {
  //     return todo.id == id ? Object.assign({}, todo, { completed: !todo.completed }) : todo;
  //   });
  //   renderTodos();
  //   console.log('[TOGGLE-COMP]\n', todos);
  // };

// 완료 리스트
var arrCompleted = function(){
  return todos.filter(function (item, index, array) {
    return item.completed;
  }); 
}

// 미완료 리스트
var arrActive = function () {
  return todos.filter(function (item, index, array) {
    return !item.completed;
  }); 
}

// 선택 리스트
var markList = function () {
  var checks = document.querySelectorAll(".i-checks > input[type=checkbox]")
  
  function checkList() {
    var checkList = {checked:[], unchecked:[]}
    Array.prototype.forEach.call(checks, function (item) {
      if (item.checked){
        checkList.checked.concat([item.id])
      }else{
        checkList.unchecked.concat([item.id])
      }    
    });
    console.log('mark list: ',checksTrue);
    return checkList
  }
 
}

// 버튼 선택
var btnSelect = function (key){
  console.log('start btnSelect')
  
switch (key) {
  case 'active':    
  btnActive.className = 'active';
  btnCompleted.className = '';
  btnAll.className = '';
    break;
  case 'completed':
    btnActive.className = '';
    btnCompleted.className = 'active';
    btnAll.className = '';
    break;
  default:
    btnActive.className = '';
    btnCompleted.className = '';
    btnAll.className = 'active';
    break;
  }
}

var status = function (now) {

}


  // === 이벤트 리스너 ===
  // load 이벤트는 모든 리소스(image, script, css 등)의 로드가 완료하면 발생한다.
  window.addEventListener('load', function() {
    getTodos();
  });

  // 할일 입력
  inputTodo.addEventListener('keyup', function(e) {
    if (e.keyCode !== 13 || !inputTodo.value) return;
    addTodo(inputTodo.value);
    inputTodo.value = '';
  });
  
  // todo 체크박스
  todoList.addEventListener('change', function(e) {
    // toggleTodoComplete(e.target.id);
  });

  // todo 삭제 클릭
  todoList.addEventListener('click', function(e) {
    var target = e.target;
    if (!target || target.nodeName !== 'SPAN' || target.parentNode.nodeName === 'LABEL') return;
    removeTodo(target.dataset.id);
  });

  // 모두 보기
  btnAll.addEventListener('click', function(e) {
    renderTodos()    
    btnSelect()
  });

  // 미완료 보기
  btnActive.addEventListener('click', function(e) {    
    renderTodos(arrActive()) 
    btnSelect('active')
  });

  // 완료 보기
  btnCompleted.addEventListener('click', function(e) {     
    renderTodos(arrCompleted())
    btnSelect('completed')
  });

  // 완료 목록 삭제
  btnClearCompleted.addEventListener('click', function(e) {
    arrCompleted().map(function (item) {
      removeTodo(item.id);
    });    
  });


  //모두 완료|미완료
  chkAllComplete.addEventListener('click', function(e) {    
    // var check = chkAllComplete.checked 
    // var arr = todos.map(function (item) { 
    //   item.completed = check;
    //   return item
    // });
    // console.log('check: ', check)
    // console.log('check arr: ', arr)
    // renderTodos(arr)    
    markList()
  });

  markAllComplete.addEventListener('click', function(e) {

  });


}());