import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Statusbar, Platform, Button, TextInput } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}> Sign Up</Text>
      </View>
      <View style={styles.logo}>
        <Image source={require("./assets/Business_Findr_Logo.png")} style={styles.logoImage}/>
      </View>
      <View style={styles.inputContainer}>
        <Fontisto 
          name={"email"} 
          size={20} 
          color={"#9A9A9A"} 
          style={styles.inputIcon} />
        <TextInput style={styles.textInput} placeholder='Email:'/>
      </View>
      <View style={styles.inputContainer}>
        <Fontisto 
          name={"locked"} 
          size={20} 
          color={"#9A9A9A"} 
          style={styles.inputIcon} />
        <TextInput style={styles.textInput} placeholder='Password:' secureTextEntry />
      </View>
      <View style={styles.inputContainer}>
        <Fontisto 
          name={"locked"} 
          size={20} 
          color={"#9A9A9A"} 
          style={styles.inputIcon} />
        <TextInput style={styles.textInput} placeholder='Re-type Password:' secureTextEntry />
        {/* the secureTextEntry is to hide the password characters */}
      </View>
      <View style={styles.signupBtn}>
        <Button title = "SIGN UP" />
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText1}> Do you have  an Account? <Text style={styles.signIn}>Sign in </Text> 
        {/* Added this line to style the sgin in, underline and make it blue */}
        </Text>
        <Text style={styles.footerText}> Or Sign In Using Social Media</Text>
        <View style={styles.socialMediaContainer}>
          <Ionicons
          name={"logo-facebook"}
          size={30}
          color={"blue"}
          style={styles.socialIcon}/>
          <Fontisto
          name={"instagram"}
          size={30}
          color={"red"} style={styles.socialIcon}/>
          <AntDesign
          name={"google"}
          size={30}
          color={"#CA3626"} style={styles.socialIcon}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9D9D9",
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0,
  },
  signupContainer: {},//i used this to show the border of the text but i couldnt centralize it here
  signupText: { // styling the sign up text
    marginTop: 20,
    textAlign: 'center',
    fontSize: 40,
    fontWeight: "bold",
    color: "#262626",
  },
  logo: {
  },
  logoImage: { // styling the logo image
    width: "100%",
    height: 150,
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    borderRadius: 20,
    marginHorizontal: 50,
    elevation: 15,
    marginVertical: 15,
    alignItems: "center",
    height: 53,
  },
  inputIcon: {
    marginLeft: 18,
  },
  textInput: {
    flex: 1,
    fontSize: 20,
    paddingLeft: 10,
  },
  signupBtn: {
    backgroundColor: "#2E5AA6",
    width: "50%",
    height: 48,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 14,
    marginHorizontal: 100,
    elevation: 20,
    justifyContent: "center",
  },
  signIn: {
    textDecorationLine: "underline",
    color: "blue",
  },
  footerContainer: {
    marginTop: 25,
  },
  footerText1: {
    color: "#262626",
    textAlign: "center",
    fontSize: 14,
    paddingBottom: 20,
  },
  footerText: {
    color: "#262626",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    paddingBottom: 20,
  },
  socialMediaContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  socialIcon: {
    backgroundColor: "white",
    elevation: 15,
    margin: 10,
    padding: 10,
    borderRadius: 50,
  },
});
