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
export declare type NewBracketCreateFormInputValues = {
    json?: string;
};
export declare type NewBracketCreateFormValidationValues = {
    json?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewBracketCreateFormOverridesProps = {
    NewBracketCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    json?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type NewBracketCreateFormProps = React.PropsWithChildren<{
    overrides?: NewBracketCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NewBracketCreateFormInputValues) => NewBracketCreateFormInputValues;
    onSuccess?: (fields: NewBracketCreateFormInputValues) => void;
    onError?: (fields: NewBracketCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NewBracketCreateFormInputValues) => NewBracketCreateFormInputValues;
    onValidate?: NewBracketCreateFormValidationValues;
} & React.CSSProperties>;
export default function NewBracketCreateForm(props: NewBracketCreateFormProps): React.ReactElement;
