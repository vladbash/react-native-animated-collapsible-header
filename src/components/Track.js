import React, { useCallback } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
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
    },
    positionContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 32,
        marginLeft: 5,
        marginRight: 10
    },
    position: {
        fontSize: 18
    }
});

const Track = ({ position = 0, track, cover, artist, year, selected = false, onPress }) => {
    const onTrackSelect = useCallback(() => {
        onPress({
            track,
            cover,
            artist,
            year
        });
    }, [track, cover, artist, year, onPress]);
    return (<TouchableOpacity style={styles.container} activeOpacity={0.65} onPress={onTrackSelect}>
        <View style={styles.positionContainer}>
            {selected ? <MaterialIcons name="equalizer" color="#49C18F" size={22} /> : <Text style={styles.position}>{('0' + position).slice(-2)}.</Text>}
        </View>
        <View style={styles.coverContainer}>
            <Image source={{ uri: cover }} style={styles.cover} />
        </View>
        <View style={styles.metaContainer}>
            <Text style={styles.track}>{track}</Text>
            <Text style={styles.artist}>{artist}</Text>
            <Text>{year}</Text>
        </View>
        <View style={styles.actionsContainer}>
            <MaterialIcons name="more-horiz" size={22} />
        </View>
    </TouchableOpacity>);
};

export default Track;
