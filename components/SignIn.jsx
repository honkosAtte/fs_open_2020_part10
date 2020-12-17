import React from 'react';
import { Text, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';

const initialValues = {
  username: '',
  password: '',
};


const validationSchema = yup.object().shape({  
  username: yup    
    .string()    
    .required('Username is required'),  
   password: yup    
   .string()    
   .required('Password is required'),});

const style = StyleSheet.create({
  inputContainer: {
    paddingTop: 15
  },
  textInput: {
    borderColor: '#CCCCCC',
    borderWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft:10,
    marginRight:10,
    marginBottom:5,
    marginTop:5,
    textAlign:'left',
    borderRadius:5

  },
  blueButton: {
    backgroundColor:'blue',
    color:'white',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    height: 50,
    fontSize: 25,
    marginLeft:10,
    marginRight:10,
    marginBottom:5,
    marginTop:5,
    textAlign:'center',
    borderRadius:5

  }
}
);




const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput style={style.textInput} name="username" placeholder="Username..." />      
      <FormikTextInput style={style.textInput} secureTextEntry={true} name="password" placeholder="Password..." />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <View>
        <Text style={style.blueButton}>Signin</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};


const SignIn = () => {
  const onSubmit = values => {
    console.log(`You signed in: ${values.username} ${values.password}`);
    
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}
    validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;