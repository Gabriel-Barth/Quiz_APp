import {StyleSheet,Text,View,Pressable, FlatList, } from "react-native";
  import React from "react";
  import { useRoute } from "@react-navigation/native";
  import { AntDesign } from "@expo/vector-icons";
  const ResultsScreen = () => {
    const route = useRoute();
    // console.log(route.params);
    return (
      <View style={{ margin: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text>Seu Resultado</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 14,
            }}
          >
          </View>
        </View>
  
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          <Text>Questões respondidas</Text>
          <Text>(5/5)</Text>
        </View>
  
        <Pressable
          style={{
            backgroundColor: "white",
            height: 220,
            borderRadius: 7,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 15,
              fontWeight: "500",
              textAlign: "center",
              marginTop: 8,
            }}
          >
            Seus pontinhos 
          </Text>
          <FlatList
            numColumns={2}
            data={route.params.answers}
            renderItem={({ item, i }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft:"auto",
                  marginRight:"auto"
                }}
              >
                <Text>{item.question}</Text>
                {item.answer === true ? (

                    // icones importados pela  AntDesign certo e errado 
                  <AntDesign style={{marginLeft:5}} name="checkcircle" size={20} color="green" />
                ) : (
                  <AntDesign style={{marginLeft:5}} name="closecircle" size={20} color="red" />
                )}
              </View>
            )}
          />
  
         <Pressable style={{backgroundColor:"green",padding:8,marginLeft:"auto",marginRight:"auto",marginBottom:20,borderRadius:5}}>
            <Text style={{color:"white",textAlign:"center"}}>Obrigado Por jogar</Text>
          </Pressable>
               
        </Pressable>
      </View>
    );
  };
  
  export default ResultsScreen;
  
  const styles = StyleSheet.create({});