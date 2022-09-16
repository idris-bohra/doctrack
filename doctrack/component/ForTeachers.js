import { StyleSheet, Text, View, Picker,Button,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react'
import {loginactionforteachers} from '../action/action';
import {useSelector , useDispatch} from "react-redux";


const ForTeachers = () => {

  const mystate = useSelector((state) => state.loginreducerforteachers);
  const dispatch = useDispatch(); 
  console.log(mystate)

  const {disecode, forclass ,schoolname,state,city, section, teachername, teacherid,teachermail,role} = mystate.data.detail
  const navigation = useNavigation();
    const submitted = async ()=>{
        console.log('submitte')
       const result = await DocumentPicker.getDocumentAsync()
    }
 
  return (
    <View style={styles.container}>
      

        <View styles={styles.heading}>
        <Text style={[styles.doc]}>DOC<Text style={styles.track}>TRACK</Text></Text>
        </View>
          


      <View style={[styles.view2 ,styles.card, styles.elevation]}>

        <Text style={styles.dash}>Welcome to Dashbaord</Text>

        <View style={{marginTop : 30}}>
          <Text style={styles.heading1}>Faculty Name</Text>
          <Text style={styles.heading2}>{teachername}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading1}>School</Text>
          <Text style={styles.heading2}>{schoolname}</Text>
        </View>
        <View  style={styles.section}>
          <Text style={styles.heading1}>Teacherid</Text>
          <Text style={styles.heading2}>{teacherid}</Text>
        </View>
        <View  style={styles.section}>
          <Text style={styles.heading1}>Teachermail</Text>
          <Text style={styles.heading2}>{teachermail}</Text>
        </View>
        <View  style={styles.section}>
          <Text style={styles.heading1}>Dise Code</Text>
          <Text style={styles.heading2}>{disecode}</Text>
        </View>
        <View  style={styles.section}>
          <Text style={styles.heading1}>Class</Text>
          <Text style={styles.heading2}>{forclass}</Text>
        </View>
        <View  style={styles.section}>
          <Text style={styles.heading1}>Section</Text>
          <Text style={styles.heading2}>{section}</Text>
        </View>
        <View  style={styles.section}>
          <Text style={styles.heading1}>Role</Text>
          <Text style={styles.heading2}>{role}</Text>
        </View>
      </View>

      <TouchableOpacity onPress={()=>navigation.navigate('Upload')}>
            <View  
              style={{
                backgroundColor: '#618685',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 3,
                padding: 15,
                marginTop : 0,
                
              }}>
              {role=='attendence' ? <Text style={{color: 'white', fontSize: 20, fontWeight: '800'}}>
                Submit attendence
              </Text> : role == 'meal' ? <Text style={{color: 'white', fontSize: 20, fontWeight: '800'}}>
                Submit meal
              </Text>: <Text style={{color: 'white', fontSize: 20, fontWeight: '800'}}>
                Submit resource
              </Text>}
            </View>
          </TouchableOpacity>
    </View>

  )
}

export default ForTeachers

const styles = StyleSheet.create({
  container : {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading :{
    
  },
  navbar : {
    marginTop : 50
    
  },
  // navbar2 : {
  //   justifyContent:'space-around',
  //   flexDirection : 'column',
  //   height : 50
    
  // },
  track : {
    color : '#034f84',
    fontWeight : 'bold',
    fontSize:50
  },
  doc : {
    color : '#618685',
    fontSize:50,
    fontWeight:'bold'
  },
  sname : {
    fontSize : 15,
    color : 'white',

  },
  city : {
    fontSize : 8,
    color : 'white',

  },
  dash : {
    color : '#034f84',
    fontWeight : 'bold',
    fontSize : 20,
    textAlign : 'center'

  },
  view1 : {
    // borderRadius : 2,
    // borderColor : 'red',
    // borderWidth : 3,
    // borderStyle : 'solid',
    // borderColor : 'grey',
    // padding : 20,

  },
  view2 : {
    borderRadius : 2,
    borderColor : 'red',
    borderWidth : 3,
    borderStyle : 'solid',
    borderColor : 'white',
    padding : 50,
    borderTopEndRadius : 100,
    
  },
  same : {
    color : '#618685',
    fontWeight : 'bold'
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 1,
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
  heading1 : {
    fontSize : 16,
    fontWeight : '400',
    
  },
  heading2 : {
    fontSize : 16,
    color : '#034f84',
  },
  section : {
    marginTop : 10
  }

})