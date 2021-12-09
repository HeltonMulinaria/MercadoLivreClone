import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Images } from "react-native";
import { Ionicons, MaterialIcons, Octicons, Feather } from "@expo/vector-icons";
import { Card, Button, Icon } from "react-native-elements";
import { color } from "react-native-elements/dist/helpers";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#F3D413" />
      <View style={styles.menu}>
        <Text style={styles.iconVoltar}>{iconVoltar}</Text>
        <Text style={styles.textoMenuEsquerda}> Ofertas do dia</Text>
        <Text style={styles.iconsMenuDireita}>
          {iconPesquisar} {iconCarrinho}
        </Text>
      </View>
      <View style={styles.location}>
        <Text style={styles.iconLocalizacao}>
          {iconLocalizacao} Enviar para Helton Luiz Mulinaria Garona - Av...     {iconIr}
        </Text>
      </View>
      <View style={styles.filter}>
        <Text style={styles.textoFiltrarEsquerda}>10.000 produtos</Text>
        <Text style={styles.textoFiltrarDireita}>Filtrar</Text>
        <Text style={styles.iconFiltrar}>{iconFiltrar}</Text>
      </View>
      <View style={styles.cardFilter}>

        <Card containerStyle={{ marginRight: 0, marginLeft: 8, width: 98, height: 120,  borderRadius: 4, borderBottomWidth: 5, borderBottomColor: "#3580F8", justifyContent:"space-between", alignItems:"center" }}>
          <Card.Image
            style={{ width: 50, height: 50, marginBottom:10 }}
            source={require("./assets/todasOfertas.webp")}
          ></Card.Image>
          <Text style={{fontSize:10, textAlign:"center", }}>Todas as ofertas</Text>
        </Card>
        <Card containerStyle={{ marginRight: 0, marginLeft: 8, width: 98, height: 120,  borderRadius: 4, justifyContent:"space-between", alignItems:"center" }}>
          <Card.Image
            style={{ width: 50, height: 50, marginBottom:10 }}
            source={require("./assets/ofertasRelampago.webp")}
          ></Card.Image>
          <Text style={{fontSize:10, textAlign:"center", color:"#969896"}}>Ofertas relampago</Text>
        </Card>
        <Card containerStyle={{ marginRight: 0, marginLeft: 8, width: 98, height: 120,  borderRadius: 4, justifyContent:"space-between", alignItems:"center" }}>
          <Card.Image
            style={{ width: 50, height: 50, marginBottom:10 }}
            source={require("./assets/ExclusivosMercadoLivre.webp")}
          ></Card.Image>
          <Text style={{fontSize:10, textAlign:"center", color:"#969896"}}>Exclusivos Mercado Livre</Text>
        </Card>
        <Card containerStyle={{ marginRight: 0, marginLeft: 8, width: 98, height: 120,  borderRadius: 4,  justifyContent:"space-between", alignItems:"center" }}>
          <Card.Image
            style={{ width: 50, height: 50, marginBottom:10 }}
            source={require("./assets/FullFreteGratis.webp")}
          ></Card.Image>
          <Text style={{fontSize:10, textAlign:"center", color:"#969896"}}>Full + Frete Grátis</Text>
        </Card>     
      </View>
      <View style={styles.cardProducts}>
       
      <Card containerStyle={{ width:"50%",  margin: 0,  paddingTop:0 }}>
          <Card.Image
            style={{ width: 70, height: 145,  left:"33%"}}
            source={require("./assets/celular1.webp")}
          ></Card.Image>

          <Button
            icon={<Icon color="#ffffff" />}
            buttonStyle={{
              marginTop: 10,
              padding:0,
              width: 100,
              height: 22,
              borderRadius: 4,
              backgroundColor:"#2968c8",
            }}
            title="OFERTA DO DIA"
            titleStyle={{
              color: "#fff",
              fontSize: 13
              
          }}
          />
          <Text
            style={{
              marginTop: 10,
              fontSize: 12,
              textDecorationLine: "line-through",
              color: "#969896",
            }}
          >
            R$ 2.699
          </Text>
          <Text style={{ marginTop: 5, fontSize: 16 }}>
            R$ 1.899{" "}
            <Text style={{ color: "#00a650", fontSize: 12 }}> 29% OFF</Text>{" "}
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
          <Text style={styles.textParcelamento}> 12 X R$ 158</Text>
          <Text style={styles.textParcelamentoSobrescrito}>25</Text>
          <Text style={styles.textParcelamento}> sem juros</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'flex-start' }} >
          <Text style={styles.textFreteGratis}>Frete Grátis</Text>          
            <Text style={styles.iconEntregaFull}>{iconEntregaFull}</Text>
            <Text style={styles.textFull}>FULL</Text>
          </View>
          <Text style={styles.textDescricao}>
            Moto G60 Dual Sim 128 GB
          </Text>
        </Card>

        <Card containerStyle={{ width:"50%",  margin: 0,  paddingTop:0 }}>
          <Card.Image
            style={{ width: 70, height: 145,  left:"33%"}}
            source={require("./assets/celular2.webp")}
          ></Card.Image>

          <Button
            icon={<Icon color="#ffffff" />}
            buttonStyle={{
              marginTop: 10,
              padding:0,
              width: 100,
              height: 22,
              borderRadius: 4,
              backgroundColor:"#2968c8",
            }}
            title="OFERTA DO DIA"
            titleStyle={{
              color: "#fff",
              fontSize: 13
              
          }}
          />
          <Text
            style={{
              marginTop: 10,
              fontSize: 12,
              textDecorationLine: "line-through",
              color: "#969896",
            }}
          >
            R$ 7.599
          </Text>
          <Text style={{ marginTop: 5, fontSize: 16 }}>
            R$ 5.599{" "}
            <Text style={{ color: "#00a650", fontSize: 12 }}> 26% OFF</Text>{" "}
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
          <Text style={styles.textParcelamento}> 12 X R$ 466</Text>
          <Text style={styles.textParcelamentoSobrescrito}>58</Text>
          <Text style={styles.textParcelamento}> sem juros</Text>          
         
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'flex-start' }} >
          <Text style={styles.textFreteGratis}>Frete Grátis</Text>          
            <Text style={styles.iconEntregaFull}>{iconEntregaFull}</Text>
            <Text style={styles.textFull}>FULL</Text>
          </View>
          <Text style={styles.textDescricao}>
            Apple iPhone 12/128
          </Text>
        </Card>

      

      </View>
    </View>
  );
}

const iconEntregaFull = (
  <MaterialIcons name="flash-on" size={19} color="#00a650" />
);
const iconPesquisar = (
  <Ionicons name="search-outline" size={24} color="#313331" />
);
const iconLocalizacao = <Octicons name="location" size={13} color="#313331"  />;
const iconCarrinho = <Ionicons name="cart-outline" size={24} color="#313331" />;
const iconVoltar = <Feather name="arrow-left" size={24} color="black" />
const iconIr =<MaterialIcons name="arrow-forward-ios" size={13} color="#969896" />
const iconFiltrar = (
  <MaterialIcons name="keyboard-arrow-down" size={20} color="#3580F8" />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    justifyContent: "space-around",


  },
  menu: {
    marginTop: "5%",
    backgroundColor: "#FEDB15",
    height: "10%",
    width: "100%",
    
  },
  location: {
    backgroundColor: "#FEDB15",
    height: "6.5%",
    width: "100%",
    
  },
  filter: {

    backgroundColor: "#FEFFFE",
    height: "7.3%",
    width: "100%",
    elevation: 3,
  },
  cardFilter: {
    justifyContent: "space-between",
    flexDirection: "row",

    backgroundColor: "#E1E2E1",
    height: "25%",
    width: "100%",
    textAlign:"center",

  },

  cardProducts: {   
    flexDirection: "row",
    flexWrap: "wrap",

    backgroundColor: "#FEFFFE",
  },
  cardItem: {
    margin: 0,
    

  },


  iconLocalizacao: {
    position: "absolute",
    left: 15,
    bottom: 15,
  },

  iconVoltar: {
    position: "absolute",
    left: 12,
    bottom: 15,
  },

  textoMenuEsquerda: {
    position: "absolute",
    left: 50,
    bottom: 20,
  },

  iconsMenuDireita: {
    position: "absolute",
    bottom: 15,
    right: 10,
  },
  textoFiltrarEsquerda: {
    position: "absolute",
    bottom: 15,
    left: 10,
    color: "#969896",
  },

  iconFiltrar: {
    position: "absolute",
    bottom: 13,
    right: 10,

  },
  textoFiltrarDireita: {
    position: "absolute",
    bottom: 15,
    right: 35,
    color: "#3580F8",
  },
  textParcelamento: {
    
    color:"#00a650",
    fontSize:10,   
  },
  textParcelamentoSobrescrito: {  
    
    color:"#00a650",
    fontSize:7,
    textAlignVertical:"top"   
    
  },
  textFreteGratis: {    
    color: "#00a650",     
  },
  textFull: {    
    color: "#00a650", 
    fontWeight: "bold",
    fontStyle: "italic",
  },
  iconEntregaFull:{
        top:1,
  },
  textDescricao: {
    color: "#434D50", 
    fontWeight: "100",
     marginTop: 10,
     fontSize:15,         
  },
});
