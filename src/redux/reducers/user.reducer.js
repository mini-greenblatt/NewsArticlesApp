import produce from 'immer'
import createReducer from './reducerUtils'

const initialState={
    user:{},
}
const user={
    setUser(state,action){
        debugger
        state.user=action.payload;
    },
}

export default produce((state, action)=>
createReducer(state,action,user),initialState)