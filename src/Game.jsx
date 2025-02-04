import React, { useState, useEffect } from "react";
import { Button, Typography, Snackbar, Box } from "@mui/material";

import PrizesVisualizer from "./PrizesVisualizer";
import {
  getUserData,
  sendClickEvent,
  sendResetEvent,
} from "./controllers/prizes";

const Game = () => {
  const [score, setScore] = useState(0);
  const [prizes, setPrizes] = useState({});
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getUserData(setScore, setPrizes);
    setIsLoading(false);
  }, []);

  const handleClick = () => {
    setIsLoading(true);
    sendClickEvent(setScore, setPrizes, setMessage, setOpen);
    setIsLoading(false);
  };

  const handleReset = () => {
    setIsLoading(true);
    sendResetEvent(setScore, setPrizes);
    setIsLoading(false);
  };

  return (
    <Box
      textAlign="center"
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"300px"}
    >
      <Typography variant="h4" mb={5}>
        Click Game
      </Typography>
      <Typography variant="h6">Score: {score}</Typography>
      <PrizesVisualizer prizes={prizes} />
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        style={{ marginTop: "20px" }}
        fullWidth
        disabled={isLoading}
      >
        Click Me
      </Button>
      <Button
        variant="outlined"
        color="error"
        onClick={handleReset}
        style={{ marginTop: "20px" }}
        fullWidth
        disabled={isLoading}
      >
        Reset my Score
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        message={message}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      />
    </Box>
  );
};

export default Game;
