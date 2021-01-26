import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import FormInput from '../../Form/FormInput';
import FormInput2 from '../../Form/FormInput2';
import '@assenti/rui-components/css/index.css';
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
   


const EvaluationFinale = (props) => {
  const [dateSor, setDateSor] = useState()
  const [deces, setDeces] = useState(false)
  const [dateDispSig, setDateDispSig] = useState()
  const [causesDir, setCausesDir] = useState()
  const [causesIndir, setCausesIndir] = useState()

  var handleTypeSdate = (data) => {
    setDateSor(data.target.value)
       }
       var handleTypeSdate = (data) => {
        setDateDispSig(data.target.value)
           }
  var handleDecesChange = (data) => {
    if (data.target.value==="non")
      setDeces(false)
    else setDeces(true)
  }
  var handleSubmit = (e) => {
    e.preventDefault()
    var values = {
      dateSor: dateSor,
      dateDispSig: dateDispSig,
      deces: deces,
      causesDir: causesDir,
      causesIndir: causesIndir,
    }
    //console.log(values)
    props.addEvaluationFinale(props.patientList["cin"], values)
    props.navigation.navigate("DiagnosticDetails")
  }


  return (
    <div>
<div class="big">
<Container style={{backgroundColor:"rgba(200,200,200,0.75)",backgroundsize: "cover"}} component="main" maxWidth="xs" >
    <View style={tailwind("items-center py-8")}>
      <Text style={tailwind('text-gray-700 font-bold py-2 text-xl text-center')}>Evaluation finale</Text>
      <Text style={tailwind('text-gray-700 font-bold py-2  text-center')}>Patient:{props.patientList["generalInformation"]["nom"] + " " + props.patientList["generalInformation"]["prenom"]}</Text>
      <View style={tailwind("items-center py-8")}>
      <Text style={tailwind("pt-8 text-center pb-2 text-gray-700")}>Date de sortie?</Text>
      <input type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate}/>
      </View>
      <View style={tailwind("items-center")}>
        <View style={styles.row}>
        <Text style={tailwind("text-gray-700")}>Décès</Text>
        <div>
          <input  onChange={handleDecesChange} type="radio" value="non" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Non</Text>
          <input  onChange={handleDecesChange} type="radio" value="oui" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Oui</Text>
        </div>
        </View>
        {
          deces === false &&<View style={tailwind("items-center py-8")}>
          <Text style={tailwind("pt-8 text-center pb-2 text-gray-700")}>Date de disparition des signes</Text>
          <input type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate}/>
          </View>
            
        }
        {
          deces === true && <View style={tailwind("items-center")}>
            <FormInput placeholder="Causes directes" onChangeText={setCausesDir} />
            <FormInput placeholder="Causes indirectes" onChangeText={setCausesIndir} />
          </View>
        }

      </View>

      <View style={tailwind("items-center py-8")}>
        <View style={styles.row}>
          <FormButton title="Retour" onPress={() => { props.navigation.navigate("DiagnosticDetails") }} />
          <FormButton title="Enregistrer" onPress={handleSubmit} />

        </View>
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
  loggedUser: state.medicalService.loggedUser,
  patientList: state.medicalService.patientList,
});
const mapActionToProps = {
  login: actions.login,
  logout: actions.logout,
  addEvaluationFinale: actions.addEvaluationFinale
};
export default connect(mapStateToProps, mapActionToProps)(EvaluationFinale);
