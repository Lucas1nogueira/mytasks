import { useContext } from "react";
import { Animated, Dimensions, Image, Text, View } from "react-native";
import { ThemeContext } from "../contexts/ThemeContext";
import MenuOption from "./MenuOption";

function Menu(props) {
  const { styles } = useContext(ThemeContext);

  return (
    <Animated.View
      style={[
        styles.menuContainer,
        {
          transform: [
            {
              translateX: props.animation,
            },
          ],
        },
      ]}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("../../assets/adaptive-icon.png")}
          style={{ width: 80, height: 80, marginLeft: -15, marginRight: -10 }}
        />
        <View>
          <Text style={styles.header}>Gentask</Text>
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
  );
}

export default Menu;
