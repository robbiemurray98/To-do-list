import { deleteToDo } from "./TodoManager";
import { format } from "date-fns";

let idContainerNum = 0;
const addIdContainer = () => {
    return idContainerNum++;
}

let idButtonNum = 0;
const addIdButton = () => {
    return idButtonNum++;
}


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
    }2
}


const createToDo = (object) => {
    const toDoItem = document.createElement('div');
    toDoItem.id = addIdContainer();

    const initialKeys = ['title', 'dueDate'];
    Object.keys(object)
        .filter(key => initialKeys.includes(key))
        .forEach(key => {
            const p = document.createElement('p');
            // if(key === 'dueDate'){

            // }
            p.textContent = object[key];
            toDoItem.appendChild(p);
        });

    

    const expandButton = document.createElement('button');
    expandButton.textContent = '>>>';
    expandButton.classList.add('expand-to-do-button');
    toDoItem.appendChild(expandButton);

    expandButton.addEventListener('click', () => {
        expandButton.remove();
        const expandedKeys = ['desc', 'priority', 'notes'];
        Object.keys(object)
            .filter(key => expandedKeys.includes(key))
            .forEach(key => {
                const p = document.createElement('p');
                p.textContent = object[key];
                // toDoItem.appendChild(p);
                deleteButton.insertAdjacentElement('beforebegin', p)
            })
    });

    const deleteButton = document.createElement('button');
    
    deleteButton.textContent = 'X';
    deleteButton.classList.add = 'delete-button';
    deleteButton.id = addIdButton();
    toDoItem.appendChild(deleteButton);


    deleteButton.addEventListener('click', () => {
        const parentElement = deleteButton.parentElement;
        deleteToDo(parentElement.id);
        parentElement.remove();
    
    });


    return toDoItem

}



   
    





export const renderToDo = (object) => {
    const toDoList = document.querySelector('#to-do-list');

    const newElement = createToDo(object);

    toDoList.appendChild(newElement);
}

export const createProject = (input) => {
    const inputValue = input.value;
    const projectList = document.querySelector('#project-list');
    const listItem = document.createElement('li');
    listItem.textContent = inputValue;
    projectList.appendChild(listItem);
}

export const displayProject = (input) => {
    const inputValue = input.value;
    const header = document.querySelector('#header');
    header.textContent = inputValue;
    const toDoList = document.querySelector('#to-do-list');
    toDoList.textContent = '';
}



// create a function that turns a js object into an html element
// add priority date and complete button
// create function which renders the a new html element(calling the previous function) and adds in to the dom