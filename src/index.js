document.addEventListener("DOMContentLoaded", () => {
  // your code here
  console.log("DOM is now loaded.")
  
  const submitEvent = document.getElementById('create-task-form');
  submitEvent.addEventListener('submit', e => {
    e.preventDefault()

    const tasks = document.getElementById('tasks');

    const newTask = document.createElement('li');
    newTask.textContent = document.getElementById('new-task-description').value;
    tasks.appendChild(newTask);
    console.log(newTask.textContent);
    
    const btn = document.createElement('button');
    btn.textContent = 'X'
    btn.addEventListener('click', () => newTask.remove());
    newTask.append(btn);
  })
})