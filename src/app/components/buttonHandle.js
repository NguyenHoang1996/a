import { Button, View } from 'react-native';
import React, {Component} from 'react';

const ButtonHandle = ({title, onPress})=> (
    <Button
        style = {{marginBottom:10}}
        
        title = {title}
        
        onPress = {onPress}
    />
);

export default ButtonHandle;