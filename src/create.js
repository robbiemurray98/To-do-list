


export const createToDo = function(){
    class toDo {
    constructor(title, desc, dueDate, priority, notes){
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }
}

const firstItem = new toDo('clean', 'whole house', 'sunday', 1, 'get rid of norms hair!')
console.log(firstItem);

}