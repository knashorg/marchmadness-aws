/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Bracket } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BracketUpdateFormInputValues = {
    untitledfield?: string;
};
export declare type BracketUpdateFormValidationValues = {
    untitledfield?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BracketUpdateFormOverridesProps = {
    BracketUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    untitledfield?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type BracketUpdateFormProps = React.PropsWithChildren<{
    overrides?: BracketUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    bracket?: Bracket;
    onSubmit?: (fields: BracketUpdateFormInputValues) => BracketUpdateFormInputValues;
    onSuccess?: (fields: BracketUpdateFormInputValues) => void;
    onError?: (fields: BracketUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BracketUpdateFormInputValues) => BracketUpdateFormInputValues;
    onValidate?: BracketUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BracketUpdateForm(props: BracketUpdateFormProps): React.ReactElement;
