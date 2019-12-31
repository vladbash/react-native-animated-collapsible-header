import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: 68,
        marginBottom: 10,
        paddingTop: 5,
        paddingBottom: 7,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC'
    },
    metaContainer: {
        flexGrow: 1
    },
    cover: {
        width: 50,
        height: 50,
        borderRadius: 14
    },
    coverContainer: {
        marginRight: 14
    },
    track: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    artist: {
        fontSize: 13,
        fontWeight: '300'
    },
    actionsContainer: {
        justifyContent: 'center',
        marginRight: 10
    }
});

const Track = ({ track, cover, artist, year, selected = false }) => (<View style={styles.container}>
    <View style={styles.coverContainer}>
        <Image source={{ uri: cover }} style={styles.cover} />
    </View>
    <View style={styles.metaContainer}>
        <Text style={styles.track}>{track}</Text>
        <Text style={styles.artist}>{artist}</Text>
        <Text>{year}</Text>
    </View>
    <View style={styles.actionsContainer}>
        {selected && <MaterialIcons name="play-circle-outline" size={22}/>}
    </View>
</View>);

export default Track;
