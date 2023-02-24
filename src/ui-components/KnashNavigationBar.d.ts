/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type KnashNavigationBarOverridesProps = {
    KnashNavigationBar?: PrimitiveOverrideProps<FlexProps>;
    Logo?: PrimitiveOverrideProps<FlexProps>;
    src37032650?: PrimitiveOverrideProps<ImageProps>;
    MenuItems?: PrimitiveOverrideProps<FlexProps>;
    MyBracket?: PrimitiveOverrideProps<FlexProps>;
    "My Bracket"?: PrimitiveOverrideProps<TextProps>;
    LeaderBoard?: PrimitiveOverrideProps<FlexProps>;
    Leaderboard?: PrimitiveOverrideProps<TextProps>;
    SignIn?: PrimitiveOverrideProps<FlexProps>;
    "Sign In"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    Avatar?: PrimitiveOverrideProps<FlexProps>;
    src37032670?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type KnashNavigationBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    logoimg?: React.ReactNode;
    avatarimg?: React.ReactNode;
    buttonlabel?: String;
    buttonurl?: String;
    avatarurl?: String;
} & {
    signedIn?: "No" | "Yes";
} & {
    overrides?: KnashNavigationBarOverridesProps | undefined | null;
}>;
export default function KnashNavigationBar(props: KnashNavigationBarProps): React.ReactElement;
