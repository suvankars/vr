import React from 'react';
import GazeButton from 'react-360-gaze-button'
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  asset,
} from 'react-360';
import Entity from "react-360/Libraries/Mesh/Entity";

export class SimpleRaycusterButton extends React.Component {
  state = {
    gazed: false
  };

  setGazed = () => {
    this.setState({ gazed: true });
  };
  render() {
    const { gazed } = this.state;
    return (
        <View style={styles.panel}>
          <GazeButton
              duration={3000}
              onClick={this.setGazed}
              render={(remainingTime, isGazed) => (
                  <View style={styles.greetingBox}>

                    <Text style={styles.greeting}>
                      {gazed
                          ? "You have gazed me"
                          : isGazed
                              ? remainingTime
                              : "Gaze me"}
                    </Text>
                  </View>
              )}
          />
        </View>
    );
  }
}

export default class Hello360 extends React.Component {

  render() {
    return (
      <View style={styles.panel}>
          <Entity source={{obj:asset('earth.obj'), mtl:asset('earth.mtl')}}
              style={{
                  transform: [
                      {translate: [-200, -100, -100]},
                      {scale: 0.2},
                  ],
              }}
          />
         <Entity source={{obj:asset('smartphone 3D model.obj'), mtl:asset('smartphone 3D model.mtl')}}
                 style={{
                     transform: [
                         {translate: [0, -90, -40]},
                         {scale: 3},
                         {rotateY: 0},

                     ],
                 }}
          />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1300,
    height: 800,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
    transform: [
      {scale: 1},
      {rotateY: 130 / 3},
    ],
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('Hello360', () => Hello360);
