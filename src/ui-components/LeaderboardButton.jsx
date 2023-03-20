/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useAuth } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function LeaderboardButton(props) {
  const { bracket, photo, overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  return (
    <Flex
      gap="10px"
      direction="row"
      width="254px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      border="2px SOLID rgba(0,0,0,1)"
      borderRadius="6px"
      padding="8px 10px 8px 10px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "LeaderboardButton")}
      {...rest}
    >
      <View
        width="32px"
        height="32px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Image")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(13,26,38,1)"
        lineHeight="24px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="140px"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={authAttributes["email"]}
        {...getOverrideProps(overrides, "label")}
      ></Text>
      <Flex
        gap="10px"
        direction="row"
        width="32px"
        height="32px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        borderRadius="32px"
        padding="8px 12px 8px 12px"
        backgroundColor="rgba(239,240,240,1)"
        {...getOverrideProps(overrides, "Button Icon")}
      >
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="600"
          color="rgba(13,26,38,1)"
          lineHeight="14px"
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
          children={bracket?.id}
          {...getOverrideProps(overrides, "1")}
        ></Text>
      </Flex>
    </Flex>
  );
}
