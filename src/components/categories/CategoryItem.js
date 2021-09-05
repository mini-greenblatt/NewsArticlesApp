import React, { useEffect } from 'react'
import {
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Colors from '../../generic/Colors'
import {connect} from 'react-redux'
import actions from '../../redux/actions'

function CategoryItem(props) {

    const {
        item, 
        key,
        navigation,
        setSelectedCategory,
        getNewsByCategory
    } = props;

    return (
        <>
            <TouchableOpacity
                activeOpacity={0.6}
                key={key}
                onPress={() =>{
                    setSelectedCategory(item);
                    getNewsByCategory(item)    
                    navigation.navigate('News')
                                
                }}
                style={styles.listRow}>
                <Text style={styles.text}>{item}</Text>
            </TouchableOpacity>

        </>
    )
}
export default connect(
    (state) => {
        return {
        }
    },
    (dispatch) => {
        return {
            setSelectedCategory: (category) => {
                dispatch(actions.setSelectedCategory(category))
            },
            getNewsByCategory:(item)=>{
                dispatch(actions.getNewsByCategory(item))
            }

        }
    }
)(CategoryItem);
const styles = StyleSheet.create({
    listRow: {
        paddingVertical: 8,
        paddingHorizontal: 10,
        backgroundColor:Colors.primaryColor,
        borderRadius: 30,
        marginTop: 10,
        marginHorizontal: 5,
        height: 50,
        justifyContent: 'center'

    },

    text: {
        color: 'white',
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        marginHorizontal: 20
    },

})