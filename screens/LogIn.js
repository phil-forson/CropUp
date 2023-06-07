import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import React from "react";

export default function LogIn() {
  return (
    <View
      style={[{ flex: 1, paddingVertical: 100, justifyContent: "flex-start" }]}
    >
      <View>
        <Text style={styles.titlep}>Hi, Welcome Back! 👋</Text>
      </View>
      <View>
        <Text style={styles.subtitle}>Fill in your details to login</Text>
      </View>
      <View>
        <Text style={styles.flow}>Email address</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => console.log(text)}
          placeholder="Enter your email"
        />
      </View>
      <View>
        <Text style={styles.flow}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => console.log(text)}
          placeholder="Enter your Password"
        />
      </View>
      <TouchableOpacity onPress={() => console.log("navigation")}>
        <Text style={styles.fpassword}> Forgot Password</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("navigation")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.bottomtext}>Don't have an account ? </Text>
        </View>
        <TouchableOpacity onPress={() => console.log("texts")}>
          <Text style={styles.bText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      {/*//WRAP IT AND MAKE IT APPEAR IN ONE ROW// */}
    </View>
  );
}

const styles = StyleSheet.create({
  bText: {
    color: "#007E23",
    fontWeight: "500",
  },
  fpassword: {
    textAlign: "right",
    paddingTop: 10,
    paddingBottom: 40,
    color: "#777777",
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 20,
    paddingRight: 50,
    fontSize: 14,
    borderColor: "#777777",
  },
  flow: {
    color: "#777777",
    marginTop: 20,
    paddingLeft: 0,
    paddingBottom: 5,
  },
  titlep: {
    fontWeight: "500",
    fontSize: 25,
    textAlign: "center",
  },
  subtitle: {
    color: "#777777",
  },
  button: {
    backgroundColor: "#007E23",
    borderRadius: 10,
    marginBottom: 120,
  },
  buttonText: {
    textAlign: "center",
    paddingBottom: 10,
    paddingTop: 10,
    color: "white",
  },
  inputContainer: {
    flexDirection: "row",
    textAlign: "center",
    marginTop: 160,
    alignItems: "center",
  },
  bottomtext: {
    color: "#777777",
    paddingLeft: 20,
  },
});
