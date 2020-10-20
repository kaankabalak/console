import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import * as reactMoment from "react-moment";
import {
  actionsTray,
  containerForHeader,
  searchField,
} from "../../../../Common/FormComponents/common/styleLibrary";
import PageHeader from "../../../../Common/PageHeader/PageHeader";
import ShareIcon from "../../../../../../icons/ShareIcon";
import DownloadIcon from "../../../../../../icons/DownloadIcon";
import DeleteIcon from "../../../../../../icons/DeleteIcon";
import TableWrapper from "../../../../Common/TableWrapper/TableWrapper";
import PencilIcon from "../../../../Common/TableWrapper/TableActionIcons/PencilIcon";

const styles = (theme: Theme) =>
  createStyles({
    objectNameContainer: {
      marginBottom: 8,
    },
    objectPathContainer: {
      marginBottom: 26,
      fontSize: 10,
    },
    objectPathUnderline: {
      textDecoration: "underline",
    },
    objectName: {
      fontSize: 24,
    },
    propertiesContainer: {
      display: "flex",
      flexDirection: "row",
      marginBottom: 15,
    },
    propertiesItem: {
      display: "flex",
      flexDirection: "row",
      marginRight: 21,
    },
    propertiesItemBold: {
      fontWeight: 700,
    },
    propertiesValue: {
      marginLeft: 8,
    },
    propertiesIcon: {
      marginLeft: 5,
    },
    actionsIconContainer: {
      marginLeft: 12,
    },
    actionsIcon: {
      height: 16,
      width: 16,
      "& .MuiSvgIcon-root": {
        height: 16,
      },
    },
    tagsContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 40,
    },
    tagText: {
      marginRight: 13,
    },
    tag: {
      marginRight: 6,
      fontSize: 10,
      fontWeight: 700,
      "&.MuiChip-sizeSmall": {
        height: 18,
      },
      "& .MuiSvgIcon-root": {
        height: 10,
        width: 10,
      },
    },
    search: {
      marginBottom: 8,
      "&.MuiFormControl-root": {
        marginRight: 0,
      },
    },
    ...actionsTray,
    ...searchField,
    ...containerForHeader(theme.spacing(4)),
  });

interface IObjectDetailsProps {
  classes: any;
  match: any;
}

const ObjectDetails = ({ classes, match }: IObjectDetailsProps) => {
  const [bucketName, setBucketName] = useState("");
  const [objectName, setObjectName] = useState("");

  useEffect(() => {
    const bucketName = match.params["bucket"];
    const objectName = match.params["object"];
    setBucketName(bucketName);
    setObjectName(objectName);
  }, []);

  const shareObject = () => {
    console.log("share object");
  };

  const deleteTag = () => {
    console.log("delete tag");
  };

  const downloadObject = () => {
    console.log("download object");
  };

  const confirmDeleteObject = () => {
    console.log("confirm delete object");
  };

  const tableActions = [
    { type: "share", onClick: shareObject, sendOnlyId: true },
    { type: "download", onClick: downloadObject, sendOnlyId: true },
  ];

  const filteredRecords = [
    {
      version_id: "4d184091-ca84-4730-9e51a191016d",
      last_modified: "2020-08-23 19:25:52.000 +0000 UTC",
      legal_hold: false,
      retention: true,
      tags: ["Movies", "Important Files"],
    },
    {
      version_id: "9939e947-f20f-4e96-ecebc2445ec9",
      last_modified: "2020-07-15 21:13:47.213 +0000 UTC",
      legal_hold: false,
      retention: true,
      tags: ["Tag", "Long Tag"],
    },
    {
      version_id: "C7008a8d-ab4e-9734-d50c20573c71",
      last_modified: "2020-06-07 08:54:47.346 +0000 UTC",
      legal_hold: false,
      retention: true,
      tags: ["Long Tag", "Movies"],
    },
  ];

  const displayParsedDate = (date: string) => {
    return <reactMoment.default>{date}</reactMoment.default>;
  };

  return (
    <React.Fragment>
      <PageHeader label={"Object Browser"} />
      <Grid container>
        <Grid item xs={12} className={classes.container}>
          <Grid item xs={12} className={classes.objectNameContainer}>
            <Typography
              component="h1"
              variant="h1"
              color="textPrimary"
              className={classes.objectName}
            >
              {objectName}
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.objectPathContainer}>
            <span className={classes.objectPathUnderline}>All Buckets</span>
            {" / "}
            <span className={classes.objectPathUnderline}>{bucketName}</span>
            {" / "}
            <span>{objectName}</span>
          </Grid>
          <Grid item xs={12} className={classes.propertiesContainer}>
            <div className={classes.propertiesItem}>
              <div>
                <span className={classes.propertiesItemBold}>Legal Hold:</span>
                <span className={classes.propertiesValue}>Enabled</span>
              </div>
              <div>
                <IconButton
                  color="primary"
                  aria-label="legal-hold"
                  size="small"
                  className={classes.propertiesIcon}
                  onClick={() => {
                    console.log("open legal hold modal");
                  }}
                >
                  <PencilIcon active={true} />
                </IconButton>
              </div>
            </div>
            <div className={classes.propertiesItem}>
              <div>
                <span className={classes.propertiesItemBold}>Retention:</span>
                <span className={classes.propertiesValue}>Undefined</span>
              </div>
              <div>
                <IconButton
                  color="primary"
                  aria-label="retention"
                  size="small"
                  className={classes.propertiesIcon}
                  onClick={() => {
                    console.log("open retention modal");
                  }}
                >
                  <PencilIcon active={true} />
                </IconButton>
              </div>
            </div>
            <div className={classes.propertiesItem}>
              <div className={classes.propertiesItemBold}>File Actions:</div>
              <div className={classes.actionsIconContainer}>
                <IconButton
                  color="primary"
                  aria-label="share"
                  size="small"
                  className={classes.actionsIcon}
                  onClick={() => {
                    console.log("open share modal");
                  }}
                >
                  <ShareIcon />
                </IconButton>
              </div>
              <div className={classes.actionsIconContainer}>
                <IconButton
                  color="primary"
                  aria-label="download/upload"
                  size="small"
                  className={classes.actionsIcon}
                  onClick={() => {
                    console.log("download/upload");
                  }}
                >
                  <DownloadIcon />
                </IconButton>
              </div>
              <div className={classes.actionsIconContainer}>
                <IconButton
                  color="primary"
                  aria-label="delete"
                  size="small"
                  className={classes.actionsIcon}
                  onClick={() => {
                    console.log("delete");
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} className={classes.tagsContainer}>
            <div className={classes.tagText}>Tags:</div>
            <Chip
              className={classes.tag}
              size="small"
              label="Important Files"
              color="primary"
              deleteIcon={<CloseIcon />}
              onDelete={deleteTag}
            />
            <Chip
              className={classes.tag}
              size="small"
              label="Movies"
              color="primary"
              deleteIcon={<CloseIcon />}
              onDelete={deleteTag}
            />
            <Chip
              className={classes.tag}
              icon={<AddIcon />}
              clickable
              size="small"
              label="Add tag"
              color="primary"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} className={classes.actionsTray}>
            <TextField
              placeholder={`Search ${objectName}`}
              className={clsx(classes.search, classes.searchField)}
              id="search-resource"
              label=""
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TableWrapper
              itemActions={tableActions}
              columns={[
                { label: "Version ID", elementKey: "version_id" },
                {
                  label: "Last Modified",
                  elementKey: "last_modified",
                  renderFunction: displayParsedDate,
                },
              ]}
              isLoading={false}
              entityName="Versions"
              idField="version_id"
              records={filteredRecords}
            />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default withStyles(styles)(ObjectDetails);
