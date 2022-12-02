import React from "react";
import WheelComponent from "react-wheel-of-prizes";

function Spin({ wantToWatch }) {
  // const movies = wantToWatch.map((item) => item.movie);
  // const segments = movies;
  // const colors = [
  //   "#EE4040",
  //   "#F0CF50",
  //   "#815CD1",
  //   "#3DA5E0",
  //   "#34A24F",
  //   "#F9AA1F",
  //   "#EC3F3F",
  //   "#FF9000",
  //   "#78B0A0",
  //   "#81B214",
  //   "#A64452",
  //   "#6A097D",
  //   "#295F4E",
  // ];

  const onFinished = (winner) => {
    console.log(winner);
  };
  return (
    <div>
      {/* {" "}
      <div className="wheel-wrapper">
        <div className="wheel-text">
          <h3>Spin the Wheel!</h3>
        </div>
        <div className="wheel-container">
          <WheelComponent
            segments={segments}
            segColors={colors}
            onFinished={(winner) => onFinished(winner)}
            primaryColor="#388cb3"
            contrastColor="#0e141b"
            buttonText="Spin"
            isOnlyOnce={false}
            upDuration={100}
            downDuration={1000}
            fontFamily="Staatliches"
          />
        </div>
      </div> */}
    </div>
  );
}

export default Spin;
