
enum ActionType {
    ADD_TODO = "ADD_TODO",
    DELETE_TODO = "DELETE_TODO"
}

interface Action {
    type: ActionType;
    text: string;
}

const todoReducer = (state= [], action: Action) => {
    switch(action.type){
        case ActionType.ADD_TODO:
            return [...state, action.text];
        default:
            return state;
    }
}

export default todoReducer;
