import React, {
    useEffect
} from 'react'
import {
    FlatList,
} from 'react-native'
import CategoryItem from './CategoryItem'
import { connect } from 'react-redux';
import actions from '../../redux/actions'

function CategoriesList(props) {
    const {
        navigation,
        getNews,
        news,
        categories,
        getCategories
    } = props;

    useEffect(() => {
        debugger
        if (categories.length <= 0)
            getCategories()
            // if (news.length <= 0)
            // getNews()
    }, [])

    const renderItem = ({ item }) => (
        <CategoryItem item={item} navigation={navigation} />
    );
    return (
        <>
            <FlatList
                data={categories}
                // data={Object.keys(news)}
                renderItem={renderItem}
                keyExtractor={item => item}
            />
        </>)
}

export default connect(
    (state) => {
        return {
            news: state.NewsReducer.news,
            categories: state.CategoriesReducer.categories
        }
    },
    (dispatch) => {
        return {
            getNews: function () {
                dispatch(actions.getNews())
            },
            getCategories: function () {
                dispatch(actions.getCategories())
            }
        }
    }
)(CategoriesList);
