import * as faceApi from "face-api.js";

export function loadModels() {
  const MODEL_URL =
    "https://cors-anywhere.herokuapp.com/raw.githack.com/justadudewhohacks/face-api.js/master/weights";
  return Promise.all([
    faceApi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
    faceApi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
    faceApi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
  ]);
}

export const createDetection = (video: any) => {
  const canvas = faceApi.createCanvasFromMedia(
    video.current.children[0] as HTMLVideoElement
  );
  canvas.className = "canvas";
  const context = canvas.getContext("2d");
  context && context.translate(canvas.width / 2, canvas.height / 2);
  context && context.scale(-1, 1);
  video.current.prepend(canvas);
  
  const displaySize = {
    width: video.current.children[1].videoWidth,
    height: video.current.children[1].videoHeight,
  };
  faceApi.matchDimensions(canvas, displaySize);
  setInterval(async () => {
    const detections = await faceApi
      .detectAllFaces(
        video.current.children[1] as HTMLVideoElement,
        new faceApi.TinyFaceDetectorOptions()
      )
      .withFaceLandmarks()
      .withFaceExpressions();
    const resizedDetections = faceApi.resizeResults(detections, displaySize);
    context && context.clearRect(0, 0, canvas.width, canvas.height);
    faceApi.draw.drawDetections(canvas, resizedDetections);
    faceApi.draw.drawFaceLandmarks(canvas, resizedDetections);
    faceApi.draw.drawFaceExpressions(canvas, resizedDetections);

    if (
      detections[0] &&
      detections[0].expressions != undefined &&
      detections.length > -1 &&
      detections[0].hasOwnProperty("expressions") &&
      detections[0].expressions.happy > 0.99
    ) {
      console.log("sorriu");
    }
  }, 100);
};
