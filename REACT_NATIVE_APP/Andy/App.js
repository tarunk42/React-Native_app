/**
 * Tutorial React Native App
 * @format
 * @flow strict-local
 */



import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom:10,
    marginTop: 10,
    // height: '50%',
    width: '50%',
  }
})

/*Hello World App*/
// const HelloWorldApp = () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}>
//         <Text>Hello, World!</Text>
//     </View>
//   )
// }

// export default HelloWorldApp;


/*Hello Props*/


// const Greeting = (props) => {
//   return (
//     <View style={styles.center}>
//       <Text style={{
//         fontSize: 20,
//         }}>Hello, {props.name}</Text>
//     </View>
//   );
// }

// const LotsOfGreeting = () => {
//   return (
//     <View style={[styles.center, {top:50}]}>
//       <Greeting name='Tarun'/>
//       <Greeting name='Singh'/>
//       <Greeting name='Kashyap'/>
//     </View>
//   )
// }

// export default LotsOfGreeting;

/*Hello Classes*/


class App extends Component {
  state = {
    count: 0
  }

  onPress = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{backgroundColor: 'orange', width: '100%', justifyContent: 'center', alignItems: 'center', margin: 10}}>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text>Click Me!</Text>
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor: 'steelblue', width: '25%', height: 100}}></View>
        <View style={{backgroundColor: 'green', width: '100%', justifyContent: 'center', alignItems: 'center',margin: 10}}>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text>Click Me!</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          backgroundColor: 'grey',
          }}>
          <Text style={{color: 'white', fontSize: 20, padding: 10}}>
            You clicked { this.state.count } times.
          </Text>
        </View>
      </View>
    )
  }

}



export default App;