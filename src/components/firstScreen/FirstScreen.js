

import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
} from 'react-native';
import Colors from '../../generic/Colors'
import { connect } from 'react-redux';
import Header from './Header'
import CategoriesList from '../categories/CategoriesList'
import actions from '../../redux/actions'

function FirstScreen(props) {
    const {
        navigation,
        news,
        categories,
        getCategories
    } = props;
   
    useEffect(()=>{
        // if (news.length<=0)
        // {
        //     getNews()
        // }
        if (categories.length<=0)
        {
            getCategories()
        }
    },[])

    return (
        <>
            <Header />
            <CategoriesList navigation={navigation} />
            <TouchableOpacity
                style={styles.plusButton}
                onPress={() => {
                    navigation.navigate('SignIn')
                    // navigation.navigate('FavoritesList')
                }}
            >
                <Text style={styles.txt}>My Favorites</Text>
            </TouchableOpacity>
        </>

    )
}

export default connect(
    (state) => {
        return {
            news: state.NewsReducer.news,
            categories:state.CategoriesReducer.categories
        }
    },
    (dispatch) => {
        return {
            getNews: () => {
                dispatch(actions.getNews())
            },
            getCategories:()=>{
                dispatch(actions.getCategories());
            }

        }
    }
)(FirstScreen);

const styles = StyleSheet.create({
    plusButton: {
        borderWidth: 1,
        borderColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        alignSelf: 'flex-end',
        margin: 20,
        backgroundColor: Colors.white,
        borderRadius: 10
    },
    txt: {
        fontSize: 18
    }

})
