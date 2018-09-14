import { CreateStateLocal, getStateLocal, updateStateLocal } from "../Common/common"

const todos = (state = getStateLocal(), action) => {
    switch(action.type){
        case 'ADD_TODO':
            CreateStateLocal(state, action);
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            let tmpState = state.map(todo => 
                (todo.id === action.id) ? {...todo, completed : !todo.completed} : todo
            );
            updateStateLocal(tmpState);
            return tmpState;
        case 'DELETE_TODO':
            updateStateLocal(state.filter(todo => todo.id !== action.id));
            return state.filter(todo => todo.id !== action.id);

        default:
            return state
    }
}

export default todos