import React, { useEffect } from 'react'
import {
    Text,
    StyleSheet,
    FlatList,
} from 'react-native'
import NewItem from '../news/NewItem'
import { connect } from 'react-redux';
import Colors from '../../generic/Colors'

function FavoritesList(props) {
    const {
        user,
        favorites
    } = props;
    

    const renderItem = ({ item }) => (
        <NewItem item={item} isFromFavorites={true}></NewItem>
    );

    return (
        <>
            {/* <Text>Hello to {user ? user.email : 'user'}</Text> */}
            {favorites.length > 0 ?
            <FlatList
                // style={{ backgroundColor: 'red' }}
                data={favorites ? favorites : []}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
             :
                <Text style={styles.txt}>You don't have favorites articles</Text>} 
        </>)
}
export default connect(
    (state) => {
        return {
            news: state.NewsReducer.news,
            user: state.UserReducer.user,
            favorites: state.FavoritesReducer.favorites
        }
    },
    (dispatch) => {
        return {
            // getSelectedCategory: (category) => {
            //     dispatch(actions.setSelectedCategory(category))
            // },

        }
    }
)(FavoritesList);
const styles = StyleSheet.create({
    txt: {
        fontSize: 20,
        lineHeight: 30,
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.primaryColor
    }
})
