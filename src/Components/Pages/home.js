import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../Form/FormButton";
import FormCheckBox from "../Form/CheckBox";
import * as actions from "../../Actions/medicalService";
import { connect } from "react-redux";
import { StyleSheet,View, Text } from 'react-native';
import { AsyncStorage } from 'AsyncStorage';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import './home.css';
const Home = (props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  const logout = (e) => {


    props.logout();
    AsyncStorage.setItem("loggedUser", JSON.stringify(null))
    props.navigation.navigate("Login")
    console.log(AsyncStorage.getItem("loggedUser"));

    console.log(props.loggedUser)

  }
  let config = {
      num: [4, 7],
      rps: 0.1,
      radius: [5, 40],
      life: [1.5, 3],
      v: [2, 3],
      tha: [-50, 50],
      alpha: [0.6, 0],
      scale: [.1, 0.9],
      position: "all",
      color: [ "#ff0000"],
      cross: "dead",
      random: 10
      
    };


  return (

    <div style={mystyle}>
    <Container style={{backgroundColor:"rgba(200,200,200,0.75)",backgroundsize: "cover"}} component="main" maxWidth="xs" >
      <div class="big">
      <View style={tailwind(' items-center mt-10')} >
      <View style={tailwind(' items-center ')} >
        <Text style={tailwind('text-gray-700 font-bold py-2 text-9xl')}>Bienvenue a </Text>
        <Text style={tailwind('text-gray-700 font-bold py-2 text-9xl')}>Plate-forme SARS-COV2</Text>
        <Text style={tailwind('text-gray-700 font-bold py-2 text-9xl')}>et autre maladie infectieuse</Text>
        </View>
        <View style={tailwind('py-4')}>
          <FormButton title="Créer un dossier patient" onPress={() => props.navigation.navigate("AddPatient")} />
          <FormButton title=" Rechercher un dossier patient " onPress={() => props.navigation.navigate("SearchPatient")} />
        </View>
        <FormButton title="Deconnexion" onPress={logout} />
</View>
</div>
</Container>
<ParticlesBg type="cobweb" config={config} bg={true} />
</div>
  );
};
const mystyle = {
      color: "white",
      height: "100vh",
      backgroundposition: "center",
      backgroundrepeat: "no-repeat",
      backgroundsize: "cover"
    };
const mapStateToProps = (state) => ({
  loggedUser: state.medicalService.loggedUser,
});
const mapActionToProps = {
  login: actions.login,
  logout: actions.logout
};

export default connect(mapStateToProps, mapActionToProps)(Home);
