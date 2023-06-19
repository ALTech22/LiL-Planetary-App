import { Alert, Button, Image, Pressable, StyleSheet, View } from "react-native";
import { changeConstelation } from "../services/request";

export function ConstellationButton({img, statusId, ip, onPress}) {
    async function handlePress() {
        changeConstelation(ip, statusId).then((r) => {
            console.log(r.data);
        }).catch(e => {
            console.log(e);
            Alert.alert('Error', e.message)
        })

        onPress();
    }

    return <View>
        <Pressable 
            onPress={handlePress}
        >
            <Image style={styles.image} source={img}/>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        borderRadius: 100,
    }
})