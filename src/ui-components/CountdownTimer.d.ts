/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CountdownTimerOverridesProps = {
    CountdownTimer?: PrimitiveOverrideProps<FlexProps>;
    Left?: PrimitiveOverrideProps<FlexProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
    "Time Until"?: PrimitiveOverrideProps<FlexProps>;
    "Product Title"?: PrimitiveOverrideProps<FlexProps>;
    "Time Until:"?: PrimitiveOverrideProps<TextProps>;
    "Brackets Lock"?: PrimitiveOverrideProps<TextProps>;
    Timer?: PrimitiveOverrideProps<FlexProps>;
    Time?: PrimitiveOverrideProps<FlexProps>;
    "03:05:22:48"?: PrimitiveOverrideProps<TextProps>;
    Labels?: PrimitiveOverrideProps<FlexProps>;
    "days hours mins secs"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CountdownTimerProps = React.PropsWithChildren<Partial<FlexProps> & {
    countdownvalue?: String;
    bracketurl?: String;
} & {
    overrides?: CountdownTimerOverridesProps | undefined | null;
}>;
export default function CountdownTimer(props: CountdownTimerProps): React.ReactElement;
