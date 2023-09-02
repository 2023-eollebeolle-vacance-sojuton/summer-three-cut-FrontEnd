import React from "react";
import * as S from "./style";

interface SampleComProps {
  source: string;
  clickHandler: () => void;
}

const SampleCom: React.FC<SampleComProps> = ({ source, clickHandler }) => {
  return (
    <S.Wrapper onClick={clickHandler}>
      <S.ImgWrapper>
        <div />
        <div />
        <img src={source} alt="Sample Image" />
      </S.ImgWrapper>
      <S.SecondImg>
        <div />
        <div />
        <img src={source} alt="Second Sample Image" />
      </S.SecondImg>
    </S.Wrapper>
  );
};

export default SampleCom;
