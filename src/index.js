import "./style.css";
// import { createToDo } from "./Todo";
import { dom, renderToDo } from "./DOMhandler";
import { createProject } from "./DOMhandler";
import { displayProject } from "./DOMhandler";
import { addToDo } from "./TodoManager";
import { createDate } from "./DOMhandler";
import { checkDateFormat } from "./DOMhandler";



const projectModal = document.querySelector('#project-modal');
const addProjectButton = document.querySelector('#project-button');
const closeModal = document.querySelector('.close-button');

addProjectButton.addEventListener('click', () =>{
    projectModal.showModal();
});

closeModal.addEventListener('click', () => {
    projectModal.close();
});

window.addEventListener('click', () => {
    if(event.target == projectModal) {
        projectModal.close();
    }
});


const addProject = document.querySelector('#create-project');

addProject.addEventListener('click', () => {
    const newProjectInput = document.querySelector('#new-project-input');
    createProject(newProjectInput);
    displayProject(newProjectInput);
    newProjectInput.value = '';
    projectModal.close();
});


const taskModal = document.querySelector('#task-modal');

const taskButton = document.querySelector('#task-button');
const closeTask = document.querySelector('.close-task');

taskButton.addEventListener('click', () => {
    taskModal.showModal();
})

closeTask.addEventListener('click', () => {
    taskModal.close();
})

window.addEventListener('click', () => {
    if(event.target == taskModal) {
        taskModal.close();
    }
});


const showTask = document.querySelector('#show-task');

showTask.addEventListener('click', () => {
    const title = document.querySelector('#title');
    const desc = document.querySelector('#desc');
    const dueDate = document.querySelector('#due-date');
    const priority = document.querySelector('#priority');
    const notes = document.querySelector('#note')

    const titleValue = title.value;
    const descValue = desc.value;
    const dueDateValue = dueDate.value;
    const priorityValue = priority.value;
    const notesValue = notes.value;


    if(checkDateFormat(dueDateValue) === false){
        return
    }

    const dueDateInitial = createDate(dueDateValue);


    const newToDo = addToDo(titleValue, descValue, dueDateInitial, priorityValue, notesValue);
    renderToDo(newToDo);
});









// adds event listener




// if notes class name is equal to 


