// Event Listener
document.addEventListener("DOMContentLoaded", () => {
// 1. Grab the form and assign to const

const form = document.getElementById ('create-task-form')
//document.querySelector('#create-task-form');
//document.querySelector('form');

//add event listeners - take 1. the even 2. a callback function to run when
// is triggered

form.addEventListener('submit', function(e) {
//code
e.preventDefault();
//get the value

// let newTaskName = 'new-task-description'
let val = e.target ['new-task-description'].value;

// Put things in the DOM
// 1. Create Element
// 2. Put something in the element we create
// 3. Append the element to something that already exist.
  //1. Get the element that already exists
  //2. apppend new node to said element

let newTaskNode = document.createElement('li');
newTaskNode.innerText = val;
//console.log(newTaskNode);
let taskList = document.querySelector('#tasks')
//conssole.log(taskList)
let tasksList = document.querySelector('#tasks');
taskList.append(newTaskNode)

let editBox = document.createElement('button');
editBox.textContent = 'Edit';
editBox.classList.add('edit')
newTaskNode.append(editBox)
editBox.addEventListener ('click', (e) => {
  let taskId = document.getElementById (e.target.id)
  editBox('edit');
  
})

form.reset();
// Create Delete Button
// const deleteBtn = document.createElement('button');
let deleteNode = document.createElement('button')
deleteNode.textContent = 'delete';
newTaskNode.append(deleteNode);

//     // Append Text Node to Delete Button
//     deleteBtn.appendChild(document.createTextNode('X'));
deleteNode.addEventListener('click', function(e) {

  //actual removing of list element
  tasksList.removeChild(newTaskNode);
  // newTaskNode.remove();

        
        
      })
    }
  );
  }
)