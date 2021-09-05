import produce from 'immer'
import createReducer from './reducerUtils'

const initialState={
    favorites:[],
}
const favorites={
    setFavorites(state,action){
        state.favorites=action.payload;
    },
    addFavorite(state,action){
        let favoritesTemp = [];
        //push new item
        let fa=action.payload;
        fa.isFavorite=true;
        favoritesTemp.push(action.payload)
        //push old items
        state.favorites.forEach(f => {
            favoritesTemp.push(f);
        });
        state.favorites=favoritesTemp
    },
    deleteFavorite(state,action){
        let favoritesTemp = [];
        debugger
        state.favorites.forEach(f => {
            if (f.title != action.payload.title) {
                favoritesTemp.push(f);
            }
        });
        state.favorites = favoritesTemp;
    }
}

export default produce((state, action)=>
createReducer(state,action,favorites),initialState)