import { Button, Container } from "@sberdevices/ui";
import React, { useState , useEffect} from "react";
import { withRouter, Link } from "react-router-dom";
import {
  IconCalendar,
  IconAccessibility,
  IconApps,
  IconRefresh
} from "@sberdevices/plasma-icons";
import ApiQueries from "../ApiQueries";
import { Headline3 } from "@sberdevices/ui/components/Typography";

import {
  Card,
  CardContent,
  TextBox,
  TextBoxBiggerTitle,
  TextBoxSubTitle,
  Cell,
  CellDisclosure,
  CellIcon,
  TextBoxTitle,
  MarkedList,
  Badge,
  MarkedItem,
  IconSettings,
} from "@sberdevices/ui";
import { tertiary, primary, accent } from "@sberdevices/plasma-tokens";
const Main = ({ setGroupId, ToChooseCateg, achieves, setName, setDescription, userId,  setAchieves}) => {
  useEffect(() => {
    const getUserAchieves = async () => {
      var ach = await ApiQueries.getAchiviesFomUser(userId);
      setAchieves(ach.data);
    };
    getUserAchieves();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around"
      }}
    >
      <Card style={{ width: "20rem" }}>
        <CardContent compact>
          <Cell
            content={<TextBoxBiggerTitle>Утро начнётся с</TextBoxBiggerTitle>}
            right={<span style={{ marginTop: 5 }}></span>}
          />
          <Link
            to="/fastworkout"
            style={{
              textDecoration: "none",
            }}
          >
            <Cell
              onClick={() => {
                setGroupId(2);
                setDescription("Облегченный вид утренней тренировки. Позволит размять тело без сильных нагрузок на организм.");
                setName("Быстрая тренировка");
              }}
              left={
                <CellIcon>
                  <IconAccessibility />
                </CellIcon>
              }
              content={
                <TextBox>
                  <TextBoxTitle>Быстрая тренировка</TextBoxTitle>
                  <TextBoxSubTitle>10 мин</TextBoxSubTitle>
                </TextBox>
              }
              right={<CellDisclosure />}
            />
          </Link>
          <Link to="/choose" style={{ textDecoration: "none" }}>
            <Cell
              left={
                <CellIcon>
                  <IconApps />
                </CellIcon>
              }
              onClick={() => ToChooseCateg()}
              content={
                <TextBox>
                  <TextBoxTitle>Меню тренировок</TextBoxTitle>
                  <TextBoxSubTitle>На любой вкус</TextBoxSubTitle>
                </TextBox>
              }
              right={<CellDisclosure />}
            />
          </Link>

          <Link
            to="/calendar"
            style={{
              textDecoration: "none",
            }}
          >
            <Cell
              left={
                <CellIcon>
                  <IconCalendar />
                </CellIcon>
              }
              content={
                <TextBox>
                  <TextBoxTitle>Календарь</TextBoxTitle>
                  <TextBoxSubTitle>Отображение прогресса</TextBoxSubTitle>
                </TextBox>
              }
              right={<CellDisclosure />}
            />
          </Link>
        </CardContent>
      </Card>
      <div style={{ flexDirection: "column" }}>
        <br /> <br />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Headline3 style={{ marginRight: "0.5rem", marginTop: "0.5rem" }}>
            Статистика
          </Headline3>
          <Button
            size="s"
            onClick={() => {
              const getUserAchieves = async () => {
                var ach = await ApiQueries.getAchiviesFomUser(userId);
                setAchieves(ach.data);
              };
              getUserAchieves();
            }}
          >
            <IconRefresh size="xs" />
          </Button>
        </div>
        <MarkedList>
          {/* <div
            style={{
              display: "flex",
              flexDirection: "",
              justifyContent: "center",
            }}
          > */}
          <MarkedItem
            text="дней с тренировками подряд"
            style={{ color: primary }}
          >
            {/* <IconEvent size="xs" color={accent} /> */}
            <Badge text={achieves.dict ? achieves.dict : 0} size={"l"} view={"secondary"} />
          </MarkedItem>
          {/* </div> */}

          <MarkedItem
            text="всего дней с тренировками"
            style={{ color: primary }}
          >
            {/* <IconDone size="xs" color={accent} /> */}
            <Badge
              text={achieves.count_days_train ? achieves.count_days_train : 0}
              size={"l"}
              view={"secondary"}
            />
          </MarkedItem>

          <MarkedItem text="общее число тренировок" style={{ color: primary }}>
            {/* <IconHeart size="xs" color={accent} /> */}
            <Badge text={achieves.count_train ? achieves.count_train : 0} size={"l"} view={"secondary"} />
          </MarkedItem>
        </MarkedList>
      </div>
    </div>
  );
};

export default withRouter(Main);
