export const initialState = [
    {
        item: 'Example todo item',
        completed: false,
        id: Date.now()
    }
]

export const todoReducer = (state, action) => {

    switch (action.type) {
        case "ADD_TODO": {
            return [
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                }]
        };
        case "TOGGLE_TODO": {
            console.log(action.payload);
            let clicked = state.find((item) => item.id === Number(action.payload));
            let index = state.indexOf(clicked);
            let updatedState = [...state];
            updatedState[index].completed = !updatedState[index].completed;
            return updatedState;
        };
        default:
            return state;
    }
}