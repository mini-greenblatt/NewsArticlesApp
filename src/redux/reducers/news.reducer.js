import produce from 'immer'
import createReducer from './reducerUtils'

const initialState = {
    news: [],
}
const news = {
    // setNews(state, action) {
    //     state.news = action.payload;
    // },
    setNewsOfCategory(state,action){
        // debugger
        // var selectedCategory=action.payload
        // console.log(selectedCategory)
        state.news=action.payload;

    },
    setIsFavorite(state, action) {
        const { title } = action.payload;
        state.news = state.news.map(x => {
            if (x.title === title) {
                return { ...x, isFavorite: true }
            }
            return x;
        })
        debugger

    }
}

export default produce((state, action) =>
    createReducer(state, action, news), initialState)