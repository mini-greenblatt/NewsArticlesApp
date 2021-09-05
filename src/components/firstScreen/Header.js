import React from 'react'
import {
    StyleSheet,
} from 'react-native'
import {
    Heading
} from 'native-base'
import Colors from '../../generic/Colors'
function Header() {

    return (
        <>
            <Heading
                mb={4}
                size="xl"
                bold
                style={styles.header}
            >Welcome to  All News
            </Heading>
        </>
    )
}
export default Header

const styles = StyleSheet.create({
    header: {
        color: Colors.primaryColor,
        marginTop: 40,
        alignSelf: 'center',
        alignContent: 'center',
        marginBottom: 0
    }
})