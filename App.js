import { StatusBar } from 'expo-status-bar';
import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
// Using DB Reference
import { db } from './Core/Config'

export default function App() {

  // Storing User Data
  const [userDoc, setUserDoc] = useState(null)
  // Update Text
  const [text, setText] = useState("")


  const Create = () => {
   
    const myDoc = doc(db, "MyCollection", "MyDocument")

   
    const docData = {
      "name": "Salman",
      "bio": "Student"
    }

    setDoc(myDoc, docData)
     
      .then(() => {
        
        alert("Student Added!")
      })
      .catch((error) => {
        
        alert(error.message)
      })
  }

  const Read = () => {
    
    const myDoc = doc(db, "MyCollection", "MyDocument")

    getDoc(myDoc)
      
      .then((snapshot) => {

        if (snapshot.exists) {
          setUserDoc(snapshot.data())
        }
        else {
          alert("No Data Found")
        }
      })
      .catch((error) => {
   
        alert(error.message)
      })

  }

  const Update = (value, merge) => {
   
    const myDoc = doc(db, "MyCollection", "MyDocument")


    setDoc(myDoc, value, { merge: merge })
     
      .then(() => {
       
        alert("Updated Successfully!")
        setText("")
      })
      .catch((error) => {
   
        alert(error.message)
      })
  }

  const Delete = () => {
  
    const myDoc = doc(db, "MyCollection", "MyDocument")

    deleteDoc(myDoc)
   
      .then(() => {
    
        alert("Deleted Successfully!")
      })
      .catch((error) => {
      
        alert(error.message)
      })

  }

  return (
    <View style={styles.container}>
      <Button title='Create New Student' onPress={Create}></Button>
      <Button title='Read Student' onPress={Read}></Button>
      {
        userDoc != null &&
        <Text>Bio: {userDoc.bio}</Text>
      }
      <TextInput style={{
        width: '95%',
        fontSize: 18,
        padding: 12,
        borderColor: 'gray',
        borderWidth: 0.2,
        borderRadius: 10,
        marginVertical: 20
      }} placeholder='Type Here' onChangeText={(text) => { setText(text) }} value={text}></TextInput>

      <Button title='Update Student' onPress={() => {
        Update({
          "bio": text
        }, true)
      }} disabled={text == ""}></Button>
      <Button title='Delete Student' onPress={Delete}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
