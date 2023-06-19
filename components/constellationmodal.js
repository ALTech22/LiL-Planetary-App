import { Modal, Pressable, View, Text, StyleSheet, TextInput, Button, Dimensions, TouchableHighlight, Image } from "react-native"

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;


export function ConstellationModal({setModalVisible, modalVisible, img, text, title}) {
    
    return <Modal
      animationType='fade'
      transparent={true}
      onRequestClose={() => {setModalVisible(false)}}
      visible={modalVisible}
      
      >
        <TouchableHighlight
            onPress={() => {setModalVisible(false)}}
        >
            <View style={{width: w, height: h, position: 'absolute'}}>
                <View style={styles.container}>
                <Image source={img} style={styles.image}/>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.text}>
                    {text}
                </Text>
                </View>
            </View>
        </TouchableHighlight>
      </Modal>
}


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: 'rebeccapurple',
        alignItems: 'center',
        justifyContent: 'center',
        height: h*0.99,
        width: w,
        borderRadius: 15
    },
    image: {
        // marginBottom: h*0.2,
        height: h*0.43,
        width: w-10,
        borderRadius: 100
    },
    title: {
        fontSize: 30,
        color: 'white',
        fontFamily: 'Night-Rain',
        textShadowColor: '#000',
        textShadowOffset: {width: 1, height: -1},
        textShadowRadius: 10,
        textAlign: 'justify',
        textAlignVertical: 'center'
    },
    text: {
        fontSize: 16,
        color: 'white'
    }
});
  