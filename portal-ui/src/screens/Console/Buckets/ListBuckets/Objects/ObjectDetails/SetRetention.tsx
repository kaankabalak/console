import React, { useState, useEffect } from "react";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ModalWrapper from "../../../../Common/ModalWrapper/ModalWrapper";
import FormSwitchWrapper from "../../../../Common/FormComponents/FormSwitchWrapper/FormSwitchWrapper";

const styles = (theme: Theme) =>
  createStyles({
    objectName: {
      fontSize: 18,
      fontWeight: 700,
      marginBottom: 40,
    },
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

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("on submit");
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
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setStatusEnabled(!statusEnabled);
            }}
            label={"Status"}
            indicatorLabels={["Enabled", "Disabled"]}
          />
        </Grid>
      </form>
    </ModalWrapper>
  );
};

export default withStyles(styles)(SetRetention);
