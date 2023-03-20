/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TeamButtonOverridesProps = {
    "1"?: PrimitiveOverrideProps<TextProps>;
    TeamButton?: PrimitiveOverrideProps<FlexProps>;
    Image?: PrimitiveOverrideProps<ViewProps>;
    label?: PrimitiveOverrideProps<TextProps>;
    "Button Icon"?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type TeamButtonProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TeamButtonOverridesProps | undefined | null;
}>;
export default function TeamButton(props: TeamButtonProps): React.ReactElement;
