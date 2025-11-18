import { handleAddProject, loadProjects, loadToDos } from "./TodoManager";
import { format } from "date-fns";



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



export const setStyles = () => {
    const projectElement = document.querySelector('#header');
    const projectName = projectElement.textContent;
    const todos = loadToDos();
    const toDoContainer = document.querySelector('#to-do-list');

    const projects = loadProjects();
    const projectList = document.querySelector('#project-list');
    projectList.innerHTML = '';

    projects.forEach(project => {
        for (let key in project){
        const listItem = document.createElement('li');
        listItem.classList.add('project-select')
        const projectValue = project[key];
        listItem.textContent = projectValue;
        projectList.appendChild(listItem);

        }

        
    })

    toDoContainer.innerHTML = '';

        todos.forEach(todo => {
        if(todo.project === projectName){
            const container = document.createElement('div');
            container.classList.add('todo-item');

       
            const initialKeys = ['title', 'dueDate'];
            Object.keys(todo)
                .filter(key => initialKeys.includes(key))
                .forEach(key => {
                    const value = todo[key];
                    if(todo.hasOwnProperty(key)){
                        const p = document.createElement('p');
                        p.textContent = value;
                        container.appendChild(p);
                    }
                })

            const expandButton = document.createElement('button');
            expandButton.textContent = '>>>';
            expandButton.classList.add('expand-to-do-button');
            container.appendChild(expandButton);

            expandButton.addEventListener('click', () => {
                expandButton.remove();
                const expandedKeys = ['desc', 'priority', 'notes']
                Object.keys(todo)
                    .filter(key => expandedKeys.includes(key))
                    .forEach(key => {
                        const value = todo[key];
                        if(todo.hasOwnProperty(key)){
                            const p = document.createElement('p');
                            p.textContent = value;
                            deleteButton.insertAdjacentElement('beforebegin', p)
                        }
                    })
            })

            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'X';

            deleteButton.dataset.id = todo.id;
            deleteButton.classList.add('delete-btn');
            container.appendChild(deleteButton);

            toDoContainer.appendChild(container);
        }
        

    })

    

    
}
    



    
