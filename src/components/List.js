import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native';
import Track from './Track';

const styles = StyleSheet.create({
    constainer: {
        flex: 1
    }
});

const List = ({ tracks, selected, onSelect, ...props }) => (<View style={styles.container}>
    <FlatList
        {...props}
        data={tracks}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.cover}
        renderItem={({ item, index }) => (<Track selected={selected.cover === item.cover} position={index + 1} {...item} onPress={onSelect} />)}
    />
</View>);

export default List;