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
  useAuthSignOutAction,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function KnashNavigationBar(props) {
  const {
    logoimg,
    avatarimg,
    buttonlabel,
    buttonurl,
    avatarurl,
    leaderboardurl = "/leaderboard",
    bracketurl = "/my-bracket",
    signinurl,
    signout,
    homeurl = "/",
    overrides: overridesProp,
    ...rest
  } = props;
  const variants = [
    {
      overrides: {
        src37032650: {},
        Logo: {},
        "My Bracket": {},
        MyBracket: {},
        Leaderboard: {},
        LeaderBoard: {},
        "Sign In": {},
        SignIn: {},
        SignOut37202173: {},
        SignOut37202172: {},
        Button: {},
        src37032670: {},
        Avatar: {},
        MenuItems: {},
        KnashNavigationBar: {},
      },
      variantValues: { signedIn: "No" },
    },
    {
      overrides: {
        src37032650: {},
        Logo: {},
        "My Bracket": {},
        MyBracket: {},
        Leaderboard: {},
        LeaderBoard: {},
        "Sign In": {},
        SignIn: { display: "none" },
        SignOut37202173: {},
        SignOut37202172: { display: "flex" },
        Button: { display: "none" },
        src37032670: {},
        Avatar: { display: "flex" },
        MenuItems: {},
        KnashNavigationBar: { padding: "0px 24px 0px 24px" },
      },
      variantValues: { signedIn: "Yes" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  const srcThreeSevenZeroThreeTwoSixFiveZeroOnClick = useNavigateAction({
    type: "url",
    url: homeurl,
  });
  const myBracketOnClick = useNavigateAction({ type: "url", url: bracketurl });
  const leaderBoardOnClick = useNavigateAction({
    type: "url",
    url: leaderboardurl,
  });
  const signInOnClick = useNavigateAction({ type: "url", url: signinurl });
  const signOutThreeSevenTwoZeroTwoOneSevenTwoOnClick = useAuthSignOutAction({
    global: false,
  });
  const buttonOnClick = useNavigateAction({ type: "url", url: buttonurl });
  const avatarOnClick = useNavigateAction({ type: "url", url: avatarurl });
  return (
    <Flex
      gap="10px"
      direction="row"
      width="1040px"
      height="unset"
      justifyContent="space-between"
      alignItems="center"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(0,0,0,1)"
      padding="0px 23px 0px 23px"
      backgroundColor="rgba(35,47,62,1)"
      display="flex"
      {...getOverrideProps(overrides, "KnashNavigationBar")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        display="flex"
        {...getOverrideProps(overrides, "Logo")}
      >
        <Image
          width="64.29px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={logoimg}
          onClick={() => {
            srcThreeSevenZeroThreeTwoSixFiveZeroOnClick();
          }}
          {...getOverrideProps(overrides, "src37032650")}
        ></Image>
      </Flex>
      <Flex
        gap="24px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 5px 0px 5px"
        display="flex"
        {...getOverrideProps(overrides, "MenuItems")}
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
          display="flex"
          onClick={() => {
            myBracketOnClick();
          }}
          {...getOverrideProps(overrides, "MyBracket")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
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
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="My Bracket"
            {...getOverrideProps(overrides, "My Bracket")}
          ></Text>
        </Flex>
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
          display="flex"
          onClick={() => {
            leaderBoardOnClick();
          }}
          {...getOverrideProps(overrides, "LeaderBoard")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
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
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Leaderboard"
            {...getOverrideProps(overrides, "Leaderboard")}
          ></Text>
        </Flex>
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
          display="flex"
          onClick={() => {
            signInOnClick();
          }}
          {...getOverrideProps(overrides, "SignIn")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
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
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Sign In"
            {...getOverrideProps(overrides, "Sign In")}
          ></Text>
        </Flex>
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
          display="none"
          onClick={() => {
            signOutThreeSevenTwoZeroTwoOneSevenTwoOnClick();
          }}
          {...getOverrideProps(overrides, "SignOut37202172")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
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
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Sign Out"
            {...getOverrideProps(overrides, "SignOut37202173")}
          ></Text>
        </Flex>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children={buttonlabel}
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="10px 10px 10px 10px"
          display="none"
          onClick={() => {
            avatarOnClick();
          }}
          {...getOverrideProps(overrides, "Avatar")}
        >
          <Image
            width="40px"
            height="40px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            border="1px SOLID rgba(0,0,0,1)"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={avatarimg}
            {...getOverrideProps(overrides, "src37032670")}
          ></Image>
        </Flex>
      </Flex>
    </Flex>
  );
}
