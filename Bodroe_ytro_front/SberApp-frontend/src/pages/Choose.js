import { Button, Container } from "@sberdevices/ui";
import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import { Row } from "@sberdevices/ui/components/Grid/Row";
import { Carousel, CarouselCol } from "@sberdevices/ui";

import ApiQueries from "../ApiQueries";
import {
  Spinner,
  Card,
  CardBody,
  CardContent,
  TextBoxBigTitle,
  TextBox,
} from "@sberdevices/ui";
import { Headline2 } from "@sberdevices/ui/components/Typography";
import "./Workout.css";

const Choose = ({
  setGroupId,
  setDescription,
  setName,
  workouts,
  assistant,
}) => {
  useEffect(() => {
    const fetchCategoriesAndSetCategories = async () => {
      const workout = await ApiQueries.getAllGroupsExercises();
      workouts.current = workout;
    };
    fetchCategoriesAndSetCategories();
  }, []);
  const [carouselIndex, setCarouselIndex] = useState(1);
  const stylingCallback = (itemEl: HTMLDivElement, slot: number) => {
    itemEl.style.opacity = `${1 - Math.abs(slot) / 2}`;
  };

  const stylingResetCallback = (itemEl: HTMLDivElement) => {
    itemEl.style.opacity = "";
  };

  return (
    <Container>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Headline2>Выберите режим тренировки</Headline2>
      </div>
      <br />
      <Row>
        {workouts.current ? (
          <Carousel
            as={Row}
            axis="x"
            index={carouselIndex}
            scrollSnapType="mandatory"
            detectActive
            detectThreshold={0.5}
            stylingCallback={stylingCallback}
            stylingResetCallback={stylingResetCallback}
            onIndexChange={(i) => setCarouselIndex(i)}
            paddingStart="50%"
            paddingEnd="50%"
            style={{ paddingTop: "1rem", paddingBottom: "1.25rem" }}
          >
            {workouts.current.data.map(
              ({ name, short_description, discription, image }, i) => (
                <CarouselCol key={`item:${i}`}>
                  <Card
                    style={{
                      width: "10rem",
                      height: "12rem",
                      margin: "0.3rem",
                    }}
                    scaleOnFocus={false}
                    focused={i == carouselIndex}
                  >
                    <CardBody>
                      <div
                        style={{
                          height: "100%",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",

                          backgroundImage: `url(${image})`,
                        }}
                      ></div>

                      <CardContent>
                        <TextBox>
                          <TextBoxBigTitle>{name}</TextBoxBigTitle>
                        </TextBox>

                        <Link
                          style={{
                            color: "#FFF",
                            textDecoration: "none",
                          }}
                          to="/fastworkout"
                        >
                          <Button
                            view="primary"
                            size="s"
                            scaleOnInteraction={false}
                            outlined={false}
                            fullWidth
                            style={{ marginTop: "1em" }}
                            tabIndex={-1}
                            onClick={() => {
                              console.log(workouts.data);
                              assistant.current.sendData({
                                action: {
                                  action_id: "after_choose_train",
                                  parameters: {},
                                },
                              });
                              setGroupId(i + 1);
                              setDescription(discription);
                              setName(name);
                            }}
                          >
                            Выбрать
                          </Button>
                        </Link>
                      </CardContent>
                    </CardBody>
                  </Card>
                </CarouselCol>
              )
            )}
          </Carousel>
        ) : (
          <Spinner />
        )}
      </Row>
    </Container>
  );
};

export default withRouter(Choose);
