/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function Bracket(props) {
  const {
    pos1wl,
    pos2wl,
    pos3wl,
    pos4wl,
    pos5wl,
    pos6wl,
    pos7wl,
    pos8wl,
    pos9wl,
    pos10wl,
    pos11wl,
    pos12wl,
    pos13wl,
    pos14wl,
    logo,
    bgcolor,
    overrides,
    ...rest
  } = props;
  const [
    teamButtonOneThreeSevenNineZeroTwoOneTwoNineBackgroundColor,
  ] = useStateMutationAction("rgba(255,255,255,1)");
  const [
    teamButtonTwoThreeSevenNineZeroTwoOneThreeFourBackgroundColor,
    setTeamButtonTwoThreeSevenNineZeroTwoOneThreeFourBackgroundColor,
  ] = useStateMutationAction("rgba(255,255,255,1)");
  const teamButtonOneThreeSevenNineZeroTwoOneTwoNineOnMouseOver = () => {
    setTeamButtonOneThreeSevenNineZeroTwoOneTwoNineBackgroundColor("grey");
  };
  const teamButtonOneThreeSevenNineZeroTwoOneTwoNineOnMouseOut = () => {
    setTeamButtonOneThreeSevenNineZeroTwoOneTwoNineBackgroundColor("white");
  };
  const teamButtonTwoThreeSevenNineZeroTwoOneThreeFourOnMouseOver = () => {
    setTeamButtonTwoThreeSevenNineZeroTwoOneThreeFourBackgroundColor("grey");
  };
  const teamButtonTwoThreeSevenNineZeroTwoOneThreeFourOnMouseOut = () => {
    setTeamButtonTwoThreeSevenNineZeroTwoOneThreeFourBackgroundColor("white");
  };
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Bracket")}
      {...rest}
    >
      <Flex
        gap="4.556666374206543px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="27.339998245239258px 13.669999122619629px 27.339998245239258px 13.669999122619629px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "Title")}
      >
        <Text
          fontFamily="Inter"
          fontSize="38.731666564941406px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="46.47800064086914px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="2023 NCAA DIVISION I MEN’S HOCKEY CHAMPIONSHIP BRACKET"
          {...getOverrideProps(
            overrides,
            "2023 NCAA DIVISION I MEN\u2019S HOCKEY CHAMPIONSHIP BRACKET"
          )}
        ></Text>
      </Flex>
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        border="0px SOLID rgba(0,0,0,1)"
        padding="0px 15px 0px 15px"
        backgroundColor=""
        {...getOverrideProps(overrides, "Bracket37901962")}
      >
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Match37902095")}
        >
          <Flex
            gap="45.56666564941406px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="4.556666374206543px 0px 4.556666374206543px 0px"
            {...getOverrideProps(overrides, "Match37902121")}
          >
            <Flex
              gap="0"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="1.8226666450500488px 0px 1.8226666450500488px 0px"
              {...getOverrideProps(overrides, "Match37902122")}
            >
              <Flex
                gap="45.56666564941406px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                overflow="hidden"
                shrink="0"
                position="relative"
                padding="0.9113333225250244px 0.9113333225250244px 0.9113333225250244px 0.9113333225250244px"
                {...getOverrideProps(overrides, "Teams37902128")}
              >
                <Flex
                  gap="4.556666374206543px"
                  direction="row"
                  width="138.52px"
                  height="33.72px"
                  justifyContent="center"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  border="0.91px SOLID rgba(0,0,0,1)"
                  borderRadius="2.7339999675750732px"
                  padding="3.6453332901000977px 4.556666374206543px 3.6453332901000977px 4.556666374206543px"
                  backgroundColor={
                    teamButtonOneThreeSevenNineZeroTwoOneTwoNineBackgroundColor
                  }
                  onMouseOver={() => {
                    teamButtonOneThreeSevenNineZeroTwoOneTwoNineOnMouseOver();
                  }}
                  onMouseOut={() => {
                    teamButtonOneThreeSevenNineZeroTwoOneTwoNineOnMouseOut();
                  }}
                  {...getOverrideProps(overrides, "TeamButton137902129")}
                >
                  <View
                    width="14.58px"
                    height="14.58px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    overflow="hidden"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Image37902130")}
                  ></View>
                  <Text
                    fontFamily="Inter"
                    fontSize="10.935999870300293px"
                    fontWeight="700"
                    color="rgba(13,26,38,1)"
                    lineHeight="16.40399932861328px"
                    textAlign="center"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="63.79px"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="Label"
                    {...getOverrideProps(overrides, "label37902131")}
                  ></Text>
                  <Flex
                    gap="4.556666374206543px"
                    direction="row"
                    width="14.58px"
                    height="14.58px"
                    justifyContent="center"
                    alignItems="center"
                    shrink="0"
                    position="relative"
                    borderRadius="14.58133316040039px"
                    padding="3.6453332901000977px 5.4679999351501465px 3.6453332901000977px 5.4679999351501465px"
                    backgroundColor="rgba(239,240,240,1)"
                    {...getOverrideProps(overrides, "Button Icon37902132")}
                  >
                    <Text
                      fontFamily="Inter"
                      fontSize="6.379333019256592px"
                      fontWeight="600"
                      color="rgba(13,26,38,1)"
                      lineHeight="6.379333019256592px"
                      textAlign="left"
                      display="block"
                      direction="column"
                      justifyContent="unset"
                      width="unset"
                      height="unset"
                      gap="unset"
                      alignItems="unset"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children="1"
                      {...getOverrideProps(overrides, "137902133")}
                    ></Text>
                  </Flex>
                </Flex>
                <Flex
                  gap="4.556666374206543px"
                  direction="row"
                  width="138.52px"
                  height="33.72px"
                  justifyContent="center"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  border="0.91px SOLID rgba(0,0,0,1)"
                  borderRadius="2.7339999675750732px"
                  padding="3.6453332901000977px 4.556666374206543px 3.6453332901000977px 4.556666374206543px"
                  backgroundColor={
                    teamButtonTwoThreeSevenNineZeroTwoOneThreeFourBackgroundColor
                  }
                  onMouseOver={() => {
                    teamButtonTwoThreeSevenNineZeroTwoOneThreeFourOnMouseOver();
                  }}
                  onMouseOut={() => {
                    teamButtonTwoThreeSevenNineZeroTwoOneThreeFourOnMouseOut();
                  }}
                  {...getOverrideProps(overrides, "TeamButton237902134")}
                >
                  <View
                    width="14.58px"
                    height="14.58px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    overflow="hidden"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Image37902135")}
                  ></View>
                  <Text
                    fontFamily="Inter"
                    fontSize="10.935999870300293px"
                    fontWeight="700"
                    color="rgba(13,26,38,1)"
                    lineHeight="16.40399932861328px"
                    textAlign="center"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="63.79px"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="Label"
                    {...getOverrideProps(overrides, "label37902136")}
                  ></Text>
                  <Flex
                    gap="4.556666374206543px"
                    direction="row"
                    width="14.58px"
                    height="14.58px"
                    justifyContent="center"
                    alignItems="center"
                    shrink="0"
                    position="relative"
                    borderRadius="14.58133316040039px"
                    padding="3.6453332901000977px 5.4679999351501465px 3.6453332901000977px 5.4679999351501465px"
                    backgroundColor="rgba(239,240,240,1)"
                    {...getOverrideProps(overrides, "Button Icon37902137")}
                  >
                    <Text
                      fontFamily="Inter"
                      fontSize="6.379333019256592px"
                      fontWeight="600"
                      color="rgba(13,26,38,1)"
                      lineHeight="6.379333019256592px"
                      textAlign="left"
                      display="block"
                      direction="column"
                      justifyContent="unset"
                      width="unset"
                      height="unset"
                      gap="unset"
                      alignItems="unset"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children="1"
                      {...getOverrideProps(overrides, "137902138")}
                    ></Text>
                  </Flex>
                </Flex>
              </Flex>
              <Icon
                width="9.11px"
                height="78.37px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 9.11328125,
                  height: 78.37451171875,
                }}
                paths={[
                  {
                    d: "M9.11037 -0.911328L-0.00296385 -0.88169L0.00296385 0.940967L9.1163 0.911328L9.11037 -0.911328ZM0 79.286L9.11333 79.286L9.11333 77.4633L0 77.4633L0 79.286Z",
                    stroke: "rgba(0,0,0,1)",
                    fillRule: "nonzero",
                    strokeWidth: 1,
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                {...getOverrideProps(overrides, "Vector 237902127")}
              ></Icon>
              <Flex
                gap="54.679996490478516px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                overflow="hidden"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Victory Circles37902124")}
              >
                <Image
                  width="22.78px"
                  height="22.78px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  border="1.82px SOLID rgba(0,0,0,1)"
                  borderRadius="9.113332748413086px"
                  padding="0px 0px 0px 0px"
                  objectFit="cover"
                  src={pos11wl}
                  {...getOverrideProps(overrides, "Circle 137902125")}
                ></Image>
                <Image
                  width="22.78px"
                  height="22.78px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  border="1.82px SOLID rgba(0,0,0,1)"
                  borderRadius="9.113332748413086px"
                  padding="0px 0px 0px 0px"
                  objectFit="cover"
                  src={pos12wl}
                  {...getOverrideProps(overrides, "Circle 237902126")}
                ></Image>
              </Flex>
              <Icon
                width="18.23px"
                height="77.46px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 18.2265625,
                  height: 77.46337890625,
                }}
                paths={[
                  {
                    d: "M-0.046952 0.910123L0.42257 0.934345L0.516474 -0.885901L0.046952 -0.910123L-0.046952 0.910123ZM8.202 9.12545L8.202 34.175L10.0247 34.175L10.0247 9.12545L8.202 9.12545ZM8.202 34.175L8.202 68.35L10.0247 68.35L10.0247 34.175L8.202 34.175ZM18.2267 33.2637L9.11333 33.2637L9.11333 35.0863L18.2267 35.0863L18.2267 33.2637ZM0 78.3747C5.53647 78.3747 10.0247 73.8865 10.0247 68.35L8.202 68.35C8.202 72.8798 4.52984 76.552 0 76.552L0 78.3747ZM0.42257 0.934345C4.78238 1.15926 8.202 4.75984 8.202 9.12545L10.0247 9.12545C10.0247 3.78971 5.84513 -0.611003 0.516474 -0.885901L0.42257 0.934345Z",
                    stroke: "rgba(0,0,0,1)",
                    fillRule: "nonzero",
                    strokeWidth: 1,
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                {...getOverrideProps(overrides, "Vector 137902158")}
              ></Icon>
            </Flex>
            <Flex
              gap="0"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="1.8226666450500488px 0px 1.8226666450500488px 0px"
              {...getOverrideProps(overrides, "Match37902139")}
            >
              <Flex
                gap="45.56666564941406px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                overflow="hidden"
                shrink="0"
                position="relative"
                padding="0.9113333225250244px 0.9113333225250244px 0.9113333225250244px 0.9113333225250244px"
                {...getOverrideProps(overrides, "Teams37902145")}
              >
                <Flex
                  gap="4.556666374206543px"
                  direction="row"
                  width="138.52px"
                  height="33.72px"
                  justifyContent="center"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  border="0.91px SOLID rgba(0,0,0,1)"
                  borderRadius="2.7339999675750732px"
                  padding="3.6453332901000977px 4.556666374206543px 3.6453332901000977px 4.556666374206543px"
                  backgroundColor="rgba(255,255,255,1)"
                  {...getOverrideProps(overrides, "TeamButton137902146")}
                >
                  <View
                    width="14.58px"
                    height="14.58px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    overflow="hidden"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Image37902147")}
                  ></View>
                  <Text
                    fontFamily="Inter"
                    fontSize="10.935999870300293px"
                    fontWeight="700"
                    color="rgba(13,26,38,1)"
                    lineHeight="16.40399932861328px"
                    textAlign="center"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="63.79px"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="Label"
                    {...getOverrideProps(overrides, "label37902148")}
                  ></Text>
                  <Flex
                    gap="4.556666374206543px"
                    direction="row"
                    width="14.58px"
                    height="14.58px"
                    justifyContent="center"
                    alignItems="center"
                    shrink="0"
                    position="relative"
                    borderRadius="14.58133316040039px"
                    padding="3.6453332901000977px 5.4679999351501465px 3.6453332901000977px 5.4679999351501465px"
                    backgroundColor="rgba(239,240,240,1)"
                    {...getOverrideProps(overrides, "Button Icon37902149")}
                  >
                    <Text
                      fontFamily="Inter"
                      fontSize="6.379333019256592px"
                      fontWeight="600"
                      color="rgba(13,26,38,1)"
                      lineHeight="6.379333019256592px"
                      textAlign="left"
                      display="block"
                      direction="column"
                      justifyContent="unset"
                      width="unset"
                      height="unset"
                      gap="unset"
                      alignItems="unset"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children="1"
                      {...getOverrideProps(overrides, "137902150")}
                    ></Text>
                  </Flex>
                </Flex>
                <Flex
                  gap="4.556666374206543px"
                  direction="row"
                  width="138.52px"
                  height="33.72px"
                  justifyContent="center"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  border="0.91px SOLID rgba(0,0,0,1)"
                  borderRadius="2.7339999675750732px"
                  padding="3.6453332901000977px 4.556666374206543px 3.6453332901000977px 4.556666374206543px"
                  backgroundColor="rgba(255,255,255,1)"
                  {...getOverrideProps(overrides, "TeamButton237902151")}
                >
                  <View
                    width="14.58px"
                    height="14.58px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    overflow="hidden"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Image37902152")}
                  ></View>
                  <Text
                    fontFamily="Inter"
                    fontSize="10.935999870300293px"
                    fontWeight="700"
                    color="rgba(13,26,38,1)"
                    lineHeight="16.40399932861328px"
                    textAlign="center"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="63.79px"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="Label"
                    {...getOverrideProps(overrides, "label37902153")}
                  ></Text>
                  <Flex
                    gap="4.556666374206543px"
                    direction="row"
                    width="14.58px"
                    height="14.58px"
                    justifyContent="center"
                    alignItems="center"
                    shrink="0"
                    position="relative"
                    borderRadius="14.58133316040039px"
                    padding="3.6453332901000977px 5.4679999351501465px 3.6453332901000977px 5.4679999351501465px"
                    backgroundColor="rgba(239,240,240,1)"
                    {...getOverrideProps(overrides, "Button Icon37902154")}
                  >
                    <Text
                      fontFamily="Inter"
                      fontSize="6.379333019256592px"
                      fontWeight="600"
                      color="rgba(13,26,38,1)"
                      lineHeight="6.379333019256592px"
                      textAlign="left"
                      display="block"
                      direction="column"
                      justifyContent="unset"
                      width="unset"
                      height="unset"
                      gap="unset"
                      alignItems="unset"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children="1"
                      {...getOverrideProps(overrides, "137902155")}
                    ></Text>
                  </Flex>
                </Flex>
              </Flex>
              <Icon
                width="9.11px"
                height="78.37px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 9.11328125,
                  height: 78.37451171875,
                }}
                paths={[
                  {
                    d: "M9.11037 -0.911328L-0.00296385 -0.88169L0.00296385 0.940967L9.1163 0.911328L9.11037 -0.911328ZM0 79.286L9.11333 79.286L9.11333 77.4633L0 77.4633L0 79.286Z",
                    stroke: "rgba(0,0,0,1)",
                    fillRule: "nonzero",
                    strokeWidth: 1,
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                {...getOverrideProps(overrides, "Vector 237902144")}
              ></Icon>
              <Flex
                gap="54.679996490478516px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                overflow="hidden"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Victory Circles37902141")}
              >
                <Image
                  width="22.78px"
                  height="22.78px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  border="1.82px SOLID rgba(0,0,0,1)"
                  borderRadius="9.113332748413086px"
                  padding="0px 0px 0px 0px"
                  objectFit="cover"
                  src={pos13wl}
                  {...getOverrideProps(overrides, "Circle 137902142")}
                ></Image>
                <Image
                  width="22.78px"
                  height="22.78px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  border="1.82px SOLID rgba(0,0,0,1)"
                  borderRadius="9.113332748413086px"
                  padding="0px 0px 0px 0px"
                  objectFit="cover"
                  src={pos14wl}
                  {...getOverrideProps(overrides, "Circle 237902143")}
                ></Image>
              </Flex>
              <Icon
                width="18.23px"
                height="77.46px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 18.2265625,
                  height: 77.46337890625,
                }}
                paths={[
                  {
                    d: "M-0.046952 0.910123L0.42257 0.934345L0.516474 -0.885901L0.046952 -0.910123L-0.046952 0.910123ZM8.202 9.12545L8.202 42.377L10.0247 42.377L10.0247 9.12545L8.202 9.12545ZM8.202 42.377L8.202 68.35L10.0247 68.35L10.0247 42.377L8.202 42.377ZM18.2267 41.4657L9.11333 41.4657L9.11333 43.2883L18.2267 43.2883L18.2267 41.4657ZM0 78.3747C5.53647 78.3747 10.0247 73.8865 10.0247 68.35L8.202 68.35C8.202 72.8798 4.52984 76.552 0 76.552L0 78.3747ZM0.42257 0.934345C4.78238 1.15926 8.202 4.75984 8.202 9.12545L10.0247 9.12545C10.0247 3.78971 5.84513 -0.611003 0.516474 -0.885901L0.42257 0.934345Z",
                    stroke: "rgba(0,0,0,1)",
                    fillRule: "nonzero",
                    strokeWidth: 1,
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                {...getOverrideProps(overrides, "Vector 137902157")}
              ></Icon>
            </Flex>
          </Flex>
          <Flex
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Match37902104")}
          >
            <Flex
              gap="136.6999969482422px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0.9113333225250244px 0.9113333225250244px 0.9113333225250244px 0.9113333225250244px"
              {...getOverrideProps(overrides, "Teams37902110")}
            >
              <Flex
                gap="4.556666374206543px"
                direction="row"
                width="138.52px"
                height="33.72px"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                position="relative"
                border="0.91px SOLID rgba(0,0,0,1)"
                borderRadius="2.7339999675750732px"
                padding="3.6453332901000977px 4.556666374206543px 3.6453332901000977px 4.556666374206543px"
                backgroundColor="rgba(255,255,255,1)"
                {...getOverrideProps(overrides, "TeamButton137902111")}
              >
                <View
                  width="14.58px"
                  height="14.58px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  overflow="hidden"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Image37902112")}
                ></View>
                <Text
                  fontFamily="Inter"
                  fontSize="10.935999870300293px"
                  fontWeight="700"
                  color="rgba(13,26,38,1)"
                  lineHeight="16.40399932861328px"
                  textAlign="center"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="63.79px"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Label"
                  {...getOverrideProps(overrides, "label37902113")}
                ></Text>
                <Flex
                  gap="4.556666374206543px"
                  direction="row"
                  width="14.58px"
                  height="14.58px"
                  justifyContent="center"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  borderRadius="14.58133316040039px"
                  padding="3.6453332901000977px 5.4679999351501465px 3.6453332901000977px 5.4679999351501465px"
                  backgroundColor="rgba(239,240,240,1)"
                  {...getOverrideProps(overrides, "Button Icon37902114")}
                >
                  <Text
                    fontFamily="Inter"
                    fontSize="6.379333019256592px"
                    fontWeight="600"
                    color="rgba(13,26,38,1)"
                    lineHeight="6.379333019256592px"
                    textAlign="left"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="unset"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="1"
                    {...getOverrideProps(overrides, "137902115")}
                  ></Text>
                </Flex>
              </Flex>
              <Flex
                gap="4.556666374206543px"
                direction="row"
                width="138.52px"
                height="33.72px"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                position="relative"
                border="0.91px SOLID rgba(0,0,0,1)"
                borderRadius="2.7339999675750732px"
                padding="3.6453332901000977px 4.556666374206543px 3.6453332901000977px 4.556666374206543px"
                backgroundColor="rgba(255,255,255,1)"
                {...getOverrideProps(overrides, "TeamButton237902116")}
              >
                <View
                  width="14.58px"
                  height="14.58px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  overflow="hidden"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Image37902117")}
                ></View>
                <Text
                  fontFamily="Inter"
                  fontSize="10.935999870300293px"
                  fontWeight="700"
                  color="rgba(13,26,38,1)"
                  lineHeight="16.40399932861328px"
                  textAlign="center"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="63.79px"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Label"
                  {...getOverrideProps(overrides, "label37902118")}
                ></Text>
                <Flex
                  gap="4.556666374206543px"
                  direction="row"
                  width="14.58px"
                  height="14.58px"
                  justifyContent="center"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  borderRadius="14.58133316040039px"
                  padding="3.6453332901000977px 5.4679999351501465px 3.6453332901000977px 5.4679999351501465px"
                  backgroundColor="rgba(239,240,240,1)"
                  {...getOverrideProps(overrides, "Button Icon37902119")}
                >
                  <Text
                    fontFamily="Inter"
                    fontSize="6.379333019256592px"
                    fontWeight="600"
                    color="rgba(13,26,38,1)"
                    lineHeight="6.379333019256592px"
                    textAlign="left"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="unset"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="1"
                    {...getOverrideProps(overrides, "137902120")}
                  ></Text>
                </Flex>
              </Flex>
            </Flex>
            <Icon
              width="9.11px"
              height="169.44px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 9.11328125,
                height: 169.4443359375,
              }}
              paths={[
                {
                  d: "M9.10693 -0.911311L-0.00640765 -0.847233L0.00640765 0.975389L9.11974 0.911311L9.10693 -0.911311ZM0 170.355L9.11333 170.355L9.11333 168.533L0 168.533L0 170.355Z",
                  stroke: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                  strokeWidth: 1,
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Vector 237902109")}
            ></Icon>
            <Flex
              gap="145.81332397460938px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Victory Circles37902106")}
            >
              <Image
                width="22.78px"
                height="22.78px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                border="1.82px SOLID rgba(0,0,0,1)"
                borderRadius="9.113332748413086px"
                padding="0px 0px 0px 0px"
                objectFit="cover"
                src={pos9wl}
                {...getOverrideProps(overrides, "Circle 137902107")}
              ></Image>
              <Image
                width="22.78px"
                height="22.78px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                border="1.82px SOLID rgba(0,0,0,1)"
                borderRadius="9.113332748413086px"
                padding="0px 0px 0px 0px"
                objectFit="cover"
                src={pos10wl}
                {...getOverrideProps(overrides, "Circle 237902108")}
              ></Image>
            </Flex>
            <Icon
              width="18.23px"
              height="168.49px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 18.2265625,
                height: 168.4853515625,
              }}
              paths={[
                {
                  d: "M-0.10162 0.90565L0.914581 1.01967L1.11782 -0.791625L0.10162 -0.90565L-0.10162 0.90565ZM8.202 9.17052L8.202 84.2427L10.0247 84.2427L10.0247 9.17052L8.202 9.17052ZM8.202 84.2427L8.202 159.372L10.0247 159.372L10.0247 84.2427L8.202 84.2427ZM18.2267 83.3314L9.11333 83.3314L9.11333 85.154L18.2267 85.154L18.2267 83.3314ZM0 169.397C5.53647 169.397 10.0247 164.909 10.0247 159.372L8.202 159.372C8.202 163.902 4.52984 167.574 0 167.574L0 169.397ZM0.914581 1.01967C5.06447 1.48532 8.202 4.99459 8.202 9.17052L10.0247 9.17052C10.0247 4.06661 6.18991 -0.222501 1.11782 -0.791625L0.914581 1.01967Z",
                  stroke: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                  strokeWidth: 1,
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Vector 137902156")}
            ></Icon>
          </Flex>
          <Flex
            gap="4.556666374206543px"
            direction="row"
            width="138.52px"
            height="33.72px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            border="0.91px SOLID rgba(0,0,0,1)"
            borderRadius="2.7339999675750732px"
            padding="3.6453332901000977px 4.556666374206543px 3.6453332901000977px 4.556666374206543px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "TeamButton137902099")}
          >
            <View
              width="14.58px"
              height="14.58px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Image37902100")}
            ></View>
            <Text
              fontFamily="Inter"
              fontSize="10.935999870300293px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="16.40399932861328px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="63.79px"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Label"
              {...getOverrideProps(overrides, "label37902101")}
            ></Text>
            <Flex
              gap="4.556666374206543px"
              direction="row"
              width="14.58px"
              height="14.58px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              borderRadius="14.58133316040039px"
              padding="3.6453332901000977px 5.4679999351501465px 3.6453332901000977px 5.4679999351501465px"
              backgroundColor="rgba(239,240,240,1)"
              {...getOverrideProps(overrides, "Button Icon37902102")}
            >
              <Text
                fontFamily="Inter"
                fontSize="6.379333019256592px"
                fontWeight="600"
                color="rgba(13,26,38,1)"
                lineHeight="6.379333019256592px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="1"
                {...getOverrideProps(overrides, "137902103")}
              ></Text>
            </Flex>
          </Flex>
          <Icon
            width="9.11px"
            height="0.46px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 9.11328125,
              height: 0.45556640625,
            }}
            paths={[
              {
                d: "M0 0.911333L9.11333 0.911333L9.11333 -0.911333L0 -0.911333L0 0.911333Z",
                stroke: "rgba(0,0,0,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Vector 337902098")}
          ></Icon>
          <Image
            width="22.78px"
            height="22.78px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            border="1.82px SOLID rgba(0,0,0,1)"
            borderRadius="9.113332748413086px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={pos8wl}
            {...getOverrideProps(overrides, "Circle 137902097")}
          ></Image>
          <Icon
            width="9.11px"
            height="0.46px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 9.11328125,
              height: 0.45556640625,
            }}
            paths={[
              {
                d: "M0 0.911333L9.11333 0.911333L9.11333 -0.911333L0 -0.911333L0 0.911333Z",
                stroke: "rgba(0,0,0,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Vector 237902096")}
          ></Icon>
        </Flex>
        <Flex
          gap="17px"
          direction="column"
          width="unset"
          height="900px"
          justifyContent="flex-start"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Info")}
        >
          <View
            width="227.83px"
            height="227.83px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            children={logo}
            {...getOverrideProps(overrides, "Logo")}
          ></View>
          <Flex
            gap="3px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frozen Four")}
          >
            <Text
              fontFamily="Inter"
              fontSize="36.453330993652344px"
              fontWeight="700"
              color="rgba(0,0,0,1)"
              lineHeight="36.453330993652344px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="FROZEN FOUR"
              {...getOverrideProps(overrides, "FROZEN FOUR")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="14.58133316040039px"
              fontWeight="700"
              color="rgba(0,0,0,1)"
              lineHeight="17.646726608276367px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="APRIL 8"
              {...getOverrideProps(overrides, "APRIL 8")}
            ></Text>
          </Flex>
          <Flex
            gap="3px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Champ")}
          >
            <Text
              fontFamily="Inter"
              fontSize="36.453330993652344px"
              fontWeight="700"
              color="rgba(0,0,0,1)"
              lineHeight="36.453330993652344px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="NATIONAL&#xA;CHAMPIONSHIP"
              {...getOverrideProps(overrides, "NATIONAL CHAMPIONSHIP")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="14.58133316040039px"
              fontWeight="700"
              color="rgba(0,0,0,1)"
              lineHeight="17.646726608276367px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="APRIL 6"
              {...getOverrideProps(overrides, "APRIL 6")}
            ></Text>
          </Flex>
          <Flex
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            borderRadius="9.113332748413086px"
            padding="9.113332748413086px 9.113332748413086px 9.113332748413086px 9.113332748413086px"
            backgroundColor="rgba(0,0,0,1)"
            {...getOverrideProps(overrides, "Finals")}
          >
            <Flex
              gap="0"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
              grow="1"
              shrink="1"
              basis="0"
              alignSelf="stretch"
              position="relative"
              borderRadius="9.113332748413086px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Team Winner")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16.40399932861328px"
                fontWeight="700"
                color="rgba(0,0,0,1)"
                lineHeight="19.852567672729492px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="CHAMPION"
                {...getOverrideProps(overrides, "CHAMPION")}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Match37901971")}
        >
          <Icon
            width="9.11px"
            height="0.46px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 9.11328125,
              height: 0.45556640625,
            }}
            paths={[
              {
                d: "M0 0.911333L9.11333 0.911333L9.11333 -0.911333L0 -0.911333L0 0.911333Z",
                stroke: "rgba(0,0,0,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Vector 237901972")}
          ></Icon>
          <Image
            width="22.78px"
            height="22.78px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            border="1.82px SOLID rgba(0,0,0,1)"
            borderRadius="9.113332748413086px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={pos1wl}
            {...getOverrideProps(overrides, "Circle 137901973")}
          ></Image>
          <Icon
            width="9.11px"
            height="0.46px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 9.11328125,
              height: 0.45556640625,
            }}
            paths={[
              {
                d: "M0 0.911333L9.11333 0.911333L9.11333 -0.911333L0 -0.911333L0 0.911333Z",
                stroke: "rgba(0,0,0,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Vector 337901974")}
          ></Icon>
          <Flex
            gap="4.556666374206543px"
            direction="row"
            width="138.52px"
            height="33.72px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            border="0.91px SOLID rgba(0,0,0,1)"
            borderRadius="2.7339999675750732px"
            padding="3.6453332901000977px 4.556666374206543px 3.6453332901000977px 4.556666374206543px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "TeamButton137901975")}
          >
            <View
              width="14.58px"
              height="14.58px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Image37901976")}
            ></View>
            <Text
              fontFamily="Inter"
              fontSize="10.935999870300293px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="16.40399932861328px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="63.79px"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Label"
              {...getOverrideProps(overrides, "label37901977")}
            ></Text>
            <Flex
              gap="4.556666374206543px"
              direction="row"
              width="14.58px"
              height="14.58px"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              position="relative"
              borderRadius="14.58133316040039px"
              padding="3.6453332901000977px 5.4679999351501465px 3.6453332901000977px 5.4679999351501465px"
              backgroundColor="rgba(239,240,240,1)"
              {...getOverrideProps(overrides, "Button Icon37901978")}
            >
              <Text
                fontFamily="Inter"
                fontSize="6.379333019256592px"
                fontWeight="600"
                color="rgba(13,26,38,1)"
                lineHeight="6.379333019256592px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="1"
                {...getOverrideProps(overrides, "137901979")}
              ></Text>
            </Flex>
          </Flex>
          <Flex
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Match37901980")}
          >
            <Icon
              width="18.23px"
              height="168.49px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 18.2265625,
                height: 168.4853515625,
              }}
              paths={[
                {
                  d: "M18.125 -0.90565L17.1088 -0.791625L17.3121 1.01967L18.3283 0.90565L18.125 -0.90565ZM8.202 9.17052L8.202 84.2427L10.0247 84.2427L10.0247 9.17052L8.202 9.17052ZM8.202 84.2427L8.202 159.372L10.0247 159.372L10.0247 84.2427L8.202 84.2427ZM0 85.154L9.11333 85.154L9.11333 83.3314L0 83.3314L0 85.154ZM18.2267 167.574C13.6968 167.574 10.0247 163.902 10.0247 159.372L8.202 159.372C8.202 164.909 12.6902 169.397 18.2267 169.397L18.2267 167.574ZM17.1088 -0.791625C12.0368 -0.222501 8.202 4.06661 8.202 9.17052L10.0247 9.17052C10.0247 4.99459 13.1622 1.48532 17.3121 1.01967L17.1088 -0.791625Z",
                  stroke: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                  strokeWidth: 1,
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Vector 137901981")}
            ></Icon>
            <Flex
              gap="145.81332397460938px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Victory Circles37901982")}
            >
              <Image
                width="22.78px"
                height="22.78px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                border="1.82px SOLID rgba(0,0,0,1)"
                borderRadius="9.113332748413086px"
                padding="0px 0px 0px 0px"
                objectFit="cover"
                src={pos2wl}
                {...getOverrideProps(overrides, "Circle 137901983")}
              ></Image>
              <Image
                width="22.78px"
                height="22.78px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                border="1.82px SOLID rgba(0,0,0,1)"
                borderRadius="9.113332748413086px"
                padding="0px 0px 0px 0px"
                objectFit="cover"
                src={pos3wl}
                {...getOverrideProps(overrides, "Circle 237901984")}
              ></Image>
            </Flex>
            <Icon
              width="9.11px"
              height="169.44px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 9.11328125,
                height: 169.4443359375,
              }}
              paths={[
                {
                  d: "M9.10693 -0.911311L-0.00640765 -0.847233L0.00640765 0.975389L9.11974 0.911311L9.10693 -0.911311ZM0 170.355L9.11333 170.355L9.11333 168.533L0 168.533L0 170.355Z",
                  stroke: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                  strokeWidth: 1,
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Vector 237901985")}
            ></Icon>
            <Flex
              gap="136.6999969482422px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0.9113333225250244px 0.9113333225250244px 0.9113333225250244px 0.9113333225250244px"
              {...getOverrideProps(overrides, "Teams37901986")}
            >
              <Flex
                gap="4.556666374206543px"
                direction="row"
                width="138.52px"
                height="33.72px"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                position="relative"
                border="0.91px SOLID rgba(0,0,0,1)"
                borderRadius="2.7339999675750732px"
                padding="3.6453332901000977px 4.556666374206543px 3.6453332901000977px 4.556666374206543px"
                backgroundColor="rgba(255,255,255,1)"
                {...getOverrideProps(overrides, "TeamButton137901987")}
              >
                <View
                  width="14.58px"
                  height="14.58px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  overflow="hidden"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Image37901988")}
                ></View>
                <Text
                  fontFamily="Inter"
                  fontSize="10.935999870300293px"
                  fontWeight="700"
                  color="rgba(13,26,38,1)"
                  lineHeight="16.40399932861328px"
                  textAlign="center"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="63.79px"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Label"
                  {...getOverrideProps(overrides, "label37901989")}
                ></Text>
                <Flex
                  gap="4.556666374206543px"
                  direction="row"
                  width="14.58px"
                  height="14.58px"
                  justifyContent="center"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  borderRadius="14.58133316040039px"
                  padding="3.6453332901000977px 5.4679999351501465px 3.6453332901000977px 5.4679999351501465px"
                  backgroundColor="rgba(239,240,240,1)"
                  {...getOverrideProps(overrides, "Button Icon37901990")}
                >
                  <Text
                    fontFamily="Inter"
                    fontSize="6.379333019256592px"
                    fontWeight="600"
                    color="rgba(13,26,38,1)"
                    lineHeight="6.379333019256592px"
                    textAlign="left"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="unset"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="1"
                    {...getOverrideProps(overrides, "137901991")}
                  ></Text>
                </Flex>
              </Flex>
              <Flex
                gap="4.556666374206543px"
                direction="row"
                width="138.52px"
                height="33.72px"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                position="relative"
                border="0.91px SOLID rgba(0,0,0,1)"
                borderRadius="2.7339999675750732px"
                padding="3.6453332901000977px 4.556666374206543px 3.6453332901000977px 4.556666374206543px"
                backgroundColor="rgba(255,255,255,1)"
                {...getOverrideProps(overrides, "TeamButton237901992")}
              >
                <View
                  width="14.58px"
                  height="14.58px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  overflow="hidden"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "Image37901993")}
                ></View>
                <Text
                  fontFamily="Inter"
                  fontSize="10.935999870300293px"
                  fontWeight="700"
                  color="rgba(13,26,38,1)"
                  lineHeight="16.40399932861328px"
                  textAlign="center"
                  display="block"
                  direction="column"
                  justifyContent="unset"
                  width="63.79px"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="Label"
                  {...getOverrideProps(overrides, "label37901994")}
                ></Text>
                <Flex
                  gap="4.556666374206543px"
                  direction="row"
                  width="14.58px"
                  height="14.58px"
                  justifyContent="center"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  borderRadius="14.58133316040039px"
                  padding="3.6453332901000977px 5.4679999351501465px 3.6453332901000977px 5.4679999351501465px"
                  backgroundColor="rgba(239,240,240,1)"
                  {...getOverrideProps(overrides, "Button Icon37901995")}
                >
                  <Text
                    fontFamily="Inter"
                    fontSize="6.379333019256592px"
                    fontWeight="600"
                    color="rgba(13,26,38,1)"
                    lineHeight="6.379333019256592px"
                    textAlign="left"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="unset"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="1"
                    {...getOverrideProps(overrides, "137901996")}
                  ></Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            gap="45.56666564941406px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="4.556666374206543px 0px 4.556666374206543px 0px"
            {...getOverrideProps(overrides, "Match37901997")}
          >
            <Flex
              gap="0"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="1.8226666450500488px 0px 1.8226666450500488px 0px"
              {...getOverrideProps(overrides, "Match37901998")}
            >
              <Icon
                width="18.23px"
                height="77.46px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 18.2265625,
                  height: 77.46337890625,
                }}
                paths={[
                  {
                    d: "M18.1797 -0.910123L17.7102 -0.885901L17.8041 0.934345L18.2736 0.910123L18.1797 -0.910123ZM8.202 9.12545L8.202 34.175L10.0247 34.175L10.0247 9.12545L8.202 9.12545ZM8.202 34.175L8.202 68.35L10.0247 68.35L10.0247 34.175L8.202 34.175ZM0 35.0863L9.11333 35.0863L9.11333 33.2637L0 33.2637L0 35.0863ZM18.2267 76.552C13.6968 76.552 10.0247 72.8798 10.0247 68.35L8.202 68.35C8.202 73.8865 12.6902 78.3747 18.2267 78.3747L18.2267 76.552ZM17.7102 -0.885901C12.3815 -0.611003 8.202 3.78971 8.202 9.12545L10.0247 9.12545C10.0247 4.75984 13.4443 1.15926 17.8041 0.934345L17.7102 -0.885901Z",
                    stroke: "rgba(0,0,0,1)",
                    fillRule: "nonzero",
                    strokeWidth: 1,
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                {...getOverrideProps(overrides, "Vector 137901999")}
              ></Icon>
              <Flex
                gap="54.679996490478516px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                overflow="hidden"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Victory Circles37902000")}
              >
                <Image
                  width="22.78px"
                  height="22.78px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  border="1.82px SOLID rgba(0,0,0,1)"
                  borderRadius="9.113332748413086px"
                  padding="0px 0px 0px 0px"
                  objectFit="cover"
                  src={pos4wl}
                  {...getOverrideProps(overrides, "Circle 137902001")}
                ></Image>
                <Image
                  width="22.78px"
                  height="22.78px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  border="1.82px SOLID rgba(0,0,0,1)"
                  borderRadius="9.113332748413086px"
                  padding="0px 0px 0px 0px"
                  objectFit="cover"
                  src={pos5wl}
                  {...getOverrideProps(overrides, "Circle 237902002")}
                ></Image>
              </Flex>
              <Icon
                width="9.11px"
                height="78.37px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 9.11328125,
                  height: 78.37451171875,
                }}
                paths={[
                  {
                    d: "M9.11037 -0.911328L-0.00296385 -0.88169L0.00296385 0.940967L9.1163 0.911328L9.11037 -0.911328ZM0 79.286L9.11333 79.286L9.11333 77.4633L0 77.4633L0 79.286Z",
                    stroke: "rgba(0,0,0,1)",
                    fillRule: "nonzero",
                    strokeWidth: 1,
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                {...getOverrideProps(overrides, "Vector 237902003")}
              ></Icon>
              <Flex
                gap="45.56666564941406px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                overflow="hidden"
                shrink="0"
                position="relative"
                padding="0.9113333225250244px 0.9113333225250244px 0.9113333225250244px 0.9113333225250244px"
                {...getOverrideProps(overrides, "Teams37902004")}
              >
                <Flex
                  gap="4.556666374206543px"
                  direction="row"
                  width="138.52px"
                  height="33.72px"
                  justifyContent="center"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  border="0.91px SOLID rgba(0,0,0,1)"
                  borderRadius="2.7339999675750732px"
                  padding="3.6453332901000977px 4.556666374206543px 3.6453332901000977px 4.556666374206543px"
                  backgroundColor="rgba(255,255,255,1)"
                  {...getOverrideProps(overrides, "TeamButton137902005")}
                >
                  <View
                    width="14.58px"
                    height="14.58px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    overflow="hidden"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Image37902006")}
                  ></View>
                  <Text
                    fontFamily="Inter"
                    fontSize="10.935999870300293px"
                    fontWeight="700"
                    color="rgba(13,26,38,1)"
                    lineHeight="16.40399932861328px"
                    textAlign="center"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="63.79px"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="Label"
                    {...getOverrideProps(overrides, "label37902007")}
                  ></Text>
                  <Flex
                    gap="4.556666374206543px"
                    direction="row"
                    width="14.58px"
                    height="14.58px"
                    justifyContent="center"
                    alignItems="center"
                    shrink="0"
                    position="relative"
                    borderRadius="14.58133316040039px"
                    padding="3.6453332901000977px 5.4679999351501465px 3.6453332901000977px 5.4679999351501465px"
                    backgroundColor="rgba(239,240,240,1)"
                    {...getOverrideProps(overrides, "Button Icon37902008")}
                  >
                    <Text
                      fontFamily="Inter"
                      fontSize="6.379333019256592px"
                      fontWeight="600"
                      color="rgba(13,26,38,1)"
                      lineHeight="6.379333019256592px"
                      textAlign="left"
                      display="block"
                      direction="column"
                      justifyContent="unset"
                      width="unset"
                      height="unset"
                      gap="unset"
                      alignItems="unset"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children="1"
                      {...getOverrideProps(overrides, "137902009")}
                    ></Text>
                  </Flex>
                </Flex>
                <Flex
                  gap="4.556666374206543px"
                  direction="row"
                  width="138.52px"
                  height="33.72px"
                  justifyContent="center"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  border="0.91px SOLID rgba(0,0,0,1)"
                  borderRadius="2.7339999675750732px"
                  padding="3.6453332901000977px 4.556666374206543px 3.6453332901000977px 4.556666374206543px"
                  backgroundColor="rgba(255,255,255,1)"
                  {...getOverrideProps(overrides, "TeamButton237902010")}
                >
                  <View
                    width="14.58px"
                    height="14.58px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    overflow="hidden"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Image37902011")}
                  ></View>
                  <Text
                    fontFamily="Inter"
                    fontSize="10.935999870300293px"
                    fontWeight="700"
                    color="rgba(13,26,38,1)"
                    lineHeight="16.40399932861328px"
                    textAlign="center"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="63.79px"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="Label"
                    {...getOverrideProps(overrides, "label37902012")}
                  ></Text>
                  <Flex
                    gap="4.556666374206543px"
                    direction="row"
                    width="14.58px"
                    height="14.58px"
                    justifyContent="center"
                    alignItems="center"
                    shrink="0"
                    position="relative"
                    borderRadius="14.58133316040039px"
                    padding="3.6453332901000977px 5.4679999351501465px 3.6453332901000977px 5.4679999351501465px"
                    backgroundColor="rgba(239,240,240,1)"
                    {...getOverrideProps(overrides, "Button Icon37902013")}
                  >
                    <Text
                      fontFamily="Inter"
                      fontSize="6.379333019256592px"
                      fontWeight="600"
                      color="rgba(13,26,38,1)"
                      lineHeight="6.379333019256592px"
                      textAlign="left"
                      display="block"
                      direction="column"
                      justifyContent="unset"
                      width="unset"
                      height="unset"
                      gap="unset"
                      alignItems="unset"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children="1"
                      {...getOverrideProps(overrides, "137902014")}
                    ></Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              gap="0"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="1.8226666450500488px 0px 1.8226666450500488px 0px"
              {...getOverrideProps(overrides, "Match37902015")}
            >
              <Icon
                width="18.23px"
                height="77.46px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 18.2265625,
                  height: 77.46337890625,
                }}
                paths={[
                  {
                    d: "M18.1797 -0.910123L17.7102 -0.885901L17.8041 0.934345L18.2736 0.910123L18.1797 -0.910123ZM8.202 9.12545L8.202 42.377L10.0247 42.377L10.0247 9.12545L8.202 9.12545ZM8.202 42.377L8.202 68.35L10.0247 68.35L10.0247 42.377L8.202 42.377ZM0 43.2883L9.11333 43.2883L9.11333 41.4657L0 41.4657L0 43.2883ZM18.2267 76.552C13.6968 76.552 10.0247 72.8798 10.0247 68.35L8.202 68.35C8.202 73.8865 12.6902 78.3747 18.2267 78.3747L18.2267 76.552ZM17.7102 -0.885901C12.3815 -0.611003 8.202 3.78971 8.202 9.12545L10.0247 9.12545C10.0247 4.75984 13.4443 1.15926 17.8041 0.934345L17.7102 -0.885901Z",
                    stroke: "rgba(0,0,0,1)",
                    fillRule: "nonzero",
                    strokeWidth: 1,
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                {...getOverrideProps(overrides, "Vector 137902016")}
              ></Icon>
              <Flex
                gap="54.679996490478516px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                overflow="hidden"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Victory Circles37902017")}
              >
                <Image
                  width="22.78px"
                  height="22.78px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  border="1.82px SOLID rgba(0,0,0,1)"
                  borderRadius="9.113332748413086px"
                  padding="0px 0px 0px 0px"
                  objectFit="cover"
                  src={pos6wl}
                  {...getOverrideProps(overrides, "Circle 137902018")}
                ></Image>
                <Image
                  width="22.78px"
                  height="22.78px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  shrink="0"
                  position="relative"
                  border="1.82px SOLID rgba(0,0,0,1)"
                  borderRadius="9.113332748413086px"
                  padding="0px 0px 0px 0px"
                  objectFit="cover"
                  src={pos7wl}
                  {...getOverrideProps(overrides, "Circle 237902019")}
                ></Image>
              </Flex>
              <Icon
                width="9.11px"
                height="78.37px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 9.11328125,
                  height: 78.37451171875,
                }}
                paths={[
                  {
                    d: "M9.11037 -0.911328L-0.00296385 -0.88169L0.00296385 0.940967L9.1163 0.911328L9.11037 -0.911328ZM0 79.286L9.11333 79.286L9.11333 77.4633L0 77.4633L0 79.286Z",
                    stroke: "rgba(0,0,0,1)",
                    fillRule: "nonzero",
                    strokeWidth: 1,
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                {...getOverrideProps(overrides, "Vector 237902020")}
              ></Icon>
              <Flex
                gap="45.56666564941406px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                overflow="hidden"
                shrink="0"
                position="relative"
                padding="0.9113333225250244px 0.9113333225250244px 0.9113333225250244px 0.9113333225250244px"
                {...getOverrideProps(overrides, "Teams37902021")}
              >
                <Flex
                  gap="4.556666374206543px"
                  direction="row"
                  width="138.52px"
                  height="33.72px"
                  justifyContent="center"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  border="0.91px SOLID rgba(0,0,0,1)"
                  borderRadius="2.7339999675750732px"
                  padding="3.6453332901000977px 4.556666374206543px 3.6453332901000977px 4.556666374206543px"
                  backgroundColor="rgba(255,255,255,1)"
                  {...getOverrideProps(overrides, "TeamButton137902022")}
                >
                  <View
                    width="14.58px"
                    height="14.58px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    overflow="hidden"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Image37902023")}
                  ></View>
                  <Text
                    fontFamily="Inter"
                    fontSize="10.935999870300293px"
                    fontWeight="700"
                    color="rgba(13,26,38,1)"
                    lineHeight="16.40399932861328px"
                    textAlign="center"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="63.79px"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="Label"
                    {...getOverrideProps(overrides, "label37902024")}
                  ></Text>
                  <Flex
                    gap="4.556666374206543px"
                    direction="row"
                    width="14.58px"
                    height="14.58px"
                    justifyContent="center"
                    alignItems="center"
                    shrink="0"
                    position="relative"
                    borderRadius="14.58133316040039px"
                    padding="3.6453332901000977px 5.4679999351501465px 3.6453332901000977px 5.4679999351501465px"
                    backgroundColor="rgba(239,240,240,1)"
                    {...getOverrideProps(overrides, "Button Icon37902025")}
                  >
                    <Text
                      fontFamily="Inter"
                      fontSize="6.379333019256592px"
                      fontWeight="600"
                      color="rgba(13,26,38,1)"
                      lineHeight="6.379333019256592px"
                      textAlign="left"
                      display="block"
                      direction="column"
                      justifyContent="unset"
                      width="unset"
                      height="unset"
                      gap="unset"
                      alignItems="unset"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children="1"
                      {...getOverrideProps(overrides, "137902026")}
                    ></Text>
                  </Flex>
                </Flex>
                <Flex
                  gap="4.556666374206543px"
                  direction="row"
                  width="138.52px"
                  height="33.72px"
                  justifyContent="center"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  border="0.91px SOLID rgba(0,0,0,1)"
                  borderRadius="2.7339999675750732px"
                  padding="3.6453332901000977px 4.556666374206543px 3.6453332901000977px 4.556666374206543px"
                  backgroundColor="rgba(255,255,255,1)"
                  {...getOverrideProps(overrides, "TeamButton237902027")}
                >
                  <View
                    width="14.58px"
                    height="14.58px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    overflow="hidden"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    {...getOverrideProps(overrides, "Image37902028")}
                  ></View>
                  <Text
                    fontFamily="Inter"
                    fontSize="10.935999870300293px"
                    fontWeight="700"
                    color="rgba(13,26,38,1)"
                    lineHeight="16.40399932861328px"
                    textAlign="center"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="63.79px"
                    height="unset"
                    gap="unset"
                    alignItems="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="Label"
                    {...getOverrideProps(overrides, "label37902029")}
                  ></Text>
                  <Flex
                    gap="4.556666374206543px"
                    direction="row"
                    width="14.58px"
                    height="14.58px"
                    justifyContent="center"
                    alignItems="center"
                    shrink="0"
                    position="relative"
                    borderRadius="14.58133316040039px"
                    padding="3.6453332901000977px 5.4679999351501465px 3.6453332901000977px 5.4679999351501465px"
                    backgroundColor="rgba(239,240,240,1)"
                    {...getOverrideProps(overrides, "Button Icon37902030")}
                  >
                    <Text
                      fontFamily="Inter"
                      fontSize="6.379333019256592px"
                      fontWeight="600"
                      color="rgba(13,26,38,1)"
                      lineHeight="6.379333019256592px"
                      textAlign="left"
                      display="block"
                      direction="column"
                      justifyContent="unset"
                      width="unset"
                      height="unset"
                      gap="unset"
                      alignItems="unset"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children="1"
                      {...getOverrideProps(overrides, "137902031")}
                    ></Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
