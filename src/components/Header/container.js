import React from 'react';
import {
    Animated,
    StyleSheet
} from 'react-native';

import Collapsed from './Collapsed';
import Expanded from './Expanded';
import {
    COLLAPSED_HEIGHT,
    EXPANDED_HEIGHT
} from '../../constants';

const styles = StyleSheet.create({
    inner: {
        flex: 1,
        position: 'absolute',
        width: '100%'
    }
});

const Header = ({ track, height, ...props }) => {
    const coverHeight = height.interpolate({
        inputRange: [COLLAPSED_HEIGHT, EXPANDED_HEIGHT],
        outputRange: [80, 190],
        extrapolate: 'clamp'
    });
    const opacityExpanded = height.interpolate({
        inputRange: [COLLAPSED_HEIGHT, EXPANDED_HEIGHT - COLLAPSED_HEIGHT],
        outputRange: [0, 1]
    });
    const opacityCollapsed = height.interpolate({
        inputRange: [COLLAPSED_HEIGHT, EXPANDED_HEIGHT - COLLAPSED_HEIGHT],
        outputRange: [1, 0],
    });

    return (<Animated.View {...props}>
        <Animated.View style={[styles.inner, { opacity: opacityExpanded }]}>
            <Expanded coverHeight={coverHeight} {...track} />
        </Animated.View>
        <Animated.View style={[styles.inner, { opacity: opacityCollapsed }]}>
            <Collapsed {...track} />
        </Animated.View>
    </Animated.View>)
};

export default Header;