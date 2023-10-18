import { Button, StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import React, {useState} from 'react'
import axios from 'axios'
import {useSelector , useDispatch} from "react-redux";
import { useNavigation } from '@react-navigation/native';
import * as DocumentPicker from 'expo-document-picker';

const Temp = () => {
  const navigation = useNavigation();

  const [image, setimage] = useState(null)
  const [final, setfinal] = useState()
  const [converted, setconverted] = useState(false)

  const mystate = useSelector((state) => state.loginreducerforteachers);
  console.log('mystate in convert = ', mystate)
  console.log('hello')


  const selectdocument = async()=>{
    console.log('selected')
    let result = await DocumentPicker.getDocumentAsync({});
    setimage(result.uri)
    setfinal(result)
    console.log("result",result);
  }

  const uploaded = ()=>{

    console.log('uplaoding')
    const form = new FormData();
    form.append('file', final.file)
    console.log(final.file)
    // setimagename(final.file)

    let {disecode , forclass, role, schoolid, schoolname , section,teacherid,teachermail,teachername,teacherpassword,_id} = mystate.data.detail

    form.append('disecode', disecode)
    form.append('forclass', forclass)
    form.append('role', role)
    form.append('section', section)
    form.append('schoolid', schoolid)
    form.append('schoolname', schoolname)
    form.append('teacherid', teacherid)
    form.append('teachermail', teachermail)
    form.append('teachername', teachername)
    form.append('teacherpassword', teacherpassword)
    form.append('teachermongoid', _id)

    axios.post("http://192.168.1.231:5000/addform" , form, {headers: { 'content-type': 'multipart/form-data;boundary=<calculated when request is sent>'}}).then((data)=>{

      console.log(data);
      if(data)
      {
        navigation.navigate('ForTeachers')
      }
    }).catch((err)=>{
        console.log({err});
    })
  }

  const convert =()=>{
    console.log('convert')

    const form = new FormData();
    form.append('file', final.file)
    console.log(final.file)
    // setimagename(final.file)

    let {disecode , forclass, role, schoolid, schoolname , section,teacherid,teachermail,teachername,teacherpassword,_id} = mystate.data.detail

    form.append('disecode', disecode)
    form.append('forclass', forclass)
    form.append('role', role)
    form.append('section', section)
    form.append('schoolid', schoolid)
    form.append('schoolname', schoolname)
    form.append('teacherid', teacherid)
    form.append('teachermail', teachermail)
    form.append('teachername', teachername)
    form.append('teacherpassword', teacherpassword)
    form.append('teachermongoid', _id)



    axios.post("http://192.168.1.231:5000/formdata" , form, {headers: {'Content-Type': 'multipart/form-data' }}).then((data)=>{
      console.log('converted' , data);
      if(data)
      {
        setconverted(data.data.converted)
      }
      console.log('converted = ',converted)

    }).catch((err)=>{
        console.log({err});
    })

  }


  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="select document" onPress={selectdocument} />
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        { converted == false && image !=null ? <TouchableOpacity onPress={convert}>
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
                Convert
              </Text>
            </View>
        </TouchableOpacity> : ''}
        {converted==true ? <TouchableOpacity onPress={uploaded}>
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
                Upload
              </Text>
            </View>
        </TouchableOpacity> : ""}
      </View>
  )
}

export default Temp

const styles = StyleSheet.create({})