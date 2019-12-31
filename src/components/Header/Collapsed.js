import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';
import { COLLAPSED_HEIGHT } from '../../constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: COLLAPSED_HEIGHT,
        paddingLeft: 20,
        paddingRight: 20
    },
    cover: {
        height: 80,
        width: 80,
        borderRadius: 14
    },
    metaContainer: {
        marginLeft: 20
    },
    text: {
        color: 'white'
    },
    track: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    artist: {
        fontSize: 14
    }
});

const Collapsed = ({ cover, track, artist, year }) => (<View style={styles.container}>
    <Image source={{ uri: cover }} style={styles.cover} />
    <View style={styles.metaContainer}>
        <Text style={[styles.text, styles.track]}>{track}</Text>
        <Text style={[styles.text, styles.artist]}>{artist}</Text>
        <Text style={[styles.text, ]}>{year}</Text>
    </View>
</View>);

export default Collapsed;