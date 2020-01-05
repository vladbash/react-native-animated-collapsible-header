import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Animated
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import { Header, List } from './components';
import { initTracksList, setSelected } from './store';
import { COLLAPSED_HEIGHT, EXPANDED_HEIGHT } from './constants';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    list: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flexGrow: 1,
        paddingTop: 15,
        paddingLeft: 30,
        paddingRight: 30
    },
    listShadow: {
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowColor: '#000000',
        shadowOpacity: 0.09,
        elevation: 4,
    }
});

const Screen = ({ tracks, selected, initTracksList, setSelected }) => {
    useEffect(() => {
        initTracksList();
    }, []);

    let scrollY = new Animated.Value(0);
    let height = scrollY.interpolate({
        inputRange: [0, EXPANDED_HEIGHT - COLLAPSED_HEIGHT],
        outputRange: [EXPANDED_HEIGHT, COLLAPSED_HEIGHT],
        extrapolate: 'clamp'
    });
    // const onGestureEvent = useCallback(({ nativeEvent: { translationY } }) => {
    //     console.log(translationY);
    //     height = Animated.add(height, translationY);
    // }, [height]);
    // const onHandlerStateChange = e => { };

    return (<LinearGradient style={styles.container} colors={['#49C18F', '#52A7A2']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
        <SafeAreaView>
            <Header style={{ height }} track={selected} height={height} />
        </SafeAreaView>
        <Animated.View style={[styles.list, styles.listShadow]}>
            {/* <PanGestureHandler onGestureEvent={onGestureEvent} onHandlerStateChange={onHandlerStateChange}> */}
            <View>
                <List
                    tracks={tracks}
                    selected={selected}
                    onSelect={setSelected}
                    onScroll={Animated.event([{
                        nativeEvent: {
                            contentOffset: { y: scrollY }
                        }
                    }])}
                    scrollEventThrottle={16}
                />
            </View>
            {/* </PanGestureHandler> */}
        </Animated.View>
    </LinearGradient>);
};

export default connect(state => ({
    tracks: state.tracks,
    selected: state.selected
}), {
    initTracksList,
    setSelected
})(Screen);