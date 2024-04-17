// Retrieve tasks from local storage and display them in the left pane
window.onload = function() {
    const taskList = document.getElementById('task-list');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    taskList.innerHTML = tasks.map(task => `<li>${task}</li>`).join('');
  }
  
  // Add a new task to local storage and the left pane when Enter key is pressed
  document.getElementById('task-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      const task = e.target.value;
      const taskList = document.getElementById('task-list');
      const li = document.createElement('li');
      li.textContent = task;
      taskList.appendChild(li);
      e.target.value = '';
  
      // Save task to local storage
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  });
  
  // Mark task as completed when checkbox is clicked
  document.getElementById('task-list').addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('completed');
    }
  });
  
  // Delete task when cross icon is clicked
  document.getElementById('task-list').addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
      e.target.remove();
      const tasks = Array.from(document.querySelectorAll('#task-list li')).map(li => li.textContent);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  });
  