import { Text, View, Image, TextInput } from 'react-native'
import React  from 'react'

const App = () => {
   const Inputan = ({ nama, color})=>{
    return(
     <TextInput
     placeholder={`Masukkan ${nama}`}
     style={{
       borderWidth: 1,
       borderColor: 'black',
       borderRadius: 10,
       width: 300,
       height: 50,
       marginVertical: 10,
       padding: 10,
       backgroundColor: '#ADD8E6',
       color:color,
     }}
     />
   )
  }

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    
     <Inputan nama= "Email" color = "white"/>
     <Inputan nama= "Username" color = "white"/>
     <Inputan nama= "Password" color = "whit"/>
      </View>
  )
  
}

export default App;