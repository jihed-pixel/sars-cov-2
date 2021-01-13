import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormInput from "../../Form/FormInput";
import FormButton from "../../Form/FormButton";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import {View, Text, StyleSheet } from 'react-native';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import '../home.css';
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


const AVC = (props) => {

  const [anciennete, setAnciennete] = useState(0.0);
  const [traitement, setTraitement] = useState(0);
  const [episode_1, setEpisode_1] = useState(true)
  const [episode_x, setEpisode_x] = useState(false)
  const [handicap, setHandicap] = useState("mineur")

  var handleHandicapChange = (data) => {
      setHandicap(data)
  }

  var handleAnciennteChange = (text) => {
    setAnciennete(text)
  }
  var handleTraitementChange = (text) => {
    setTraitement(text)
  }
  var handleAvcChange = (data) => {
    if (data.target.value==="1") {
      setEpisode_1(true);
      setEpisode_x(false);
    }
    else if (data.target.value==="2") {
      setEpisode_1(false);
      setEpisode_x(true)
    }
  }
  var handleSubmit = (e) => {
    var values = {
      antecedent: "AVC",
      anciennete: anciennete,
      traitement: traitement,
      episode_1: episode_1,
      getEpisode_x: episode_x,
      handicap: handicap
    }
    e.preventDefault();
    console.log(values)
    props.antecedentsMedicaux(props.patientList["cin"], values)
    props.navigation.navigate("AddAntecendentsMedicaux")
  }




  return (
    <div>
<div class="big">
<Container style={{backgroundColor:"rgba(200,200,200,0.75)",backgroundsize: "cover"}} component="main" maxWidth="xs" >
      <View style={tailwind(' items-center ')} >
        <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>AVC</Text>
        <View style={styles.row}>
                <div>
                <Text style={tailwind('text-gray-700 py-2')}>  AVC?</Text>
                  <input  onChange={handleAvcChange} type="radio" value="1" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Un seul episode</Text>
                  <input  onChange={handleAvcChange} type="radio" value="2" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Plusieurs episodes</Text>
                </div>
        </View>
        <FormInput title="Ancienneté" placeholder="Ancienneté" onChangeText={handleAnciennteChange} type="decimal-pad" />
        <FormInput title="Traitement" placeholder="Traitement" onChangeText={handleTraitementChange} />
        <View style={styles.row}>
                <div>
                <Text style={tailwind('text-gray-700 py-2')}>Handicap?</Text>
                  <input  onChange={handleHandicapChange} type="radio" value="mineur" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Mineur</Text>
                  <input  onChange={handleHandicapChange} type="radio" value="moyen" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Moyen</Text>
                  <input  onChange={handleHandicapChange} type="radio" value="majeur" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Majeur</Text>
                </div>
              </View>
        <View style={styles.row}>
          <FormButton title="Retour" onPress={() => { props.navigation.navigate("AddAntecendentsMedicaux") }} />
          <FormButton title="Enregister" onPress={handleSubmit} />
        </View>
      </View>
      </Container>
</div>
<ParticlesBg type="cobweb" config={config} bg={true} />
</div>
  );
};
const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    padding: 10
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2193b0',
  },
});
const mapStateToProps = (state) => ({
  patientList: state.medicalService.patientList
});
const mapActionToProps = {

  antecedentsMedicaux: actions.antecedentsMedicaux
};

export default connect(mapStateToProps, mapActionToProps)(AVC);
