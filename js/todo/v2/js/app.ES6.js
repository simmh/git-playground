(function () {
  let todos = [];

  const inputTodo = document.getElementById('input-todo');
  const todoList = document.getElementById('todo-list');

  const btnAll = document.getElementById('all');
  const btnActive = document.getElementById('active');
  const btnCompleted = document.getElementById('completed');

  const allComplete = document.querySelector('.i-checks');
  const chkAllComplete = document.getElementById('chk-allComplete');

  const btnClearCompleted = document.getElementById('btn-removeCompletedTodos');
  let STATUS = '';

  const renderTodos = function (arr) {
    let html = '';

    arr.forEach((todo) => {
      const checked = todo.completed ? 'checked' : '';

      html +=
        `<li class='list-group-item'>
        <div class='hover-anchor'>
          <a class='hover-action text-muted'>
            <span class='glyphicon glyphicon-remove-circle pull-right' data-id='${todo.id}'></span>
          </a>
          <label class='i-checks' for='${todo.id}'>
            <input type='checkbox' id='${todo.id}' ${checked} '><i></i>
            <span>${todo.content}</span>
          </label>
        </div>
      </li>`;
    });

    todoList.innerHTML = html;

    const spanTextNode = document.getElementById('completedTodos').firstChild;
    spanTextNode.nodeValue = arrCompleted().length;

    const strongTextNode = document.getElementById('activeTodos');
    strongTextNode.textContent = arrActive().length;
    // textnode.nodeValue || textnode.textContent || textnode.innerText
  };

  // 아이디 번호 생성
  const generateTodoId = function () {
    return todos.length ? Math.max.apply(null, todos.map(todo => todo.id)) + 1 : 1;
  };

  const getTodos = function () {
    // 서버로부터 todos를 취득(잠정 처리)
    todos = [
      { id: 3, content: 'HTML', completed: false },
      { id: 2, content: 'CSS', completed: true },
      { id: 1, content: 'Javascript', completed: false }
    ];

    console.log('[GET]\n', todos);
  };

  // todo 추가 
  const addTodo = function (content) {
    todos = [{ id: generateTodoId(), content, completed: false }].concat(todos);
    // todos = [{ id: generateTodoId(), content, completed: false }, ...todos];
    console.log('[ADD]\n', todos);
  };

  // todo 삭제 id
  const removeTodo = function (id) {
    todos = todos.filter(todo => todo.id !== +id);
    console.log('[REMOVE]\n', todos);
  };

  // const removeTodo = function (id) {
  //   todos = todos.filter(function (todo) {
  //     return todo.id != id;
  //   });
  //   console.log("[REMOVE]\n", todos);
  // };


  // 선택 완/미완
  const toggleTodoComplete = function (id) {
    todos = todos.map(todo => {
      return todo.id == id ? Object.assign({}, todo, { completed: !todo.completed }) : todo;
    });
    console.log('[TOGGLE-COMP]\n', todos);
  };


  const arrCompleted = function () {
    return todos.filter(item => item.completed);
  };

  const arrActive = function () {
    return todos.filter(item => !item.completed);
  };

  const selectStatus = function () {
    btnActive.className = '';
    btnCompleted.className = '';
    btnAll.className = '';

    switch (STATUS) {
      case 'active':
        renderTodos(arrActive())
        btnActive.className = 'active';
        break;
      case 'completed':
        renderTodos(arrCompleted())
        btnCompleted.className = 'active';
        break;
      default:
        renderTodos(todos)
        btnAll.className = 'active';
        break;
    }
  };

  // load 이벤트는 모든 리소스(image, script, css 등)의 로드가 완료하면 발생한다.
  window.addEventListener('load', () => {
    getTodos();
    selectStatus(STATUS);
  });

  inputTodo.addEventListener('keyup', (e) => {
    if (e.keyCode !== 13 || !inputTodo.value) return;
    addTodo(inputTodo.value);
    inputTodo.value = '';
    selectStatus(STATUS);
  });

  todoList.addEventListener('change', (e) => {
    toggleTodoComplete(e.target.id);
    selectStatus(STATUS);
  });

  todoList.addEventListener('click', (e) => {
    const target = e.target;
    if (!target || target.nodeName !== 'SPAN' || target.parentNode.nodeName === 'LABEL') return;
    removeTodo(target.dataset.id);
    selectStatus(STATUS);
  });

  // 모두 보기
  btnAll.addEventListener('click', () => {
    STATUS = '';
    selectStatus(STATUS);
  });

  // 미완료 보기
  btnActive.addEventListener('click', () => {
    STATUS = 'active';
    selectStatus(STATUS);
  });

  // 완료 보기
  btnCompleted.addEventListener('click', () => {
    STATUS = 'completed';
    selectStatus(STATUS);
  });

  // 완료 목록 삭제
  btnClearCompleted.addEventListener('click', () => {
    arrCompleted().map((item) => { return removeTodo(item.id); });
    selectStatus(STATUS);
  });

  // 모두 완료|미완료
  allComplete.addEventListener('click', () => {
    const check = chkAllComplete.checked;
    todos.map((item) => {
      item.completed = check;
      return item;
    });
    selectStatus(STATUS);
    console.log('[ALL-COMP]\n', todos);
  });

})();
