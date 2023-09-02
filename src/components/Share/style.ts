import styled from "styled-components";

export const ShareContainer = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Black Han Sans", sans-serif;
  display: flex;
  justify-content: center;
`;

export const ShareWrapper = styled.div`
  width: 1010px;
  height: 100%;
  display: flex;
  padding-top: 2.5rem;
`;

export const ChosenPhotoContainer = styled.div`
  width: 50%;
  height: 100%;
`;

export const OptionContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
`;

export const Logo = styled.img`
  width: 275px;
  height: 96px;
`;

export const FrameColorContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  p {
    font-size: 30px;
  }

  ul {
    margin-top: 20px;
  }
`;

export const FrameColorBox = styled.div<{ color: string }>`
  width: 70px;
  height: 70px;
  border: 3px solid #000;
  background-color: ${(props) => props.color || "#fff"};
  border-radius: 20px;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const ShareButton = styled.button<{ color: string }>`
  border-radius: 10px;
  width: 375px;
  height: 73px;
  display: flex;
  align-items: center;
  column-gap: 5px;
  justify-content: center;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 30px;
  color: ${(props) => (props.color === "#F9E000" ? "#3C1B1D" : "#fff")};
  background-color: ${(props) => props.color};

  img {
    width: 40px;
    height: 30px;
  }
`;
