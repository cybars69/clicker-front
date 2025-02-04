import { Badge, Box, Typography } from "@mui/material";
import React from "react";

const PrizesVisualizer = ({ prizes }) => {
  const prizeEmojiMap = {
    Pancake: "🥞",
    Burger: "🍔",
    "French Fries": "🍟",
    Pizza: "🍕",
    Taco: "🌮",
    Salad: "🥗",
    Popcorn: "🍿",
    Spaghetti: "🍝",
    Cookie: "🍪",
    Sushi: "🍣",
    Shawarma: "🌯",
    Cake: "🍰",
  };
  return (
    <Box>
      {Object.keys(prizes).length ? (
        Object.keys(prizes).map((key) => (
          <Badge
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            badgeContent={prizes[key]}
            sx={{ m: 2, fontSize: "24px" }}
            key={key}
          >
            {prizeEmojiMap[key]}
          </Badge>
        ))
      ) : (
        <Typography variant="h5" fontSize="24px" m={2}>
          No prizes for you yet!
        </Typography>
      )}
    </Box>
  );
};

export default PrizesVisualizer;
