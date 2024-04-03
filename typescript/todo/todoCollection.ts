import { TodoItem } from "./todo";
export class todoCollection{
    private nextid : number  =1 ; 
    constructor(public userName:string,public todoItem : TodoItem[]=[]){

    }
    
    addtodo(task:string):number{
        while(this.getToDoById(this.nextid)){
            this.nextid++;
        }
        this.todoItem.push(new TodoItem(this.nextid , task))
        return this.nextid;
    }
    getToDoById(id:number): TodoItem {
        return this.todoItem.find(item=>item.id===id);
    }
}