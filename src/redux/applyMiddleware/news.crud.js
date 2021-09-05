// import actions from '../actions';
// import CategoriesReducer from '../reducers/categories.reducer'
// export const getNews = ({ dispatch, getState }) => next => action => {

//     if (action.type === 'GET_NEWS') {
//         debugger
//         var dt = []
//         const url = 'http://api.mediastack.com/v1/news?access_key=932329b89b2eb1290ae22bdba4c22cc2'
//         fetch(url)
//             .then(response => {
//                 const statusCode = response.status;
//                 let data;
//                 response.json().then(obj => {
//                     dt = obj.data;
//                     if (dt) {
//                         const key='category'
//                            dispatch(actions.setNews(dt.reduce(function (n, x) {
//                                 (n[x[key]] = n[x[key]] || []).push(x);
//                                 return n;
//                             }, {})))
//                     }
//                     data = dt;
//                     return { statusCode, data };
//                 });

//             })
//             .then(res => {
//                 console.log("reponse :", res); 
//             }).catch(error => {
//                 console.error(error);
//                 return { name: "network error", description: "" };
//             });

//     }
//     return next(action);
// }
// export const getNewsByCategory = ({ dispatch, getState }) => next => action => {
//     if (action.type === 'GET_NEWS_BY_CATERGORY') {
//         fetch(`http://api.mediastack.com/v1/news?access_key=932329b89b2eb1290ae22bdba4c22cc2&category=${getState().CategoriesReducer.selectedCategory}`)
//     }
//     return next(action)
// }


import actions from '../actions';
import CategoriesReducer from '../reducers/categories.reducer'
export const getNews = ({ dispatch, getState }) => next => action => {

    if (action.type === 'GET_NEWS') {
        debugger
        var dt = []
        const url = 'http://api.mediastack.com/v1/news?access_key=cfea9d1963f12380a45bf8e61ab1e512'
        fetch(url)
            .then(response => {
                const statusCode = response.status;
                let data;
                response.json().then(obj => {
                    dt = obj.data;
                    if (dt) {
                        const key='category'
                        // dispatch(actions.setNews(dt))
                           dispatch(actions.setNews(dt.reduce(function (n, x) {
                                (n[x[key]] = n[x[key]] || []).push(x);
                                return n;
                            }, {})))
                    }
                    data = dt;
                    return { statusCode, data };
                });

            })
            .then(res => {
                console.log("reponse :", res); // <-------- i get a "promise"
            }).catch(error => {
                console.error(error);
                return { name: "network error", description: "" };
            });

    }
    return next(action);
}
export const getNewsByCategory = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_NEWS_BY_CATERGORY') {
        fetch(`http://api.mediastack.com/v1/news? access_key =932329b89b2eb1290ae22bdba4c22cc2& category = ${getState().CategoriesReducer.selectedCategory}`)
    }
    return next(action)
}


