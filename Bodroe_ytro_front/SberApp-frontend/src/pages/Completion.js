import { Button, Container, TextField } from "@sberdevices/ui";
import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import ApiQueries from "../ApiQueries";

import { tertiary, primary, accent } from "@sberdevices/plasma-tokens";
import {
  body1,
  Display3,
  Headline3,
  Body1,
  Body3,
  Body2,
} from "@sberdevices/ui/components/Typography";
import { Headline2 } from "@sberdevices/ui/components/Typography";

import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import { IconDone, IconLock } from "@sberdevices/plasma-icons";
import { IconHouse } from "@sberdevices/plasma-icons";

import {
  MarkedList,
  MarkedItem,
  Card,
  CardBody,
  CardMedia,
  CardContent,
  TextBoxBigTitle,
  TextBoxBiggerTitle,
  TextBox,
  TextBoxSubTitle,
  CardParagraph1,
  CardHeadline1,
  Spinner,
} from "@sberdevices/ui";
import "./Workout.css";
import { Timer } from "../components/Timer";
const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Стоп</div>;
  }

  return (
    <div className="timer">
      {/* <div className="text">Remaining</div> */}
      <div className="value">{remainingTime}</div>
      {/* <div className="text">seconds</div> */}
    </div>
  );
};
var date = new Date();
var options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  timezone: "UTC",
};

const Completion = ({
  groupId,
  workoutExercises,
  setWorkoutExercises,
  description,
  name,
  userId,
  workOutStarted,
  setWorkOutStartet,
  setAchieves,
  iterChanged,
  assistant,
  iter,
  setIter,
  setGroupId,
  assistantType,
  history,
  workouts_wxircices_names
}) => {
    useEffect(() => {
         const fetchCategoriesAndSetCategories = async () => {
           const workoutsEx = await ApiQueries.getExircicesfromGroup(groupId);
           setWorkoutExercises(workoutsEx.data);
         };
    
         fetchCategoriesAndSetCategories();
         console.log("Workout useeffect");
        alert(iter)
        alert(workoutExercises)
      }, []);
  return  (
    <div>
      {/* <Button
        onClick={() => {
          setWorkOutStartet(false);
        }}
      >
        Закончить
      </Button>
      <Button
        onClick={() => {
          history.push("/");
        }}
      >
        На главную
      </Button> */}

      <Card style={{ marginBottom: "3rem" }}>
        <CardBody>
          <CardContent>
              <div>
                {true ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-around",
                    }}
                  >
                    <TextBoxBigTitle>Тренировка завершена</TextBoxBigTitle>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      <div style={{ flexDirection: "column" }}>
                        <CardParagraph1>
                          {date.toLocaleString("ru", options)}{" "}
                        </CardParagraph1>
                        {/* <TextBoxSubTitle>Время выполнения</TextBoxSubTitle> */}
                      </div>

                      {workouts_wxircices_names.current ? (
                        <MarkedList>
                          {workouts_wxircices_names.current.map(({ _id, name }, i) => (
                            <MarkedItem text={name} style={{ color: primary }}>
                              <IconDone size="xs" color={accent} />
                            </MarkedItem>
                          ))}
                        </MarkedList>
                      ) : (
                        <Spinner />
                      )}
                    </div>
                    <br />
                    <Button
                      onClick={() => {
                        setWorkOutStartet(false);
                        setIter(-1);
                        setGroupId(2);
                        history.push("/");
                      }}
                    >
                      <IconHouse />
                    </Button>
                  </div>
            ):(<Spinner></Spinner>)};
            </div>
          </CardContent>
        </CardBody>
      </Card>
    </div>
  )
};

export default withRouter(Completion);