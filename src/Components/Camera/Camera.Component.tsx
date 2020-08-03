import React, { useState, useEffect, useRef } from "react";
import Container from "@material-ui/core/Container";
import { loadModels, createDetection } from "../../Camera.Component.Service";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    margin: "auto",
    padding: "inherit",
    width: "fit-content",
  },
});
console.log(1);

function Camera() {
  const classes = useStyles();
  const videoElement = useRef<HTMLDivElement>(document.createElement("div"));
  const getVideo = () => {
    if (navigator.getUserMedia) {
      navigator.getUserMedia =
        navigator.getUserMedia ||
        (navigator as any).webkitGetUserMedia ||
        (navigator as any).mozGetUserMedia ||
        (navigator as any).msGetUserMedia ||
        (navigator as any).oGetUserMedia;

      navigator.getUserMedia(
        { video: true },
        videoObject.stream,
        videoObject.error
      );
    } else if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true });
    }
    loadModels().then((result: any) => {
      setTimeout(() => createDetection(videoElement), 2000);
    });
  };

  const [videoObject] = useState<{
    stream: NavigatorUserMediaSuccessCallback;
    error: NavigatorUserMediaErrorCallback;
  }>({
    stream: (stream: MediaStream) =>
      ((videoElement.current
        .children[0] as HTMLVideoElement).srcObject = stream),
    error: () => console.log("erro"),
  });

  useEffect(() => getVideo(), []);

  return (
    <Container className={`${classes.container} App`}>
      <div ref={videoElement}>
        <video autoPlay={true}></video>
      </div>
      <div className="info">
        <span className="help-text">
          Wait for the recognition data to load, then check your expressions. It may take some time to load.
        </span>
        <Button variant="contained" color="primary">
          Smile xD
        </Button>
        <span className="help-text font">
          This is a work in progress
        </span>
      </div>
    </Container>
  );
}

export default Camera;
