import axios from 'axios';

(function () {
  let todos = [];
  let status = 'all';

  const inputTodo = document.getElementById('input-todo');
  const todoList = document.getElementById('todo-list');

  // V2
  // filtering
  const filterTodosByStatus = function () {
    return todos.filter(({ completed }) => {
      switch (status) {
        case 'active':
          return !completed; // completed === false
        case 'completed':
          return completed; // completed === true
        default:
          return true; // all
      }
    });
  };

  const countCompletedTodos = function () {
    return todos.filter(todo => todo.completed).length;
  };

  const countLeftTodos = function () {
    return todos.filter(todo => !todo.completed).length;
  };

  const renderTodos = function () {
    let html = '';

    const _todos = filterTodosByStatus();

    _todos.forEach(({ id, content, completed }) => {
      const checked = completed ? 'checked' : '';
      html += `<li class="list-group-item">
        <div class="hover-anchor">
          <a class="hover-action text-muted">
            <span class="glyphicon glyphicon-remove-circle pull-right" data-id="${id}"></span>
          </a>
          <label class="i-checks" for="${id}">
            <input type="checkbox" id="${id}" ${checked}><i></i>
            <span>${content}</span>
          </label>
        </div>
      </li>`;
    });

    todoList.innerHTML = html;

    document.getElementById('completedTodos').innerHTML = countCompletedTodos();
    document.getElementById('activeTodos').innerHTML = countLeftTodos();
  };

  const generateTodoId = function () {
    return todos.length ? Math.max(...todos.map(({ id }) => id)) + 1 : 1;
  };


  const TodoGet = function () { // done
    axios.get('/todos')
      .then(({ data }) => {
        todos = data;
        renderTodos();
        console.log('[GET] \n', todos);
      })
      .catch(err => console.log(err.response));
  };


  // POST
  const TodoPost = function (payload) { // done
    axios.post('/todos', payload) // payload: { id, content, completed }
      .then(() => {
        TodoGet();
        console.log('axios.post', payload);
      })
      .catch(err => console.log('[POST] \n', err.response));
  };

  // PATCH
  const TodoPatch = function (id, payload) {
    axios.patch(`/todos/id/${id}`, payload) // payload: { completed }
      .then(({ data }) => {
        TodoGet();
        console.log('TodoPath: ', id, payload);
        console.log(data);
      })
      .catch(err => console.log(err));
  };

  // PATCH ALL
  const TodoPatchAll = function (payload) { // done
    axios.patch('/todos', payload) // payload: { completed }
      .then(() => {
        TodoGet();
      })
      .catch(err => console.log('[PATH ALL] \n', err.response));
  };

  // DELETE
  const TodoDelete = function (id) { // done
    axios.delete(`/todos/id/${id}`)
      .then(() => {
        TodoGet();
      })
      .catch(err => console.log('[DELETE] \n', err.response));
  };

  // DELETE Completed All
  const TodoCompleteAll = function () { // done
    axios.delete('/todos/completed')
      .then(({ data }) => {
        TodoGet();
        console.log(data);
      })
      .catch(err => console.log('[DELETE ALL] \n', err.response));
  };


  const addTodo = function (content) {
    const todo = { id: generateTodoId(), content, completed: false };
    todos = [todo, ...todos];
    TodoPost(todo);
    console.log('[ADD]\n', todo);
  };

  const removeTodo = function (id) {
    todos = todos.filter(todo => todo.id !== +id);
    TodoDelete(id);
    TodoGet();
    console.log('[REMOVE]\n', todos);
  };

  const toggleTodoComplete = function (id) {
    let toggleItem = 'toggle item not yet';

    todos = todos.map(function (todo) { 
      return todo.id === +id ? toggleItem = Object.assign({}, todo, { completed: !todo.completed }) : todo 
    });
    TodoPatch(toggleItem.id, { completed: toggleItem.completed });
    console.log('[TOGGLE-COMP]\n', todos);
  };

  const toggleTodoAllComplete = function (chkStatus) {
    todos = todos.map(todo => Object.assign({}, todo, { completed: chkStatus }));
    TodoPatchAll({ completed: chkStatus });
    console.log('[ALL-COMP]\n', todos);
  };

  const removeCompletedTodo = function () {
    todos = todos.filter(todo => !todo.completed);
    TodoCompleteAll();
    renderTodos();
    console.log('[REMOVE-COMP]\n', todos);
  };

  // load 이벤트는 모든 리소스(image, script, css 등)의 로드가 완료하면 발생한다.
  window.addEventListener('load', TodoGet());

  inputTodo.addEventListener('keyup', e => {
    if (e.keyCode !== 13 || !inputTodo.value) return;
    addTodo(inputTodo.value);
    inputTodo.value = '';
  });

  todoList.addEventListener('change', e => toggleTodoComplete(e.target.id));

  todoList.addEventListener('click', e => {
    if (!e.target || e.target.nodeName !== 'SPAN' || e.target.parentNode.nodeName === 'LABEL') return;
    removeTodo(e.target.dataset.id);
  });

  // V2
  // this를 사용하므로 arrow function을 사용 불가
  document.querySelector('.nav').addEventListener('click', function (e) {
    if (!e.target || e.target.nodeName !== 'A') return;

    // 모든 .nav > li 요소에서 active 클래스 제거
    [...this.childNodes].forEach(nav => {
      // Skip text node
      if (nav.nodeName === 'LI') {
        nav.classList.remove('active');
      }
    });

    // 클릭된 a 요소의 부모 요소(.nav > li)에 active 클래스 추가
    const selectedNav = e.target.parentNode;
    selectedNav.classList.add('active');

    status = selectedNav.id;
    renderTodos();
  });

  document.getElementById('chk-allComplete').addEventListener('change', e => {
    toggleTodoAllComplete(e.target.checked);
  });

  // 완료된 todo를 일괄 제거
  document.getElementById('btn-removeCompletedTodos').addEventListener('click', () => {
    removeCompletedTodo();
  });
}(axios));
