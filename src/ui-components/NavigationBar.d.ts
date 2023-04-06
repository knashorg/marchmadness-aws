/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LogoProps } from "./Logo";
import { NavMenuProps } from "./NavMenu";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavigationBarOverridesProps = {
    NavigationBar?: PrimitiveOverrideProps<FlexProps>;
    Logo?: LogoProps;
    "Nav Menu"?: NavMenuProps;
} & EscapeHatchProps;
export declare type NavigationBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    signedIn?: "No" | "Yes";
} & {
    overrides?: NavigationBarOverridesProps | undefined | null;
}>;
export default function NavigationBar(props: NavigationBarProps): React.ReactElement;
