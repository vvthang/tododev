export const StateLocal = "mycontact";

export const CreateStateLocal = (state, action) => {
    let data = {
        todos : [
            ...state, 
            {
                id: action.id,
                text: action.text,
                completed: false
            }
        ]
    };
    localStorage.setItem(StateLocal, JSON.stringify(data));
}

export const getStateLocal = () => {
    if(!localStorage.getItem(StateLocal)){
        return [];
    }else{
        return JSON.parse(localStorage.getItem(StateLocal)).todos;
    }
}

export const updateStateLocal = (state) => {
    let data = {
        todos : state
    }
    localStorage.setItem(StateLocal, JSON.stringify(data));
}