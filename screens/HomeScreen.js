import { StyleSheet, Text, View,Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation();{/* Instacia do React Navigation para no click do Pressable ir para a pagina do quiz */}
  return (
  
  
  
  
  
  <View style= {{marginTop:0}}>


     <Image
     style={{ height: 200, width:"100%", resizeMode: "contain"}}
     source={{
        uri:"https://images-ext-1.discordapp.net/external/k32N6cq-LZj_cTT25GWT12DLmdLwKAZg2EGfipEgURg/%3Fq%3Dtbn%3AANd9GcTXGkSspB44PQvpMhZ0ni8XrUpWWAy583k5tw%26usqp%3DCAU/https/encrypted-tbn0.gstatic.com/images"
     }}
     />
  <Text
          style={{
            textAlign: "center",
            color: "#FDCB00",
            fontSize: 20,
            fontWeight: "600",
          }}
        >
          REGRAS DO QUIZ
        </Text>

     <View
          style={{
            padding: 10,
            backgroundColor: "black",
            borderRadius: 6,
            marginTop: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <Text style={{ color: "white" }}>•</Text>
            <Text
              style={{
                marginLeft: 4,
                color: "#FDCB00",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
             Para cada resposta correta você ganha 5 pontos.
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <Text style={{ color: "white" }}>•</Text>
            <Text
              style={{
                marginLeft: 4,
                color: "#FDCB00",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              Não receberá nenhum ponto se errar.
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <Text style={{ color: "white" }}>•</Text>
            <Text
              style={{
                marginLeft: 4,
                color: "#FDCB00",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
             Cada questão tem um tempo limite de 15 segundos.
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <Text style={{ color: "white" }}>•</Text>
            <Text
              style={{
                marginLeft: 4,
                color: "#FDCB00",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
             Você deve responder a todas as perguntas obrigatoriamente.
            </Text>
          </View>
        </View>
      
<Pressable 
onPress={() => navigation.navigate("Quiz")}
 style={{backgroundColor:"black",padding:14,borderRadius:25, marginLeft:"auto", marginRight:"auto",marginTop:20}}>
  <Text style={{color:"#FDCB00", fontWeight:"bold"}} >Começar Joguinho</Text>
</Pressable>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})