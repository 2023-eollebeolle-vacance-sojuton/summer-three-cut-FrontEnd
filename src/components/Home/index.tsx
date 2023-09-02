import React, { useState, useEffect, useRef } from "react";
import * as h from "./style";
import {
  LOCAL_ITEMS,
  OVERSEA_ITEMS,
} from "../../constants/Local/local.constant";
import "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-converter";
import "@tensorflow/tfjs-backend-webgl";
import * as bodyPix from "@tensorflow-models/body-pix";
import Webcam from "react-webcam";
import { useRecoilState } from "recoil";
import { imageState } from "../../stores/atoms/image";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement | any>(null);
  const webcamRef = useRef<Webcam | any>(null);
  const [bodypixnet, setBodypixnet] = useState<bodyPix.BodyPix | null>(null);
  const [image, setImage] = useRecoilState(imageState);
  const [backImage, setBackImage] = useState<HTMLImageElement | null>();
  const [select, setSelect] = useState(-1);
  const navigatoe = useNavigate();

  useEffect(() => {
    bodyPix.load().then((net) => {
      setBodypixnet(net);
    });
  }, []);

  useEffect(() => {
    console.log(image);
  }, [image]);

  async function drawMask(
    webcam: HTMLVideoElement,
    canvas: HTMLCanvasElement,
    tempCtx: CanvasRenderingContext2D,
    tempCanvas: HTMLCanvasElement,
    originCtx: CanvasRenderingContext2D,
    originCanvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D
  ) {
    requestAnimationFrame(() =>
      drawMask(
        webcam,
        canvas,
        tempCtx,
        tempCanvas,
        originCtx,
        originCanvas,
        context
      )
    );
    const segmentation = await bodypixnet?.segmentPerson(webcam);
    if (!segmentation) {
      return;
    }
    const mask = bodyPix.toMask(segmentation);
    tempCtx.putImageData(mask, 0, 0);

    originCtx.drawImage(webcam, 0, 0, canvas.width, canvas.height);
    originCtx.save();
    originCtx.globalCompositeOperation = "destination-out";
    originCtx.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);
    originCtx.restore();

    context.clearRect(0, 0, canvas.width, canvas.height);
    if (backImage) {
      context.drawImage(backImage, 0, 0, canvas.width, canvas.height);
    }
    context.drawImage(originCanvas, 0, 0, canvas.width, canvas.height);
  }

  let req: number | undefined;

  const drawimage = async (
    webcam: HTMLVideoElement,
    context: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement
  ) => {
    const originCanvas = document.createElement("canvas");
    originCanvas.width = webcam.videoWidth;
    originCanvas.height = webcam.videoHeight;
    const originCtx = originCanvas.getContext("2d");

    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = webcam.videoWidth;
    tempCanvas.height = webcam.videoHeight;
    const tempCtx = tempCanvas.getContext("2d");

    if (!originCtx || !tempCtx) {
      // originCtx 또는 tempCtx가 null이면 처리 중단
      return;
    }

    req = requestAnimationFrame(() =>
      drawMask(
        webcam,
        canvas,
        tempCtx,
        tempCanvas,
        originCtx,
        originCanvas,
        context
      )
    );
  };

  const clickHandler = (backImgName: string | undefined) => {
    const webcam = webcamRef.current?.video!;
    const canvas = canvasRef.current!;
    webcam.width = canvas.width = webcam.videoWidth;
    webcam.height = canvas.height = webcam.videoHeight;

    const context = canvas.getContext("2d")!;

    context.clearRect(0, 0, canvas.width, canvas.height);

    if (backImgName) {
      const img = new Image();
      img.src = backImgName;
      setBackImage(img);
    } else {
      setBackImage(null);
    }

    if (bodypixnet) {
      drawimage(webcam, context, canvas);
    }
  };

  function snapshot() {
    if (backImage) {
      setImage((prev: any) => [
        ...prev,
        canvasRef.current?.toDataURL("image/jpeg"),
      ]);
    } else {
      const webcamDataURL = webcamRef.current?.video.toDataURL("image/jpeg");
      if (webcamDataURL) {
        console.log(webcamDataURL);
      }
    }
  }

  const videoConstraints = {
    facingMode: "user",
  };

  function resetRAF() {
    cancelAnimationFrame(req!);
  }

  return (
    <h.Container>
      <h.Wrapper>
        <h.Text>얼굴이 나오도록 찍어주세요!!</h.Text>
        <h.CamWrapper>
          <Webcam
            ref={webcamRef}
            audio={false}
            width={700}
            height={600}
            screenshotFormat="image/jpeg"
            className="webcam"
            //   videoConstraints={videoConstraints}
          />
          <canvas ref={canvasRef} className="canvas" />
        </h.CamWrapper>
      </h.Wrapper>
      <h.ButtonContainer>
        <h.HeaderText>배경화면을 지정해주세요</h.HeaderText>
        <div>
          <div>
            <h.BackgoundText>국내</h.BackgoundText>
            <div>
              {LOCAL_ITEMS.map((item) => (
                <h.Button
                  key={item.id}
                  onClick={() => {
                    clickHandler(item.image);
                    setSelect(item.id);
                  }}
                  isSelect={select === item.id}
                >
                  {item.name}
                </h.Button>
              ))}
            </div>
            <div>
              <h.BackgoundText>국외</h.BackgoundText>
              <div>
                {OVERSEA_ITEMS.map((item) => (
                  <h.Button
                    key={item.id}
                    onClick={() => {
                      clickHandler(item.image);
                      setSelect(item.id);
                    }}
                    isSelect={select === item.id}
                  >
                    {item.name}
                  </h.Button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <h.NextButton onClick={() => snapshot()}>찰칵버튼</h.NextButton>
        <h.NextButton onClick={() => navigatoe("/result")}>
          다음으로
        </h.NextButton>
      </h.ButtonContainer>
    </h.Container>
  );
}
