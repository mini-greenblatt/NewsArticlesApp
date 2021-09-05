import React, { useEffect } from 'react'
import {
    Text,
    StyleSheet
} from 'react-native'
import {
    Box,
    NativeBaseProvider
} from 'native-base'
import { getNews } from './fetchnews'
import CategoriesList from '../categories/CategoriesList'
import NewsList from './NewsList'
function News(props) {
    const {
        navigation
    } = props
    
    return (
        <><NativeBaseProvider>
            {/* <Header /> */}
            <NewsList navigation={navigation}></NewsList>
        </NativeBaseProvider>

        </>)
}
export default News
const styles = StyleSheet.create({

})