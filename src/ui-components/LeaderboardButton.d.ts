/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Bracket } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LeaderboardButtonOverridesProps = {
    "1"?: PrimitiveOverrideProps<TextProps>;
    LeaderboardButton?: PrimitiveOverrideProps<FlexProps>;
    Image?: PrimitiveOverrideProps<ViewProps>;
    label?: PrimitiveOverrideProps<TextProps>;
    "Button Icon"?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type LeaderboardButtonProps = React.PropsWithChildren<Partial<FlexProps> & {
    bracket?: Bracket;
    photo?: React.ReactNode;
} & {
    overrides?: LeaderboardButtonOverridesProps | undefined | null;
}>;
export default function LeaderboardButton(props: LeaderboardButtonProps): React.ReactElement;
