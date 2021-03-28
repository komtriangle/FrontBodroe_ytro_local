import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { AssistantCharacterType } from "@sberdevices/assistant-client";
import { darkJoy, darkEva, darkSber } from "@sberdevices/plasma-tokens/themes";
import { text, background, gradient } from "@sberdevices/plasma-tokens";
import { Container } from "@sberdevices/ui";

import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { sberBox } from "@sberdevices/plasma-tokens/typo";
import SportCalendar from "./pages/SportCalendar";
import { body1 } from "@sberdevices/ui/components/Typography";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import Workout from "./pages/Workout";
import ApiQueries from "./ApiQueries";
import Choose from "./pages/Choose";
import Completion from "./pages/Completion";
import { useHistory, withRouter } from "react-router-dom";
import {
  createSmartappDebugger,
  createAssistant,
  AssistantAppState,
} from "@sberdevices/assistant-client";
import { set } from "date-fns";
import { Spinner } from "@sberdevices/ui";

const AppStyled = styled.div`
  padding: 30px;
  ${body1}
`;
const TypoScale = createGlobalStyle(sberBox);
const ThemeBackgroundEva = createGlobalStyle(darkEva);
const ThemeBackgroundSber = createGlobalStyle(darkSber);
const ThemeBackgroundJoy = createGlobalStyle(darkJoy);

const DocStyles = createGlobalStyle`
  html {
    color: ${text};
    background-color: ${background};
    background-image: ${gradient};
    min-height: 100vh;
  }
`;

const initializeAssistant = (getState /*: any*/) => {
  if (process.env.NODE_ENV === "development") {
    return createSmartappDebugger({
      token:
        "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTY4MjE5MjksImV4cCI6MTYxNjkwODMyOSwidHlwZSI6IkJlYXJlciIsImp0aSI6ImY4MzRiNDIwLWFiNDctNDNlNS1iMWYwLTI0MWJmNzA2ZjU4MiIsInN1YiI6IjdkMTM4N2FhY2RiYjY0ZTMwNTE3ODQ3ZGVhNzgwMDNmMTA4NjE1YmNlZGIzNTlmYjhmNWJiMWVkOGI0OTU3ZmM1MzliZTkyNzAwNDI2Mjk4IiwiYXVkIjoiVlBTIn0.iP7PEpxuvbzlgGh8pGqqthfwl-6yd9i0cphoEJdOLJMzjFsc4LkJR2GEYwB9a3Sc8CUeWvEFeGFr4gBfE47Kft9FaGZpSUGm_KkGPLLmX4sFMd7VrZQnyAX2fBkHrbgYNBVK7q8FxUV1pCTKbB_jGGOXIyidnUACGmFfRBCA--u38FpYijjxf8LbE2YqOOc0d_mCK7Wb6XrZjRPL_nChhl17MMynKT1Zrmth6RaymY-T1_Lfyeu5CXYLikPGWyfOiMy4po-Jk4qXfad7cYnJ63rf7na7M-b9n2YWjkFTazmeCVV6PSEfWbYc_evxj9cep7Qt9HRLPGgXT7RjFrXCzFA28Q93BZXhikXAm50kXANjviE9kgTyNXXYsL_AeuITJpImBc41fFu8BzMdYsyxV1dRzxJ3SDpIuYXB-coNc9P__6MbEXS7U15MVwpnS0g_Yqz1cwy88pg432FmqkVFXtW_9LPNmHombdrGoyNoBDwYlWMl1XQzPTrTMEE-qQr9tMIoTjdHS8wcbAo2218ga_rVOcZCxSMq6I1T3wjN8Ji0ODTaM3LnPl9YewIONw8a9jNd8Ne2asT9PJdxMW-65HSK6uj6GXVw3Jlo4Z7M1uxuP2a_3qw3Wx8JHAQ553fEHVn3vda9dGTIW_YRmxFH3eVD3rU5BS_x7W80PKs5mTk" ??
        "",
      initPhrase: `Запусти Бодрое утро`,
      getState,
    });
  }
  return createAssistant({ getState });
};

function App() {
  const [character, setCharacter] = useState("sber");

  var assistant = useRef();
  var workouts = useRef();
  var assistantType = useRef();
  var workouts_wxircices_names = useRef();
  var state = {
    notes: [],
  };
  //const [workouts, setWorkouts] = useState([]);

  const [workoutExercises, setWorkoutExercises] = useState([]);
  const [iter, setIter] = useState(-1);
  const [userId, setUserId] = useState([]);
  const [workOutStarted, setWorkOutStartet] = useState(false);
  const [iterChanged, setIterChanged] = useState(-1);
  const [digit, setDigit] = useState(-1);
  const [carouselIndex, setCarouselIndex] = useState(1);
  //const [assistantType, setAssistantType] = useState("");
  const getStateForAssistant = () => {
    console.log("getStateForAssistant: this.state:", state);
    const state_ = {
      item_selector: {
        items: state.notes.map(({ id, title }, index) => ({
          number: index + 1,
          id,
          title,
        })),
      },
    };
    console.log("getStateForAssistant: state:", state);
    return state_;
  };


  const ChangePage = async (page) => {
    switch (page) {
      case "Calendar":
        history.push("/calendar");
        break;
      case "fastworkout":
        history.push("/calendar");
        break;
      case "choose_training":
        history.push("/choose");
        break;
      case "fast_training":
        history.push("/fastworkout");
        break;
      default:
        break;
    }
  };

  const history = useHistory();
  const ChooseTrain = (train_name) => {
    train_name =
      train_name.charAt(0).toUpperCase() + train_name.slice(1).trim();
    console.log("WK", workouts.current);
    let flag =true;
    if (workouts.current.data != undefined) {
      workouts.current.data.map(({ _id, name, discription }, i) => {
        console.log("name", name);
        console.log("train_name", train_name);
        if (train_name == name.trim()) {
          //setWorkOutStartet(false)
          assistant.current.sendData({
            action: { action_id: "after_choose_train", parameters: {} },
          });
          flag=false;
          console.log("i", i);
          console.log("name", name);
          setGroupId(i + 1);
          setName(name);
          setDescription(discription);
          history.push("/fastworkout");
        }

      });
     if(flag){
      assistant.current.sendData({
        action: { action_id: "bad_train_category", parameters: {} },
      });
     }
    }
  };

  const startTraining = async () => {
    setIter(0);
    setWorkOutStartet(true);
  };
  const changeExir = async (type) => {
    switch (type) {
      case "next":
        setIterChanged(1);
        break;
      case "previous":
        setIterChanged(0);
        break;
    }

    setIterChanged(-1);
  };

  const dispatchAssistantAction = async (action) => {
    console.log("dispatchAssistantAction", action);
    if (action) {
      switch (action.type) {
        case "character":
          setCharacter(action.character.id);
          // 'sber' | 'eva' | 'joy';
          break;
        case "show_calendar":
          ChangePage("Calendar");
          break;
        case "to_fast_training":
          setGroupId(2)
          ChangePage("fast_training");
          break;
        case "to_choose_training":
          ChangePage("choose_training");
          break;
        case "choose_train":
          ChooseTrain(action.data);
          break;
        case "start_train":
          startTraining();
          break;
        case "next_exircise":
          changeExir("next");
          break;
        case "previous_exircise":
          changeExir("previous");
          break;
        case "to_main":
          history.push("/");
          setWorkOutStartet(false);
          setIter(-1);
          break;
        case "move_left":
          if(carouselIndex>0){
           setCarouselIndex(carouselIndex-1)
          }
          break;
        case "move_right":
          if(carouselIndex<workouts.current.data.length){
           setCarouselIndex(carouselIndex+1)
          }
          break;
        case "update_stat":
          const getUserAchieves = async () => {
            var ach = await ApiQueries.getAchiviesFomUser(userId);
            setAchieves(ach.data);
          };
          getUserAchieves();
          break;

        default:
          break;
      }
    }
  };
  const [achieves, setAchieves] = useState([]);

  useEffect(() => {
    assistant.current = initializeAssistant(() => getStateForAssistant());
    assistant.current.on("start", (event) => {
      console.log(`assistant.on(start)`, event);
    });

    assistant.current.on(
      "data",
      (event /*: any*/) => {
        if (event.type == "smart_app_data") {
          console.log("userId", event.user_id);
          if (event.sub != undefined) {
            setUserId(event.sub);
            ApiQueries.createUser(event.sub);
            const getUserAchieves = async () => {
              var ach = await ApiQueries.getAchiviesFomUser(event.sub);
              setAchieves(ach.data);
            };
            getUserAchieves();
            ApiQueries.createUser(userId);
          } else if (event.user_id != undefined) {
            setUserId(event.user_id);
            ApiQueries.createUser(userId);
            const getUserAchieves = async () => {
              var ach = await ApiQueries.getAchiviesFomUser(event.userId);
              setAchieves(ach.data);
            };
            getUserAchieves();
          }
          if(event.assistant=="official"){
            assistantType.current="sber"
            setCharacter("sber")
          }
          if(event.assistant=="no_official"){
            assistantType.current = "joy"
            setCharacter("joy")
          }
        }
        if (event.type == "character") {
          assistantType.current = event.character.id
        }
        if(event.assistant!=undefined){
          if(event.assistant == "official"){
            assistantType.current = "sber"
          }
          else{
            assistantType.current = "joy"
          }
        }
        console.log(`assistant.on(data)`, event);
        const { action } = event;
        dispatchAssistantAction(action);
      },
      []
    );

    if (assistant.current != null) {
      console.log("Non null, send data");
    } else {
      console.log("Null");
    }
  }, []);

  useEffect(() => {
    const fetchCategoriesAndSetCategories = async () => {
      const workout = await ApiQueries.getAllGroupsExercises();
      workouts.current = workout;
    };
    fetchCategoriesAndSetCategories();
  }, [workouts]);

  const [groupId, setGroupId] = useState(2);
  const [description, setDescription] = useState(
    "Облегченный вид утренней тренировки. Позволит размять тело без сильных нагрузок на организм."
  );
  const [name, setName] = useState("Быстрая тренировка");

  const SendDataToAssistant = async (action) => {
    assistant.current.sendData({
      action: { action_id: action, parameters: {} },
    });
  };
  const TochooseCat = async (action) => {
    assistant.current.sendData({
      action: { action_id: "chooseCategory", parameters: {} },
    });
  };

  return (
    <AppStyled>
      <DocStyles />
      <TypoScale />
      {(() => {
        switch (character) {
          case "sber":
            return <ThemeBackgroundSber />;
          case "eva":
            return <ThemeBackgroundEva />;
          case "joy":
            return <ThemeBackgroundJoy />;
          default:
            return;
        }
      })()}
      {true ? (
        <Switch>
          <Route path="/Completion">
            <Completion>
              workouts_wxircices_names={workouts_wxircices_names}
              groupId={groupId}
              description={description}
              workoutExercises={workoutExercises}
              setWorkoutExercises={setWorkoutExercises}
              name={name}
              userId={userId}
              workOutStarted={workOutStarted}
              setWorkOutStartet={setWorkOutStartet}
              iterChanged={iterChanged}
              setAchieves={setAchieves}
              assistant={assistant}
              iter={iter}
              setIter={setIter}
              setGroupId={setGroupId}
              assistantType={assistantType}
              history={history}
            </Completion>
              
          </Route>
          <Route path="/choose">
            <Choose
            carouselIndex={carouselIndex}
              setGroupId={setGroupId}
              setDescription={setDescription}
              setName={setName}
              workouts={workouts}
              SendDataToAssistant={SendDataToAssistant}
              assistant={assistant}
              carouselIndex={carouselIndex}
               setCarouselIndex={setCarouselIndex}
            />
          </Route>
          <Route path="/fastworkout">
            <Workout
              workouts_wxircices_names={workouts_wxircices_names}
              groupId={groupId}
              description={description}
              workoutExercises={workoutExercises}
              setWorkoutExercises={setWorkoutExercises}
              name={name}
              userId={userId}
              workOutStarted={workOutStarted}
              setWorkOutStartet={setWorkOutStartet}
              iterChanged={iterChanged}
              setAchieves={setAchieves}
              assistant={assistant}
              iter={iter}
              setIter={setIter}
              setGroupId={setGroupId}
              assistantType={assistantType}
            />
          </Route>
          <Route path="/calendar" exact>
            <SportCalendar userId={userId} digit={digit} />
          </Route>
          <Route path="/">
            <Main
              setGroupId={setGroupId}
              ToChooseCateg={TochooseCat}
              achieves={achieves}
              setName={setName}
              setDescription={setDescription}
              userId={userId}
              setAchieves={setAchieves}
            />
          </Route>
        </Switch>
      ) : (
        <Container>
          <Spinner />
        </Container>
      )}
    </AppStyled>
  );
}
export default withRouter(App);