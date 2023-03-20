/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CountdownTimerOverridesProps = {
    CountdownTimer?: PrimitiveOverrideProps<ViewProps>;
    "Frame 417"?: PrimitiveOverrideProps<FlexProps>;
    "Product Title"?: PrimitiveOverrideProps<FlexProps>;
    "Time Until:"?: PrimitiveOverrideProps<TextProps>;
    "Selection of teams"?: PrimitiveOverrideProps<TextProps>;
    "03:05:22:48"?: PrimitiveOverrideProps<TextProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
    "days hours mins secs"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CountdownTimerProps = React.PropsWithChildren<Partial<ViewProps> & {
    countdownvalue?: String;
    bracketurl?: String;
} & {
    overrides?: CountdownTimerOverridesProps | undefined | null;
}>;
export default function CountdownTimer(props: CountdownTimerProps): React.ReactElement;
