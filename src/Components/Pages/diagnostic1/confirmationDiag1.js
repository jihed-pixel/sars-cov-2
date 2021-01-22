import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import * as actions from "../../../Actions/medicalService";

import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';

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

const ConfirmationDiag = (props) => {
  const [test, setTest] = useState("Pcr")
  const [datePr, setDatePr] = useState()
  const [type, setType] = useState("Nasopharyngé")
  const [resultat, setResultat] = useState("Positif")
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
  var handleSubmit = (e) => {
    e.preventDefault();
    var values = {
      test: test,
      datePr: datePr,
      result: resultat,
      type: type
    }
    //console.log(values)
    props.addConfDiag(props.patientList["cin"], values)
    props.navigation.navigate("Admission1")
  }

  var handleTestChange = (data) => {
      setTest(data.target.value)
    setResultat("Positif")
    setDatePr()
  }
  var handleTypeChange = (data) => {
      setType(data.target.value)
  }

  var handleResulat1Change = (data) => {
      setResultat(data.target.value)
  }
  var handleResultatChange = (data) => {
      setResultat(data.target.value)

  }

  return (
    <div>
<div class="big">
<View style={styles.row}>
<Container style={{backgroundColor:"rgba(200,200,200,0.75)",backgroundsize: "cover"}} component="main" maxWidth="xs" >
<View>
      <Text style={tailwind('text-gray-700 font-bold py-2 text-xl text-center')}>Confirmation diagnostique</Text>
      <Text style={tailwind('text-gray-700 font-bold py-2  text-center')}>Patient:{props.patientList["generalInformation"]["nom"] + " " + props.patientList["generalInformation"]["prenom"]}</Text>

      <View style={tailwind(' items-center ')} >
      <div  >
      <Text style={tailwind(" text-gray-700 text-center pt-8 pb-2")}>Type de confirmation ?</Text>
      <div>  <input onChange={handleTestChange} type="radio" value="Pcr" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>PCR</Text></div>
      <div>  <input onChange={handleTestChange} type="radio" value="RapideAc" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Test rapide AC</Text></div>
      <div>  <input onChange={handleTestChange} type="radio" value="RapideAg" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Test rapide AG</Text></div>
      <div>  <input onChange={handleTestChange} type="radio" value="Serologie" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Sérologie</Text></div>
      </div>
      </View>
      {test === "Pcr" && <View style={tailwind("items-center py-6")}>
      <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>Date de prise ?</Text>
      <input type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate}/>
        <View style={tailwind(' items-center ')} >
        <div  >
        <Text style={tailwind(" text-gray-700 text-center pt-8 pb-2")}>Type ?</Text>
        <div>  <input onChange={handleTypeChange} type="radio" value="Nasopharyngé" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Nasopharyngé</Text></div>
        <div>  <input onChange={handleTypeChange} type="radio" value="Aspiration trachéale" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Aspiration trachéale</Text></div>
        <div>  <input onChange={handleTypeChange} type="radio" value="Sanguin" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Sanguin</Text></div>
        <div>  <input onChange={handleTypeChange} type="radio" value="Selle ou pvt rectal" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Selle ou pvt rectal</Text></div>
        </div>
        </View>
        <View style={tailwind(' items-center ')} >
        <div  >
        <Text style={tailwind(" text-gray-700 text-center pt-8 pb-2")}>Resultat ?</Text>
        <div>  <input onChange={handleResulat1Change} type="radio" value="Positif" name="gender2" /> <Text style={tailwind('text-gray-700 py-2')}>Positif</Text></div>
        <div>  <input onChange={handleResulat1Change} type="radio" value="Negatif" name="gender2" /> <Text style={tailwind('text-gray-700 py-2')}>Negatif</Text></div>
        <div>  <input onChange={handleResulat1Change} type="radio" value="Douteux" name="gender2" /> <Text style={tailwind('text-gray-700 py-2')}>Douteux</Text></div>
        </div>
        </View>
      </View> }
      {test === "RapideAc" && <View style={tailwind("items-center py-6")}>
      <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>Date de prise ?</Text>
      <input type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate1}/>
      
        <View style={tailwind(' items-center ')} >
        <div  >
        <Text style={tailwind(" text-gray-700 text-center pt-8 pb-2")}>Resultat ?</Text>
        <div>  <input onChange={handleResultatChange} type="radio" value="Positif" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>Positif</Text></div>
        <div>  <input onChange={handleResultatChange} type="radio" value="Negatif" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>Negatif</Text></div>
        <div>  <input onChange={handleResultatChange} type="radio" value="row" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>row</Text></div>
        </div>
        </View>
      </View>
      }
      {test === "RapideAg" && <View style={tailwind("items-center py-6")}>
      <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>Date de prise ?</Text>
      <input type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate2}/>
      
        <View style={tailwind(' items-center ')} >
        <div  >
        <Text style={tailwind(" text-gray-700 text-center pt-8 pb-2")}>Resultat ?</Text>
        <div>  <input onChange={handleResultatChange} type="radio" value="Positif" name="gender4" /> <Text style={tailwind('text-gray-700 py-2')}>Positif</Text></div>
        <div>  <input onChange={handleResultatChange} type="radio" value="Negatif" name="gender4" /> <Text style={tailwind('text-gray-700 py-2')}>Negatif</Text></div>
        <div>  <input onChange={handleResultatChange} type="radio" value="row" name="gender4" /> <Text style={tailwind('text-gray-700 py-2')}>row</Text></div>
        </div>
        </View>
      </View>
      }
      {test === "Serologie" && <View style={tailwind("items-center py-6")}>
      <Text style={tailwind('text-gray-700 font-bold py-2 text-xl')}>Date de prise ?</Text>
      <input type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate3}/>
      
        <View style={tailwind(' items-center ')} >
        <div  >
        <Text style={tailwind(" text-gray-700 text-center pt-8 pb-2")}>Resultat ?</Text>
        <div>  <input onChange={handleResultatChange} type="radio" value="Positif" name="gender5" /> <Text style={tailwind('text-gray-700 py-2')}>Positif</Text></div>
        <div>  <input onChange={handleResultatChange} type="radio" value="Negatif" name="gender5" /> <Text style={tailwind('text-gray-700 py-2')}>Negatif</Text></div>
        <div>  <input onChange={handleResultatChange} type="radio" value="row" name="gender5" /> <Text style={tailwind('text-gray-700 py-2')}>row</Text></div>
        </div>
        </View>
      </View>
      }
      <View style={tailwind("items-center")}>
        <View style={styles.row}>
          <FormButton title="Retour" onPress={() => { props.navigation.navigate("HabitudesDeVie1") }} />
          <FormButton title="Suivant" onPress={handleSubmit} />
        </View>
        <FormButton title="Pass" onPress={() => { props.navigation.navigate("Admission1") }} />

      </View>
      </View>
      </Container>
      <Steps current={4} /> 
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
  loggedUser: state.medicalService.loggedUser,
  patientList: state.medicalService.patientList,

});
const mapActionToProps = {
  //login: actions.login,
  //logout:actions.logout
  addConfDiag: actions.addConfDiag
};
export default connect(mapStateToProps, mapActionToProps)(ConfirmationDiag);
