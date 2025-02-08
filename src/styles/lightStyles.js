import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: screenWidth,
    minHeight: screenHeight,
    backgroundColor: "#eaeaea",
  },
  keyboardAvoidingContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  authContainer: {
    width: 350,
    minHeight: 545,
    maxHeight: "auto",
    flexDirection: "column",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#999",
    backgroundColor: "#dbdbdb",
    padding: 25,
  },
  authAppTitle: {
    marginTop: 7,
    fontFamily: "ReadexPro-Bold",
    fontSize: 40,
    color: "#000",
  },
  authAppTitleGradient: {
    colors: ["#3287b5", "#34bc39"],
  },
  authInput: {
    width: "100%",
    height: 50,
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#999",
    color: "#000",
    backgroundColor: "#CCC",
    paddingHorizontal: 10,
  },
  authInputPlaceholder: {
    color: "#555",
  },
  authConfirmButton: {
    width: "100%",
    height: 50,
    marginTop: 30,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#999",
    backgroundColor: "#34A853",
    paddingHorizontal: 10,
  },
  authTipText: {
    fontFamily: "ReadexPro-Regular",
    color: "#111",
    fontSize: 12,
    textDecorationLine: "underline",
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
    backgroundColor: "#eaeaea",
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
    backgroundColor: "#dbdbdb",
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
    backgroundColor: "#c9c9c9",
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  taskContainer: {
    width: "92%",
    height: screenHeight - 143,
    marginTop: 10,
    alignSelf: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 20,
    backgroundColor: "#dbdbdb",
    padding: 15,
  },
  text: {
    fontFamily: "ReadexPro-Regular",
    color: "#000",
  },
  header: {
    fontFamily: "ReadexPro-Bold",
    color: "#000",
  },
  activityIndicator: {
    color: "#000",
  },
  category: {
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#d6d6d6",
    paddingHorizontal: 7,
  },
  categoryText: {
    fontFamily: "ReadexPro-Regular",
    fontSize: 12,
    color: "#000",
  },
  taskControl: {
    marginVertical: 10,
    width: "100%",
    height: 140,
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 15,
    overflow: "hidden",
  },
  taskLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pendingTaskLabel: {
    marginRight: 5,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#16739e",
    paddingHorizontal: 2,
  },
  completedTaskLabel: {
    marginRight: 5,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#17910a",
    paddingHorizontal: 2,
  },
  urgentTaskLabel: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#720b00",
    paddingHorizontal: 2,
  },
  pendingTaskLabelText: {
    fontFamily: "ReadexPro-SemiBold",
    fontSize: 9,
    color: "#16739e",
  },
  completedTaskLabelText: {
    fontFamily: "ReadexPro-SemiBold",
    fontSize: 9,
    color: "#17910a",
  },
  urgentTaskLabelText: {
    fontFamily: "ReadexPro-SemiBold",
    fontSize: 9,
    color: "#720b00",
  },
  dueDateTaskLabelText: {
    fontFamily: "ReadexPro-SemiBold",
    fontSize: 12,
    color: "#000",
    paddingLeft: 3,
  },
  task: {
    height: "100%",
    justifyContent: "center",
    backgroundColor: "#ededed",
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
  taskAnalysisButton: {
    width: 55,
    height: 55,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    overflow: "hidden",
  },
  taskAnalysisFloatingMenu: {
    position: "absolute",
    top: -145,
    left: -75,
  },
  taskAnalysisFloatingMenuBox: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#c1c1c1",
    backgroundColor: "#e2e2e2",
    overflow: "hidden",
  },
  taskAnalysisFloatingMenuBottomTriangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderTopWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 0,
    borderLeftWidth: 10,
    borderTopColor: "#c1c1c1",
    borderRightColor: "transparent",
    borderBottomColor: "transparent",
    borderLeftColor: "transparent",
    alignSelf: "center",
  },
  taskAnalysisMenuOption: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#a5a5a5",
  },
  addTaskButton: {
    width: 155,
    height: 55,
    marginLeft: 17,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#49eddc",
    paddingLeft: 7,
  },
  taskPopup: {
    width: 370,
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#e0e0e0",
    padding: 25,
  },
  taskInput: {
    width: "100%",
    height: 300,
    marginTop: 20,
    backgroundColor: "#f2f2f2",
    borderRadius: 15,
    padding: 10,
    color: "#000",
  },
  taskInsight: {
    width: "100%",
    marginTop: 10,
    borderRadius: 15,
  },
  popupButtonRow: {
    width: "100%",
    marginTop: 20,
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
    borderColor: "#d6d6d6",
    backgroundColor: "#bfbfbf",
    paddingHorizontal: 10,
  },
  cancelButton: {
    backgroundColor: "#fc6c6c",
  },
  confirmButton: {
    backgroundColor: "#60cfff",
  },
  confirmBigButton: {
    width: "100%",
    height: 45,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#d6d6d6",
    backgroundColor: "#60cfff",
    paddingHorizontal: 10,
  },
  messagePopup: {
    width: 370,
    height: 200,
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderRadius: 25,
    backgroundColor: "#e0e0e0",
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
    backgroundColor: "#d1d1d1",
    paddingHorizontal: 10,
    zIndex: 1,
  },
  minimalPopupSuccess: {
    backgroundColor: "#448c25",
  },
  settingsPopup: {
    width: 370,
    height: 220,
    justifyContent: "space-between",
    borderRadius: 25,
    backgroundColor: "#e0e0e0",
    padding: 25,
  },
  settingsButton: {
    width: 150,
    height: 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#c9c9c9",
    borderRadius: 15,
    backgroundColor: "rgba(0,0,0,0.1)",
    paddingHorizontal: 10,
  },
  pickerPopup: {
    width: 400,
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#e0e0e0",
    padding: 25,
  },
  pickerOptionsList: {
    width: "100%",
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: "#d1d1d1",
    overflow: "hidden",
  },
  pickerOption: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ededed",
    paddingHorizontal: 15,
  },
  expandableSelection: {
    width: "100%",
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: "#f2f2f2",
    padding: 10,
  },
  toggleSwitchContainer: {
    width: 50,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    padding: 2,
  },
  toggleSwitchBall: {
    width: 23,
    height: 23,
    borderRadius: 13,
    backgroundColor: "white",
  },
  dateContainer: {
    borderRadius: 20,
    borderColor: "gray",
    backgroundColor: "#eaeaea",
    padding: 20,
  },
  datePicker: {
    backgroundColor: "#eaeaea",
    calendarBackground: "#eaeaea",
    textSectionTitleColor: "#333333",
    selectedDayBackgroundColor: "#0095d6",
    selectedDayTextColor: "#000",
    todayTextColor: "#01597f",
    dayTextColor: "#000",
    textDisabledColor: "#8e8d8d",
  },
  taskControlScroll: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 15,
    overflow: "hidden",
  },
  urgentTask: {
    backgroundColor: "#ea9e96",
  },
  urgentTaskCategoryLabel: {
    backgroundColor: "#d8867d",
  },
  selectedPickerOption: {
    backgroundColor: "#bfbfbf",
  },
  taskAnalysisButtonGradient: {
    colors: ["#63ffbe", "#29e8d5"],
  },
  switch: {
    backgroundColor: "#cecece",
  },
  icon: {
    color: "black",
  },
  statusBar: {
    style: "dark",
    backgroundColor: "#eaeaea",
  },
  navigationBar: {
    color: "#eaeaea",
    buttonStyle: "dark",
  },
});

export default lightStyles;
