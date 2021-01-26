import React from 'react';
//import { TextInput } from 'react-native-paper';

import tailwind from 'tailwind-rn';
import { View} from 'react-native';
import InputMask from 'react-input-mask';

const FormInput3 = (props) => {
  return (

    <>
      <View style={tailwind('w-1/2 items-center')}>
      <div class="shadow-md ...">
              <InputMask style={tailwind('border  border-gray-900 my-3  rounded-md w-64')} placeholder={props.placeholder} maskChar="" mask={props.mask} onChange={(text) => props.onChange(text.target.value)} ></InputMask> />
              </div>
      </View>


    </>
  );
};

export default FormInput3;
