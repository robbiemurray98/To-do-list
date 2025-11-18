import "./style.css";
import { createProject } from "./DOMhandler";
import { displayProject } from "./DOMhandler";
import { handleAddTodo } from "./TodoManager";
import { setStyles } from "./DOMhandler";
import { deleteToDo } from "./TodoManager";
import { deleteProject } from "./TodoManager";

document.addEventListener('DOMContentLoaded', () => {
    const toDoContainer = document.querySelector('#to-do-list');

    toDoContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
            deleteToDo(event.target.dataset.id);
        }
    })
    setStyles();
})

const projectList = document.querySelector('#project-list');
projectList.addEventListener('click', (event) => {
    if(event.target.classList.contains('project-select')){
        // populate project display
        // event.target.value
        if(event.target.textContent === 'Inbox'){
            header.textContent = 'To Do';
        } else {
            const header = document.querySelector('#header');
            header.textContent = event.target.textContent;
        }
        
        setStyles();
    }
})


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
    handleAddTodo();
    setStyles();
})


// add minus sign to delete project which opens modal asking if you're sure you want to delete
// cancel or delete button
// if clicked delete all todos that are of that project

const deleteProjectModal = document.querySelector('#delete-project-modal');

const confirmDeleteProjectButton = document.querySelector('#confirm-delete-project');
const cancelDeleteProjectButton = document.querySelector('#cancel-delete-project');


projectList.addEventListener('click', (event) => {
    if(event.target.classList.contains('delete-project-button')){
        const project = event.target.previousElementSibling;
        const projectName = project.textContent;
        deleteProjectModal.showModal();

        cancelDeleteProjectButton.addEventListener('click', () => {
            deleteProjectModal.close();
        })

        confirmDeleteProjectButton.addEventListener('click', () => {
            deleteProject(projectName);
            deleteProjectModal.close();
        })


        
    }
})





