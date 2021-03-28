import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { text, background, gradient } from "@sberdevices/plasma-tokens";
import { Button } from "@sberdevices/ui";
import { IconHouse } from "@sberdevices/plasma-icons";
import "./Modal.css";
import ApiQueries from "../ApiQueries";

import { Headline2 } from "@sberdevices/ui/components/Typography";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
const format = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes}:${padTime(seconds)}`;
};
const customStyles = {
  content: {
    color: `${text}`,
    backgroundColor: `${background}`,
    backgroundImage: `${gradient}`,
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "1em",
    padding: "1em",
  },
};

export const Timer = ({
  setIter,
  timeCount,
  iter,
  workoutLength,
  assistant,
  userId,
  setWorkOutStartet
}) => {
  const history = useHistory();

  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    subtitle.style.color = "";
    setCounterRest(30);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const [counter, setCounter] = React.useState(timeCount.timeCount);
  const [counterRest, setCounterRest] = React.useState(30);
  React.useEffect(() => {
    console.log("Верхний юз");

    setCounter(timeCount.timeCount);
  }, [timeCount]);
  React.useEffect(() => {
    let timer;
    if (counter > 0) {
      timer = setTimeout(() => setCounter((c) => c - 1), 1000);
    } else if (iter + 1 === workoutLength) {
      const getUserAchieves = async () => {
        await ApiQueries.createProgressAchieve(userId, new Date(), true);
      };
      getUserAchieves();
      assistant.current?.sendData({
        action: { action_id: "train_finish", parameters: {} },
      });
      setIter(iter + 1);
    } else if (counter === 0) {
      setIsOpen(true);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [counter]);
  React.useEffect(() => {
    let timer;
    if (counterRest > 0) {
      timer = setTimeout(() => setCounterRest((c) => c - 1), 1000);
    } else if (counter === 0) {
      setIsOpen(false);
      setIter(iter + 1);
      setCounter(timeCount);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [counterRest]);
  return (
    <div>
      {counter !== 0 && <Headline2>Время: {format(counter)}</Headline2>}
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          style={customStyles}
        >
          <h2
            ref={(_subtitle) => (subtitle = _subtitle)}
            style={{ textAlign: "center" }}
          >
            Отдых
          </h2>
          <div style={{ textAlign: "center" }}>
            <Headline2>Следующее упражнение через</Headline2>
            <br />
            {counterRest !== 0 && <Headline2>{format(counterRest)}</Headline2>}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button
              onClick={() => {
                setIsOpen(false);
                setCounterRest(30);
                history.push("/");
                setWorkOutStartet(false);
                setIter(-1);
              }}
            >
              <IconHouse />
            </Button>

            <Button
              onClick={() => {
                setIsOpen(false);
                setIter(iter + 1);
                setCounter(timeCount);
              }}
            >
              Продолжить
            </Button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

const padTime = (time) => {
  return String(time).length === 1 ? `0${time}` : `${time}`;
};
