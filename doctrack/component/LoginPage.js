import { StyleSheet, Text, TextInput, View, Button, ScrollView, Pressable, Picker, TouchableOpacity} from 'react-native';
import React , {useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import {useSelector , useDispatch} from "react-redux";
import { loginactionforteachers } from '../action/action';
import axios from 'axios'

const Login = (props) => {

    const dispatch = useDispatch(); 

    const [form, setform] = useState({teacherid : '', teacherpassword : ''})
    const navigation = useNavigation();

    const handleit = (value , id)=>{
        console.log(value , id)
        form[id] = value;
    }

    const submitted = ()=>{
        console.log('submitted = ', form)

        axios.post(`http://192.168.1.147:5000/loginteacher`,  form , {headers : {"Content-Type" : "application/json" }}).then((result)=>{

           console.log('data = ', result)
            dispatch(loginactionforteachers(result))
           navigation.navigate('ForTeachers')

        }).catch((err)=> {

            console.log(err)

        }); 

    } 

        

        

  return (
    <>
    
        <View style={styles.container}>

        <View style={styles.view1}>
          <Text style={styles.heading1}>Welcome to <Text style={styles.doc}>DOC</Text><Text style={styles.track}>TRACK</Text></Text>
          <Text style={styles.ndear}>Powered by NDEAR</Text>
        </View>
       
        <View style={[styles.view2 ,styles.card, styles.elevation]}>

        <Text style={styles.login}>Login</Text>

          <View>
            <Text style={styles.sublogin}>Please enter your details</Text>

          </View>


          <View>
            <Text style={styles.heading3}>Enter<Text style={styles.same}> Username</Text></Text>

            <TextInput style={styles.textinput}    onChangeText={(value)=> handleit(value , 'teacherid')} placeholder='Enter your id'/>
          </View>
          <View>
            <Text style={styles.heading3}>Pass<Text style={styles.same}>word</Text></Text>
            <TextInput style={styles.textinput}  onChangeText={(value)=> handleit(value ,'teacherpassword')} placeholder='Enter your password'/>

          </View>
            



          <TouchableOpacity onPress={submitted}>
            <View  
              style={{
                backgroundColor: '#618685',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 3,
                padding: 15,
                marginTop : 10,
                
              }}>
              <Text style={{color: 'white', fontSize: 20, fontWeight: '800'}}>
                Login
              </Text>
            </View>
          </TouchableOpacity>
        </View>
    
        </View>
    </>
  )
}

export default Login

const styles = StyleSheet.create({

  container : {
    marginTop : 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    

  },
  heading1 : {
    fontSize : 30,
    
  },
  button : {
    color : 'blue',
    width : 100
  },
  track : {
    color : '#034f84',
    fontWeight : 'bold'
  },
  doc : {
    color : '#618685',
    fontWeight:'bold'
  },
  login :{
    fontSize : 35,
    color : '#034f84'
  },
  ndear: {
    fontSize : 20
  },
  sublogin : {
    color : 'grey',
    fontSize : 20,
  },
  heading3 : {
    fontFamily : 'arial',
    marginTop : 30,
    fontSize : 20,
    color : '#034f84'

  },
  textinput : {
    borderWidth : 2,
    borderStyle : "solid",
    padding : 10,
    marginTop : 8,
    borderRadius : 10

  },
  view1 : {
    // borderRadius : 2,
    // borderColor : 'red',
    // borderWidth : 3,
    // borderStyle : 'solid',
    // borderColor : 'grey',
    marginBottom:50,

  },
  view2 : {
    borderRadius : 2,
    borderColor : 'red',
    borderWidth : 3,
    borderStyle : 'solid',
    borderColor : 'white',
    padding : 60,
    borderTopEndRadius : 100,
    
  },
  same : {
    color : '#618685',
    fontWeight : 'bold'
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13,
  },
  card: {
    shadowColor: "#c5c5c5",
    shadowOffset: {
    width: 0,
    height: 0,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    
  },
  elevation: {
    elevation: 20,
    shadowColor: '#618685',
  },
  
    
})