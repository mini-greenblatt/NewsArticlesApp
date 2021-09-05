import produce from 'immer'
import createReducer from './reducerUtils'

const initialState={
    categories:[],
    selectedCategory:''
}
const categories={
    setCategories(state,action){
        state.categories=action.payload;
    },
    setSelectedCategory(state,action){
        state.selectedCategory=action.payload;
    }
}

export default produce((state, action)=>
createReducer(state,action,categories),initialState)