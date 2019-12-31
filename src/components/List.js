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

const List = ({ tracks, selected, ...props }) => (<View style={styles.container}>
    <FlatList
        {...props}
        data={tracks}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.cover}
        renderItem={({ item }) => (<Track selected={selected.cover === item.cover} {...item}/>)}
        />
</View>);

export default List;