import React, { Component } from 'react'; //importa o React
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'; // importa componentes do React Native


class App extends Component {


  constructor(props) {
    super(props)
    this.state = {
      numero: 0
    };
    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai() {
    if (this.timer != null) {
      clearInterval(this.timer)
      this.timer = null;
    } else {
      this.timer = setInterval(() => {
        this.setState({ numero: this.state.numero + 0.1 })
      });
    }
  }
  limpar() {
      if(this.timer != null){
        clearInterval(this.timer);
        this.timer = null;
      }
      this.setState({numero : 0})
  }


  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./src/cronometro.png')}
          style={styles.cronometro}
        />
        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

        <View style={styles.btnArea}>

          <TouchableOpacity style={styles.btn} onPress={this.vai}>
            <Text style={styles.btnTexto}>VAI</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.limpar}>
            <Text style={styles.btnTexto}>LIMPAR</Text>
          </TouchableOpacity>
        </View>

        <View>

        </View>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer: {
    marginTop: -160,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  }
});


export default App;