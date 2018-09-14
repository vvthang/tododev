import {VisibilityFilters} from '../actions'

const vibisilityFilter = (state= VisibilityFilters.SHOW_ALL, actions) => {
    switch(actions.type){
        case 'SET_VISIBILITY_FILTER':
            return actions.filter
        default:
            return state

    }
}

export default vibisilityFilter