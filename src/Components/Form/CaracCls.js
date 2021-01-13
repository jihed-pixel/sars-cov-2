import React from 'react';


import tailwind from 'tailwind-rn';
import { } from 'react-native';
import FormButton from "./FormButton";
import { DatePicker } from '@assenti/rui-components';
import '@assenti/rui-components/css/index.css';
import { View } from 'react-native';


const CaracCls = (props) => {
  return (
    <div>
<div style={tailwind("items-center")}>
<DatePicker
        color="primary"
        placeholder="YYYY-MM-DD"
        value={props.dateD}
        clearable
        minDate="1920-05-01"
        maxDate={new Date()}
        onDate={(dateD) => {
          props.setDateD(dateD)
        }}
        onClear={() => props.setDateD('')}
        width={250}
        onChange={(value) => props.setDateD(value)}/>

    <DatePicker
        color="primary"
        placeholder="YYYY-MM-DD"
        value={props.dateF}
        clearable
        minDate="1920-05-01"
        maxDate={new Date()}
        onDate={(dateF) => {
          props.setDateF(dateF)
        }}
        onClear={() => props.setDateF('')}
        width={250}
        onChange={(value) => props.setDateF(value)}/>
        </div>
       <div style={tailwind("items-center")}> 
      <FormButton title="Enregistrer" onPress={props.onSubmit} />
      </div>
      </div>
  );
};




export default CaracCls;
