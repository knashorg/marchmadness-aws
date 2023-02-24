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
import ListItem from "./ListItem";
import { Button, Flex, Image } from "@aws-amplify/ui-react";
export default function NavMenu(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "List Item36983538": {},
        "List Item36983540": {},
        "List Item36983542": {},
        "List Item36983544": {},
        image: {},
        Button: {},
        NavMenu: {},
      },
      variantValues: { signedIn: "No" },
    },
    {
      overrides: {
        "List Item36983538": {},
        "List Item36983540": {},
        "List Item36983542": {},
        "List Item36983544": {},
        image: { display: "block" },
        Button: { display: "none", children: "Button" },
        NavMenu: {},
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
      gap="20px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "NavMenu")}
      {...rest}
    >
      <ListItem
        display="flex"
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "List Item36983538")}
      ></ListItem>
      <ListItem
        display="flex"
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "List Item36983540")}
      ></ListItem>
      <ListItem
        display="flex"
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "List Item36983542")}
      ></ListItem>
      <ListItem
        display="flex"
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "List Item36983544")}
      ></ListItem>
      <Image
        width="40px"
        height="40px"
        display="none"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Button
        shrink="0"
        size="default"
        isDisabled={false}
        variation="default"
        children="Sign Up"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
