const initialState = { 
    movies: [{ 
        id: 11,
        rating: "9"
    }]
}

export default function addMovie(state=initialState, action) {
    let nextState

    switch(action.type) {

        case 'ADD_MOVIE':
            const isAlreadyThere = state.movies.findIndex(item => item.id === action.value.id)
            if (isAlreadyThere === -1) {
                nextState = {
                    ...state,
                    movies: [ ...state.movies, action.value ]
                }
            }
            return nextState || state
        default:
            return state
    }
}
