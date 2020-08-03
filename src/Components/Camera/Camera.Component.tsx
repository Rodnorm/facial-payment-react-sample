import React, { useState, useEffect, useRef } from "react";
import Container from "@material-ui/core/Container";
import { loadModels, createDetection } from "../../Camera.Component.Service";

interface Props {}

function Camera() {
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
          navigator.mediaDevices.getUserMedia(
            { video: true }
            // ,
            // videoObject.stream,
            // videoObject.error
          )
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
    <Container maxWidth={"sm"}>
      <div ref={videoElement}>
        <video autoPlay={true}></video>
      </div>
    </Container>
  );
}

export default Camera;
