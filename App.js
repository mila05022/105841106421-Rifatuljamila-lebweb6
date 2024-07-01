import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';

const App = () => {
  return (
     <View style={{
      flex: 1,
      backgroundColor: '#000',
     }}>
     <Image
      source={ require('./assets/latar.jpeg')}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        opacity: 0.5,
        zIndex: -1,
      }}
      resizeMode="cover"
      />
      <ScrollView contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}>
      
      <Image source={ require('./assets/video.png')}
      style={{
        width: 100,
        height: 100,
        marginTop:50,
        marginRight: 10,
        opacity: 1,
        zIndex: 1,
        borderRadius: 10,
      }}
      />
      <Text style={{
       color: 'white',
        fontSize: 28,
        fontWeight: '300',
        textAlign: 'center',
        marginTop: 40,
        fontWeight: 'bold',
      }}>
        Selamat Datang di Aplikasi Video
      </Text>
        <Text style={{
          color: 'white',
          fontSize: 20,
          textAlign: 'center',
          marginTop: 10,
        }}>
          Aplikasi yang memungkinkan anda menonton dan mengunggah video berkualitas tinggi
      </Text>
            <Text style={{
              color: 'white',
              fontSize: 20,
              textAlign: 'center',
              marginTop: 10,
            }}>
              Jelajahi berbagai konten menarik dari berbagai gendre
            </Text>
            <Text style={{
              color: 'white',
              fontSize: 20,
              textAlign: 'center',
              marginTop: 10,
              marginBottom: 10,
            }}>
            Bergabunglah sekarang dan nikmati pengalaman menonton yang belum pernah anda rasakan sebelumnya.
            </Text>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 50,
        }}>
        <View style={{ marginHorizontal: 10 }}>
        <Text style={{
          width: 100, 
          height: 50,
          color:'white',
          backgroundColor: 'red',
          textAlign: 'center',
          lineHeight: 50,
          fontSize: 20,
          borderRadius: 10,
      }}>Login </Text>
    </View>

    <View style={{ marginHorizontal: 10 }}>
      <Text style={{
        width: 100, 
        height: 50,
        color:'white',
        backgroundColor: 'blue',
        textAlign: 'center',
        lineHeight: 50,
        fontSize: 20,
        borderRadius: 10,
      }}>Register</Text>
    </View>
         
        </View>
      </ScrollView>
    </View>
  )
}

export default App;
