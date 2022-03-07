import React, { Component } from 'react';
import { Text,View } from 'react-native';
import Game from '../Model/Game'

const GameView = (props) => {
    
    
      return (
        <View>
          <Text>{props.name}</Text>
        </View>
        
      );
    
  }

  export default GameView;