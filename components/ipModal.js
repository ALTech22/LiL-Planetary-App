import { Modal, Pressable, View, Text, StyleSheet, TextInput, Button } from "react-native"

export function IpModal({setModalVisible, modalVisible, ip, setIp}) {

    return <Modal
      animationType='slide'
      transparent={true}
      onRequestClose={() => {setModalVisible(false)}}
      visible={modalVisible}
      
      >
        <View style={styles.container}>
          <Text style={styles.textStyle}> Entre com o IP do circuito </Text>
          <TextInput 
            style={styles.inputStyle}
            value={ip}
            onChangeText={setIp}
            placeholder="IP" 
          />
          <Button
            onPress={() => setModalVisible(!modalVisible)}
            title="Fechar"
          />

        </View>
      </Modal>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 30,
        marginBottom: 25
    },
    inputStyle: {
        borderWidth: 2,
        width: 250,
        height: 25,
        fontSize: 20,
        marginBottom: 25
    }
});
  