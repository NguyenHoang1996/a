import React, { Component } from 'react';
import { Easing, Animated } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import MyDuyetBai from './MyDuyetBai';

import DuyetBai from './DuyetBai';
import ChiTietBai from './ChiTietBai';
import CommentChiTiet from './CommentChiTiet';
import ViTriMapChiTiet from './ViTriMapChiTiet';

import SearchPlace from './SearchPlace';
import SavedPlace from './SavedPlace';

import TrangCaNhan from './TrangCaNhan';
import TrangCaNhanSetting from './TrangCaNhanSetting';

import SearchMap from './app/mainApp';
import ThemDiaDiem from './ThemDiaDiem';

import Login from './Login';
import Register from './Register';
import ImagePicker from './ImagePicker';

//stack duyệt bài
const StackNavi = StackNavigator({
    DuyetBai: {
        screen: DuyetBai,
    },
    ChiTietBai: {
        screen: ChiTietBai,
    },
    CommentChiTiet: {
        screen: CommentChiTiet,
    },
    ViTriMapChiTiet: {
        screen: ViTriMapChiTiet,
    },
}, {
        // headerMode: 'none',
        mode: 'card',
        transitionConfig: () => ({
            transitionSpec: {
                duration: 300,
                easing: Easing.out(Easing.poly(4)),
                timing: Animated.timing,
            },
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;

                const height = layout.initHeight;
                const translateY = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [height, 0, 0],
                });

                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index],
                    outputRange: [0, 1, 1],
                });

                return { opacity, transform: [{ translateY }] };
            },
        }),
    }
);

//Trang map
const StackNaviMap = StackNavigator({
    TrangMap: {
        screen: SearchMap,
    },
    TrangThemDiaDiem: {
        screen: ThemDiaDiem,
    },
}, {
        headerMode: 'none',
        mode: 'card',
        transitionConfig: () => ({
            transitionSpec: {
                duration: 300,
                easing: Easing.out(Easing.poly(4)),
                timing: Animated.timing,
            },
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;

                const height = layout.initHeight;
                const translateY = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [height, 0, 0],
                });

                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index],
                    outputRange: [0, 1, 1],
                });

                return { opacity, transform: [{ translateY }] };
            },
        }),
    }
);

//Trang ca nhan
const StackNaviTrangCaNhan = StackNavigator({
    TrangCaNhan: {
        screen: TrangCaNhan,
    },
    TrangCaNhanSetting: {
        screen: TrangCaNhanSetting,
    },
}, {
        // headerMode: 'none',
        mode: 'card',
        transitionConfig: () => ({
            transitionSpec: {
                duration: 300,
                easing: Easing.out(Easing.poly(4)),
                timing: Animated.timing,
            },
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;

                const height = layout.initHeight;
                const translateY = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [height, 0, 0],
                });

                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index],
                    outputRange: [0, 1, 1],
                });

                return { opacity, transform: [{ translateY }] };
            },
        }),
    }
);

//tabbar
const RootNavigator = TabNavigator({
    Home: {
        screen: StackNavi,
    },
    Search: {
        // screen: SearchPlace,
        screen: StackNaviMap,
    },
    Saved: {
        screen: SavedPlace,
        // screen: StackNaviTrangCaNhan,
    },
    User: {
        // screen: TrangCaNhan,
        screen: StackNaviTrangCaNhan,
    },

}, {
        headerMode: 'none',
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: true,
        tabBarVisible: true,
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
        }
    }
);

//Login -> app tabbar
const LoginNavStack = StackNavigator({
    LoginAppScreen: {
        screen: Login,
    },
    RegisterAppScreen: {
        screen: Register,
    },
    MainAppScreen: {
        screen: RootNavigator,
    },
}, {
        headerMode: 'none',
        mode: 'card',
        transitionConfig: () => ({
            transitionSpec: {
                duration: 300,
                easing: Easing.out(Easing.poly(4)),
                timing: Animated.timing,
            },
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;

                const height = layout.initHeight;
                const translateY = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [height, 0, 0],
                });

                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index],
                    outputRange: [0, 1, 1],
                });

                return { opacity, transform: [{ translateY }] };
            },
        }),
    }
);

// export default RootNavigator;
export default LoginNavStack;
// export default ThemDiaDiem;
// export default Register;
// export default StackNavi;