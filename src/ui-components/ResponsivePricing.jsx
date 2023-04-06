/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import {
  Button,
  Divider,
  Flex,
  Icon,
  Text,
  View,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
export default function ResponsivePricing(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        Free: {},
        "$0/mo": {},
        Button36973708: {},
        Divider36973709: {},
        Vector36973712: {},
        Icon36973711: {},
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.36973713":
          {},
        "Frame 13836973710": {},
        Vector36973716: {},
        Icon36973715: {},
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.36973717":
          {},
        "Frame 13936973714": {},
        Vector36973720: {},
        Icon36973719: {},
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.36973721":
          {},
        "Frame 13736973718": {},
        "Frame 390": {},
        Premium: {},
        "$100/mo": {},
        Button36973725: {},
        Divider36973726: {},
        Vector36973729: {},
        Icon36973728: {},
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.36973730":
          {},
        "Frame 13836973727": {},
        Vector36973733: {},
        Icon36973732: {},
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.36973734":
          {},
        "Frame 13936973731": {},
        Vector36973737: {},
        Icon36973736: {},
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.36973738":
          {},
        "Frame 13736973735": {},
        "Frame 392": {},
        Enterprise: {},
        "Contact us": {},
        Button36973742: {},
        Divider36973743: {},
        Vector36973746: {},
        Icon36973745: {},
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.36973747":
          {},
        "Frame 13836973744": {},
        Vector36973750: {},
        Icon36973749: {},
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.36973751":
          {},
        "Frame 13936973748": {},
        Vector36973754: {},
        Icon36973753: {},
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.36973755":
          {},
        "Frame 13736973752": {},
        "Frame 393": {},
        "Frame 63": {},
        ResponsivePricing: {},
      },
      variantValues: { breakpoint: "Default" },
    },
    {
      overrides: {
        Free: {},
        "$0/mo": {},
        Button36973708: {},
        Divider36973709: {},
        Vector36973712: {},
        Icon36973711: {},
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.36973713":
          {},
        "Frame 13836973710": {},
        Vector36973716: {},
        Icon36973715: {},
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.36973717":
          {},
        "Frame 13936973714": {},
        Vector36973720: {},
        Icon36973719: {},
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.36973721":
          {},
        "Frame 13736973718": {},
        "Frame 390": { width: "759px", shrink: "0" },
        Premium: {},
        "$100/mo": {},
        Button36973725: {},
        Divider36973726: {},
        Vector36973729: {},
        Icon36973728: {},
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.36973730":
          {},
        "Frame 13836973727": {},
        Vector36973733: {},
        Icon36973732: {},
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.36973734":
          {},
        "Frame 13936973731": {},
        Vector36973737: {},
        Icon36973736: {},
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.36973738":
          {},
        "Frame 13736973735": {},
        "Frame 392": { width: "759px", shrink: "0" },
        Enterprise: {},
        "Contact us": {},
        Button36973742: {},
        Divider36973743: {},
        Vector36973746: {},
        Icon36973745: {},
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.36973747":
          {},
        "Frame 13836973744": {},
        Vector36973750: {},
        Icon36973749: {},
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.36973751":
          {},
        "Frame 13936973748": {},
        Vector36973754: {},
        Icon36973753: {},
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.36973755":
          {},
        "Frame 13736973752": {},
        "Frame 393": { width: "759px", shrink: "0" },
        "Frame 63": { direction: "column", shrink: "0" },
        ResponsivePricing: { width: "unset" },
      },
      variantValues: { breakpoint: "medium" },
    },
  ];
  const breakpointHook = useBreakpointValue({
    base: "medium",
    medium: "medium",
  });
  const rest = { style: { transition: "all 0.25s" }, ...restProp };
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, {
      breakpoint: breakpointHook,
      ...props,
    }),
    overridesProp || {}
  );
  return (
    <Flex
      gap="24px"
      direction="row"
      width="1440px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(239,240,240,1)"
      display="flex"
      {...getOverrideProps(overrides, "ResponsivePricing")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 63")}
      >
        <Flex
          gap="24px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="24px 24px 24px 24px"
          backgroundColor="rgba(255,255,255,1)"
          display="flex"
          {...getOverrideProps(overrides, "Frame 390")}
        >
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="600"
            color="rgba(13,26,38,1)"
            lineHeight="30px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Free"
            {...getOverrideProps(overrides, "Free")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
            color="rgba(92,102,112,1)"
            lineHeight="25px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="$0/mo"
            {...getOverrideProps(overrides, "$0/mo")}
          ></Text>
          <Button
            width="unset"
            height="unset"
            shrink="0"
            alignSelf="stretch"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Primary Button"
            {...getOverrideProps(overrides, "Button36973708")}
          ></Button>
          <Divider
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider36973709")}
          ></Divider>
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 13836973710")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Icon36973711")}
            >
              <Icon
                width="17.59px"
                height="13.41px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 17.58984375,
                  height: 13.41015625,
                }}
                paths={[
                  {
                    d: "M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z",
                    fill: "rgba(64,170,191,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="23.29%"
                bottom="20.83%"
                left="14.21%"
                right="12.5%"
                {...getOverrideProps(overrides, "Vector36973712")}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
              {...getOverrideProps(
                overrides,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.36973713"
              )}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 13936973714")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Icon36973715")}
            >
              <Icon
                width="17.59px"
                height="13.41px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 17.58984375,
                  height: 13.41015625,
                }}
                paths={[
                  {
                    d: "M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z",
                    fill: "rgba(64,170,191,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="23.29%"
                bottom="20.83%"
                left="14.21%"
                right="12.5%"
                {...getOverrideProps(overrides, "Vector36973716")}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
              {...getOverrideProps(
                overrides,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.36973717"
              )}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 13736973718")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Icon36973719")}
            >
              <Icon
                width="17.59px"
                height="13.41px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 17.58984375,
                  height: 13.41015625,
                }}
                paths={[
                  {
                    d: "M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z",
                    fill: "rgba(64,170,191,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="23.29%"
                bottom="20.83%"
                left="14.21%"
                right="12.5%"
                {...getOverrideProps(overrides, "Vector36973720")}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
              {...getOverrideProps(
                overrides,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.36973721"
              )}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="24px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="24px 24px 24px 24px"
          backgroundColor="rgba(255,255,255,1)"
          display="flex"
          {...getOverrideProps(overrides, "Frame 392")}
        >
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="600"
            color="rgba(13,26,38,1)"
            lineHeight="30px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Premium"
            {...getOverrideProps(overrides, "Premium")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
            color="rgba(92,102,112,1)"
            lineHeight="25px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="$100/mo"
            {...getOverrideProps(overrides, "$100/mo")}
          ></Text>
          <Button
            width="unset"
            height="unset"
            shrink="0"
            alignSelf="stretch"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Primary Button"
            {...getOverrideProps(overrides, "Button36973725")}
          ></Button>
          <Divider
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider36973726")}
          ></Divider>
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 13836973727")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Icon36973728")}
            >
              <Icon
                width="17.59px"
                height="13.41px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 17.58984375,
                  height: 13.41015625,
                }}
                paths={[
                  {
                    d: "M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z",
                    fill: "rgba(64,170,191,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="23.29%"
                bottom="20.83%"
                left="14.21%"
                right="12.5%"
                {...getOverrideProps(overrides, "Vector36973729")}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
              {...getOverrideProps(
                overrides,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.36973730"
              )}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 13936973731")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Icon36973732")}
            >
              <Icon
                width="17.59px"
                height="13.41px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 17.58984375,
                  height: 13.41015625,
                }}
                paths={[
                  {
                    d: "M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z",
                    fill: "rgba(64,170,191,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="23.29%"
                bottom="20.83%"
                left="14.21%"
                right="12.5%"
                {...getOverrideProps(overrides, "Vector36973733")}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
              {...getOverrideProps(
                overrides,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.36973734"
              )}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 13736973735")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Icon36973736")}
            >
              <Icon
                width="17.59px"
                height="13.41px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 17.58984375,
                  height: 13.41015625,
                }}
                paths={[
                  {
                    d: "M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z",
                    fill: "rgba(64,170,191,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="23.29%"
                bottom="20.83%"
                left="14.21%"
                right="12.5%"
                {...getOverrideProps(overrides, "Vector36973737")}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
              {...getOverrideProps(
                overrides,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.36973738"
              )}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="24px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="24px 24px 24px 24px"
          backgroundColor="rgba(255,255,255,1)"
          display="flex"
          {...getOverrideProps(overrides, "Frame 393")}
        >
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="600"
            color="rgba(13,26,38,1)"
            lineHeight="30px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Enterprise"
            {...getOverrideProps(overrides, "Enterprise")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
            color="rgba(92,102,112,1)"
            lineHeight="25px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Contact us"
            {...getOverrideProps(overrides, "Contact us")}
          ></Text>
          <Button
            width="unset"
            height="unset"
            shrink="0"
            alignSelf="stretch"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Primary Button"
            {...getOverrideProps(overrides, "Button36973742")}
          ></Button>
          <Divider
            width="unset"
            shrink="0"
            alignSelf="stretch"
            size="default"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider36973743")}
          ></Divider>
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 13836973744")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Icon36973745")}
            >
              <Icon
                width="17.59px"
                height="13.41px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 17.58984375,
                  height: 13.41015625,
                }}
                paths={[
                  {
                    d: "M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z",
                    fill: "rgba(64,170,191,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="23.29%"
                bottom="20.83%"
                left="14.21%"
                right="12.5%"
                {...getOverrideProps(overrides, "Vector36973746")}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
              {...getOverrideProps(
                overrides,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.36973747"
              )}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 13936973748")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Icon36973749")}
            >
              <Icon
                width="17.59px"
                height="13.41px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 17.58984375,
                  height: 13.41015625,
                }}
                paths={[
                  {
                    d: "M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z",
                    fill: "rgba(64,170,191,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="23.29%"
                bottom="20.83%"
                left="14.21%"
                right="12.5%"
                {...getOverrideProps(overrides, "Vector36973750")}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
              {...getOverrideProps(
                overrides,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.36973751"
              )}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 13736973752")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Icon36973753")}
            >
              <Icon
                width="17.59px"
                height="13.41px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 17.58984375,
                  height: 13.41015625,
                }}
                paths={[
                  {
                    d: "M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z",
                    fill: "rgba(64,170,191,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="23.29%"
                bottom="20.83%"
                left="14.21%"
                right="12.5%"
                {...getOverrideProps(overrides, "Vector36973754")}
              ></Icon>
            </View>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
              {...getOverrideProps(
                overrides,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.36973755"
              )}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
