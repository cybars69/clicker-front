import axios from "axios";

const getUserData = async (setScore, setPrizes, setIsLoading) => {
  setIsLoading(true);
  axios
    .get("http://localhost:5000/user", { withCredentials: true })
    .then((response) => {
      setScore(response.data.score);
      setPrizes(response.data.prizes);
    })
    .catch((err) => console.error(err))
    .finally(() => setIsLoading(false));
};

const sendClickEvent = async (
  setScore,
  setPrizes,
  setMessage,
  setOpen,
  setIsLoading
) => {
  setIsLoading(true);
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
    .catch((err) => console.error(err))
    .finally(() => setIsLoading(false));
};

const sendResetEvent = async (setScore, setPrizes, setIsLoading) => {
  setIsLoading(true);
  axios
    .post("http://localhost:5000/reset", {}, { withCredentials: true })
    .then((response) => {
      setScore(0);
      setPrizes({});
    })
    .catch((err) => console.error(err))
    .finally(() => setIsLoading(false));
};

export { getUserData, sendClickEvent, sendResetEvent };
