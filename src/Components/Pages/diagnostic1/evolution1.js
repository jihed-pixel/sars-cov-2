import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../../Form/FormButton";
import * as actions from "../../../Actions/medicalService";
import { connect } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import FormInput from '../../Form/FormInput';
import FormInput2 from '../../Form/FormInput2';
import { DatePicker } from '@assenti/rui-components';
import '@assenti/rui-components/css/index.css';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import '../home.css';
const Evolution = (props) => {

  //dateTime picker
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
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
  const handleConfirm = (date) => {

    //date.setTime(date.getTime()-date.getTimezoneOffset()*60*1000)
    setTime(date)
    hideDatePicker();
  };

  const [category, setCategory] = useState()
  const [type, setType] = useState()
  const [time, setTime] = useState()
  const [value, setValue] = useState()
  const [validation, setValidation] = useState()

  const [dateD, setDateD] = useState()
  const [dateF, setDateF] = useState()
  const [saps2, setSaps2] = useState()
  const [apache2, setApache2] = useState()
  const [sofa, setSofa] = useState()
  const [dateS, setDateS] = useState()
  const [typeS, setTypeS] = useState()
  const [dateH, setDateH] = useState()
  const [hopital, setHopital] = useState()
  const [service, setService] = useState()
  const [ville, setVille] = useState()
  const [lieu, setLieu] = useState()

  const [hospi, setHospi] = useState()


  var handleHospiChange = (data) => {
    if (data.target.value==="0") setHospi(true)
    if (data.target.value==="1") setHospi(false)
  }

  var handleTypeSChange = (data) => {
 setTypeS(data.target.value)

    }



  var handleValueCb = (data) => {
    if (data.target.value==="oui")
      setValue(1.0)
    if (data.target.value==="non")
      setValue(0.0)
  }

  var handleEvolutionType = (data) => {
    if (data.target.value==="0") {
      setType("IHH")
      setTypeS("")

    }
    if (data.target.value==="1") {
      setType("Ho")
      setTypeS("Transfert inter-hopital")
    }

  }






  var handleTypeChange = (data) => {
 setType(data.target.value)
    }

  var handleSubmit = () => {
    if (type === "Température" && (value > 43 || value < 30)) {
      setValidation("La temperature doit etre comprise entre 30et 43 °C !")
      return
    }

    if (type === "SaO2" && (value > 100 || value < 0)) {
      setValidation("Le pourcentage de SaO2  doit etre compris entre 0 % et 100 % !");
      return
    }


    if (type === "FR" && (value > 250 || value < 0)) {
      setValidation("La valuer du FR doit etre comprise entre 0 et 250 C/min !");
      return
    }

    if (type === "FC" && (value > 150 || value < 0)) {
      setValidation("La valuer du FC doit etre comprise entre 0 et 150 C/min !");
      return
    }
    if (type === "Score de glasgow" && (value > 15 || value < 0)) {
      setValidation("Le score de Glasgow doit etre entre 0 et 15 !");
      return
    }
    if (category === "USI") {
      if (dateD === undefined) { setValidation("La date du transfert au USI est obligatoire !"); return; }
      if (saps2 === undefined) { setValidation("SAPS2 est obligatoire"); return; }
      if (saps2 > 194) { setValidation("SAPS2 doit etre compris entre 0 et 194 "); return; }
      if (apache2 === undefined) { setValidation("APACHE2 est obligatoire !"); return }
      if (apache2 > 74) { setValidation("APACHE 2 doit etre compris entre 0 et 74"); return }
      if (sofa > 24) { setValidation("SOFA doit etre compris entre 0 et 24"); return }

    }

    if (category === "AssResp") {
      if (dateD === undefined) { setValidation("La date de début est obligatoire!"); return; }

    }
    if(category ==="Evolution"){
      if(dateS === undefined) {setValidation("La date de sortie est obligatoire");return}
    }



    var values = {
      time: time,
      type: type,
      category: category,
      value: value,
      dateD: dateD,
      dateF: dateF,
      apache2: apache2,
      saps2: saps2,
      sofa: sofa,
      dateS: dateS,
      typeS: typeS,
      dateH: dateH,
      hopital: hopital,
      service: service,
      ville: ville,
      lieu: lieu

    }
    console.log(values)
    setCategory()
    setTime()
    setValue()
    setDateF()
    setDateD()
    setSofa()
    setApache2()
    setSaps2()
    props.addEvolution(props.patientList["cin"], values)

  }

  return (
    <div>
<div class="big">
<Container style={{backgroundColor:"rgba(200,200,200,0.75)",backgroundsize: "cover"}} component="main" maxWidth="xs" >
    <View style={tailwind("px-8 py-8 ")}>
      <Text style={tailwind('text-gray-700 font-bold py-2 text-xl text-center')}>Evolution</Text>
      <Text style={tailwind('text-gray-700 font-bold py-2  text-center')}>Patient:{props.patientList["generalInformation"]["nom"] + " " + props.patientList["generalInformation"]["prenom"]}</Text>
      <View style={tailwind("items-center py-8")}>
        <FormButton title="Evolution quotidienne" onPress={() => { setCategory("evaluValues"); setType("Température"); setValidation() }}/>
         <View style={tailwind("items-center")}>
          <div  >

          <div>  <input onChange={handleTypeChange} type="radio" value="Température" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Température</Text></div>
          <div>  <input onChange={handleTypeChange} type="radio" value="SaO2" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>SaO2</Text></div>
          <div>  <input onChange={handleTypeChange} type="radio" value="Besoin en O2" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Besoin en O2</Text></div>
          <div>  <input onChange={handleTypeChange} type="radio" value="TA" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>TA</Text></div>
          <div>  <input onChange={handleTypeChange} type="radio" value="FR" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>FR</Text> </div>
          <div>   <input onChange={handleTypeChange} type="radio" value="Signes de lutte" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Signes de lutte</Text></div>
          <div>   <input onChange={handleTypeChange} type="radio" value="FC" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>FC </Text></div>
          <div>   <input onChange={handleTypeChange} type="radio" value="Froideur" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Froideur</Text></div>
          <div>   <input onChange={handleTypeChange} type="radio" value="Marbrures" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Marbrures</Text></div>
          <div>   <input onChange={handleTypeChange} type="radio" value="Angoisse/Agitation" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Angoisse/Agitation</Text></div>
          <div>   <input onChange={handleTypeChange} type="radio" value="Score de glasgow" name="gender" /> <Text style={tailwind('text-gray-700 py-2')}>Score de glasgow</Text></div>
          </div>
            <Text style={tailwind("text-red-500 font-bold pt-4 text-center")}>{validation}</Text>
            {(type === "Température" || type === "SaO2" || type === "Besoin en O2" || type === "TA" || type === "FR" || type === "FC" || type === "Score de glasgow") &&
              <FormInput placeholder={type} type="decimal-pad" onChangeText={setValue} />
            }
            {
              (type === "Signes de lutte" || type === "Froideur" || type === "Marbrures" || type === "Angoisse/Agitation") &&
              <View style={styles.row}>
                <Text style={tailwind("py-1 pr-4")}>{type + "?"}</Text>
                <div  >
                <div>  <input onChange={handleValueCb} type="radio" value="oui" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Oui</Text></div>
                <div>  <input onChange={handleValueCb} type="radio" value="non" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>Non</Text></div>
                <div>  <input onChange={handleValueCb} type="radio" value="row" name="gender1" /> <Text style={tailwind('text-gray-700 py-2')}>row</Text></div>
                </div>
              </View>

            }
            <FormButton title="Enregistrer" onPress={handleSubmit} />
          </View>

        
        <FormButton title="Transfert en USI" onPress={() => { setCategory("USI"); setValidation(); setType("IRA grave (3)"); }}/>
         <View >
            <Text style={tailwind("text-red-500 font-bold p-4 text-center")}>Choisir la méthode de transfert ?</Text>
            <div  >
            <div>  <input onChange={handleTypeChange} type="radio" value="IRA grave (3)" name="gender2" /> <Text style={tailwind('text-gray-700 py-2')}>IRA grave (3)</Text></div>
            <div>  <input onChange={handleTypeChange} type="radio" value="Sepsis/Choc septique" name="gender2" /> <Text style={tailwind('text-gray-700 py-2')}>Sepsis/Choc septique</Text></div>
            </div>
            <View style={tailwind("items-center")}>
            <DatePicker
            color="primary"
            placeholder="YYYY-MM-DD"
            value={dateD}
            clearable
            minDate="1920-05-01"
            maxDate={new Date()}
            onDate={(dateD) => {
            setDateD(dateD)
            }}
            onClear={() => setDateD('')}
            width={250}
            onChange={(value) => setDateD(value)}/>
              <DatePicker
              color="primary"
              placeholder="YYYY-MM-DD"
              value={dateF}
              clearable
              minDate="1920-05-01"
              maxDate={new Date()}
              onDate={(dateF) => {
              setDateF(dateF)
              }}
              onClear={() => setDateF('')}
              width={250}
              onChange={(value) => setDateF(value)}/>
              <FormInput placeholder={"SAPS 2"} onChangeText={setSaps2} type="decimal-pad" maxLength={Number("8")} />
              <FormInput placeholder={"APACHE 2"} onChangeText={setApache2} type="decimal-pad" maxLength={Number("8")} />
              <FormInput placeholder={"SOFA"} onChangeText={setSofa} type="decimal-pad" maxLength={Number("8")} />
              <FormButton title="Enregistrer" onPress={handleSubmit} />
            </View>


          </View>

        
        <FormButton title="Assistance respiratoire" onPress={() => { setCategory("AssResp"); setValidation() }}/>
        <View >
            <Text style={tailwind("text-red-500 font-bold p-4 text-center")}>{validation}</Text>
            <Text style={tailwind("text-center text-gray-700 p-2 text-center")}>Choisir la méthode de transfert ?</Text>


            <View style={styles.row}>
        <div>
          <div><input  onChange={handleTypeChange} type="radio" value="HFNC / CPAP min 12h" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>HFNC / CPAP min 12h</Text></div>
          <div><input  onChange={handleTypeChange} type="radio" value="VNI min 12h" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>VNI min 12h</Text></div>
          <div><input  onChange={handleTypeChange} type="radio" value="VMI" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>VMI</Text></div>
          <div><input  onChange={handleTypeChange} type="radio" value="DV" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>DV</Text></div>
          <div><input  onChange={handleTypeChange} type="radio" value="Protective ventilation" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>Protective ventilation</Text></div>
          <div><input  onChange={handleTypeChange} type="radio" value="Ventilation free days" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>Ventilation free days</Text></div>
          <div><input  onChange={handleTypeChange} type="radio" value="Device free days" name="gender3" /> <Text style={tailwind('text-gray-700 py-2')}>Device free days</Text></div>
        </div>
      </View>


            <View style={tailwind("items-center")}>
            <DatePicker
            color="primary"
            placeholder="YYYY-MM-DD"
            value={dateD}
            clearable
            minDate="1920-05-01"
            maxDate={new Date()}
            onDate={(dateD) => {
            setDateD(dateD)
            }}
            onClear={() => setDateD('')}
            width={250}
            onChange={(value) => setDateD(value)}/>
              <DatePicker
              color="primary"
              placeholder="YYYY-MM-DD"
              value={dateF}
              clearable
              minDate="1920-05-01"
              maxDate={new Date()}
              onDate={(dateF) => {
              setDateF(dateF)
              }}
              onClear={() => setDateF('')}
              width={250}
              onChange={(value) => setDateF(value)}/>
              <FormButton title="Enregistrer" onPress={handleSubmit} />
            </View>
          </View>
        
        <FormButton title="Evolution de l'isolement/hospitalisation" onPress={() => { setCategory("Evolution"); setValidation(); setType("IHH"); setHospi(true) }}/>

         <View >
                 <Text style={tailwind("text-red-500 font-bold p-4 text-center")}>{validation}</Text>
                 <View style={styles.row}>
                 <div>
                 <div><input  onChange={handleEvolutionType} type="radio" value="0" name="gender4" /> <Text style={tailwind('text-gray-700 py-2')}>Evolution de l'isolement hors hopital</Text></div>
                 <div><input  onChange={handleEvolutionType} type="radio" value="1" name="gender4" /> <Text style={tailwind('text-gray-700 py-2')}>Evolution de l'hospitalisation</Text></div>
                 </div>
                 </View>

            {
              type === "IHH" && <View style={tailwind("")}>
                <View style={tailwind("items-center")}>
                <DatePicker
                color="primary"
                placeholder="YYYY-MM-DD"
                value={dateS}
                clearable
                minDate="1920-05-01"
                maxDate={new Date()}
                onDate={(dateS) => {
                setDateS(dateS)
                }}
                onClear={() => setDateS('')}
                width={250}
                onChange={(value) => setDateS(value)}/>
                </View>
                <View style={styles.row}>
                  <Text style={tailwind("text-gray-700 py-2 ")}>Hospitalisé ?</Text>
                  <View style={styles.row}>
                  <div>
                  <div><input  onChange={handleHospiChange} type="radio" value="0" name="gender5" /> <Text style={tailwind('text-gray-700 py-2')}>Oui</Text></div>
                  <div><input  onChange={handleHospiChange} type="radio" value="1" name="gender5" /> <Text style={tailwind('text-gray-700 py-2')}>Non</Text></div>
                  </div>
                  </View>
                </View>
                {
                  hospi === true && <View style={tailwind("items-center")}>
                  <DatePicker
                  color="primary"
                  placeholder="YYYY-MM-DD"
                  value={dateH}
                  clearable
                  minDate="1920-05-01"
                  maxDate={new Date()}
                  onDate={(dateH) => {
                  setDateH(dateH)
                  }}
                  onClear={() => setDateH('')}
                  width={250}
                  onChange={(value) => setDateH(value)}/>

                    <FormInput placeholder="Hopital" onChangeText={setHopital} />
                    <FormInput placeholder="Service" onChangeText={setService} />
                    <FormInput placeholder="Ville" onChangeText={setVille} />
                  </View>
                }
                {
                  hospi === false && <View >
                  <div>
                  <div>  <input  onChange={handleTypeSChange} type="radio" value="Evolution de l'isolement hors hopital" name="gender6" /> <Text style={tailwind('text-gray-700 py-2')}>Evolution de l'isolement hors hopital</Text></div>
                  <div>  <input  onChange={handleTypeSChange} type="radio" value="Evolution de l'hospitalisation" name="gender6" /> <Text style={tailwind('text-gray-700 py-2')}>Evolution de l'hospitalisation</Text></div>
                  <div>  <input  onChange={handleTypeSChange} type="radio" value="Deccés" name="gender6" /> <Text style={tailwind('text-gray-700 py-2')}>Deccés</Text></div>
                  </div>
                  </View>
                }
                <View style={tailwind("items-center")}>
                  <FormButton title="Enregistrer" onPress={handleSubmit} />
                </View>

              </View>
            }

            {
              type === "Ho" && <View style={tailwind("items-center")}>
              <DatePicker
              color="primary"
              placeholder="YYYY-MM-DD"
              value={dateS}
              clearable
              minDate="1920-05-01"
              maxDate={new Date()}
              onDate={(dateS) => {
              setDateS(dateS)
              }}
              onClear={() => setDateS('')}
              width={250}
              onChange={(value) => setDateS(value)}/>
                <div>
                <div>  <input  onChange={handleTypeSChange} type="radio" value="Transfert inter-hopital" name="gender7" /> <Text style={tailwind('text-gray-700 py-2')}>Transfert inter-hopital</Text></div>
                <div>  <input  onChange={handleTypeSChange} type="radio" value="Transfert inter-service" name="gender7" /> <Text style={tailwind('text-gray-700 py-2')}>Transfert inter-service</Text></div>
                <div>  <input  onChange={handleTypeSChange} type="radio" value="Retour à domicile en quarantine" name="gender7" /> <Text style={tailwind('text-gray-700 py-2')}>Retour à domicile en quarantine</Text></div>
                <div>  <input  onChange={handleTypeSChange} type="radio" value="Transfert à domicile sans quarantine" name="gender7" /> <Text style={tailwind('text-gray-700 py-2')}>Transfert à domicile sans quarantine</Text></div>
                <div>  <input  onChange={handleTypeSChange} type="radio" value="Deccés" name="gender7" /> <Text style={tailwind('text-gray-700 py-2')}>Deccés</Text></div>
                </div>
                {
                  (typeS === "Transfert inter-hopital" || typeS === "Transfert inter-service") && <FormInput placeholder="Lieu" onChangeText={setLieu} />
                }

                <View style={tailwind("items-center")}>
                  <FormButton title="Enregistrer" onPress={handleSubmit} />
                </View>
              </View>
            }

          </View>

        

      </View>


      <View style={tailwind("items-center py-8")}>
        <FormButton title="Retour" onPress={() => { props.navigation.navigate("Traitement1") }} />
        <FormButton title="Pass" onPress={() => { props.navigation.navigate("EvaluationFinale1") }} />
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
  evolutionList: state.medicalService.evolutionList
});
const mapActionToProps = {

  addEvolution: actions.addEvolution,
  getEvolution: actions.getEvolution,
};
export default connect(mapStateToProps, mapActionToProps)(Evolution);
