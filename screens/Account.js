import React, { useState } from "react";
import {
    ActivityIndicator,
    Keyboard,
    KeyboardAvoidingView,
    StyleSheet,
    View
} from "react-native";
import { Button, Text } from "../components";
// import { View, StyleSheet } from "react-native";
import { theme } from "../constants";

const AccountScreen = () => {
    const [loading, setLoading] = useState(false);
    const handleLogin = () => { console.log("login") }
    return (
        <View style={styles.screen}>
            <Image
                style={styles.tinyLogo}
                source={require('../assets/images/plants_3.png')}
            />
            <Button style={styles.buttton}
                onPress={() => handleLogin()}
            >
                <Text center color='white' bold size={19}>Login</Text>
            </Button>
            <Button style={styles.buttton}
                onPress={() => handleLogin()}
            >
                <Text center color='white' bold size={19}>Create Account</Text>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: theme.colors.primary
    },
    buttton: {
        backgroundColor: theme.colors.dark,
        width: 250,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    }
})
export default AccountScreen;