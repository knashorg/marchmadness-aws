/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DropdownBoxOverridesProps = {
    DropdownBox?: PrimitiveOverrideProps<FlexProps>;
    Header?: PrimitiveOverrideProps<FlexProps>;
    "Frame 420"?: PrimitiveOverrideProps<FlexProps>;
    "logo-color 1"?: PrimitiveOverrideProps<ImageProps>;
    "Items Frame"?: PrimitiveOverrideProps<ViewProps>;
    "Items List"?: PrimitiveOverrideProps<FlexProps>;
    "Item Hover36855264"?: PrimitiveOverrideProps<FlexProps>;
    Label136855403?: PrimitiveOverrideProps<ViewProps>;
    Label136855404?: PrimitiveOverrideProps<TextProps>;
    "Item Hover36855289"?: PrimitiveOverrideProps<FlexProps>;
    Label236855405?: PrimitiveOverrideProps<ViewProps>;
    Label236855406?: PrimitiveOverrideProps<TextProps>;
    "Item Hover36855314"?: PrimitiveOverrideProps<FlexProps>;
    Label336855407?: PrimitiveOverrideProps<ViewProps>;
    Label336855408?: PrimitiveOverrideProps<TextProps>;
    "Item Hover36855339"?: PrimitiveOverrideProps<FlexProps>;
    Label436855409?: PrimitiveOverrideProps<ViewProps>;
    Label436855410?: PrimitiveOverrideProps<TextProps>;
    "Item Hover36855364"?: PrimitiveOverrideProps<FlexProps>;
    Label536855411?: PrimitiveOverrideProps<ViewProps>;
    Label536855412?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type DropdownBoxProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: DropdownBoxOverridesProps | undefined | null;
}>;
export default function DropdownBox(props: DropdownBoxProps): React.ReactElement;
