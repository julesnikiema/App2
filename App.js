import { ScrollView, StyleSheet, View } from 'react-native';
import Box from "./components/Box"

export default function App() {
  return (
      
    <View style={styles.container}>
    <Box style={{backgroundColor:"#be9b00", top:75, left:75}}>box 1</Box>
    <Box style={{backgroundColor:"#b569b0"}}>box 2</Box>
    <Box style={{backgroundColor:"#be6680"}}>box 3</Box>
    <Box style={{backgroundColor: "blue",position :"absolute", top:100, left:75}}>box 4</Box>
    <Box style={{backgroundColor:"#b5d9b0"}}>box 5</Box>
    <Box style={{backgroundColor:"#b5e680"}}>box 6</Box>
    <Box style={{backgroundColor:"red"}}>box 7</Box>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:64,
    borderWidth:6,
    borderColor: "red"
  }
});
