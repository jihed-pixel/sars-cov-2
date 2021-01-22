import React, { useState, useEffect } from 'react';
import tailwind from 'tailwind-rn';
import FormButton from "../Form/FormButton";
import FormInput from "../Form/FormInput";
import * as actions from "../../Actions/medicalService";
import { connect } from "react-redux";
import { Text, View, Image} from 'react-native';
import "bootstrap/dist/css/bootstrap.min.css";
import './login.css';
import Container from '@material-ui/core/Container';
import ParticlesBg from "particles-bg";
import './home.css';
import SideNav from '../Form/SideNav'
import MaskedInput from "react-text-mask";

const Login = (props) => {
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
  }, [props.loggedUser])
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();



  const handleUsernameChange = (text) => {
    setUsername(text)

  }

  const handlePasswordChange = (text) => {
    setPassword(text)

  }

  const handleSubmit = (e) => {
    const values = {
      username: username,
      password: password
    }
    e.preventDefault();
    props.login(values);
    console.log(localStorage.getItem("loggedUser"))
  }

  return (
<div >
<div >
<SideNav />
  <div class="big">
<View style={tailwind(' items-center ')}>
<div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">

			</div>

      {(props.loggedUser !== null) && typeof (props.loggedUser) !== 'string' && (props.navigation.navigate("Home"))}

      <View style={tailwind(' items-center ')} >
        <Image source={{ uri: 'https://images.unsplash.com/photo-1584467735867-4297ae2ebcee?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=649&q=80' }}
          style={tailwind('flex justify-center rounded-lg w-64 h-64 m-2')} />
        <Text style={tailwind('text-red-500')}>
          {typeof (props.loggedUser) === 'string' && props.loggedUser}
        </Text>
        <Container style={{backgroundColor:"rgba(200,200,200,0.75)",backgroundsize: "cover"}} component="main" maxWidth="xs" >
        <View style={tailwind(' items-center ')}>
        <FormInput
          placeholder="Username"
          onChangeText={handleUsernameChange}
        />
        <FormInput
          placeholder="Password"
          onChangeText={handlePasswordChange}
          isPassword='true'
        />
        <FormButton title="Se connecter" onPress={handleSubmit} />
        </View>
        </Container>
      </View>

      <View style={tailwind('pt-24 bottom-0 ')}  >
        <Text style={tailwind('font-bold text-gray-700 text-center')} > Copyright ©2020 All rights reserved | Yobitrust</Text>
      </View>
    </View>
    </div>

    </div>
    <ParticlesBg type="cobweb" config={config} bg={true} />
    </div>
  );
};


const mapStateToProps = (state) => ({
  loggedUser: state.medicalService.loggedUser,
});
const mapActionToProps = {
  login: actions.login,
};
export default connect(mapStateToProps, mapActionToProps)(Login);
