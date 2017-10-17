import appDispatcher from '../dispatcher/index.js';
import {EventEmitter} from 'events';

class TodoStore extends EventEmitter{
    constructor(){
        super();
        this.items = [];
    }

    getItems = ()=>{
        return this.items;
    }

    todoStoreListener = (actionObj)=>{

        switch(actionObj.actionType){
            case 'ADD_ITEM' : {
                this.items = [...this.items,{itemId : this.items.length, item : actionObj.item,status:false}];
                this.emit('itemsChanged');
                break;
            }

            case 'CHANGEITEM_STATUS' : {
                this.items = this.items.map((item)=>{
                    if(item.itemId !== actionObj.itemId){
                        return item;
                    }

                    return {
                        ...item,
                        status : !item.status
                    };
                });
                this.emit('itemsChanged');
                break;
            }

            case 'REMOVE_ITEM' : {
                this.items = this.items.filter((item)=>item.itemId!==actionObj.itemId);
                this.emit('itemsChanged');
                break;
            }
        }
    }
}

let todoStore = new TodoStore();
appDispatcher.register(todoStore.todoStoreListener);

export default todoStore;
