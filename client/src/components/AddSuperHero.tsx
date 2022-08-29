import React, { useState } from "react";
import { Alert, AlertColor, Autocomplete, Paper, Snackbar, Stack, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import ISuperHero from "../../../API/ISuperHero";
import { useAppSelector, useAppDispatch } from '../hooks';
import { setLoading } from '../appSlice';
import { addSuperHero } from "../services/superHeroApi"
import ISuperPower from "../../../API/ISuperPower";
import { AxiosError } from "axios";

const showMessage = (message: string, severity: AlertColor, onClose: () => void) => {
  const shouldDisplayMessage = (message: string): boolean => {
    return message ? true : false;
  };
  return (
    <Snackbar
      open={shouldDisplayMessage(message)}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      onClose={onClose}
    >
      <Alert elevation={6} variant="filled" severity={severity} onClose={onClose}>{message}</Alert>
    </Snackbar>
  );
}

type Props = {};

const AddSuperHero: React.FC<Props> = () => {
  const [name, setName] = useState<string>("");
  const [superPower, setSuperPower] = useState<ISuperPower | null>();
  const [infoMessage, setInfoMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const loading = useAppSelector((state) => state.app.loading);
  const superpowers = useAppSelector((state) => state.app.superpowers);
  const dispatch = useAppDispatch();

  const saveHero = () => {
    dispatch(setLoading(true));
    const superhero: ISuperHero = {
      name,
      superPower: superPower || { "ability" : ""}
    };
    addSuperHero(superhero)
      .then((message: string) => {
        setInfoMessage(message);
        setName("");
        setSuperPower(null);
      })
      .catch((error: AxiosError) => {
        if (error.response?.data) {
          setErrorMessage(error.response.data as string);
        } else {
          setErrorMessage("Error occured");
        }
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };

  const clearError = (): void => {
    setErrorMessage("");
  };

  const clearInfo = (): void => {
    setInfoMessage("");
  };

  return (
    <React.Fragment>
      {showMessage(errorMessage, "error", clearError)}
      {showMessage(infoMessage, "success", clearInfo)}
      <Paper className="form">
        <Stack direction="column" spacing={2} >
          <TextField
            label="Name"
            id="name-field"
            variant="outlined"
            disabled={loading}
            value={name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setName(event.target.value) }}
          />
          <Autocomplete
            id="super-power-field"
            options={superpowers || []}
            disabled={loading}
            getOptionLabel={(option) => option.ability}
            value={superPower || null}
            onChange={(event: React.SyntheticEvent<Element, Event>, newValue: ISuperPower | null) => {
              setSuperPower(newValue);
            }}
            renderInput={(params) => <TextField {...params} label="Super Power" />}
          />
          <LoadingButton
            variant="contained"
            size="medium"
            loading={loading}
            loadingPosition="center"
            onClick={() => saveHero()}
          >
            BEE a Hero
          </LoadingButton>
        </Stack>
      </Paper>
    </React.Fragment>
  );
};

export default AddSuperHero;