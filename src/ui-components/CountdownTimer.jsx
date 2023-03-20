/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Badge, Flex, Text, View } from "@aws-amplify/ui-react";
export default function CountdownTimer(props) {
  const {
    countdownvalue = "00:00:00:00",
    bracketurl = "/my-bracket",
    overrides,
    ...rest
  } = props;
  const countdownTimerOnClick = useNavigateAction({
    type: "url",
    url: bracketurl,
  });
  return (
    <View
      width="889px"
      height="129px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      onClick={() => {
        countdownTimerOnClick();
      }}
      {...getOverrideProps(overrides, "CountdownTimer")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="152px"
        height="43px"
        justifyContent="space-between"
        alignItems="flex-start"
        position="absolute"
        top="43px"
        left="7px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 417")}
      >
        <Flex
          gap="0"
          direction="column"
          width="144px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Product Title")}
        >
          <Text
            fontFamily="Inter"
            fontSize="30px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="167px"
            height="31px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Time Until: "
            {...getOverrideProps(overrides, "Time Until:")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="30px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.15px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Selection of teams"
            {...getOverrideProps(overrides, "Selection of teams")}
          ></Text>
        </Flex>
      </Flex>
      <Text
        fontFamily="Inter"
        fontSize="75px"
        fontWeight="800"
        color="rgba(13,26,38,1)"
        lineHeight="20px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="539px"
        height="66px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        bottom="32px"
        right="46px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={countdownvalue}
        {...getOverrideProps(overrides, "03:05:22:48")}
      ></Text>
      <Badge
        width="unset"
        height="unset"
        gap="0"
        position="absolute"
        backgroundColor="rgba(245,188,188,1)"
        top="7px"
        left="7px"
        size="small"
        variation="default"
        children="Countdown"
        {...getOverrideProps(overrides, "Badge")}
      ></Badge>
      <Text
        fontFamily="Inter"
        fontSize="30px"
        fontWeight="800"
        color="rgba(0,0,0,1)"
        lineHeight="20px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="477px"
        height="23px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="86px"
        left="335px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="   days        hours        mins        secs"
        {...getOverrideProps(overrides, "days hours mins secs")}
      ></Text>
    </View>
  );
}
