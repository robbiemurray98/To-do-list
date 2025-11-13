import { toDo } from "./Todo";




const toDoArray = [];

let nextId = 0;
const addId = () => {
    return nextId++;
}

export const addToDo = function(title, desc, dueDate, priority, notes) {

    const newToDo = new toDo(title, desc, dueDate, priority, notes);

    newToDo.id = addId();
    console.log(nextId);

    toDoArray.push(newToDo);

    console.log(toDoArray);

    return newToDo;



}


export const deleteToDo = (indexToDelete) => {
    const index = toDoArray.findIndex(obj => obj.id == indexToDelete);

    if(index !== -1) {
        toDoArray.splice(index, 1);
    }

    console.log(`${index} <<`)

}


    

// add id to to-dos?
// add function that iterates through numbers?
// export const deleteToDo = (object) => {

// }

export const getToDoArray = () => toDoArray;


console.log(toDoArray);


// create array to hold toDo objects
// create function that creates a new todo object then pushes it into the array return 
// return a copy of the state of the array
// add other logical functions such as delete todo toggle complete
