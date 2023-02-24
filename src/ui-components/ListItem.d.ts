/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ListItemOverridesProps = {
    ListItem?: PrimitiveOverrideProps<FlexProps>;
    "List Item 1"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ListItemProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ListItemOverridesProps | undefined | null;
}>;
export default function ListItem(props: ListItemProps): React.ReactElement;
