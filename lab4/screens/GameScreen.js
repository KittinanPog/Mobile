import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Keyboard,
} from "react-native";
import Colors from "../constants/colors";

const GameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [selectedNumber, setSelectedNumber] = useState();
  const [confirmed, setConfirmed] = useState(false);
  const [rounds, setRound] = useState(0);
  const [guessResult, setGuessResult] = useState("");

  let confirmedOutput;

  // ส่วนแสดงผลลัพธ์การทายตัวเลขของผู้เล่น
  if (confirmed) {
    confirmedOutput = (
      <View style={styles.resultContainer}>
        <Text>You selected</Text>
        <View style={styles.numberContainer}>
          <Text style={styles.number}>{selectedNumber}</Text>
        </View>
        <Text>
          {guessResult}Round:{rounds}
        </Text>
        
      </View>
    );
  }

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText);
  };

  const resetInputHandler = () => {
    setEnteredValue("");
  };

  const confirmInputHandler = () => {
    setSelectedNumber(parseInt(enteredValue));

    setConfirmed(true);
    setEnteredValue("");
    setRound(parseInt(rounds) + 1);
    Keyboard.dismiss();
  };

  const guessNumberHandler = () => {
    if (enteredValue == props.answer) {
      props.onGameOver(parseInt(rounds)+1);
    }
    if (enteredValue <= props.answer) {
      setGuessResult("answer is greater.");
    }
    if (enteredValue >= props.answer) {
      setGuessResult("answer is lower.");
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text>Guess a Number</Text>
        <TextInput
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
          value={enteredValue}
          onChangeText={numberInputHandler}
          //...เพิ่ม property value และ onChangeText...
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Reset"
              color={Colors.accent}
              onPress={resetInputHandler}
              // ...เพิ่ม property onPress...
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Confirm"
              color={Colors.primary}
              onPress={() => {
                confirmInputHandler();
                guessNumberHandler();
              }}
              // ...เพิ่ม property onPress...
            />
          </View>
        </View>
      </View>
      {confirmedOutput}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
  card: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    padding: 20,
    elevation: 8,
    borderRadius: 20,
  },
  input: {
    width: 100,
    textAlign: "center",
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: "center",
    height: 30,
    marginVertical: 10,
  },
  numberContainer: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    height: 52,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: Colors.accent,
    fontSize: 22,
  },
});

export default GameScreen;
