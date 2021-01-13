import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import FormInput from '../../Form/FormInput';
import { DatePicker } from '@assenti/rui-components';
import '@assenti/rui-components/css/index.css';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import '../home.css';

const Admission = (props) => {
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
  const [type, setType] = useState("hhop")
  const [lieu, setLieu] = useState("chez lui")
  const [lieuCB, setLieuCB] = useState("lui")
  const [dateEnt, setDateEnt] = useState()
  const [mode, setMode] = useState("transfert inter-hopital")
  const [modeCB, setModeCB] = useState("transfert")
  const [hopital, setHopital] = useState()
  const [service, setService] = useState()


  var handleModeCB = (data) => {
    if (data.target.value==="0") {
      setMode("Transfert inter-hopital")
      setModeCB("Transfert inter-hopital")
    }
    if (data.target.value==="1") {
      setMode("Transfert inter-service")
      setModeCB("Transfert inter-service")
    }
    if (data.target.value==="2") {
      setMode("Urgences")
      setModeCB("Urgences")
    }
    if (data.target.value==="3") {
      setMode("SAMU")
      setModeCB("SAMU")
    }
    if (data.target.value==="4") {
      setMode("D'un lieu d'isolement(Chez lui ou centre)")
      setModeCB("D'un lieu d'isolement(Chez lui ou centre)")
    }
    if (data.target.value==="5") {
      //setMode(data[5].label)
      setModeCB("Autre")
    }
  }
  var handleTypeChange = (data) => {
      setType(data.target.value)
  }
  var handleLieuCB = (data) => {
    if (data.target.value==="0") {
      setLieu("chez lui")
        setLieuCB("lui")
    }
    if (data.target.value==="1") {
      setLieuCB("centre")
    }
    if (data.target.value==="2")
      setLieuCB("autre")

  }
  var handleLieuChange = (text) => {
    setLieu(text)
  }
  var handleHopitalChange = (text) => {
    setHopital(text)
  }
  var handleServiceChange = (text) => {
    setService(text)
  }
  var handleModeChange = (text) => {
    setMode(text)
  }

  var handleSubmit = (e) => {
    e.preventDefault();
    var values = {
      type: type,
      lieu: lieu,
      hopital: hopital,
      service: service,
      dateEnt: dateEnt,
      mode: mode,

    }
    console.log(values)
    console.log(props.patientList["cin"])
    props.addAdmission(props.patientList["cin"], values)
    props.navigation.navigate("CaracCliniques1")

  }

  return (
    <div>
<div class="big">
<Container style={{backgroundColor:"rgba(200,200,200,0.75)",backgroundsize: "cover"}} component="main" maxWidth="xs" >
<View style={tailwind("items-center")}>
      <Text style={tailwind('text-gray-700 font-bold py-2 text-xl text-center')}>Admission d'un cas confirmé COVID-19</Text>
      <Text style={tailwind('text-gray-700 font-bold py-2  text-center')}>Patient:{props.patientList["generalInformation"]["nom"] + " " + props.patientList["generalInformation"]["prenom"]}</Text>
      <View style={styles.row}>
        <div  >
	  <Text style={tailwind('text-gray-700 py-2')}>Admission?</Text>
          <input onChange={handleTypeChange} type="radio" value="hhop" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>En dehors de l'hopital</Text>
          <input onChange={handleTypeChange} type="radio" value="hop" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>A l'hopital</Text>
        </div>
      </View>
      {
        type === "hhop" && <View style={tailwind("items-center")}>
        <View style={styles.row}>
          <div  >
        <Text style={tailwind('text-gray-700 py-2')}>Précisier le lieu?</Text>
            <input onChange={handleLieuCB} type="radio" value="0" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Chez lui</Text>
            <input onChange={handleLieuCB} type="radio" value="1" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Dans un centre d'isolement</Text>
            <input onChange={handleLieuCB} type="radio" value="2" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Autre</Text>
          </div>

        </View>
          {lieuCB === "autre" && <FormInput placeholder="..." onChangeText={handleLieuChange} />}
          {lieuCB === "centre" && <FormInput placeholder="Préciser le quel" onChangeText={handleLieuChange} />}
            <View style={styles.row}>
            <DatePicker
            color="primary"
            placeholder="YYYY-MM-DD"
            value={dateEnt}
            clearable
            minDate="1920-05-01"
            maxDate={new Date()}
            onDate={(dateEnt) => {
            setDateEnt(dateEnt)
            }}
            onClear={() => setDateEnt('')}
            width={250}
            onChange={(value) => setDateEnt(value)}/>
          </View>
        </View>
      }
      {
        type === "hop" && <View style={tailwind("items-center")}>
          <FormInput placeholder="Hopital" onChangeText={handleHopitalChange} />
          <FormInput placeholder="Service" onChangeText={handleServiceChange} />
          <DatePicker
          color="primary"
          placeholder="YYYY-MM-DD"
          value={dateEnt}
          clearable
          minDate="1920-05-01"
          maxDate={new Date()}
          onDate={(dateEnt) => {
          setDateEnt(dateEnt)
          }}
          onClear={() => setDateEnt('')}
          width={250}
          onChange={(value) => setDateEnt(value)}/>
          <View style={styles.row}>
        <div  >
	  <Text style={tailwind('text-gray-700 py-2')}>Mode d'entrée?</Text>
          <input onChange={handleModeCB} type="radio" value="0" name="gender2" /> <Text style={tailwind('text-gray-700 py-2')}>Transfert inter-hopital</Text>
          <input onChange={handleModeCB} type="radio" value="1" name="gender2" /> <Text style={tailwind('text-gray-700 py-2')}>Transfert inter-service</Text>
          <input onChange={handleModeCB} type="radio" value="2" name="gender2" /> <Text style={tailwind('text-gray-700 py-2')}>Urgences</Text>
          <input onChange={handleModeCB} type="radio" value="3" name="gender2" /> <Text style={tailwind('text-gray-700 py-2')}>SAMU</Text>
          <input onChange={handleModeCB} type="radio" value="4" name="gender2" /> <Text style={tailwind('text-gray-700 py-2')}>D'un lieu d'isolement(Chez lui ou centre)</Text>
          <input onChange={handleModeCB} type="radio" value="5" name="gender2" /> <Text style={tailwind('text-gray-700 py-2')}>Autre</Text>
        </div>
      </View>
          {modeCB === "Autre" && <FormInput placeholder="Précisier" onChangeText={handleModeChange} />}


        </View>
      }
<View style={tailwind("items-center")}>
        <View style={styles.row}>
          <FormButton title="Retour" onPress={() => { props.navigation.navigate("ConfirmationDiag1") }} />
          <FormButton title="suivant" onPress={handleSubmit} />
        </View>
        <FormButton title="Pass" onPress={() => { props.navigation.navigate("CaracCliniques1") }} />
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
  addAdmission: actions.addAdmission
};
export default connect(mapStateToProps, mapActionToProps)(Admission);
