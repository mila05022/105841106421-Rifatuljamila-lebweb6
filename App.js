import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import ButtonComponent from './Component/button/button';

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
              <ButtonComponent title= "Sign in" color="blue" />
              <ButtonComponent title= "Sign up" color="red" />
        </View>
      </ScrollView>
    </View>
  )
}

export default App;
