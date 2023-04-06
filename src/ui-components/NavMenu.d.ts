/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ListItemProps } from "./ListItem";
import { ButtonProps, FlexProps, ImageProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavMenuOverridesProps = {
    NavMenu?: PrimitiveOverrideProps<FlexProps>;
    "List Item36983538"?: ListItemProps;
    "List Item36983540"?: ListItemProps;
    "List Item36983542"?: ListItemProps;
    "List Item36983544"?: ListItemProps;
    image?: PrimitiveOverrideProps<ImageProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type NavMenuProps = React.PropsWithChildren<Partial<FlexProps> & {
    signedIn?: "No" | "Yes";
} & {
    overrides?: NavMenuOverridesProps | undefined | null;
}>;
export default function NavMenu(props: NavMenuProps): React.ReactElement;
