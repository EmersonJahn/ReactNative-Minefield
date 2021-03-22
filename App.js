import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import params from './src/params';
import MineField from './src/components/MineField'
import { createMineBoard} from './src/functions'


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColomnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColomnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMineBoard(rows, cols, this.minesAmount())
    }
  }

  render() {
    return (
      <View>

        <Text>
          Iniciando o Mines!
        </Text>

        <Text>
          Tamanho da grade:
          {params.getRowsAmount()} x {params.getColomnsAmount()}
        </Text>

        <View style={styles.board}>
          <MineField board={this.state.board}></MineField>
        </View>

        {/* <Text>
          <MineField board={this.state.board.error}></MineField>
        </Text> */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
})
