import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormInput from '../../Form/FormInput';
import FormButton from '../../Form/FormButton';
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
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




const Traitement = (props) => {
  var handleTypeSdate = (data) => {
    setDateD(data.target.value)     
       }
       var handleTypeSdate1 = (data) => {
        setDateF(data.target.value)     
           }
          
  useEffect(() => {
    props.getTraitment(props.patientList["cin"], {
      trai: trai
    })
   if ( props.traitmentList !=null &&typeof(props.traitmentList)!=="string"&& props.traitmentList["dateD"] !== null &&   props.traitmentList["dateD"] !== undefined &&oper === "M") setDateD(props.traitmentList["dateD"].slice(0, 10))
    //else setDateD()
    //if (typeof(props.traitmentList)!=="string"&& props.traitmentList["dateF"] !== null && oper === "M") setDateF(props.traitmentList["dateF"].slice(0, 10))
    //else setDateF()
  })

  const [oldPactt, setOldPactt] = useState(true)
  const [pactt, setPactt] =  useState("Bras 1")
  const [type, setType] = useState("M")
  const [trai, setTrai] = useState("Lopinavir/ritonavir")
  const [oper, setOper] = useState("A")
  const [dateD, setDateD] = useState()
  const [dateF, setDateF] = useState()
  const [autreBox, setAutreBox] = useState(trai === "Autre")
  const [dosage, setDosage] =  useState()

  //formValidation
  const [validation, setValidation] = useState()



  var handlePacttChange = (data) => {
   setPactt(data.target.value)
  }


  var handleOperChange = (data) => {
    var i;
    for (i = 0; i < data.length; i++) {
      if (data[i].selected) { setOper(data[i].label[0]); setDateF(); setDateD(); }

      if (data[i].label[0]==="M" && typeof(props.traitmentList)!=="string"&& props.traitmentList["dosage"] !== null  && props.traitmentList["dosage"] !== undefined)
       {setDosage(props.traitmentList["dosage"])}

    }
  }
  var handleTypeChange = (data) => {
    /* var i;
    for (i = 0; i < data.length; i++) {
      if (data[i].selected) { setType(data[i].label.charAt(0)) ;  }

    }*/
    if (data.target.value==="1") {
      setType("M"); setTrai("Lopinavir/ritonavir"); setDateD(); setDateF()
    }
    if (data.target.value==="2") {
      setType("P"); setTrai("O2"); setDateD(); setDateF()
    }
    if (data.target.value==="3") {
      setType("A"); setTrai("Amoxicilline/Acide clavunique"); setDateD(); setDateF()
    }
  }

  var handlePacttChange = (data) => {
     setPactt(data.target.value)
  }
  var handleTraiChange = (data) => {
      setDateF()
      setDateD()
      setTrai(data.target.value);

        if (data.target.value === "Autre") { setAutreBox(true); setTrai() }
        else setAutreBox(false)
        props.getTraitment(props.patientList["cin"], {
          trai: trai
        })
      }



  //SubmitFunction
  var handleSUbmit = () => {
    var values = {
      dosage: dosage,
      dateD: dateD,
      dateF: dateF,
      trai: trai,
      pactt:pactt
    }
    console.log(values)
     if(trai ===undefined)
     { setValidation("Veuillez choisir un traitment") ;return;}
      if(dosage ===undefined)
      {setValidation("Veuillez precisier un dosage");return}
      if(dateD ===undefined)
     { setValidation("La date de debut de traitement est obligatoire");return}
     setValidation()

    props.addTraitment(props.patientList["cin"], values)
    props.navigation.navigate("DiagnosticDetails")

  }

  return (
    <div>
<div class="big">
<Container style={{backgroundColor:"rgba(200,200,200,0.75)",backgroundsize: "cover"}} component="main" maxWidth="xs" >
    <View>
      <Text style={tailwind('text-gray-700 font-bold py-2 text-xl text-center')}>Traitement</Text>
      <Text style={tailwind('text-gray-700 font-bold py-2  text-center')}>Patient:{props.patientList["generalInformation"]["nom"] + " " + props.patientList["generalInformation"]["prenom"]}</Text>
      {validation !== undefined && <Text style={tailwind("text-center font-bold text-red-500")}>{validation}</Text>}
      <Text style={tailwind('text-gray-700 pt-8  pl-4 text-center pb-4')}>Participation au projet PACTT ?</Text>
      {props.patientList["traitement"]["pactt"] !== null && props.patientList["traitement"]["pactt"] !== undefined&& oldPactt === true && <View style={tailwind(' items-center ')}>
        <Text style={tailwind("text-gray-700 font-bold")}> {props.patientList["traitement"]["pactt"]}</Text>
        <FormButton title="Modifier ?" onPress={() => setOldPactt(false)}/>
      </View>

      }
      {(props.patientList["traitement"]["pactt"] == null && props.patientList["traitement"]["pactt"] == undefined  || oldPactt === false) &&
      <View style={tailwind(' items-center ')} >
      <div>
    <div>  <input  onChange={handlePacttChange} type="radio" value="PathRespChronique" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Bras 1</Text></div>
    <div>  <input  onChange={handlePacttChange} type="radio" value="Cardiopathies" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Bras 2</Text></div>
    <div>  <input  onChange={handlePacttChange} type="radio" value="TrRythCardiaque" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Non</Text></div>
    </div>
    </View>
  }

      <Text style={tailwind('text-gray-700  text-center pb-4')}>Modifier ajouter les traitements</Text>
      <View style={tailwind(' items-center ')} >
      <div>
    <div>  <input  onChange={handleTypeChange} type="radio" value="1" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Molécules</Text></div>
    <div>  <input  onChange={handleTypeChange} type="radio" value="2" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Prise en charge standard</Text></div>
    <div>  <input  onChange={handleTypeChange} type="radio" value="3" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Antibiothérapie</Text></div>
    </div>
        <Text style={tailwind('text-gray-700  text-center p-4')}> Lequel/Laquelle ?</Text>
        {
          type === "M" &&
          <div>
        <div>  <input  onChange={handleTraiChange} type="radio" value="PathRespChronique" name="gender2" /> <Text style={tailwind('text-gray-700 py-2')}>Lopinavir/ritonavir</Text></div>
        <div>  <input  onChange={handleTraiChange} type="radio" value="Cardiopathies" name="gender2" /> <Text style={tailwind('text-gray-700 py-2')}>Chloroquine phosphate</Text></div>
        <div>  <input  onChange={handleTraiChange} type="radio" value="Antibiothérapie" name="gender2" /> <Text style={tailwind('text-gray-700 py-2')}>Hydroxy-Chloroquine</Text></div>
        <div>  <input  onChange={handleTraiChange} type="radio" value="PathRespChronique" name="gender2" /> <Text style={tailwind('text-gray-700 py-2')}>Azithromycine</Text></div>
        <div>  <input  onChange={handleTraiChange} type="radio" value="Cardiopathies" name="gender2" /> <Text style={tailwind('text-gray-700 py-2')}>Remdesivir</Text></div>
        <div>  <input  onChange={handleTraiChange} type="radio" value="Antibiothérapie" name="gender2" /> <Text style={tailwind('text-gray-700 py-2')}>Autre</Text></div>
        </div>

        }

        {
          type === "P" &&
          <div>
          <div>  <input  onChange={handleTraiChange} type="radio" value="PathRespChronique" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>O2</Text></div>
          <div>  <input  onChange={handleTraiChange} type="radio" value="Cardiopathies" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>HFNC</Text></div>
          <div>  <input  onChange={handleTraiChange} type="radio" value="Antibiothérapie" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>CPAP</Text></div>
          <div>  <input  onChange={handleTraiChange} type="radio" value="PathRespChronique" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>VNI</Text></div>
          <div>  <input  onChange={handleTraiChange} type="radio" value="Cardiopathies" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>VMI</Text></div>
          <div>  <input  onChange={handleTraiChange} type="radio" value="Antibiothérapie" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>Paracétamol</Text></div>
          <div>  <input  onChange={handleTraiChange} type="radio" value="Antibiothérapie" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>Anti coaguant</Text></div>
          <div>  <input  onChange={handleTraiChange} type="radio" value="PathRespChronique" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>H2O</Text></div>
          <div>  <input  onChange={handleTraiChange} type="radio" value="Cardiopathies" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>ADO</Text></div>
          <div>  <input  onChange={handleTraiChange} type="radio" value="Antibiothérapie" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>Insulinothérapie</Text></div>
          <div>  <input  onChange={handleTraiChange} type="radio" value="Cardiopathies" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>Nébulisation corticoides</Text></div>
          <div>  <input  onChange={handleTraiChange} type="radio" value="Cardiopathies" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>Nébulisation bronchodilateurs</Text></div>
          </div>
        }
        {
          type === "A" &&
          <div>
          <div>  <input  onChange={handleTraiChange} type="radio" value="PathRespChronique" name="gender4" /> <Text style={tailwind('text-gray-700 py-2')}>Amoxicilline/Acide clavunique</Text></div>
          <div>  <input  onChange={handleTraiChange} type="radio" value="Cardiopathies" name="gender4" /> <Text style={tailwind('text-gray-700 py-2')}>Cefotaxime</Text></div>
          <div>  <input  onChange={handleTraiChange} type="radio" value="Antibiothérapie" name="gender4" /> <Text style={tailwind('text-gray-700 py-2')}>Ceftriaxone</Text></div>
          <div>  <input  onChange={handleTraiChange} type="radio" value="PathRespChronique" name="gender4" /> <Text style={tailwind('text-gray-700 py-2')}>Autre</Text></div>
          </div>
        }
        {autreBox === true && <View style={tailwind("items-center")}>
          <FormInput placeholder="Autre traitement ..." onChangeText={setTrai} />
        </View>}
        <Text style={tailwind('text-gray-700  text-center p-4')}> Choisir l'opération ?</Text>
        <div>
        <div>  <input  onChange={handleTraiChange} type="radio" value="PathRespChronique" name="gender5" /> <Text style={tailwind('text-gray-700 py-2')}>Amoxicilline/Acide clavunique</Text></div>
        <div>  <input  onChange={handleTraiChange} type="radio" value="Cardiopathies" name="gender5" /> <Text style={tailwind('text-gray-700 py-2')}>Cefotaxime</Text></div>
        <div>  <input  onChange={handleTraiChange} type="radio" value="Antibiothérapie" name="gender5" /> <Text style={tailwind('text-gray-700 py-2')}>Ceftriaxone</Text></div>
        <div>  <input  onChange={handleTraiChange} type="radio" value="PathRespChronique" name="gender5" /> <Text style={tailwind('text-gray-700 py-2')}>Autre</Text></div>
        </div>
        <div>
        <div>  <input  onChange={handleOperChange} type="radio" value="PathRespChronique" name="gender6" /> <Text style={tailwind('text-gray-700 py-2')}>Ajouter Autre</Text></div>
        <div>  <input  onChange={handleOperChange} type="radio" value="Cardiopathies" name="gender6" /> <Text style={tailwind('text-gray-700 py-2')}>Modifier date fin</Text></div>
        </div>
        {
          (oper === "A") && <View style={tailwind("items-center ")}>
            <FormInput placeholder={"Dosage"} onChangeText={setDosage}  />
            <Text style={tailwind("pt-8 text-center pb-2 text-gray-700")}>Date de debut</Text>
            <input type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate}/>
            <Text style={tailwind("pt-8 text-center pb-2 text-gray-700")}>Date de fin</Text>
            <input type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate1}/>
            
          </View>
        }
        {
          oper === "M" && typeof (props.traitmentList) === "string" && <Text style={tailwind("text-center py-4 font-bold  text-red-500")}>{"Aucun traitement " + trai + " trouvé , Veuillez ajouter autre !"}</Text>
        }
        {
          oper === "M" && typeof (props.traitmentList) !== "string" && props.traitmentList !== null && <View style={tailwind("items-center")}>
            <FormInput placeholder={"Doage/Debit:" + props.traitmentList["dosage"]} editable="false" />
            <Text style={tailwind("pt-8 text-center pb-2 text-gray-700")}>Date de debut</Text>
            <input type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate}/>
            <Text style={tailwind("pt-8 text-center pb-2 text-gray-700")}>Date fin</Text>
            <input type="date" data-date="" data-date-format="DD MMMM YYYY" onChange={handleTypeSdate1}/>
            
          </View>
        }
      </View>
      <View style={tailwind("items-center")}>
        <View style={styles.row}>
          <FormButton title="Retour" onPress={() => props.navigation.navigate("DiagnosticDetails")} />
          <FormButton title="Enregistrer" onPress={handleSUbmit} />
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
  patientList: state.medicalService.patientList,
  traitmentList: state.medicalService.traitmentList
});
const mapActionToProps = {
  getTraitment: actions.getTraitment,
  addTraitment: actions.addTraitment

};
export default connect(mapStateToProps, mapActionToProps)(Traitement);
