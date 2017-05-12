import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class react_vr extends React.Component {
  render() {
    return (
      <View>
        {/*
        <Pano source={asset('tsujido-house-pano.jpg')}
        */}
        <Pano source={asset('unifa_office_sv_pano.jpg')}
          style={{
            transform: [
              {rotateY : -90}
            ] }}
        />
        <Text
          style={{
            backgroundColor: '#77ff79',
            fontSize: 0.5,
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          Welcome to Unifa
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('react_vr', () => react_vr);
