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

  useEffect(() => {
    getUserData(setScore, setPrizes);
  }, []);

  const handleClick = () => {
    sendClickEvent(setScore, setPrizes, setMessage, setOpen);
  };

  const handleReset = () => {
    sendResetEvent(setScore, setPrizes);
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
      >
        Click Me
      </Button>
      <Button
        variant="outlined"
        color="error"
        onClick={handleReset}
        style={{ marginTop: "20px" }}
        fullWidth
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
