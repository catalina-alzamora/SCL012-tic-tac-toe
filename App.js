import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      gameState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      currentPlayer: 1,
    }
  }
  componentDidMount() {
    this.initializeGame();
  }
  initializeGame = () => {
    this.setState({
      gameState:
        [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0]
        ]
    });
  }
  onTilePress = (row, col) => {

  }
  renderIcon = (row, col) => {
    let value = this.state.gameState[row][col]
    switch (value) {
      case 1: return <Icon name="close" style={styles.tileX} />
      case -1: return <Icon name="circle-outline" style={styles.tileO} />
      default: return <View />;
    }
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => this.onTilePress(0, 0)} style={[styles.tile, { borderLeftWidth: 0, borderTopWidth: 0 }]}>
            {this.renderIcon(0, 0)}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tile, { borderTopWidth: 0 }]}>
            {this.renderIcon(0, 1)}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tile, { borderTopWidth: 0, borderRightWidth: 0 }]}>
            {this.renderIcon(0, 2)}
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={[styles.tile, { borderLeftWidth: 0 }]}>
            {this.renderIcon(1, 0)}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tile]}>
            {this.renderIcon(1, 1)}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tile, { borderRightWidth: 0 }]}>
            {this.renderIcon(1, 2)}
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={[styles.tile, { borderBottomWidth: 0, borderLeftWidth: 0 }]}>
            {this.renderIcon(2, 0)}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tile, { borderBottomWidth: 0, }]} >
            {this.renderIcon(2, 1)}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tile, { borderBottomWidth: 0, borderRightWidth: 0 }]} >
            {this.renderIcon(2, 2)}
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tile: {
    borderWidth: 7,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tileX: {
    color: "red",
    fontSize: 60,
  },

  tileO: {
    color: "green",
    fontSize: 60,

  }
});
