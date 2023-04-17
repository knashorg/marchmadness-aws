/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { NewBracket } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NewBracketUpdateFormInputValues = {
    json?: string;
};
export declare type NewBracketUpdateFormValidationValues = {
    json?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewBracketUpdateFormOverridesProps = {
    NewBracketUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    json?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type NewBracketUpdateFormProps = React.PropsWithChildren<{
    overrides?: NewBracketUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    newBracket?: NewBracket;
    onSubmit?: (fields: NewBracketUpdateFormInputValues) => NewBracketUpdateFormInputValues;
    onSuccess?: (fields: NewBracketUpdateFormInputValues) => void;
    onError?: (fields: NewBracketUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NewBracketUpdateFormInputValues) => NewBracketUpdateFormInputValues;
    onValidate?: NewBracketUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NewBracketUpdateForm(props: NewBracketUpdateFormProps): React.ReactElement;
