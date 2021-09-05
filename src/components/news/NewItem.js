import React, { useEffect, useState } from 'react'
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native'
import {
    Box,
    Image,
    Stack,
    Heading,
    Row,
} from 'native-base'
import Moment from 'moment'
import Colors from '../../generic/Colors';
import { connect } from 'react-redux';
import actions from '../../redux/actions'

function NewItem(props) {

    const {
        item,
        key,
        addFavorite,
        isFromFavorites,
        deleteFavorite,
        // setIsFavorite
    } = props;

    const [isFavorite, setIsFavorite] = useState(false)


    return (
        <>
            <Box
                key={key}
                bg="white"
                shadow={2}
                rounded="lg"
                maxWidth="90%"
                alignSelf='center'
                margin={5}
            >{item.image &&
                <Image source={{
                    uri:
                        item.image
                }}
                    alt="image base" resizeMode="cover" height={150} roundedTop="md" />
                }

                <Stack space={4} p={[4, 4, 8]}>

                    <Row style={{ alignItems: 'center' }}>
                        <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: item.url,
                            }}
                        />
                        {/* <Image source={{
                            uri:
                                item.source
                        }}
                            alt='' /> */}
                        <Text style={styles.txt}> {item.source}</Text>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "flex-end",
                            position: 'absolute',
                            right: 5,
                        }}>
                            <Text color="gray.400" style={styles.txt} >{
                                Moment(item.published_at).format('MMM DD ,yyyy H:mm')}
                            </Text></View>

                    </Row>
                    <Heading size={["md", "lg", "md"]} noOfLines={2}>
                        {item.title}
                    </Heading>
                    <Text lineHeight={[5, 5, 7]} noOfLines={[4, 4, 2]} color="gray.700">
                        {item.description}
                    </Text>
                    <Row style={{ flexDirection: 'column' }}>
                        <Text style={styles.txt}>Author: {item.author}</Text>
                        <Text style={styles.txt}>Category: {item.category}</Text>
                    </Row>

                    {!isFavorite && !isFromFavorites ?
                        <TouchableOpacity
                            style={styles.plusButton}
                            onPress={() => {
                                setIsFavorite(true)
                                props.setIsFavorite(item)
                                addFavorite(item)
                            }}
                        >
                            <Text style={styles.btnTxt}> Add to favorites</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                            style={styles.plusButton}
                            onPress={() => {
                                deleteFavorite(item)
                            }}
                        >
                            <Text style={styles.btnTxt}> Remove from favorites</Text>
                        </TouchableOpacity>}
                </Stack>
            </Box>
        </>
    )
}
export default connect(
    (state) => {
        return {
            news: state.NewsReducer.news
        }
    },
    (dispatch) => {
        return {
            addFavorite: function (item) {
                dispatch(actions.addFavorite(item))
            },
            deleteFavorite: function (item) {
                dispatch(actions.deleteFavorite(item))
            },
            setIsFavorite: function (item) {
                dispatch(actions.setIsFavorite(item))
            }
        }
    }
)(NewItem)
const styles = StyleSheet.create({
    plusButton: {
        borderWidth: 1,
        borderColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        alignSelf: 'flex-end',
        backgroundColor: Colors.white,
        borderRadius: 10
    },
    btnTxt: {
        fontSize: 10
    },
    txt: {
        fontSize: 12
    },
    tinyLogo: {
        width: 30,
        height: 30,
      },
})