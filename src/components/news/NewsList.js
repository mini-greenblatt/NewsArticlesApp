import React, { useEffect } from 'react'
import {
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    View,
    SafeAreaView
} from 'react-native'
import {
    Box,
    NativeBaseProvider,
    Thumbnail, Avatar
} from 'native-base'
import NewItem from './NewItem'
import { connect } from 'react-redux'

function NewsList(props) {
    const {
        news,
        selectedCategory
    } = props;
    const data = news != undefined ? news : []
    useEffect(()=>{
        console.log(news)
    },[])

    const renderItem = ({ item, key }) => (
        <NewItem item={item} key={key} isFromFavorites={false}></NewItem>
    );
    return (
        <>
            <FlatList
                data={news}
                renderItem={renderItem}
                keyExtractor={item => item.title}
            />


        </>)
}
export default connect(
    (state) => {
        return {
            selectedCategory: state.CategoriesReducer.selectedCategory,
            news: state.NewsReducer.news

        }
    },
    (dispatch) => {
        return {
            // getNews: () => {
            //     dispatch(actions.getNews())
            // }
            // getSelectedCategory: (category) => {
            //     dispatch(actions.setSelectedCategory(category))
            // },

        }
    }
)(NewsList);
