module.exports = function BallingGame() {
  let score = 1;
  let counter = 2;
  let scorings = [];
  let scoreData = [];
  let result;

  function PlayGame(rolls) {
    let regex = "/s/g";
    let scoreFrame = rolls.split(" ");
    if (rolls.replace(regex, "") === "XXXXXXXXXXXX") {
      score = 300;
    } else {
      for (let i = 0; i < scoreFrame.length; i++) {
        if (i === scoreFrame.length - 1) {
          counter++;
          scoreFrame = scoreFrame[i].split("");

          for (let j = 0; j < scoreFrame.length; j++) {
            !isNaN(scoreFrame[j]) && scoreFrame[j + 1] !== "/"
              ? (score = score + parseInt(scoreFrame[j]))
              : scoreFrame[j] === "X" || scoreFrame[j] === "/"
              ? (score = score + 10)
              : null;
          }
        } else {
          (i === scoreFrame.length - 3 &&
            scoreFrame[i] === "X" &&
            scoreFrame[i + 1] === "X" &&
            scoreFrame[i + 2][0] === "X") ||
          (i === scoreFrame.length - 2 &&
            scoreFrame[i] === "X" &&
            scoreFrame[i + 1][0] === "X" &&
            scoreFrame[i + 1][1] === "X")
            ? (score = score + 30)
            : i === scoreFrame.length - 2 &&
              scoreFrame[i] === "X" &&
              scoreFrame[i + 1][0] === "X" &&
              !isNaN(scoreFrame[i + 1][1])
            ? (score = score + 20 + parseInt(scoreFrame[i + 1][1]))
            : i === scoreFrame.length - 2 &&
              scoreFrame[i].includes("/") &&
              scoreFrame[i + 1][0] === "X"
            ? (score = score + 20)
            : !isNaN(scoreFrame[i])
            ? (score =
                score + parseInt(scoreFrame[i][0]) + parseInt(scoreFrame[i][1]))
            : scoreFrame[i] === "X" && !isNaN(scoreFrame[i + 1])
            ? (score =
                score +
                10 +
                parseInt(scoreFrame[i + 1][0]) +
                parseInt(scoreFrame[i + 1][1]))
            : scoreFrame[i].includes("/") &&
              !isNaN(scoreFrame[i + 1]) | scoreFrame[i + 1].includes("/")
            ? (score = score + 10 + parseInt(scoreFrame[i + 1][0]))
            : (scoreFrame[i] === "X" && scoreFrame[i + 1].includes("/")) ||
              (scoreFrame[i].includes("/") && scoreFrame[i + 1] === "X")
            ? (score = score + 20)
            : scoreFrame[i] === "X" &&
              scoreFrame[i + 1] === "X" &&
              scoreFrame[i + 2] === "X"
            ? (score = score + 30)
            : scoreFrame[i] === "X" &&
              scoreFrame[i + 1] === "X" &&
              scoreFrame[i + 2].includes("/") | !isNaN(scoreFrame[i + 2])
            ? (score = score + 20 + parseInt(scoreFrame[i + 2][0]))
            : null;
        }
      }
    }
    return score;
  }

  function GetScore() {
    scoreData.push(score);
    return scoreData;
  }
  function OveralScore() {
    if (counter >= 28) {
      return;
    }
    return [score];
  }
  function GetCounter() {
    if (counter >= 23) {
      return;
    }
    return counter;
  }

  function PlaySimulator() {
    const randomScore = [
      "/",
      "X",
      "9",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "5",
      "8",
      "9",
      "8",
    ];
    const random = Math.floor(Math.random() * randomScore.length);
    let scoredPoint = randomScore[random];

    if (scoredPoint.startsWith("X")) {
      result = scoredPoint.charAt(0);
      scorings.push(result);
      PlayGame(result);
      scorings.splice(-2,1);
      
    }
    if (scoredPoint.endsWith("X")) {
      result = scoredPoint.charAt(-2);
      PlayGame(result);
      scorings.push(result);
      scorings.splice(-2, 1);
    }
    PlayGame(scoredPoint);
    scorings.push(scoredPoint);
    console.log("DATA=>", scorings);

    if (counter > 24) {
      return;
    }
    return scorings;
  }

  return {
    PlayGame,
    GetScore,
    GetCounter,
    PlaySimulator,
    OveralScore,
  };
};
