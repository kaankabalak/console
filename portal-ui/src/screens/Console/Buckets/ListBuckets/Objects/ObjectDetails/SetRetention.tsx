import React, { useState, useEffect } from "react";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { modalBasic } from "../../../../Common/FormComponents/common/styleLibrary";
import ModalWrapper from "../../../../Common/ModalWrapper/ModalWrapper";
import FormSwitchWrapper from "../../../../Common/FormComponents/FormSwitchWrapper/FormSwitchWrapper";
import RadioGroupSelector from "../../../../Common/FormComponents/RadioGroupSelector/RadioGroupSelector";

const styles = (theme: Theme) =>
  createStyles({
    objectName: {
      fontSize: 18,
      fontWeight: 700,
      marginBottom: 40,
    },
    buttonContainer: {
      textAlign: "right",
    },
    ...modalBasic,
  });

interface ISetRetentionProps {
  classes: any;
  open: boolean;
  closeModalAndRefresh: () => void;
  objectName: string;
}

const SetRetention = ({
  classes,
  open,
  closeModalAndRefresh,
  objectName,
}: ISetRetentionProps) => {
  const [statusEnabled, setStatusEnabled] = useState<boolean>(false);
  const [type, setType] = useState<string>("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("on submit");
  };

  const resetForm = () => {
    setStatusEnabled(false);
    setType("");
  };

  return (
    <ModalWrapper
      title="Set Retention Policy"
      modalOpen={open}
      onClose={() => {
        closeModalAndRefresh();
      }}
    >
      <Grid xs={12} className={classes.objectName}>
        {objectName}
      </Grid>
      <form
        noValidate
        autoComplete="off"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          onSubmit(e);
        }}
      >
        <Grid xs={12}>
          <FormSwitchWrapper
            value="status"
            id="status"
            name="status"
            checked={statusEnabled}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setStatusEnabled(!statusEnabled);
              setType("");
            }}
            label={"Status"}
            indicatorLabels={["Enabled", "Disabled"]}
          />
        </Grid>
        <Grid xs={12}>
          <RadioGroupSelector
            currentSelection={type}
            id="type"
            name="type"
            label="Type"
            disableOptions={!statusEnabled}
            onChange={(e) => {
              setType(e.target.value);
            }}
            selectorOptions={[
              { label: "Governance", value: "governance" },
              { label: "Compliance", value: "compliance" },
            ]}
          />
        </Grid>
        <Grid item xs={12} className={classes.buttonContainer}>
          <button
            type="button"
            color="primary"
            className={classes.clearButton}
            onClick={resetForm}
          >
            Reset
          </button>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Grid>
      </form>
    </ModalWrapper>
  );
};

export default withStyles(styles)(SetRetention);
