/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TeamOverridesProps = {
    Team?: PrimitiveOverrideProps<FlexProps>;
    Seed37252185?: PrimitiveOverrideProps<ViewProps>;
    Shape?: PrimitiveOverrideProps<ViewProps>;
    Seed37252183?: PrimitiveOverrideProps<TextProps>;
    BorderLine?: PrimitiveOverrideProps<ViewProps>;
    Team37252181?: PrimitiveOverrideProps<TextProps>;
    Score?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TeamProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TeamOverridesProps | undefined | null;
}>;
export default function Team(props: TeamProps): React.ReactElement;
