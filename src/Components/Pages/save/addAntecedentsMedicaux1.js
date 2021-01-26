import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import '../home.css';
import Steps from "../../Form/Steps";
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
const AddAntecendentsMedicaux1 = (props) => {
  const [nextPath, setNextPath] = useState("PathRespChronique")

  var handleAntecedentChange = (data) => {
      setNextPath(data.target.value)
  }
  return (
    <div>
<div class="big">
<View style={styles.row}>
<Container style={{backgroundColor:"rgba(200,200,200,0.75)",backgroundsize: "cover"}} component="main" maxWidth="xs" >
      <View style={tailwind(' items-center ')} >
        <Text style={tailwind('text-gray-700 font-bold py-2 text-xl text-center')}>Antécédents medicaux</Text>


        <View style={tailwind("py-8")} >
        <div  onChange={handleAntecedentChange}>
      <div>  <input type="radio" value="PathRespChronique1" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Pathologie respiratoire chronique ?</Text></div>
      <div>  <input type="radio" value="Cardiopathies1" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Cardiopathies ?</Text></div>
      <div>  <input type="radio" value="TrRythCardiaque1" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Trouble du rythme cardiaque ?</Text></div>
      <div>  <input type="radio" value="HTA1" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>HTA ?</Text></div>
      <div>  <input type="radio" value="Diabete1" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Diabète ?</Text> </div>
      <div>   <input type="radio" value="InsRenaleChro1" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Insuffisance rénale chronique ?</Text></div>
      <div>   <input type="radio" value="AVC1" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>AVC ? </Text></div>
      <div>   <input type="radio" value="Retinopathie1" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Rétinopathie ?</Text></div>
      <div>   <input type="radio" value="ATCDchir1" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>ATCD chirugicaux ?</Text></div>
      <div>   <input type="radio" value="Grossesse1" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Grossesse en cours ?</Text></div>
      <div>   <input type="radio" value="PriseAINS1" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Prise récente d'AINS ?</Text></div>
      <div>   <input type="radio" value="Immunosuppreseur1" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Traitement immunosuppresseur ?</Text></div>
      <div>   <input type="radio" value="AutresATCD1" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Autres ATCD ?</Text></div>
      </div>
        </View>


        <View style={styles.row}>
          <FormButton title="Retour1" onPress={() => { props.navigation.navigate("Exposition1") }} />
          <FormButton title="Suivant" onPress={() => { props.navigation.navigate(nextPath) }} />
        </View>
        <FormButton title="Suivant" onPress={() => { props.navigation.navigate("HabitudesDeVie1") }} />
      </View>
      </Container>
      <Steps current={2} /> 
</View>
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

};

export default connect(mapStateToProps, mapActionToProps)(AddAntecendentsMedicaux1);
