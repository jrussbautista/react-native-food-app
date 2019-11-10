import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import color from '../utils/colors';

const Login = ({navigation}) => {
  return (
    <KeyboardAvoidingView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Text style={styles.heading}> Login</Text>
          <View style={styles.group}>
            <View style={{marginBottom: 10}}>
              <Text style={styles.label}> Email </Text>
            </View>
            <TextInput placeholder="Your email here.." style={styles.input} />
          </View>
          <View style={styles.group}>
            <View style={{marginBottom: 10}}>
              <Text style={styles.label}> Password </Text>
            </View>
            <TextInput
              placeholder="Your Password here.."
              secureTextEntry={true}
              style={styles.input}
            />
          </View>
          <View style={styles.group}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={styles.btn}>
              <Text style={styles.btnText}> Login </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

Login.navigationOptions = ({navigation}) => ({
  header: null,
});

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  heading: {
    fontSize: 25,
    color: color.primary,
  },
  authContainer: {},
  group: {
    marginTop: 15,
  },
  label: {
    fontSize: 17,
  },
  input: {
    fontSize: 16,
    borderColor: '#d5d5d5',
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 6,
    paddingVertical: 12,
  },
  btn: {
    backgroundColor: color.primary,
    padding: 12,
    borderRadius: 4,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});
