import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: screenWidth,
    minHeight: screenHeight,
    backgroundColor: "#000",
  },
  fullscreenArea: {
    position: "absolute",
    minWidth: screenWidth,
    minHeight: screenHeight,
    flexDirection: "row",
    zIndex: 1,
  },
  menuLeft: {
    width: "60%",
    height: "100%",
    backgroundColor: "#000",
    borderRightWidth: 1,
    borderRightColor: "#555",
    padding: 30,
  },
  menuRight: {
    minWidth: "40%",
    minHeight: "100%",
  },
  menuOptions: {
    width: "100%",
    height: "90%",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  menuOption: {
    width: "100%",
    height: 50,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#777",
    paddingHorizontal: 10,
  },
  filteringBar: {
    minWidth: "100%",
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: 22,
  },
  categorySelectionButton: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#222",
    paddingHorizontal: 10,
  },
  topBar: {
    minWidth: "100%",
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  searchbar: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#191919",
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  tasksContainer: {
    width: "92%",
    height: screenHeight - 143,
    marginTop: 10,
    alignSelf: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 20,
    backgroundColor: "#191919",
    padding: 15,
  },
  text: {
    fontFamily: "ReadexPro-Regular",
    color: "#fff",
  },
  header: {
    fontFamily: "ReadexPro-Bold",
    color: "#fff",
  },
  activityIndicator: {
    color: "#AAA",
  },
  category: {
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#333",
    paddingHorizontal: 7,
  },
  categoryText: {
    fontFamily: "ReadexPro-Regular",
    fontSize: 12,
    color: "#fff",
  },
  taskContainer: {
    marginVertical: 10,
    width: "100%",
    height: 140,
    borderRadius: 15,
    overflow: "hidden",
  },
  taskLabels: {
    flexDirection: "row",
  },
  pendingTaskLabel: {
    marginRight: 5,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#78c1e2",
    paddingHorizontal: 2,
  },
  completedTaskLabel: {
    marginRight: 5,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#50ff3d",
    paddingHorizontal: 2,
  },
  urgentTaskLabel: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#ff503d",
    paddingHorizontal: 2,
  },
  pendingTaskLabelText: {
    fontFamily: "ReadexPro-SemiBold",
    fontSize: 9,
    color: "#78c1e2",
  },
  completedTaskLabelText: {
    fontFamily: "ReadexPro-SemiBold",
    fontSize: 9,
    color: "#50ff3d",
  },
  urgentTaskLabelText: {
    fontFamily: "ReadexPro-SemiBold",
    fontSize: 9,
    color: "#ff503d",
  },
  task: {
    height: "100%",
    justifyContent: "center",
    backgroundColor: "#111",
    padding: 10,
  },
  deleteTaskButton: {
    width: 70,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    backgroundColor: "#EA4335",
  },
  markTaskAsCompletedButton: {
    width: 70,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    backgroundColor: "#34A853",
  },
  markTaskAsPendingButton: {
    width: 70,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    backgroundColor: "#59b2db",
  },
  magicAIButton: {
    width: 55,
    height: 55,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    overflow: "hidden",
  },
  addTaskButton: {
    width: 155,
    height: 55,
    marginLeft: 17,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#0f776d",
    paddingLeft: 7,
  },
  taskPopup: {
    width: 400,
    height: 560,
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#222",
    padding: 25,
  },
  taskInput: {
    width: "100%",
    height: 410,
    marginVertical: 20,
    backgroundColor: "#191919",
    borderRadius: 15,
    padding: 10,
    color: "#fff",
  },
  popupButtonRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  commonButton: {
    width: 100,
    height: 45,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#777",
    backgroundColor: "#1e1e1e",
    paddingHorizontal: 10,
  },
  messagePopup: {
    width: 400,
    height: 200,
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderRadius: 25,
    backgroundColor: "#222",
    padding: 25,
  },
  minimalPopup: {
    position: "absolute",
    top: 70,
    right: 40,
    width: "auto",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#777",
    borderRadius: 20,
    backgroundColor: "#333",
    paddingHorizontal: 10,
    zIndex: 1,
  },
  settingsPopup: {
    width: 400,
    height: 200,
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderRadius: 25,
    backgroundColor: "#222",
    padding: 25,
  },
  settingsButton: {
    width: 150,
    height: 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#777",
    borderRadius: 15,
    backgroundColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 10,
  },
  pickerPopup: {
    width: 400,
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#222",
    padding: 25,
  },
  pickerOptionsList: {
    width: "100%",
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: "#111",
    overflow: "hidden",
  },
  pickerOption: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#050505",
    paddingHorizontal: 15,
  },
});

export default styles;
