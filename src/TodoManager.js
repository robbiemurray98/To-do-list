import { toDo } from "./Todo";
import { createDate, setStyles, checkDateFormat } from "./DOMhandler";
import { project } from "./project";



export const loadToDos = () => {
    const savedToDosJSON = localStorage.getItem('myToDos') || '[]';
    return JSON.parse(savedToDosJSON);
}

const saveToDos = (toDoList) => {
    const todosJSON = JSON.stringify(toDoList);

    localStorage.setItem('myToDos', todosJSON);

}   


export const loadProjects = () => {
    const savedProjects = localStorage.getItem('myProjects') || '[]';
    return JSON.parse(savedProjects);
}


const saveProject = (project) => {
    const projectsJSON = JSON.stringify(project);
    localStorage.setItem('myProjects', projectsJSON)
}


export const handleAddProject = () => {
    const projectInput = document.querySelector('#new-project-input');
    const projectValue = projectInput.value;
    const newProject = new project(projectValue);
    const projects = loadProjects();
    projects.push(newProject);
    saveProject(projects);
}


export const handleAddTodo = () => {
    const title = document.querySelector('#title');
    const desc = document.querySelector('#desc');
    const dueDate = document.querySelector('#due-date');
    const priority = document.querySelector('#priority');
    const notes = document.querySelector('#note');
    const project = document.querySelector('#header');

    const titleText = title.value;
    const descText = desc.value;
    const dueDateText = dueDate.value;
    const priorityText = priority.value;
    const notesText = notes.value;
    const projectText = project.textContent;


    if(titleText.trim() === '' || descText.trim() === ''
        || dueDateText.trim() === '' || priorityText.trim() === ''){
            return;
    }

    if(checkDateFormat(dueDateText) === false){
            return
        }
    
    const dueDateInitial = createDate(dueDateText);

    const newToDo = new toDo(titleText, descText, dueDateInitial, priorityText, notesText, projectText)
    newToDo.id = crypto.randomUUID();

    const todos = loadToDos();
    todos.push(newToDo);
    saveToDos(todos);

    setStyles();

    title.value = '';
    desc.value = '';
    dueDate.value = '';
    priority.value = '';
    notes.value = '';
}


export const deleteToDo = (idToDelete) => {

    const todos = loadToDos();

    const newToDos = todos.filter(todo => todo.id !== idToDelete);

    saveToDos(newToDos);

    setStyles();

}


export const deleteProject = (projectName) => {
    const projects = loadProjects();
    const todos = loadToDos();

    const newProjects = projects.filter(project => project.projectInput !== projectName);

    const newToDos = todos.filter(todo => todo.project !== projectName);

    saveProject(newProjects);

    saveToDos(newToDos);

    setStyles();
}

