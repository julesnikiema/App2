import { ScrollView, StyleSheet, View } from 'react-native';
import Box from "./components/Box"

export default function App() {
  return (
    
    <View style={styles.container}>
    <Box style={{backgroundColor:"#be9b00",paddingVertical :100  }}> hello 1 mon ami </Box>
    <Box style={{backgroundColor:"#b569b0"}}> hello 2</Box>
    <Box style={{backgroundColor:"#be6680"}}> hello 3</Box>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row" ,
   alignItems :"baseline",
  //  justifyContent:"flex-end",    
  //  justifyContent:"space-between",  
    // justifyContent:"space-around ",



    // marginTop:50,?
    borderWidth:6,
    borderColor: "red"
  }
});
