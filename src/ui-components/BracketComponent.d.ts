/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { TeamButtonProps } from "./TeamButton";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BracketComponentOverridesProps = {
    BracketComponent?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<FlexProps>;
    "2023 NCAA DIVISION I MEN\u2019S HOCKEY CHAMPIONSHIP BRACKET"?: PrimitiveOverrideProps<TextProps>;
    Bracket?: PrimitiveOverrideProps<ViewProps>;
    Logo?: PrimitiveOverrideProps<ViewProps>;
    "FROZEN FOUR"?: PrimitiveOverrideProps<TextProps>;
    "APRIL 6"?: PrimitiveOverrideProps<TextProps>;
    "NATIONAL CHAMPIONSHIP"?: PrimitiveOverrideProps<TextProps>;
    "APRIL 8"?: PrimitiveOverrideProps<TextProps>;
    Finals?: PrimitiveOverrideProps<FlexProps>;
    "Team Winner"?: PrimitiveOverrideProps<FlexProps>;
    CHAMPION?: PrimitiveOverrideProps<TextProps>;
    TeamButton?: TeamButtonProps;
} & EscapeHatchProps;
export declare type BracketComponentProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: BracketComponentOverridesProps | undefined | null;
}>;
export default function BracketComponent(props: BracketComponentProps): React.ReactElement;
