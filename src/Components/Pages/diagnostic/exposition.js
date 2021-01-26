import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import FormInput from '../../Form/FormInput';
import FormButton from '../../Form/FormButton';
import { medicalService } from '../../../Reducers/medicalService';
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



const Exposition = (props) => {
  var handleTypeSdate = (data) => {
    setDateD(data.target.value)     
       }
           var handleTypeSdate1 = (data) => {
            setDateF(data.target.value)     
               }
               var handleTypeSdate2 = (data) => {
                setDateEnt(data.target.value)     
                   }
                   var handleTypeSdate3 = (data) => {
                    setDateV1(data.target.value)     
                       }
                       var handleTypeSdate4 = (data) => {
                        setDateV2(data.target.value)     
                           }
                           var handleTypeSdate5 = (data) => {
                            setDateDebutC(data.target.value)     
                               }
                               var handleTypeSdate6 = (data) => {
                                setDateFinC(data.target.value)     
                                   }
                                   var handleTypeSdate7 = (data) => {
                                    setDateDQu(data.target.value)     
                                       }
                                       var handleTypeSdate8 = (data) => {
                                        setDateFQu(data.target.value)     
                                           }
                                           


  //component test variable
  const [sejour, setSejour] = useState(false)
  const [arivee, setArivee] = useState(false)
  const [parcours, setParcours] = useState(false)
  const [etroit, setEtoit] = useState(false)
  const [autres, setAutres] = useState(false)
  const [quarantine, setQurarantine] = useState(false)
  //checkbox variable
  const [contactC, setContactC] = useState("Oui")
  const [autreBox, setAutreBox] = useState("Oui")
  const [miseQuarantine, setMiseQuarantine] = useState("Oui")

  //values
  //Sejour /Transit component
  const [habite, setHabite] = useState(true)
  const [dateD, setDateD] = useState()
  const [dateF, setDateF] = useState()
  const [villes, setVilles] = useState()
  //arivee en tunisie
  const [dateEnt, setDateEnt] = useState()
  const [lieuEnt, setLieuEnt] = useState()
  const [moyensTran, setMoyensTran] = useState()
  //parcours en Tunise
  const [villesPar, setVillesPar] = useState()
  const [dateV1, setDateV1] = useState()
  const [moyenTranV1, setMoyenTranV1] = useState()
  const [dateV2, setDateV2] = useState()
  const [moyenTranV2, setMoyenTranV2] = useState()
  const [moyenTranQu, setMoyenTranQu] = useState()
  //contact etroit
  const [idTun, setIdTun] = useState(0)
  const [dateDebutC, setDateDebutC] = useState()
  const [dateFinC, setDateFinC] = useState()
  //Autres criteres ayant conduit

  const [details, setDetails] = useState()
  //mise en quarantine
  const [dateDQu, setDateDQu] = useState()
  const [dateFDQu, setDateFQu] = useState()
  const [respect, setRespect] = useState(true)

  //values handleChange functions
  //sejour/transit values
  var habiteHandleChange = (data) => {
    if (data.target.value==="Oui")
      setHabite(true)
    if (data.target.value==="Non")
      setHabite(false)
  }
  var handleVillesChange = (text) => {
    setVilles(text)
  }
  //arrivee values
  var handleLieuEnt = (text) => {
    setLieuEnt(text)
  }
  var handletMoyensTran = (text) => {
    setMoyensTran(text)
  }
  //parcours en Tunisie
  var handleVillesPar = (text) => {
    setVillesPar(text)
  }
  var handleMoyenTranV1 = (text) => {
    setMoyenTranV1(text)
  }
  var handleMoyenTranV2 = (text) => {
    setMoyenTranV2(text)
  }
  var handleMoyenTranQu = (text) => {
    setMoyenTranQu(text)
  }
  //contact etroit
  var handleIdTun = (text) => {
    setIdTun(text)
  }
  //AUtres criteres

  var handleDetailsChange = (text) => {
    setDetails(text)
  }
  //Mise en quarantine
  var handleRespectChange = (data) => {
    if (data.target.value=="Oui")
      setRespect(true)
    else setRespect(false)
  }

  var handleSejourChange = () => {
    setSejour(!sejour)
  }
  var handleAriveeChange = () => {
    setArivee(!arivee)
  }
  var handleParousChange = () => {
    setParcours(!parcours)
  }
  var handleEtroitChange = () => {
    setEtoit(!etroit)
  }
  var handleAutresChange = () => {
    setAutres(!autres)
  }
  var handleQuarantineChange = () => {
    setQurarantine(!quarantine)
  }
  var handleContactCChange = (data) => {
      setContactC(data.target.value)
  }
  var handleAutreBoxChange = (data) => {
      setAutreBox(data.target.value)
  }
  var handleMiseQuarantineChange = (data) => {
    if (data.target.value==="Oui")
      setMiseQuarantine("Oui")
    else setMiseQuarantine("Non")
  }

  //submit function
  var handleSubmit = (e) => {
    e.preventDefault()
    var values = {
      //Sejour /transit
      habite: habite,
      dateD: dateD,
      dateF: dateF,
      villes: villes,
      // Arivee
      dateEnt: dateEnt,
      lieuEnt: lieuEnt,
      moyensTran: moyensTran,
      // parcours en tunisie
      villesPar: villesPar,
      dateV1: dateV1,
      dateV2: dateV2,
      moyenTranV1: moyenTranV1,
      moyenTranV2: moyenTranV2,
      moyenTranQu: moyenTranQu,

      //contact etroit
      contact: contactC,
      idTun: idTun,
      dateDebutC: dateDebutC,
      dateFinC: dateFinC,

      //autre critere
      autre: autreBox,
      details: details,

      //mise en quarantine
      dateDQu: dateDQu,
      dateFDQu: dateFDQu,
      respect: respect


    }
    console.log(values)

    props.addExposition(props.patientList["cin"], values)
    props.navigation.navigate("PatientDetails")
  }
  return (
    <div>
<div class="big">
<Container style={{backgroundColor:"rgba(200,200,200,0.75)",backgroundsize: "cover"}} component="main" maxWidth="xs" >



      <View style={tailwind(' items-center ')} >
        <Text style={tailwind('text-gray-700 font-bold py-2 text-xl ')}>Expositions à Risque </Text>
        <Text style={tailwind('text-gray-700 font-bold py-2 ')}>Patient:{props.patientList["generalInformation"]["nom"] + " " + props.patientList["generalInformation"]["prenom"]}</Text>


        <View style={tailwind(' items-center ')}>
          <FormButton title="Séjour ou transit dans une zone a risque" onPress={handleSejourChange}/>
          {sejour == true && <View style={tailwind('items-center ')}>
          <Text style={tailwind('text-gray-700 py-2')}>Réside habituellement dans la zone a risque  ?</Text>
          <div>
          <input  onChange={habiteHandleChange} type="radio" value="Oui" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Oui</Text>
          <input  onChange={habiteHandleChange} type="radio" value="Non" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Non</Text>
          <input  onChange={habiteHandleChange} type="radio" value="row" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>row</Text>
        </div>
            <Text>Séjour ou transit dans zone risque ?</Text>
            <Text style={tailwind("pt-8 text-center pb-2 text-gray-700")}>Du ?</Text>
            <input type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate}/>
            <Text style={tailwind("pt-8 text-center pb-2 text-gray-700")}>Au ?</Text>
            <input type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate1}/>
            

          </View>
          }
          <FormButton title="Arivée sur le territoire tunisien" onPress={handleAriveeChange}/>
          {arivee == true && <View style={tailwind("items-center")}>
          <Text style={tailwind("pt-8 text-center pb-2 text-gray-700")}>Date d'arrivée en Tunisie?</Text>
          <input type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate2}/>
          
            <FormInput placeholder="Lieu d'entrée" onChangeText={handleLieuEnt} />
            <FormInput placeholder="Moyen de transport" onChangeText={handletMoyensTran} />
          </View>}
          <FormButton title="Parcours en Tunisie" onPress={handleParousChange}/>
          {(parcours == true) && <View style={tailwind("items-center")}>
            <FormInput placeholder="Villes visités en Tunisie" onChangeText={handleVillesPar} />
            <Text style={tailwind("pt-8 text-center pb-2 text-gray-700")}>Date d'arrivée ville 1</Text>
            <input type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate3}/>
            
            <FormInput placeholder="Moyens de transport" onChangeText={handleMoyenTranV1} />
            <Text style={tailwind("pt-8 text-center pb-2 text-gray-700")}>Date d'arrivée ville 2</Text>
            <input type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate4}/>
            
            <FormInput placeholder="Moyens de transport" onChangeText={handleMoyenTranV2} />
            <FormInput placeholder="Moyen de transport quotidien" onChangeText={handleMoyenTranQu} />

          </View>}
          <FormButton title="Contact étroit" onPress={handleEtroitChange}/>
          {
            (etroit == true) && (<View style={tailwind("items-center")}>
        <div>
	         <Text style={tailwind('text-gray-700 py-2')}>Contact avec un cas confirmé ou suspect ?</Text>
          <input  onChange={handleContactCChange} type="radio" value="Oui" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Oui</Text>
          <input  onChange={handleContactCChange} type="radio" value="Non" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Non</Text>
          <input  onChange={handleContactCChange} type="radio" value="Ne sait pas" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Ne sait pas</Text>
          <input  onChange={handleContactCChange} type="radio" value="row" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>row</Text>
        </div>
            </View>
            )}
          {(contactC === "Oui" && etroit == true) && (<View style={tailwind("items-center")}>
          <Text style={tailwind("pt-8 text-center pb-2 text-gray-700")}>Du ?</Text>
          <input type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate5}/>
          <Text style={tailwind("pt-8 text-center pb-2 text-gray-700")}>Au ?</Text>
          <input type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate6}/>

            <FormInput placeholder="Identifiant en Tunisie" type="number-pad" onChangeText={handleIdTun} />
          </View>)}

          <FormButton title="Autres critères ayant conduit au classement en cas possible" onPress={handleAutresChange}/>
          {(autres == true) && <View style={tailwind("items-center")}>
          <div>
             <Text style={tailwind('text-gray-700 py-2')}>Contact avec un cas confirmé ou suspect ?</Text>
            <input  onChange={handleAutreBoxChange} type="radio" value="Oui" name="gender2" /> <Text style={tailwind('text-gray-700 py-2')}>Oui</Text>
            <input  onChange={handleAutreBoxChange} type="radio" value="Non" name="gender2" /> <Text style={tailwind('text-gray-700 py-2')}>Non</Text>
            <input  onChange={handleAutreBoxChange} type="radio" value="NSP" name="gender2" /> <Text style={tailwind('text-gray-700 py-2')}>NSP</Text>
            <input  onChange={handleAutreBoxChange} type="radio" value="row" name="gender2" /> <Text style={tailwind('text-gray-700 py-2')}>row</Text>
          </div>
            {autreBox === "Oui" && <FormInput placeholder="Précisier" onChangeText={handleDetailsChange} />}


          </View>}
          <FormButton title="Mise en quarantine" onPress={handleQuarantineChange}/>
          {(quarantine == true) && <View style={tailwind("items-center")}>
          <div>
             <Text style={tailwind('text-gray-700 py-2')}>Mise en quarantine ?</Text>
            <input  onChange={handleMiseQuarantineChange} type="radio" value="Oui" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>Oui</Text>
            <input  onChange={handleMiseQuarantineChange} type="radio" value="Non" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>Non</Text>
            <input  onChange={handleMiseQuarantineChange} type="radio" value="row" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>row</Text>
          </div>
            <Text style={tailwind('text-gray-700 py-2')}>  Mise en quarantine ?</Text>
          </View>}
          {(quarantine == true && miseQuarantine === "Oui") && <View style={tailwind('items-center')}>
          <Text style={tailwind("pt-8 text-center pb-2 text-gray-700")}></Text>
          <input type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate7}/>
          <Text style={tailwind("pt-8 text-center pb-2 text-gray-700")}></Text>
          <input type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate8}/>
          
          <div>
             <Text style={tailwind('text-gray-700 py-2')}>Respect de la quarantine ?</Text>
            <input  onChange={handleRespectChange} type="radio" value="Oui" name="gender4" /> <Text style={tailwind('text-gray-700 py-2')}>Oui</Text>
            <input  onChange={handleRespectChange} type="radio" value="Non" name="gender4" /> <Text style={tailwind('text-gray-700 py-2')}>Non</Text>
            <input  onChange={handleRespectChange} type="radio" value="row" name="gender4" /> <Text style={tailwind('text-gray-700 py-2')}>row</Text>
          </div>
          </View>}




          <FormButton title="Retour" onPress={() => { props.navigation.navigate("PatientDetails") }} />
          <FormButton title="Enregistrer" onPress={handleSubmit} />
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
  //loggedUser: state.medicalService.loggedUser,
  patientList: state.medicalService.patientList
});
const mapActionToProps = {
  //login: actions.login,
  addExposition: actions.addExposition
};
export default connect(mapStateToProps, mapActionToProps)(Exposition);
