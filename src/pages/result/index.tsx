import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { imageState } from "../../stores/atoms/image";
import * as R from "./style";
import logo from "../../assets/logo.png";
import SampleCom from "./SampleCom/index";
import setColor from "../../assets/setColor.svg";
import setImg from "../../assets/setImg.svg";
import setText from "../../assets/setText.svg";
import setOption from "../../assets/setOption.svg";
import cloud from "../../assets/backImg/cloud.jpg";
import galaxy from "../../assets/backImg/galaxy.jpg";
import newLogo from "../../assets/logo.svg";

const Result: React.FC = () => {
  const [resultBackColor, setResultBackColor] = useState<string>("black");
  const [resultBackImg, setResultBackImg] = useState<string | undefined>();
  const [comment, setCommnet] = useState<string>("2023년 9월 2일");
  const [commentColor, setCommentColor] = useState<string>("white");
  const [commentBold, setCommentBold] = useState<boolean>(false);
  const [commentItal, setCommentItal] = useState<boolean>(false);

  const [image, setImage] = useRecoilState(imageState);

  const colors: string[] = [
    "black",
    "#eeeeee", // 흰색
    "#FEC7CD",
    "#50bcdf",
  ];

  function colorHandler(color: string) {
    setResultBackImg("");
    setResultBackColor(color);
  }

  function imageHandler(imgSrc: string) {
    setResultBackColor("black");
    setResultBackImg(imgSrc);
  }

  const navigater = useNavigate();

  function exitHandler() {
    if (window.confirm("편집을 끝내고 나가실건가요?") === true) {
      setImage([]);
      navigater("/");
    }
  }

  useEffect(() => {
    console.log(resultBackImg);
  }, [resultBackImg]);

  return (
    <R.Wrapper>
      <R.ResultWrapper>
        <R.ResultContent backColor={resultBackColor}>
          {image.map((i, idx) => (
            <R.UserImg key={idx} src={i} />
          ))}
          {resultBackImg && <R.ResultImg src={resultBackImg} />}
          <R.ResultLogo color={commentColor} bold={commentBold} ital={commentItal}>
            <p>{comment}</p>
            <img src={logo} alt="Logo" />
          </R.ResultLogo>
        </R.ResultContent>
      </R.ResultWrapper>
      <R.ButtonWrapper>
        <R.Logo src={newLogo} alt="New Logo" />
        <R.BasicBackWrapper>
          <R.ExplanText src={setColor} />
          <R.BasicBacks>
            {colors.map((i) => (
              <R.BasicBack key={i} backColor={i} onClick={() => colorHandler(i)} />
            ))}
            <input
              type="color"
              value={resultBackColor}
              placeholder="선택"
              onChange={(e) => colorHandler(e.target.value)}
            />
          </R.BasicBacks>
        </R.BasicBackWrapper>
        <R.ImgBackWrapper>
          <R.ExplanText src={setImg} />
          <R.ImgBack>
            <SampleCom clickHandler={() => setResultBackImg(cloud)} source={cloud} />
            <SampleCom clickHandler={() => setResultBackImg(galaxy)} source={galaxy} />
            <SampleCom clickHandler={() => setResultBackImg(galaxy)} source={galaxy} />
          </R.ImgBack>
        </R.ImgBackWrapper>

        <R.CommentWrapper>
          <R.ExplanText src={setText} />
          <input
            type="text"
            value={comment}
            onChange={(e) => setCommnet(e.target.value)}
          />
        </R.CommentWrapper>
        <R.CommentOptionWrapper>
          <R.ExplanText src={setOption} />
          <R.CommentOptions>
            <R.CommentOptionColor
              selected={commentColor === "black"}
              att="black"
              onClick={() => setCommentColor("black")}
            >
              검정색
            </R.CommentOptionColor>
            <R.CommentOptionColor
              att="white"
              selected={commentColor === "white"}
              onClick={() => setCommentColor("white")}
            >
              흰색
            </R.CommentOptionColor>
            <R.CommentOptionSplit>|</R.CommentOptionSplit>
            <R.CommentOptionBold
              selected={commentBold}
              onClick={() => setCommentBold((prev) => !prev)}
            >
              굵게
            </R.CommentOptionBold>
            <R.CommentOptionSplit>|</R.CommentOptionSplit>
            <R.CommentOptionItal
              selected={commentItal}
              onClick={() => setCommentItal((prev) => !prev)}
            >
              이텔릭
            </R.CommentOptionItal>
          </R.CommentOptions>
        </R.CommentOptionWrapper>
      </R.ButtonWrapper>
      <R.ExitWrapper>
        <R.Exit onClick={exitHandler}>나가기</R.Exit>
      </R.ExitWrapper>
    </R.Wrapper>
  );
};

export default Result;
