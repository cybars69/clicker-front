import axios from "axios";

const getUserData = async (setScore, setPrizes) => {
  axios
    .get("http://localhost:5000/user", { withCredentials: true })
    .then((response) => {
      setScore(response.data.score);
      setPrizes(response.data.prizes);
    })
    .catch((err) => console.error(err));
};

const sendClickEvent = async (setScore, setPrizes, setMessage, setOpen) => {
  axios
    .post("http://localhost:5000/click", {}, { withCredentials: true })
    .then((response) => {
      setScore(response.data.score);

      if (response.data.reward) {
        response.data.reward !== "points" &&
          setPrizes((prev) => ({
            ...prev,
            [response.data.reward]: prev[response.data.reward]
              ? prev[response.data.reward] + 1
              : 1,
          }));
        setMessage(
          response.data.reward === "points"
            ? "You got 10 points!"
            : `You won ${response.data.reward}!`
        );
        setOpen(true);
      }
    })
    .catch((err) => console.error(err));
};

const sendResetEvent = async (setScore, setPrizes) => {
  axios
    .post("http://localhost:5000/reset", {}, { withCredentials: true })
    .then((response) => {
      setScore(0);
      setPrizes({});
    })
    .catch((err) => console.error(err));
};

export { getUserData, sendClickEvent, sendResetEvent };
