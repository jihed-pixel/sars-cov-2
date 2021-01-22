import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
//import 'localstorage-polyfill';
import FormInput from '../../Form/FormInput';
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

const HabitudesDeVie1 = (props) => {
    useEffect(() => {
    })
    const [tabagisme, setTabagisme] = useState(false)
    const [nbCigarettes, setNbCigarettes] = useState(0)
    const [freqChicha, setFreqChicha] = useState(0)
    const [drogue, setDrogue] = useState(false)
    const [alcool, setAlcool] = useState(false)
    const [gs, setGs] = useState(0)
    const [poids, setPoids] = useState(0)
    const [taille, setTaille] = useState(0)


    var handleAlcoolChange = (data) => {
      if (data.target.value==="Oui")
        setAlcool(true)
      if (data.target.value==="Non")
        setAlcool(false)
    }
    var handleDrogueChange = (data) => {
      if (data.target.value==="Oui")
        setDrogue(true)
      if (data.target.value==="Non")
        setDrogue(false)
    }
    var handleTabagismeChange = (data) => {
      if (data.target.value==="Oui")
        setTabagisme(true)
      if (data.target.value==="Non")
        setTabagisme(false)
    }
    var handleNbCigarettesChange = (data) => {
        setNbCigarettes(data)
    }
    var handleFreqChichaChange = (data) => {
        setFreqChicha(data)
    }
    var handleGsChange = (data) => {
        setGs(data)
    }
    var handlePoidsChange = (data) => {
        setPoids(data)
    }
    var handleTailleChange = (data) => {
        setTaille(data)
    }
    var handleSubmit = (e) => {
        var values = {
            poids: poids,
            taille: taille,
            gs: gs,
            alcool: alcool,
            drogue: drogue,
            nbCigarettes: nbCigarettes,
            freqChicha: freqChicha
        }
        console.log(values)
        e.preventDefault();
        props.habitudesDeViePatient(props.patientList["cin"], values)
        props.navigation.navigate("ConfirmationDiag1")
    }

    return (
      <div>
      <div class="big">
      <View style={styles.row}>
      <Container style={{backgroundColor:"rgba(200,200,200,0.75)",backgroundsize: "cover"}} component="main" maxWidth="xs" >
            <View style={tailwind(' items-center ')} >

                <View style={styles.row}>
                   <View style={styles.row}>
                   <div  >
                    <Text style={tailwind('text-gray-700 py-2')}>Tabagisme ?</Text>
                    <input onChange={handleTabagismeChange} type="radio" value="Non" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Non</Text>
                    <input onChange={handleTabagismeChange} type="radio" value="Oui" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Oui</Text>
                   </div>
                </View>
                </View>

                <View>{tabagisme == true && (
                  <View style={tailwind("items-center")}>

                            <FormInput placeholder="Nombre de cigarettes/jour"
                                type="number-pad"
                                onChangeText={handleNbCigarettesChange}
                            />


                            <FormInput placeholder="Frequence de Chicha/semaine"
                                type="number-pad"
                                onChangeText={handleFreqChichaChange}
                            />
                        </View>

                    )}

                </View>
                <View style={styles.row}>
                    <div  >
                    <Text style={tailwind('text-gray-700 py-2')}>Drogues/cannabis ?</Text>
                      <input onChange={handleDrogueChange} type="radio" value="Non" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Non</Text>
                      <input onChange={handleDrogueChange} type="radio" value="Oui" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Oui</Text>
                    </div>


                </View>
                <View style={styles.row}>


                    <div  >
                    <Text style={tailwind('text-gray-700 py-2')}>Alcool ?</Text>
                      <input onChange={handleAlcoolChange} type="radio" value="Non" name="gender2" /> <Text style={tailwind('text-gray-700 py-2')}>Non</Text>
                      <input onChange={handleAlcoolChange} type="radio" value="Oui" name="gender2" /> <Text style={tailwind('text-gray-700 py-2')}>Oui</Text>
                    </div>


                </View>
                <FormInput placeholder="Poids"
                    onChangeText={handlePoidsChange} />
                <FormInput placeholder="Taille"
                    onChangeText={handleTailleChange} />
                <FormInput placeholder="GS"
                    onChangeText={handleGsChange} />
                <View style={styles.row}>
                    <FormButton title="Annuler" onPress={() => { props.navigation.navigate("HabitudesDeVie1") }} />
                    <FormButton title="Suivant" onPress={handleSubmit} />
                </View>
                <FormButton title="Pass" onPress={() => { props.navigation.navigate("ConfirmationDiag1") }} />
            </View>
            </Container>
            <Steps current={3} /> 
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
    habitudesDeViePatient: actions.habitudesDeViePatient

};

export default connect(mapStateToProps, mapActionToProps)(HabitudesDeVie1);
