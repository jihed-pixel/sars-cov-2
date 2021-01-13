import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import * as actions from "../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
//import 'localstorage-polyfill';
import FormInput from "../Form/FormInput";
import { DatePicker } from '@assenti/rui-components';
import '@assenti/rui-components/css/index.css';
import FormButton from '../Form/FormButton';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import './home.css';

const InfosGenerales = (props) => {
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
  const [nom, setNom] = useState("")
  const [prenom, setPrenom] = useState("")
  const [date, setDate] = useState("")
  const [sexe, setSexe] = useState("Male")
  const [adresse, setAdresse] = useState("")
  const [nationnalite, setNationnalite] = useState("")
  const [telDomicile, setTelDomicile] = useState("")
  const [telProtable, setTelPortable] = useState("")
  const [profession, setProfession] = useState("")
  const [marie, setMarie] = useState("")
  const [vitSeul, setVitSeul] = useState(false)
  const [nbIndiv, setNbIndiv] = useState(0)
  const [nbEnf, setNbEnf] = useState(0)
  const [nbCham, setNbCham] = useState(0)
  const [nivEtude, setNivEtude] = useState("")


  var handleNivEtude = (data) => {

      setNivEtude(data.target.value)
  }

  var handleNbCham = (text) => {
    setNbCham(text)
  }

  var handleNbEnf = (text) => {
    setNbEnf(text)
  }
  var handleNbIndivChange = (text) => {
    setNbIndiv(text)
  }

  var handleProfessionChange = (text) => {
    setProfession(text)
  }
  var handleTelPortable = (text) => {
    setTelPortable(text)
  }
  var handleTelDomicile = (text) => {
    setTelDomicile(text)
  }
  var handleNationnaliteChange = (text) => {
    setNationnalite(text)
  }
  var handleNomChange = (text) => {
    setNom(text)
  }
  var handlePrenomChange = (text) => {

    setPrenom(text)
  }
  var handleAddresseChange = (text) => {
    setAdresse(text)
  }

  var handleSexeChange = (data) => {
    setSexe(data.target.value)
  }
  var handleMarieChange = (data) => {
    setMarie(data.target.value)
    }


  var handleVitSeul = (data) => {
    if (data.target.value === "Oui") { setVitSeul(true) }
    else setVitSeul(false)

  }

  var handleSubmit = (e) => {
    var values = {

      nom: nom,
      prenom: prenom,
      sexe: sexe,
      birthDate: date,
      nationnalite: nationnalite,
      adresse: adresse,
      telPort: telProtable,
      telDomicile: telDomicile,
      profession: profession,
      niveauEtude: nivEtude,
      vitSeul: vitSeul,
      individu: nbIndiv,
      enfant: nbEnf,
      chambres: nbCham,
      mariee: marie

    }
    console.log(values)
    e.preventDefault()
    props.infosGenerales(props.patientList["cin"], values)
    props.navigation.navigate("PatientDetails")

  }



  return (



<View>
<div class="big">
<Container style={{backgroundColor:"rgba(200,200,200,0.75)",backgroundsize: "cover"}} component="main" maxWidth="xs" >
<Text style={tailwind('text-gray-700 font-bold py-2 text-xl text-center')}>Informations génerales:{props.patientList["generalInformation"]["nom"] + " " + props.patientList["generalInformation"]["prenom"]}</Text>
  <View style={tailwind(' items-center ')}>
  <FormInput
  placeholder="Nom"
  onChangeText={handleNomChange}
  />
  <FormInput
  placeholder="Prenom"
  onChangeText={handlePrenomChange}
  />
    <View style={styles.row}>
      <View style={styles.row}>
      <div  >
      <Text style={tailwind('text-gray-700 py-2')}>Sexe ?</Text>
      <input onChange={handleSexeChange} type="radio" value="Male" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Male</Text>
      <input onChange={handleSexeChange} type="radio" value="Female" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Female</Text>
      </div>
    </View>
  </View>
  <Text style={tailwind('text-gray-700 py-2')}>  Date De Naissance ?</Text>
  <div>
  <DatePicker
        color="primary"
        placeholder="YYYY-MM-DD"
        value={date}
        clearable
        minDate="1920-05-01"
        maxDate={new Date()}
        onDate={(date) => {
          setDate(date)
        }}
        onClear={() => setDate('')}
        width={250}
        onChange={(value) => setDate(value)}/>
  </div>
  <FormInput
  placeholder="Adresse"
  onChangeText={handleAddresseChange}
        />
        <FormInput
          placeholder="Nationalité"
          onChangeText={handleNationnaliteChange}
        />
        <FormInput
          placeholder="Telephone Domicile"
          onChangeText={handleTelDomicile}
          type="number-pad"
          maxLength={Number("8")}
        />
        <FormInput
          placeholder="Telephone portable"
          type="number-pad"
          onChangeText={handleTelPortable}
          maxLength={Number("8")}
        />
        <FormInput
          placeholder="Profession"
          onChangeText={handleProfessionChange}
        />


        <View style={tailwind("items-center py-2")}>

          <Text style={tailwind('text-gray-700 py-2 pb-2')}>Niveau d'étude ?</Text>
    <View style={styles.row}>
      <div>
      <div>  <input onChange={handleNivEtude} type="radio" value="Non Scolarisé" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Non Scolarisé</Text>
        <input onChange={handleNivEtude} type="radio" value="Primaire" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Primaire</Text>
        <input onChange={handleNivEtude} type="radio" value="Collège" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Collège</Text>
        </div><input onChange={handleNivEtude} type="radio" value="Secondaire" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Secondaire</Text>
        <input onChange={handleNivEtude} type="radio" value="Universiatire" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Universiatire</Text>
      </div>
    </View>
        </View>
        <View style={styles.row}>

          <Text style={tailwind('text-gray-700 py-2')}>
            Marié ?
    </Text>
    </View>
      <View style={styles.row}>
        <div  >
          <input onChange={handleMarieChange} type="radio" value="Oui" name="gender2" /> <Text style={tailwind('text-gray-700 py-2')}>Oui</Text>
          <input onChange={handleMarieChange} type="radio" value="Non" name="gender2" /> <Text style={tailwind('text-gray-700 py-2')}>Non</Text>
          <input onChange={handleMarieChange} type="radio" value="Autre" name="gender2" /> <Text style={tailwind('text-gray-700 py-2')}>Autre</Text>
        </div>
      </View>





        <View style={styles.row}>

          <Text style={tailwind('text-gray-700 py-2')}>
            Vit seul ?
            </Text>
            </View>
            <View style={styles.row}>
            <div  >
            <input onChange={handleVitSeul} type="radio" value="Oui" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>Oui</Text>
            <input onChange={handleVitSeul} type="radio" value="Non" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>Non</Text>
            </div>


            </View>
        <FormInput
          placeholder="Nbre d'individus par famille"
          type="number-pad"
          onChangeText={handleNbIndivChange}
          maxLength={Number("2")}
        />

        <FormInput
          placeholder="Nbre d'enfants à cahrge"
          type="number-pad"
          onChangeText={handleNbEnf}
          maxLength={Number("2")}
        />

        <FormInput
          placeholder="Nbre de chambres dans la maison"
          type="number-pad"
          onChangeText={handleNbCham}
          maxLength={Number("2")}

        />
        <View style={styles.row}>
          <FormButton title="Enregister" onPress={handleSubmit} />
          <FormButton title="Annuler" onPress={() => { props.navigation.navigate("PatientDetails") }} />
        </View>
      </View>
      </Container>
</div>
<ParticlesBg type="cobweb" config={config} bg={true} />
</View>

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
  infosGenerales: actions.infosGenerales
};

export default connect(mapStateToProps, mapActionToProps)(InfosGenerales);
