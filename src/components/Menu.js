import React, { useEffect } from "react";
import {
  Animated,
  BackHandler,
  Image,
  Pressable,
  Text,
  View,
} from "react-native";
import MenuOption from "./MenuOption";
import styles from "../styles/styles";

function Menu(props) {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        props.close();
        return true;
      }
    );
    return () => backHandler.remove();
  }, []);

  return (
    <View
      style={[styles.fullscreenArea, { backgroundColor: "rgba(0,0,0,0.5)" }]}
    >
      <Animated.View
        style={[
          styles.menuLeft,
          {
            transform: [
              {
                translateX: props.animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-200, 0],
                }),
              },
            ],
          },
        ]}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../../assets/adaptive-icon.png")}
            style={{ width: 80, height: 80 }}
          />
          <View>
            <Text style={styles.text}>MyTasks</Text>
            <Text style={styles.text}>Task Manager + AI</Text>
          </View>
        </View>
        <View style={styles.menuOptions}>
          <MenuOption
            iconName="settings"
            text="Ajustes"
            action={props.openSettingsPopup}
          />
        </View>
      </Animated.View>
      <Pressable style={styles.menuRight} onPress={props.close} />
    </View>
  );
}

export default Menu;
