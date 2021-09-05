import React, { useEffect, useState } from 'react'
import {
    GoogleSigninButton,
    GoogleSignin,
    statusCodes
} from '@react-native-google-signin/google-signin'

import {
    StyleSheet,
    Image,
    View,
    Text
} from 'react-native'
import Colors from '../../generic/Colors'
import { connect } from 'react-redux'
import actions from '../../redux/actions'
import FavoritesList from './FavoritesList'
import { Avatar } from 'native-base'
function SignIn(props) {
    const {
        setUser,
        user,
        navigation
    } = props;
    // const frUser = auth().currentUser;
    var data = {}
    const [authenticated, setAutheticated] = useState(false);
    const [userDetails, setUserDetails] = useState({})
    useEffect(() => {
        // auth().onAuthStateChanged((user) => {
        //     if (user) {
        //         setAutheticated(true);
        //     }
        // }) 
    }, [])

    const onGoogleButtonPress = async () => {
        // const { idToken } = await GoogleSignin.signIn();
        // const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        // return auth().signInWithCredential(googleCredential);


        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            data = {
                token: userInfo.idToken,
                id: userInfo.user.id,
                email: userInfo.user.email,
                firstName: userInfo.user.givenName,
                lastName: userInfo.user.familyName,
                imageUri: userInfo.user.photo,
            };
            setUserDetails(data)
            // setUser(data);
            setAutheticated(true)
            // }
        } catch (error) {
            // console.log('Google Error', error.code, error);
            // Alert.alert('Google Error', JSON.stringify(error));
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (f.e. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }


    }
    return (
        <>
            {authenticated ?
                <View >
                    <Text style={styles.title}>Hello to</Text>

                    <View style={{
                        flexDirection: 'row', marginHorizontal: 10,
                        alignItems: 'center'
                    }}>
                        <Avatar source={{ uri: userDetails.imageUri }} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.txt}>{userDetails.firstName}</Text>
                            <Text style={styles.txt}>{userDetails.email}</Text>
                        </View>
                    </View>
                    <FavoritesList />

                </View> :
                <GoogleSigninButton
                    style={styles.signInButton}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={() => {
                        onGoogleButtonPress()
                    }} />
            }
        </>
    )

}


export default connect(
    (state) => {
        return {
            user: state.UserReducer.user
        }
    },
    (dispatch) => {
        return {
            setUser: () => {
                dispatch(actions.setUser())
            },

        }
    }
)(SignIn);
const styles = StyleSheet.create({

    view: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 100
    },
    signInButton: {
        width: 192,
        height: 48,
        alignSelf: 'center'
    },
    txt: {
        fontSize: 15,
    },
    title: {
        fontSize: 20,
        marginHorizontal:20,
        margin:5
    }
})