/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BracketCreateFormInputValues = {
    untitledfield?: string;
};
export declare type BracketCreateFormValidationValues = {
    untitledfield?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BracketCreateFormOverridesProps = {
    BracketCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    untitledfield?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type BracketCreateFormProps = React.PropsWithChildren<{
    overrides?: BracketCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BracketCreateFormInputValues) => BracketCreateFormInputValues;
    onSuccess?: (fields: BracketCreateFormInputValues) => void;
    onError?: (fields: BracketCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BracketCreateFormInputValues) => BracketCreateFormInputValues;
    onValidate?: BracketCreateFormValidationValues;
} & React.CSSProperties>;
export default function BracketCreateForm(props: BracketCreateFormProps): React.ReactElement;
