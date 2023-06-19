import { StyleSheet, View, Text } from "react-native";

export function Header({title, subtitle, styles}) {

    return <View style={styles}>
        <Text style={textStyles.title}>
            {title}
        </Text>
        <Text style={textStyles.subtitle}>
            {subtitle}
        </Text>
    </View>
}

const textStyles = StyleSheet.create({
    title: {
        fontFamily: 'CrazyWish', 
        fontSize: 60, 
        color: '#9641df',
        textShadowColor: 'white',
        textShadowOffset: {width: 2, height: -2},
        textShadowRadius: 10
    },
    subtitle: {
        fontFamily: 'CrazyWish',
        fontSize: 45,
        color: '#fff',
        textShadowColor: '#9641df',
        textShadowOffset: {width: 5, height: -1},
        textShadowRadius: 1
    }
});