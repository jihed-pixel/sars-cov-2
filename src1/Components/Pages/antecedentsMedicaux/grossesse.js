import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormInput from "../../Form/FormInput";
import FormButton from "../../Form/FormButton";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
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





const Grossesse = (props) => {
  const [simple, setSimple] = useState(true)
  const [gpa, setGPA] = useState(true)
  const [sa, setSa] = useState(true)
  const [path, setPath] = useState(true)
  const [pathologie, setPathologie] = useState(null)

  var handleSimpleChange = (data) => {
      setSimple(data.target.value)
  }
  var handleGpaChange = (data) => {
      setGPA(data.target.value)
  }

  var handleSaChange = (data) => {
      setSa(data.target.value)
  }
  var handlePathChange = (data) => {
      setPath(data.target.value)
  }
  var handlePathologieChange = (text) => {
    setPathologie(text)
  }


  var handleSubmit = (e) => {
    var values = {
      antecedent: "grossesse",
      simple: simple,
      gpa: gpa,
      sa: sa,
      pathologie: pathologie
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
        <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>Grossesse en cours</Text>
        <View style={styles.row}>
                <div>
            <Text style={tailwind('text-gray-700 py-2')}>Grossesse?</Text>
                  <input  onChange={handleSimpleChange} type="radio" value={true} name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Grossesse simple</Text>
                  <input  onChange={handleSimpleChange} type="radio" value={false} name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Grossesse compliqué</Text>
                </div>
              </View>
              <View style={styles.row}>
              <div>
          <Text style={tailwind('text-gray-700 py-2')}>SA?</Text>
                <input  onChange={handleSaChange} type="radio" value={true} name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Oui</Text>
                <input  onChange={handleSaChange} type="radio" value={false} name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Non</Text>
              </div>
            </View>
            <View style={styles.row}>
            <div>
        <Text style={tailwind('text-gray-700 py-2')}>Pathologies liées à la grossesse?</Text>
              <input  onChange={handlePathChange} type="radio" value={true} name="gender2" /> <Text style={tailwind('text-gray-700 py-2')}>Oui</Text>
              <input  onChange={handlePathChange} type="radio" value={false} name="gender2" /> <Text style={tailwind('text-gray-700 py-2')}>Non</Text>
            </div>
          </View>

          {(path === "true") && <FormInput placeholder="Précisier les pathologies" onChangeText={handlePathologieChange} />}

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

export default connect(mapStateToProps, mapActionToProps)(Grossesse);
