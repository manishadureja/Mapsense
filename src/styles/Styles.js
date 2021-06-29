import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor:'white'
      },
    subContainer: {
      flexDirection: 'column',
      alignItems:'flex-start',
      margin: 0,
      flex:1,
      backgroundColor:'white'
    },
    textStyle: {
      fontSize: 20,
      margin: 0
    },
    buttonStyle: {
      fontSize: 20,
      flex: 0,
      marginTop: 5,
      height: 10,
      width:50
    },
    button: {
        fontSize: 20,        width: '100%',
        height: '100%'
      },
    stretch: {
        width: "100%", height: "100%", resizeMode: "contain"
    },
    logo: {
        width: '100%',
        height: '30%',
        resizeMode: 'right',
        margin: 0,
    },
    input: {    
        height: 40,
        margin: 0,
        borderWidth: 1,
        width:300,
        backgroundColor:'gray',
        borderWidth:'0'
    },
  });
    
export {styles};