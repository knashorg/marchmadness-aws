/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Team(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="326px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      border="2px SOLID rgba(36,36,36,1)"
      borderRadius="50px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Team")}
      {...rest}
    >
      <View
        width="45px"
        height="45px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Seed37252185")}
      >
        <View
          width="45px"
          height="45px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          borderRadius="50px 0px 0px 50px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(44,189,251,1)"
          {...getOverrideProps(overrides, "Shape")}
        ></View>
        <Text
          fontFamily="Quantico"
          fontSize="18px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="25.739999771118164px"
          textAlign="right"
          display="block"
          direction="column"
          justifyContent="unset"
          width="40px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="9px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="1"
          {...getOverrideProps(overrides, "Seed37252183")}
        ></Text>
      </View>
      <View
        width="2px"
        height="45px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(36,36,36,1)"
        {...getOverrideProps(overrides, "BorderLine")}
      ></View>
      <Text
        fontFamily="Roboto"
        fontSize="18px"
        fontWeight="500"
        color="rgba(36,36,36,1)"
        lineHeight="21.09375px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="207px"
        height="43px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children=""
        {...getOverrideProps(overrides, "Team37252181")}
      ></Text>
      <Text
        fontFamily="Roboto"
        fontSize="18px"
        fontWeight="500"
        color="rgba(36,36,36,1)"
        lineHeight="21.09375px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        width="32px"
        height="43px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children=""
        {...getOverrideProps(overrides, "Score")}
      ></Text>
    </Flex>
  );
}
