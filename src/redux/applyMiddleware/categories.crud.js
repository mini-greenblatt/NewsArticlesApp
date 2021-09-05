import actions from '../actions';
import CategoriesReducer from '../reducers/categories.reducer'
export const getCategories = ({ dispatch, getState }) => next => action => {
debugger
// GET_CATEGORIES
    if (action.type === 'GET_CATEGORIES') {
        var news = []
        const url = 'http://api.mediastack.com/v1/news?access_key=cfea9d1963f12380a45bf8e61ab1e512'
        fetch(url)
            .then(response => {
                const statusCode = response.status;
                let data;
                response.json().then(obj => {
                    if (obj.data) {
                        const key = 'category'
                        dispatch(actions.setNews(news))

                        news=obj.data.reduce(function (n, x) {
                            (n[x[key]] = n[x[key]] || []).push(x);
                            return n;
                        }, {})
                        var categories = Object.keys(news)
                        dispatch(actions.setCategories(categories))
                    }
                    data = news;
                    return { statusCode, data };
                });

            })
            .then(res => {
                console.log("reponse :", res);
            }).catch(error => {
                console.error(error);
                return { name: "network error", description: "" };
            });

    }
    return next(action);
}
export const getNewsByCategory = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_NEWS_BY_CATEGORY') {
        var news = []
        const url = `http://api.mediastack.com/v1/news?access_key=cfea9d1963f12380a45bf8e61ab1e512&category=${action.payload}`

        fetch(url)
            .then(response => {
                debugger
                const statusCode = response.status;
                let data;
                response.json().then(obj => {
                    news = obj.data;
                    if (news) {
                        debugger
                        dispatch(actions.setNewsOfCategory(news))
                    }
                    data = news;
                    return { statusCode, data };
                });

            })
            .then(res => {
                console.log("reponse :", res);
            }).catch(error => {
                console.error(error);
                return { name: "network error", description: "" };
            });
    }
    return next(action)
}


