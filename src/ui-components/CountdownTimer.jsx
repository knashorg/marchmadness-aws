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
import { Badge, Flex, Text } from "@aws-amplify/ui-react";
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
    <Flex
      gap="0"
      direction="row"
      width="unset"
      height="150px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 7px 0px 7px"
      backgroundColor="rgba(255,255,255,1)"
      onClick={() => {
        countdownTimerOnClick();
      }}
      {...getOverrideProps(overrides, "CountdownTimer")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Left")}
      >
        <Badge
          width="unset"
          height="unset"
          gap="0"
          backgroundColor="rgba(245,188,188,1)"
          shrink="0"
          size="small"
          variation="default"
          children="Countdown"
          {...getOverrideProps(overrides, "Badge")}
        ></Badge>
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Time Until")}
        >
          <Flex
            gap="0"
            direction="column"
            width="unset"
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
              children="Brackets Lock"
              {...getOverrideProps(overrides, "Brackets Lock")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="5px 0px 5px 0px"
        {...getOverrideProps(overrides, "Timer")}
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
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Time")}
        >
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
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={countdownvalue}
            {...getOverrideProps(overrides, "03:05:22:48")}
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
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Labels")}
        >
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
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="   days       hours       mins        secs"
            {...getOverrideProps(overrides, "days hours mins secs")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
