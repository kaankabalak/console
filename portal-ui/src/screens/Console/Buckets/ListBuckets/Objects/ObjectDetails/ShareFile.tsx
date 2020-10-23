import React from "react";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ModalWrapper from "../../../../Common/ModalWrapper/ModalWrapper";

const styles = (theme: Theme) =>
  createStyles({
    text: {
      fontSize: 18,
      fontWeight: 700,
    },
  });

interface IShareFileProps {
  classes: any;
  open: boolean;
  closeModalAndRefresh: () => void;
}

const ShareFile = ({
  classes,
  open,
  closeModalAndRefresh,
}: IShareFileProps) => {
  return (
    <ModalWrapper
      title="Share File"
      modalOpen={open}
      onClose={() => {
        closeModalAndRefresh();
      }}
    >
      <div className={classes.text}>Test</div>
    </ModalWrapper>
  );
};

export default withStyles(styles)(ShareFile);
