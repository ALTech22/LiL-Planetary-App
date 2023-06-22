import { Modal, Pressable, View, Text, StyleSheet, TextInput, Button, Dimensions, TouchableHighlight, Image, ScrollView } from "react-native"

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;


export function ConstellationModal({ setModalVisible, modalVisible, img, text, title }) {

    return <View>

        <View style={styles.container}>

            <View style={styles.button}>
                <Button title="<<<" color="#040541" onPress={() => { setModalVisible(false) }} />
            </View>

            <Image source={img} style={styles.image} />

            <ScrollView style={{ marginRight: 15, marginLeft: 10 }}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.text}>
                    {text}
                </Text>
            </ScrollView>
        </View>


    </View>
}


const styles = StyleSheet.create({
    button: {
        backgrondColor: 'green',
        marginTop: 10,
        marginBottom: 2,
        marginRight: w*0.8,
        width: 50,
        height: 50,
        position: 'relative'
    },
    container: {
        backgroundColor: 'rebeccapurple',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: h + 50,
        height: h
    },
    image: {
        // marginBottom: h*0.2,
        height: h * 0.43,
        width: w - 10,
        borderRadius: 100
    },
    title: {
        fontSize: 30,
        color: 'white',
        fontFamily: 'Night-Rain',
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: -1 },
        textShadowRadius: 10,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    text: {
        fontSize: 16,
        color: 'white',
        textAlign: 'justify'
    }
});
