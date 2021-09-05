import {
    combineReducers,
    createStore,
    applyMiddleware
} from 'redux'
import NewsReducer from './reducers/news.reducer'
import CategoriesReducer from './reducers/categories.reducer'
import UserReducer from './reducers/user.reducer'
import FavoritesReducer from './reducers/favorites.reducer'
import {
    getNews,
} from './applyMiddleware/news.crud'
import{
    getCategories,
    getNewsByCategory

}from './applyMiddleware/categories.crud'
const reducers =
    combineReducers({
        NewsReducer,
        CategoriesReducer,
        UserReducer,
        FavoritesReducer

    })
const store = createStore(
    reducers,
    applyMiddleware(
        getNews,
        getNewsByCategory,
        getCategories
    )
)
export default store