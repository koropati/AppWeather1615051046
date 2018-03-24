import React from 'react';
import { AppRegistry, StyleSheet, Text, Button, TextInput, View } from 'react-native';
//7cc62b49fe5d01dd68d03afa3ebceb0c 
export default class RamalanCuaca extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      city:'',
      forecast:{
        main: '-',
        description: '-',
        temp: 0
      }
    };
  }

  getWeather= () =>{
  let url = 'http://api.openweathermap.org/data/2.5/weather?q='+this.state.city+ '&appid=7cc62b49fe5d01dd68d03afa3ebceb0c&units=metric';
  fetch (url)
  .then((response) => response.json())
  .then((responseJson) => {
    //console.log(responseJson);
    this.setState({
      forecast: {
        main: responseJson.weather[0].main,
        description: responseJson.weather[0].description,
        temp: responseJson.main.temp
      }
    });
  });
}


  render() {
    return (
    <View style={styles.containerMain}>

      <View style={styles.boxHeader}>
          <Text style={{ textAlign: 'center', padding: 30, fontSize: 25, color: '#E8F5E9'}} >Ramalan Cuaca</Text>
      </View>

      <View style={styles.box5}>
          <Text style={{ textAlign: 'center', padding: 3, fontSize: 20 , color: '#E8F5E9'}}>Masukan Nama Kota</Text>
          
          <View style={styles.textBoxStyle}>
          <TextInput style = {{height: 50}}
              placeholder="Masukkan Nama Kota"
              onChangeText={(city)=>this.setState({city})}
          />
          </View>

          <View style={styles.buttonStyle}>
          <Button
              onPress={
                () => this.getWeather()
              }
              title="Lihat"
              color="#2E7D32"
              accessibilityLabel="Klik untuk melihat"
            />
          </View>
      </View>

      
      <View style={styles.isiTengah}>
        <Text style = {{padding: 10, fontSize: 20}} >
          Kota = {this.state.city} {"\n"}
          Cuaca = {this.state.forecast.main} {"\n"}
          Description = {this.state.forecast.description} {"\n"}
          Temp = {this.state.forecast.temp} {"'Celcius"}
        </Text>
      </View>
      
      <View style={styles.boxFotter}>
          <Text style={{ textAlign: 'center', padding: 18, fontSize: 14}} >Copy Right DEWOK@App</Text>
      </View>

</View>
    );
  }
}


const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#C8E6C9',
    flex: 1,
    flexDirection: 'column'
  },
  boxFotter: {
    height: 60,
    backgroundColor: '#4CAF50',
  },
  boxHeader: {
    height: 80,
    backgroundColor: '#4CAF50',
  },
  box2: {
    flex: 1,
    backgroundColor: '#A5D6A7',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  box3: {
    flex: 1,
    backgroundColor: '#81C784',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  box4: {
    flex: 1,
    backgroundColor: '#81C784',
    //marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  box5: {
    flex: 0.7,
    backgroundColor: '#4CAF50',
    margin: 10
  },
  isiTengah: {
    flex: 1,
    backgroundColor: '#81C784',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    //justifyContent: 'space-around',
    //alignItems: 'center',
    flexDirection: 'row'
  },
  info: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50'
  },
  infoRight: {
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50'
  },
  buttonStyle: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center'
  },
  textBoxStyle: {
    //flex: 1,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    backgroundColor: '#C8E6C9'
  }

});
