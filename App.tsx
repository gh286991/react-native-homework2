import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";

const pages = {
  count: 1,
  note: 2,
};

export default function App() {
  const [count, setCount] = useState<number>(0);
  const [page, setPage] = useState<number>(pages.count);
  const myIcon = <Icon name="plus" size={50} color="#444444" />;
  const minsIcon = <Icon name="minus" size={50} color="#444444" />;

  const countContent = (
    <View style={styles.countContainer}>
      <TouchableOpacity
        onPress={() => {
          setCount(count - 1);
        }}
      >
        <View >{minsIcon}</View>
      </TouchableOpacity>
      <View>
        <Text style={styles.count}>{count}</Text>
      </View>
      <TouchableHighlight
        style={styles.button}
        underlayColor={"gray"}
        onPress={() => {
          setCount(count + 1);
        }}
      >
        <View>{myIcon}</View>
      </TouchableHighlight>
    </View>
  );

  const noteContent = (
    <Text style={styles.noteContainer}>
      這是一個簡單的計數器範例，使用react hook 的 useState 來實作
    </Text>
  );

  return (
    <LinearGradient colors={["#a1c4fd", "#c2e9fb"]} style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.tabContainer}>
        <TouchableOpacity
          onPress={() => {
            setPage(pages.count);
          }}
        >
          <Text style={styles.tab}>計數器</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setPage(pages.note);
          }}
        >
          <Text style={styles.tab}>說明</Text>
        </TouchableOpacity>
      </View>

      {page === pages.count ? countContent : noteContent}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    position: "absolute",
    top: 80,
    left: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: '30%'
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  count: {
    fontSize: 30,
  },
  countContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "50%",
  },
  button: {
    alignItems: "center",
    padding: 3,
  },
  noteContainer: {
    width: "60%",
    fontSize: 24
  },
  tab: {
    fontSize: 20
  }
});
