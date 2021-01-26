import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import FormInput from "../../Form/FormInput";


import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import { DatePicker } from '@assenti/rui-components';
import '@assenti/rui-components/css/index.css';
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



const ExamBio1 = (props) => {
  const [type, setType] = useState("NFS")
  const [datePr, setDatePr] = useState();
  //NFS
  const [gb, setGb] = useState()
  const [lym, setLym] = useState()
  const [pla, setPla] = useState()
  const [hb, setHb] = useState()
  const [ht, setHt] = useState()
  //BIlan renal
  const [creat, setCreat] = useState()
  const [clairCreat, setClairCreat] = useState()
  const [uree, setUree] = useState()

  //Bilan hepatique
  const [biliru, setBiliru] = useState()
  const [biliru1, setBiliru1] = useState()
  const [alat, setAlat] = useState()
  const [asat, setAsat] = useState()
  const [tp, setTp] = useState()
  const [facteurV, setFacteurV] = useState()
  const [fibrinogene, setFibrinogene] = useState()
  const [cpk_mb, setCpk_mb] = useState()
  const [troponine, setTroponine] = useState()
  const [pro_bnp, setPro_bnp] = useState()
  const [albumi, setAlbumi] = useState()
  const [d_dimère, setD_dimère] = useState()
  const [ldh, setLdh] = useState()
  const [crp, setCrp] = useState()
  const [procal, setProcal] = useState()
  const [ferri, setFerri] = useState()
  //GDSA
  const [ph, setPh] = useState()
  const [pao2, setPao2] = useState()
  const [paco2, setPaco2] = useState()
  const [hco3_, setHco3_] = useState()
  const [sao2, setSao2] = useState()

  //ionogramme
  const [nak, setNak] = useState()
  const [nak1, setNak1] = useState()
  const [nakUr, setNakUr] = useState()
  const [nakUr1, setNakUr1] = useState()
  //Autre
  const [fileName, setFileName] = useState()
  const [file, setFile] = useState()
  // controle de saisie
  const [test, setTest] = useState()


  var handleTypeSdate = (data) => {
    setDatePr(data.target.value)     
       }
       var handleTypeSdate1 = (data) => {
        setDatePr(data.target.value)     
           }
           var handleTypeSdate2 = (data) => {
            setDatePr(data.target.value)     
               }
               var handleTypeSdate3 = (data) => {
                setDatePr(data.target.value)     
                   }
                   var handleTypeSdate4 = (data) => {
                    setDatePr(data.target.value)     
                       }
  var handleSubmit = () => {
    
    var values = {
      datePr: datePr,
      type: type,
      gb: gb,
      lym: lym,
      pla: pla,
      hb: hb,
      ht: ht,
      creat: creat,
      clairCreat: clairCreat,
      uree: uree,
      ph: ph,
      paco2: paco2,
      pao2: pao2,
      hco3_: hco3_,
      sao2: sao2,
      nak: nak,
      nak1: nak1,
      nakUr: nakUr,
      nakUr1: nakUr1,
      biliru: biliru,
      biliru1: biliru1,
      alat: alat,
      asat: asat,
      tp: tp,
      facteurV: facteurV,
      fibrinogene: fibrinogene,
      cpk_mb: cpk_mb,
      troponine: troponine,
      pro_bnp: pro_bnp,
      albumi: albumi,
      d_dimère: d_dimère,
      ldh: ldh,
      crp: crp,
      procal: procal,
      ferri: ferri


    }
    //console.log(values)
    props.addExamBio(props.patientList["cin"], values)
    props.navigation.navigate("Traitement1")

  }



  var handleTypeChange = (data) => {
      setType(data.target.value)
    setDatePr()

  }

  return (
<div>
<div class="big">
<View style={styles.row}>
<Container style={{backgroundColor:"rgba(200,200,200,0.75)",backgroundsize: "cover"}} component="main" maxWidth="xs" >
      <View style={tailwind("items-center")}>
      <Text style={tailwind('text-gray-700 font-bold py-2 text-xl text-center')}>Examens Biologiques</Text>
      <Text style={tailwind('text-gray-700 font-bold py-2  text-center')}>Patient:{props.patientList["generalInformation"]["nom"] + " " + props.patientList["generalInformation"]["prenom"]}</Text>
      <View style={tailwind("items-center")}>
      <div>
      <div>  <input  onChange={handleTypeChange} type="radio" value="NFS" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>NFS</Text></div>
      <div>  <input  onChange={handleTypeChange} type="radio" value="BilanRenal" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Bilan renal</Text></div>
      <div>  <input  onChange={handleTypeChange} type="radio" value="BilanHepa" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Bilan hepatique</Text></div>
      <div>  <input  onChange={handleTypeChange} type="radio" value="GDSA" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>GDSA</Text></div>
      <div>  <input  onChange={handleTypeChange} type="radio" value="Ionogra" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Ionogramme</Text></div>
      <div>  <input  onChange={handleTypeChange} type="radio" value="Autre" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Autres</Text></div>
      </div>
      </View>

      <Text style={tailwind("text-center text-red-500 py-4")}>{test !== undefined && test}</Text>


      {
        type === "NFS" && <View style={tailwind("items-center py-12")}>
          <FormInput placeholder="GB" onChangeText={setGb} type="decimal-pad" />
          <FormInput placeholder="Lymphocyte" onChangeText={setLym} type="decimal-pad" />
          <FormInput placeholder="Plaquette" onChangeText={setPla} type="decimal-pad" />
          <FormInput placeholder="Hb" onChangeText={setHb} type="decimal-pad" />
          <FormInput placeholder="Ht" onChangeText={setHt} type="decimal-pad" />
          <FormButton title="Enregitrer" onPress={handleSubmit} type="decimal-pad" />

        </View>
      }
      {
        type === "BilanRenal" && <View style={tailwind("items-center py-12")}>
        <Text style={tailwind("pt-8 text-center pb-2 text-gray-700")}>Date de prise de l'examen</Text>
          <input type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate}/>
          <FormInput placeholder="Creat" onChangeText={setCreat} type="decimal-pad" />
          <FormInput placeholder="Clairance de la creat" onChangeText={setClairCreat} type="decimal-pad" />
          <FormInput placeholder="Urée" onChangeText={setUree} type="decimal-pad" />
          <FormButton title="Enregitrer" onPress={handleSubmit} />
        </View>
      }
      {
        type === "GDSA" && <View style={tailwind("items-center py-12")}>
        <Text style={tailwind("pt-8 text-center pb-2 text-gray-700")}>Date de prise de l'examen</Text>
          <input type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate1}/>
        
          <FormInput placeholder="pH" onChangeText={setPh} type="decimal-pad" />
          <FormInput placeholder="PaO2" onChangeText={setPao2} type="decimal-pad" />
          <FormInput placeholder="PaCO2" onChangeText={setPaco2} type="decimal-pad" />
          <FormInput placeholder="HCO3-" onChangeText={setHco3_} type="decimal-pad" />
          <FormInput placeholder="SaO2" onChangeText={setSao2} type="decimal-pad" />
          <FormButton title="Enregitrer" onPress={handleSubmit} />

        </View>
      }
      {
        type === "BilanHepa" && <View style={tailwind("items-center py-12")}>
        <Text style={tailwind("pt-8 text-center pb-2 text-gray-700")}>Date de prise de l'examen</Text>
          <input type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate2}/>
        
          <FormInput placeholder="Bilirubine (T)" onChangeText={setBiliru} type="decimal-pad" />
          <FormInput placeholder="Bilirubine (D)" onChangeText={setBiliru1} type="decimal-pad" />
          <FormInput placeholder="ALAT" onChangeText={setAlat} type="decimal-pad" />
          <FormInput placeholder="ASAT" onChangeText={setAsat} type="decimal-pad" />
          <FormInput placeholder="TP" onChangeText={setTp} type="decimal-pad" />
          <FormInput placeholder="Facteur V" onChangeText={setFacteurV} type="decimal-pad" />
          <FormInput placeholder="Fibrinogene" onChangeText={setFibrinogene} type="decimal-pad" />
          <FormInput placeholder="CPK-MB" onChangeText={setCpk_mb} type="decimal-pad" />
          <FormInput placeholder="Troponine" onChangeText={setTroponine} type="decimal-pad" />
          <FormInput placeholder="Pro BNP" onChangeText={setPro_bnp} type="decimal-pad" />
          <FormInput placeholder="ALbuminémie" onChangeText={setAlbumi} type="decimal-pad" />
          <FormInput placeholder="D-Dimère" onChangeText={setD_dimère} type="decimal-pad" />
          <FormInput placeholder="LDH" onChangeText={setLdh} type="decimal-pad" />
          <FormInput placeholder="CRP" onChangeText={setCrp} type="decimal-pad" />
          <FormInput placeholder="Procalcitonine" onChangeText={setProcal} type="decimal-pad" />
          <FormInput placeholder="FErritinemie" onChangeText={setFerri} type="decimal-pad" />
          <FormButton title="Enregitrer" onPress={handleSubmit} />


        </View>
      }
      {
        type === "Ionogra" && <View style={tailwind("items-center py-12")}>
        <Text style={tailwind("pt-8 text-center pb-2 text-gray-700")}>Date de prise de l'examen</Text>
          <input type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate3}/>
        
          <FormInput placeholder="Na+" onChangeText={setNak} type="decimal-pad" />
          <FormInput placeholder="K+" onChangeText={setNak1} type="decimal-pad" />
          <FormInput placeholder="Na+ urinaire" onChangeText={setNakUr} type="decimal-pad" />
          <FormInput placeholder="K+ urinaire" onChangeText={setNakUr1} type="decimal-pad" />
          <FormButton title="Enregitrer" onPress={handleSubmit} />

        </View>
      }
      {
        type === "Autre" && <View style={tailwind("items-center py-12")}>
        <Text style={tailwind("pt-8 text-center pb-2 text-gray-700")}>Date de prise de l'examen</Text>
          <input type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate4}/>
        
        </View>
      }
      <View style={tailwind("items-center py-12")}>
      <FormButton title="Retour" onPress={() => props.navigation.navigate("ExamenRadioParaCli1")} />
        <FormButton title="Suivant" onPress={() => props.navigation.navigate("Traitement1")} />
      </View>
      </View>
      </Container>
      <Steps current={10} /> 
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
  patientList: state.medicalService.patientList,
});
const mapActionToProps = {
  login: actions.login,
  logout: actions.logout,
  addExamBio: actions.addExamBio
};
export default connect(mapStateToProps, mapActionToProps)(ExamBio1);
