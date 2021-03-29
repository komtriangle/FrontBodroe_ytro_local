import { Button } from "@sberdevices/ui";
import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import ApiQueries from "../ApiQueries";

import { primary, accent } from "@sberdevices/plasma-tokens";
import { Headline2 } from "@sberdevices/ui/components/Typography";

import { BrowserRouter as Router, useHistory } from "react-router-dom";
import { IconDone } from "@sberdevices/plasma-icons";
import { IconHouse } from "@sberdevices/plasma-icons";

import {
  MarkedList,
  MarkedItem,
  Card,
  CardBody,
  CardContent,
  TextBoxBigTitle,
  TextBox,
  TextBoxSubTitle,
  CardParagraph1,
  Spinner,
} from "@sberdevices/ui";
import "./Workout.css";
import { Timer } from "../components/Timer";

var date = new Date();
var options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  timezone: "UTC",
};

const Workout = ({
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
}) => {
  const history = useHistory();

  useEffect(() => {
    const fetchCategoriesAndSetCategories = async () => {
      const workoutsEx = await ApiQueries.getExircicesfromGroup(groupId);
      setWorkoutExercises(workoutsEx.data);
    };

    fetchCategoriesAndSetCategories();
  }, []);

  useEffect(() => {
    if (workoutExercises[iter] != undefined) {
      sayExircise(
        workoutExercises[iter].discription,
        workoutExercises[iter].discriptionJoy
      );
    }
  }, [iter]);
  useEffect(() => {
    if (
      iter + 1 == workoutExercises.length &&
      iter != -1 &&
      iterChanged != -1
    ) {
      const getUserAchieves = async () => {
        alert(userId)
        await ApiQueries.createProgressAchieve(userId, new Date(), true);
      };
      getUserAchieves();
      assistant.current?.sendData({
        action: { action_id: "train_finish", parameters: {} },
      });
    }
    if (iterChanged == 1) {
      setIter(iter + 1);
    } else if (iterChanged == 0) {
      if (iter > 0) {
        setIter(iter - 1);
      }
    }
  }, [iterChanged]);

  const sayExircise = (off_title, title) => {
    assistant.current?.sendData({
      action: {
        action_id: "say",
        parameters: {
          off_description: off_title,
          description: title,
          number: iter,
        },
      },
    });
  };
  return !workOutStarted ? (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div style={{ flexDirection: "column" }}>
          <Headline2>{name}</Headline2>

          {workoutExercises ? (
            <MarkedList>
              {workoutExercises.map(({ _id, trainingName  }, i) => (
                <MarkedItem text={trainingName } style={{ color: primary }}>
                  <IconDone size="xs" color={accent} />
                </MarkedItem>
              ))}
            </MarkedList>
          ) : (
            <Spinner />
          )}
          <br />
        </div>
        <div style={{ flexDirection: "column" }}>
          <Card style={{ width: "20rem" }}>
            <CardBody>
              <CardContent>
                <TextBox>
                  <TextBoxBigTitle>Описание</TextBoxBigTitle>
                  <CardParagraph1 style={{ marginTop: "0.75rem" }} lines={4}>
                    {description}
                  </CardParagraph1>
                  <TextBoxSubTitle>Подходит для всех</TextBoxSubTitle>
                </TextBox>
                <br />
                <Button
                  onClick={() => {
                    if (
                      workoutExercises[0].discriptionJoy != undefined &&
                      workoutExercises[0].discription != undefined
                    ) {
                      sayExircise(
                        workoutExercises[0].discription,
                        workoutExercises[0].discriptionJoy
                      );
                      setWorkOutStartet(true);
                      setIter(iter + 1);
                    }
                  }}
                >
                  Начать
                </Button>
              </CardContent>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  ) : (
    <div>
      <Card style={{ marginBottom: "3rem" }}>
        <CardBody>
          <CardContent>
            {workoutExercises ? (
              <div>
                {iter == workoutExercises.length ? (
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
                      </div>

                      {workoutExercises ? (
                        <MarkedList>
                          {workoutExercises.map(({ _id, trainingName }, i) => (
                            <MarkedItem text={trainingName} style={{ color: primary }}>
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
                        setGroupId(2);
                        history.push("/");
                        setIter(-1);
                        setWorkOutStartet(false);
                      }}
                    >
                      <IconHouse />
                    </Button>
                  </div>
                ) : (
                  <div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <TextBoxBigTitle>
                        {workoutExercises[iter].trainingName}
                      </TextBoxBigTitle>
                      <div style={{ marginTop: "0.5rem" }}>
                        <Timer
                          assistant={assistant}
                          setIter={setIter}
                          timeCount={{ timeCount: workoutExercises[iter].time }}
                          iter={iter}
                          userId={userId}
                          workoutLength={workoutExercises.length}
                          setAchieves={setAchieves}
                          workoutExercises={workoutExercises}
                          sayExircise={sayExircise}
                          setWorkOutStartet={setWorkOutStartet}
                        />
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        flexDirection: "row",
                      }}
                    >
                      <div class="wrapper exmp2">
                        <img src={workoutExercises[iter].photo} />
                      </div>

                      <div style={{ flexDirection: "column" }}>
                        <CardParagraph1 lines={7}>
                          {assistantType.current == "joy"
                            ? workoutExercises[iter].discriptionJoy
                            : workoutExercises[iter].discription}
                        </CardParagraph1>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Button
                            view="primary"
                            size="s"
                            scaleOnInteraction={false}
                            outlined={false}
                            fullWidth
                            disabled={iter == 0}
                            style={{ marginTop: "1em", marginRight: "1em" }}
                            tabIndex={-1}
                            onClick={() => {
                              setIter(iter - 1);
                            }}
                          >
                            Предыдущее
                          </Button>
                          <Button
                            view="primary"
                            size="s"
                            scaleOnInteraction={false}
                            outlined={false}
                            fullWidth
                            style={{ marginTop: "1em" }}
                            tabIndex={-1}
                            onClick={() => {
                              if (iter + 1 == workoutExercises.length) {
                                const getUserAchieves = async () => {
                                  alert(userId)
                                  await ApiQueries.createProgressAchieve(
                                    userId,
                                    new Date(),
                                    true
                                  );
                                  var ach = await ApiQueries.getAchiviesFomUser(
                                    userId
                                  );
                                  setAchieves(ach.data);
                                };
                                getUserAchieves();
                                assistant.current?.sendData({
                                  action: {
                                    action_id: "train_finish",
                                    parameters: {},
                                  },
                                });
                              }

                              setIter(iter + 1);
                            }}
                          >
                            Следующее
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <Spinner />
              </div>
            )}
          </CardContent>
        </CardBody>
      </Card>
    </div>
  );
};

export default withRouter(Workout);
