import { useRef, useState, useEffect } from "react";
import { View, Animated, BackHandler } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "../styles/styles";
import Menu from "../components/Menu";
import TopBar from "../components/TopBar";
import TasksArea from "../components/TasksArea";
import TaskViewPopup from "../components/TaskViewPopup";
import CreateTaskPopup from "../components/CreateTaskPopup";
import MessagePopup from "../components/MessagePopup";
import MinimalPopup from "../components/MinimalPopup";
import SettingsPopup from "../components/SettingsPopup";
import { getValueFor, save } from "../services/storage";
import {
  animateOpening,
  animateClosing,
  animateSlideIn,
  animateSlideOut,
} from "../utils/animationUtils";

function HomeScreen() {
  const didFetch = useRef(false);

  const [tasks, setTasks] = useState(null);
  const [filteredTasks, setFilteredTasks] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [menuAnimation, setMenuAnimation] = useState(new Animated.Value(0));
  const [menuLeftAnimation, setMenuLeftAnimation] = useState(
    new Animated.Value(0)
  );
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [minimalPopupMessage, setMinimalPopupMessage] = useState("");

  const [popups, setPopups] = useState({
    view: false,
    create: false,
    exit: false,
    delete: false,
    discard: false,
    loading: false,
    success: false,
    noText: false,
    error: false,
    settings: false,
  });

  const [popupAnimations, setPopupAnimations] = useState({
    view: new Animated.Value(0),
    create: new Animated.Value(0),
    exit: new Animated.Value(0),
    delete: new Animated.Value(0),
    discard: new Animated.Value(0),
    loading: new Animated.Value(0),
    loadingRight: new Animated.Value(0),
    success: new Animated.Value(0),
    successRight: new Animated.Value(0),
    noText: new Animated.Value(0),
    noTextRight: new Animated.Value(0),
    error: new Animated.Value(0),
    settings: new Animated.Value(0),
  });

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        setPopups((prevState) => ({
          ...prevState,
          exit: true,
        }));
        animateOpening(popupAnimations["exit"]);
        return true;
      }
    );
    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    getValueFor("tasks").then((data) => {
      if (data) setTasks(data);
      didFetch.current = true;
    });
  }, []);

  useEffect(() => {
    if (didFetch.current) {
      save("tasks", tasks);
    }
  }, [tasks]);

  return (
    <View style={styles.container}>
      {openMenu && (
        <Animated.View
          style={[styles.fullscreenArea, { opacity: menuAnimation }]}
        >
          <Menu
            animation={menuLeftAnimation}
            close={() => {
              animateClosing(menuAnimation, () => setOpenMenu(false));
              animateSlideOut(menuLeftAnimation);
            }}
            openSettingsPopup={() => {
              setPopups((prevState) => ({
                ...prevState,
                settings: true,
              }));
              animateOpening(popupAnimations["settings"]);
            }}
          />
        </Animated.View>
      )}
      {popups.view && (
        <Animated.View
          style={[styles.fullscreenArea, { opacity: popupAnimations.view }]}
        >
          <TaskViewPopup
            close={() => {
              animateClosing(popupAnimations["view"], () =>
                setPopups((prevState) => ({
                  ...prevState,
                  view: false,
                }))
              );
            }}
            openDiscardPopup={() => {
              setPopups((prevState) => ({
                ...prevState,
                discard: true,
              }));
              animateOpening(popupAnimations["discard"]);
            }}
            openLoadingPopup={() => {
              setPopups((prevState) => ({
                ...prevState,
                loading: true,
              }));
              animateOpening(popupAnimations["loading"]);
              animateSlideIn(popupAnimations["loadingRight"]);
            }}
            closeLoadingPopup={() => {
              animateClosing(popupAnimations["loading"], () =>
                setPopups((prevState) => ({
                  ...prevState,
                  loading: false,
                }))
              );
              animateSlideOut(popupAnimations["loadingRight"]);
            }}
            openSuccessPopup={() => {
              setMinimalPopupMessage("Tarefa atualizada!");
              setPopups((prevState) => ({
                ...prevState,
                success: true,
              }));
              animateOpening(popupAnimations["success"]);
              animateSlideIn(popupAnimations["successRight"]);
            }}
            openNoTextPopup={() => {
              setPopups((prevState) => ({
                ...prevState,
                noText: true,
              }));
              animateOpening(popupAnimations["noText"]);
              animateSlideIn(popupAnimations["noTextRight"]);
            }}
            tasks={tasks}
            selectedTaskId={selectedTaskId}
            selectedTask={tasks[selectedTaskId]}
            save={() => save("tasks", tasks)}
            setTasks={setTasks}
          />
        </Animated.View>
      )}
      {popups.create && (
        <Animated.View
          style={[styles.fullscreenArea, { opacity: popupAnimations.create }]}
        >
          <CreateTaskPopup
            close={() => {
              animateClosing(popupAnimations["create"], () =>
                setPopups((prevState) => ({
                  ...prevState,
                  create: false,
                }))
              );
            }}
            openDiscardPopup={() => {
              setPopups((prevState) => ({
                ...prevState,
                discard: true,
              }));
              animateOpening(popupAnimations["discard"]);
            }}
            openLoadingPopup={() => {
              setPopups((prevState) => ({
                ...prevState,
                loading: true,
              }));
              animateOpening(popupAnimations["loading"]);
              animateSlideIn(popupAnimations["loadingRight"]);
            }}
            closeLoadingPopup={() => {
              animateClosing(popupAnimations["loading"], () =>
                setPopups((prevState) => ({
                  ...prevState,
                  loading: false,
                }))
              );
              animateSlideOut(popupAnimations["loadingRight"]);
            }}
            openSuccessPopup={() => {
              setMinimalPopupMessage("Tarefa adicionada!");
              setPopups((prevState) => ({
                ...prevState,
                success: true,
              }));
              animateOpening(popupAnimations["success"]);
              animateSlideIn(popupAnimations["successRight"]);
            }}
            openNoTextPopup={() => {
              setPopups((prevState) => ({
                ...prevState,
                noText: true,
              }));
              animateOpening(popupAnimations["noText"]);
              animateSlideIn(popupAnimations["noTextRight"]);
            }}
            isAnyTaskCreated={tasks != null}
            setTasks={setTasks}
          />
        </Animated.View>
      )}
      {popups.exit && (
        <Animated.View
          style={[styles.fullscreenArea, { opacity: popupAnimations.exit }]}
        >
          <MessagePopup
            close={() => {
              animateClosing(popupAnimations["exit"], () =>
                setPopups((prevState) => ({
                  ...prevState,
                  exit: false,
                }))
              );
            }}
            title={"Exit app"}
            description={"This will close MyTasks. Are you sure?"}
            actionName={"Exit"}
            actionButtonColor={"#470c0c"}
            action={() => BackHandler.exitApp()}
          />
        </Animated.View>
      )}
      {popups.delete && (
        <Animated.View
          style={[styles.fullscreenArea, { opacity: popupAnimations.delete }]}
        >
          <MessagePopup
            close={() => {
              animateClosing(popupAnimations["delete"], () =>
                setPopups((prevState) => ({
                  ...prevState,
                  delete: false,
                }))
              );
            }}
            title={"Delete task"}
            description={"This will erase the selected task. Are you sure?"}
            actionName={"Delete"}
            actionButtonColor={"#470c0c"}
            action={() => {
              const updatedTasks = { ...tasks };
              delete updatedTasks[selectedTaskId];
              setTasks(updatedTasks);
              setSelectedTaskId(null);
            }}
          />
        </Animated.View>
      )}
      {popups.discard && (
        <Animated.View
          style={[styles.fullscreenArea, { opacity: popupAnimations.discard }]}
        >
          <MessagePopup
            close={() => {
              animateClosing(popupAnimations["discard"], () =>
                setPopups((prevState) => ({
                  ...prevState,
                  discard: false,
                }))
              );
            }}
            title={"Discard task"}
            description={"All written text will be lost. Are you sure?"}
            actionName={"Discard"}
            actionButtonColor={"#470c0c"}
            action={() => {
              animateClosing(popupAnimations["view"], () =>
                setPopups((prevState) => ({
                  ...prevState,
                  view: false,
                }))
              );
              animateClosing(popupAnimations["create"], () =>
                setPopups((prevState) => ({
                  ...prevState,
                  create: false,
                }))
              );
            }}
          />
        </Animated.View>
      )}
      {popups.loading && (
        <MinimalPopup
          loading={true}
          customTop={40}
          opacityAnimation={popupAnimations.loading}
          rightAnimation={popupAnimations.loadingRight}
          color="#555"
          message={"Saving your task..."}
        />
      )}
      {popups.success && (
        <MinimalPopup
          customTop={40}
          opacityAnimation={popupAnimations.success}
          rightAnimation={popupAnimations.successRight}
          color="#5adb23"
          close={() => {
            animateClosing(popupAnimations["success"], () =>
              setPopups((prevState) => ({
                ...prevState,
                success: false,
              }))
            );
            animateSlideOut(popupAnimations["successRight"]);
          }}
          message={minimalPopupMessage}
        />
      )}
      {popups.noText && (
        <MinimalPopup
          opacityAnimation={popupAnimations.noText}
          rightAnimation={popupAnimations.noTextRight}
          color="#bc0000"
          close={() => {
            animateClosing(popupAnimations["noText"], () =>
              setPopups((prevState) => ({
                ...prevState,
                noText: false,
              }))
            );
            animateSlideOut(popupAnimations["noTextRight"]);
          }}
          message={"Please, insert any text!"}
        />
      )}
      {popups.error && (
        <Animated.View
          style={[styles.fullscreenArea, { opacity: popupAnimations.error }]}
        >
          <MessagePopup
            close={() => {
              animateClosing(popupAnimations["error"], () =>
                setPopups((prevState) => ({
                  ...prevState,
                  error: false,
                }))
              );
            }}
            title={"Error"}
            description={"An error happened."}
            actionName={"OK"}
            actionButtonColor={"#470c0c"}
            action={() => null}
          />
        </Animated.View>
      )}
      {popups.settings && (
        <Animated.View
          style={[styles.fullscreenArea, { opacity: popupAnimations.settings }]}
        >
          <SettingsPopup
            close={() => {
              animateClosing(popupAnimations["settings"], () =>
                setPopups((prevState) => ({
                  ...prevState,
                  settings: false,
                }))
              );
            }}
          />
        </Animated.View>
      )}
      <TopBar
        openMenu={() => {
          setOpenMenu(true);
          animateOpening(menuAnimation);
          animateSlideIn(menuLeftAnimation);
        }}
        tasks={tasks}
        setFilteredTasks={setFilteredTasks}
      />
      <TasksArea
        tasks={filteredTasks}
        setTasks={setTasks}
        didFetch={didFetch}
        emptyMessage={
          !tasks || Object.keys(tasks).length === 0
            ? "Nenhuma tarefa cadastrada!"
            : filteredTasks &&
              Object.keys(filteredTasks).length === 0 &&
              "Nenhuma tarefa encontrada!"
        }
        openCreatePopup={() => {
          setPopups((prevState) => ({
            ...prevState,
            create: true,
          }));
          animateOpening(popupAnimations["create"]);
        }}
        taskViewPopup={(taskId) => {
          setSelectedTaskId(taskId);
          setPopups((prevState) => ({
            ...prevState,
            view: true,
          }));
          animateOpening(popupAnimations["view"]);
        }}
        delete={(taskId) => {
          setSelectedTaskId(taskId);
          setPopups((prevState) => ({
            ...prevState,
            delete: true,
          }));
          animateOpening(popupAnimations["delete"]);
        }}
        checkCompleted={(taskId) => {
          const updatedTasks = { ...tasks };
          if (updatedTasks[taskId]) {
            updatedTasks[taskId].isCompleted =
              !updatedTasks[taskId].isCompleted;
            setTasks(updatedTasks);
          }
        }}
      />
      <StatusBar style="light" translucent={false} />
    </View>
  );
}

export default HomeScreen;
