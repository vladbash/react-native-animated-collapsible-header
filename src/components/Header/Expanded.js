import React from 'react';
import {
    Image,
    View,
    StyleSheet,
    Platform,
    Text,
    Animated
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20
    },
    cover: {
        height: 190,
        width: 190,
        borderRadius: 54
    },
    coverShadow: {
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    metaContainer: {
        marginTop: 20
    },
    text: {
        textAlign: 'center',
        color: 'white'
    },
    track: {
        fontWeight: 'bold',
        fontSize: 22
    },
    artist: {
        fontSize: 18
    }
});

const Expanded = ({ cover, artist, track, year, coverHeight }) => (<View style={styles.container}>
    <View style={styles.coverShadow}>
        <Animated.Image source={{ uri: cover }} style={{ height: coverHeight, width: coverHeight, borderRadius: Animated.divide(coverHeight, 6) }} />
    </View>
    <View style={styles.metaContainer}>
        <Text style={[styles.text, styles.track]}>{track}</Text>
        <Text style={[styles.text, styles.artist]}>{artist}</Text>
        <Text style={[styles.text]}>{year}</Text>
    </View>
</View>);

export default Expanded;