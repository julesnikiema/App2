import {View, Text, StyleSheet }from "react-native"


export default function Box({children , style}) {

    return (
        <View style ={[styles.box, style]} >
            <Text style={styles.text}>{children}</Text>
        </View>
    );
}

    const styles = StyleSheet.create({
        box:{
            backgroundColor : "#fff",
            padding:5,
        },
        text : {
            textAlign:"center",
            fontSize: 24,
            fontWeight:"condensedBold"
        },
    });


