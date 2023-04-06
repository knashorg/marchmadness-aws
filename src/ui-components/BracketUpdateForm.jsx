/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextAreaField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Bracket } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function BracketUpdateForm(props) {
  const {
    id: idProp,
    bracket,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    untitledfield: "",
  };
  const [untitledfield, setUntitledfield] = React.useState(
    initialValues.untitledfield
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = bracketRecord
      ? { ...initialValues, ...bracketRecord }
      : initialValues;
    setUntitledfield(
      typeof cleanValues.untitledfield === "string"
        ? cleanValues.untitledfield
        : JSON.stringify(cleanValues.untitledfield)
    );
    setErrors({});
  };
  const [bracketRecord, setBracketRecord] = React.useState(bracket);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Bracket, idProp) : bracket;
      setBracketRecord(record);
    };
    queryData();
  }, [idProp, bracket]);
  React.useEffect(resetStateValues, [bracketRecord]);
  const validations = {
    untitledfield: [{ type: "JSON" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          untitledfield,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Bracket.copyOf(bracketRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "BracketUpdateForm")}
      {...rest}
    >
      <TextAreaField
        label="Untitledfield"
        isRequired={false}
        isReadOnly={false}
        value={untitledfield}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              untitledfield: value,
            };
            const result = onChange(modelFields);
            value = result?.untitledfield ?? value;
          }
          if (errors.untitledfield?.hasError) {
            runValidationTasks("untitledfield", value);
          }
          setUntitledfield(value);
        }}
        onBlur={() => runValidationTasks("untitledfield", untitledfield)}
        errorMessage={errors.untitledfield?.errorMessage}
        hasError={errors.untitledfield?.hasError}
        {...getOverrideProps(overrides, "untitledfield")}
      ></TextAreaField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || bracket)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || bracket) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
