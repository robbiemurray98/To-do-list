import { handleAddProject, loadProjects, loadToDos } from "./TodoManager";
import { format } from "date-fns";
import { minusIcon, deleteIcon, expandIcon } from "./svg";


export const createDate = (dueDate) => {
    const month = dueDate.substring(0, 2);
    const day = dueDate.substring(3, 5);
    const year = dueDate.substring(6, 11);

    const monthNum = Number(month);

    const monthConverted = monthNum -1;

    const date = new Date(year, monthConverted, day);

    const formattedDate = format(date, "EEEE, MMMM do, yyyy");

    return formattedDate;
}

export const checkDateFormat = (dateInput) => {
    const pattern = /^\d{2}\/\d{2}\/\d{4}$/;

    if(!pattern.test(dateInput)){
        console.log('date format wrong');
        return false;
    }
}


export const createProject = (input) => {
    const inputValue = input.value;
    const projectList = document.querySelector('#project-list');
    const listItem = document.createElement('li');
    listItem.textContent = inputValue;
    projectList.appendChild(listItem);
    handleAddProject();
}

export const displayProject = (input) => {
    const inputValue = input.value;
    const header = document.querySelector('#header');
    header.textContent = inputValue;
    const toDoList = document.querySelector('#to-do-list');
    toDoList.textContent = '';
}

export const checkProjectValue = (newProjectName) => {
    const projects = loadProjects();

    // projects.forEach(project => {
    //     for(let key in project){
    //         if(project[key] === newProjectName){
    //             // console.log(project[key]);
    //             // console.log(newProjectName);
    //             // console.log('true')
    //             return true;
    //         }
    //     }
        
    // })

    return projects.some(project => {
        return Object.values(project).some(value => value === newProjectName);
    })
}

export const projectNameError = (projectName) => {
    const container = document.querySelector('#project-modal-container');
    const p = document.createElement('p');
    p.id = 'project-error'
    p.textContent = `A project named "${projectName}" already exists. Please choose a different name.`
    container.appendChild(p);
}

export const setStyles = () => {
    const projectElement = document.querySelector('#header');
    const projectName = projectElement.textContent;
    const todos = loadToDos();
    const toDoContainer = document.querySelector('#to-do-list');

    const projects = loadProjects();
    const projectList = document.querySelector('#project-list');
    projectList.innerHTML = '';

    const inbox = document.createElement('li');
    inbox.classList.add('project-list-item');
    inbox.textContent = 'Inbox';
    inbox.style.fontWeight = 'bold';
    projectList.appendChild(inbox);



    projects.forEach(project => {
        for (let key in project){
            if(project[key] !== 'To Do'){
            const listItemContainer = document.createElement('li');
            listItemContainer.classList.add('project-list-item');
            const listItem = document.createElement('p');
            const deleteProject = document.createElement('button');
            deleteProject.innerHTML = minusIcon;
            deleteProject.classList.add('delete-project-button');
            listItem.classList.add('project-select')
            const projectValue = project[key];
            listItem.textContent = projectValue;
            listItemContainer.appendChild(listItem);
            // deleteProject.appendChild(divInButton)
            listItemContainer.appendChild(deleteProject);
            projectList.appendChild(listItemContainer);
            }
        

        }

        
    })

    toDoContainer.innerHTML = '';

    const toDoList = document.querySelector('#to-do-list');
    const titleDiv = document.createElement('div');
    titleDiv.id = 'title-container';
    const titleP = document.createElement('p');
    const dueDateP = document.createElement('p');
    const titleSpan = document.createElement('span');
    const dueDateSpan = document.createElement('span');
    titleSpan.textContent = 'Title';
    dueDateSpan.textContent = 'Due Date';
    titleP.appendChild(titleSpan);
    dueDateP.appendChild(dueDateSpan)
    titleDiv.appendChild(titleP);
    titleDiv.appendChild(dueDateP);
    toDoList.appendChild(titleDiv);

        todos.forEach(todo => {
        if(todo.project === projectName){
            const container = document.createElement('div');
            container.classList.add('todo-item');

       
            const initialKeys = ['title', 'dueDate'];
            // Object.keys(todo)
            //     .filter(key => initialKeys.includes(key))
                initialKeys.forEach(key => {
                    const value = todo[key];
                    if(todo.hasOwnProperty(key)){
                        const p = document.createElement('p');
                        p.textContent = value;
                        container.appendChild(p);
                    }
                })

            const expandButton = document.createElement('button');
            expandButton.innerHTML = expandIcon;
            expandButton.classList.add('expand-to-do-button');
            container.appendChild(expandButton);

            expandButton.addEventListener('click', () => {
                expandButton.remove();
                const expandedKeys = ['notes', 'desc', 'priority']
                // Object.keys(todo)
                //     .filter(key => expandedKeys.includes(key))
                    expandedKeys.forEach(key => {
                        const value = todo[key];
                        if(todo.hasOwnProperty(key)){
                            
                            const p = document.createElement('p');
                            p.textContent = value;
                            deleteButton.insertAdjacentElement('beforebegin', p)
                            // container.appendChild(p)
                        }
                    })
                    // const titleContainer = document.querySelector('#title-container');
                    const notesP = document.createElement('p');
                    const priorityP = document.createElement('p');
                    const descP = document.createElement('p');
                    
                    const notesSpan = document.createElement('span');
                    const prioritySpan = document.createElement('span');
                    const descSpan = document.createElement('span');

                    notesSpan.textContent = 'Notes';
                    prioritySpan.textContent = 'Priority';
                    descSpan.textContent = 'Description';

                    notesP.appendChild(notesSpan);
                    priorityP.appendChild(prioritySpan);
                    descP.appendChild(descSpan);

                    titleDiv.appendChild(notesP);
                    titleDiv.appendChild(descP);
                    titleDiv.appendChild(priorityP);
            })

            
            const deleteButton = document.createElement('button');
            deleteButton.innerHTML = deleteIcon;

            deleteButton.dataset.id = todo.id;
            deleteButton.classList.add('delete-btn');
            container.appendChild(deleteButton);

            toDoContainer.appendChild(container);
        }
        

    })

    

    
}
    


// click on inbox header becomes todo and all its todos are displayed


    
