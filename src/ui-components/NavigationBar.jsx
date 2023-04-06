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
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import { Flex } from "@aws-amplify/ui-react";
export default function NavigationBar(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Logo: {}, "Nav Menu": {}, NavigationBar: {} },
      variantValues: { signedIn: "No" },
    },
    {
      overrides: {
        Logo: {},
        "Nav Menu": { signedIn: "Yes" },
        NavigationBar: {},
      },
      variantValues: { signedIn: "Yes" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="row"
      width="1040px"
      height="unset"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      padding="8px 24px 8px 24px"
      backgroundColor="rgba(35,47,62,1)"
      display="flex"
      {...getOverrideProps(overrides, "NavigationBar")}
      {...rest}
    >
      <Logo
        display="flex"
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Logo")}
      ></Logo>
      <NavMenu
        display="flex"
        gap="20px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        signedIn="No"
        {...getOverrideProps(overrides, "Nav Menu")}
      ></NavMenu>
    </Flex>
  );
}
