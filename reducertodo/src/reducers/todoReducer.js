export const initialState = [
    {
        item: 'Example todo item',
        completed: false,
        id: Date.now()
    }
]

export const todoReducer = (state, action) => {

    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                }]
        default:
            return state;
    }
}