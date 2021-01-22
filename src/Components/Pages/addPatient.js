import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import FormInput from "../Form/FormInput";
import tailwind from 'tailwind-rn';
import Steps from "../Form/Steps";
import FormButton from '../Form/FormButton';
import * as actions from "../../Actions/medicalService";
import { connect } from "react-redux";
import { enGB } from 'date-fns/locale'
import { DatePicker } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import './addPatient.css';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import './home.css';
const AddPatient = (props) => {
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


  useEffect(() => {


  }, [localStorage.getItem("addPatientMessage")])

  const [cin, setCin] = useState(0)
  const [matricule, setMatricule] = useState(0)
  const [identifiant, setIdentifiant] = useState("")
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
    console.log(data.target.value)
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
  var handleCinChange = (text) => {
    setCin(text)
  }

  var handleMatriculeChange = (text) => {
    setMatricule(text)
  }
  var handleNomChange = (text) => {
    setNom(text)
  }
  var handleIdentifiantChange = (text) => {
    setIdentifiant(text)
  }
  var handlePrenomChange = (text) => {

    setPrenom(text)
  }
  var handleAddresseChange = (text) => {
    setAdresse(text)
  }

  var handleSexeChange = (data) => {
    console.log(data.target.value)
      setSexe(data.target.value)
  }
  var handleMarieChange = (data) => {
      setMarie(data.target.value)
  }

  var handleVitSeul = (data) => {
    setVitSeul(data.target.value)
  }


  var handleSubmit = (e) => {
    var values = {
      cin: cin,
      matricule: matricule,
      identifiant:identifiant,
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
    e.preventDefault()
       props.cc(values)
         props.navigation.navigate("SearchPatient1")
     }
  var handleExit = (e) => {
    localStorage.setItem("addPatientMessage", JSON.stringify(null))
    props.navigation.navigate("SearchPatient1")
  }
  return (
    <div>
<div class="big">
<View style={styles.row}>
<Container style={{backgroundColor:"rgba(200,200,200,0.75)",backgroundsize: "cover"}} component="main" maxWidth="xs" >
    <div >
    <div >
    <View  >
      <Text style={tailwind('text-gray-700 font-bold text-xl text-center')}>Dossier Patient</Text>
      <Text style={tailwind('text-gray-700 font-bold text-xl text-center')}>Informations générales</Text>
      <Text style={tailwind('text-red-500 font-bold text-center py-2')} > {(localStorage.getItem("addPatientMessage") !== JSON.stringify(null)) && (props.message)}</Text>
      <View style={tailwind(' items-center ')}>
        <FormInput
          placeholder="CIN"
          type="number-pad"
          maxLength={Number("8")}
          onChangeText={handleCinChange}
        />
        <FormInput
          placeholder="Matricule"
          type="number-pad"
          onChangeText={handleMatriculeChange}
          maxLength={Number("10")}
        />
        <FormInput
          placeholder="Identifiant"
          onChangeText={handleIdentifiantChange}
        />
        <FormInput
          placeholder="Nom"
          onChangeText={handleNomChange}
        />
        <FormInput
          placeholder="Prenom"
          onChangeText={handlePrenomChange}
        />
        <View style={styles.row}>
          <div >

            <Text style={tailwind('text-gray-700 py-2')}>Sexe ?</Text>
            <input  onChange={handleSexeChange} type="radio" value="Male" name="gender2" /> <Text style={tailwind('text-gray-700 py-2')}>Male</Text>
            <input  onChange={handleSexeChange} type="radio" value="Female" name="gender2" /> <Text style={tailwind('text-gray-700 py-2')}>Female</Text>
          </div>
        </View>
        <Text style={tailwind('text-gray-700 py-2')}> Date De Naissance ?</Text>
        <div style={tailwind(' items-center ')}>
        <DatePicker date={date} onDateChange={setDate} locale={enGB}>
      {({ inputProps, focused }) => (
        <input
          className={'input' + (focused ? ' -focused' : '')}
          {...inputProps}
        />
      )}
    </DatePicker>
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


        <View style={styles.row}>

          <Text style={tailwind('text-gray-700 py-2 pb-2')}>
            Niveau d'étude{nivEtude}
        </Text>
      </View>
      <View style={styles.row}>

        <div  >

        <div  >  <input  onChange={handleNivEtude} type="radio" value="Non Scolarisé" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Non Scolarisé</Text>
                 <input  onChange={handleNivEtude} type="radio" value="Primaire" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Primaire</Text>

                <input  onChange={handleNivEtude} type="radio" value="Collège" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Collège</Text>
        </div>
          <div  ><input  onChange={handleNivEtude} type="radio" value="Secondaire" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Secondaire</Text>
                <input  onChange={handleNivEtude} type="radio" value="Universiatire" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Universiatire</Text>
          </div>
        </div>

      </View>
        <View style={styles.row}>

          <Text style={tailwind('text-gray-700 py-2')}>
            Marié ?
    </Text>
      </View>
        <View style={styles.row}>

          <div  onChange={handleMarieChange}>
            <input type="radio" value="Oui" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>Oui</Text>
            <input type="radio" value="Non" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>Non</Text>
            <input type="radio" value="Autre" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>Autre</Text>
          </div>

        </View>
        <View style={styles.row}>

          <Text style={tailwind('text-gray-700 py-2')}>
            Vit seul ?
    </Text>
      </View>
        <View style={styles.row}>
          <div  onChange={handleMarieChange}>
            <input type="radio" value={true} name="gender4" /> <Text style={tailwind('text-gray-700 py-2')}>Oui</Text>
            <input type="radio" value={false} name="gender4" /> <Text style={tailwind('text-gray-700 py-2')}>Non</Text>
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
          <FormButton title="Annuler" onPress={handleExit} />
          <FormButton title="Ajouter" onPress={handleSubmit} />
        </View>
      </View>
    </View>
</div></div>
</Container>
<Steps  /> 
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
  message: state.medicalService.message
});
const mapActionToProps = {
  cc: actions.addPatient
};

export default connect(mapStateToProps, mapActionToProps)(AddPatient);