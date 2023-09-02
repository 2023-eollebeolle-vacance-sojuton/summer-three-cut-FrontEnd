import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
export const ResultWrapper = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ResultContent = styled.div<{ backColor: string }>`
  width: 450px;
  height: 675px;
  position: absolute;
  background-color: ${(props) => props.backColor};
  @media print {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
    left: 0px;
    top: 0px;
    @page {
      margin: 0px;
    }
  }
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  img:nth-child(1) {
    margin-top: 23px;
  }
`;

export const UserImg = styled.img`
  width: 80%;
  z-index: 2;
`;

export const ResultImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  object-fit: cover;
`;

export const ResultLogo = styled.div<{ color: string; bold: boolean; ital: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 2;
  img {
    width: 100px;
  }
  > p {
    margin: 0px 0px 7px 0px;
    color: ${(props) => props.color};
    font-weight: ${(props) => (props.bold ? "bold" : "normal")};
    font-style: ${(props) => (props.ital ? "italic" : "normal")};
  }
`;

export const Background = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const ButtonWrapper = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media print {
    display: none;
  }
  h2 {
    margin-bottom: 10px;
    margin-top: 0px;
  }
`;

export const BasicBackWrapper = styled.div`
  width: 80%;
  h2 {
    margin-top: 25px;
  }
`;

export const BasicBacks = styled.div`
  display: flex;
  > input {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    border: 1px solid #ffffff;
    margin: 10px 10px 10px 0px;
  }
`;

export const BasicBack = styled.div<{ backColor: string }>`
  width: 60px;
  height: 60px;
  background-color: ${(props) => props.backColor};
  border-radius: 10px;
  cursor: pointer;
  margin: 10px 10px 10px 0px;
`;

export const ImgBackWrapper = styled.div`
  width: 100%;
`;

export const ImgBack = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const CommentWrapper = styled.div`
  > input {
    width: 70%;
    height: 30px;
    padding-left: 10px;
    border-radius: 10px;
    border: 1px solid #a0a0a0;
    outline: none;
  }
`;

export const CommentOptionWrapper = styled.div``;

export const CommentOptions = styled.div`
  display: flex;
  align-items: Center;
`;

export const CommentOption = styled.div<{selected: boolean}>`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  ${(props) =>
    props.selected
      ? "border: 2px solid #0095f6;"
      : "border: 1px solid #a0a0a0;"};
  cursor: pointer;
  margin: 10px 10px 10px 0px;
  display: flex;
  justify-content: center;
  align-items: Center;
`;

export const CommentOptionColor = styled(CommentOption)<{ att: string }>`
  background-color: ${(props) => (props.att === "black" ? "white" : "black")};
  color: ${(props) => props.att};
`;

export const CommentOptionBold = styled(CommentOption)`
  font-weight: bold;
`;

export const CommentOptionItal = styled(CommentOption)`
  font-style: italic;
`;

export const CommentOptionSplit = styled.div`
  margin: 0px 10px;
  font-size: 25px;
  font-weight: bold;
`;

export const ExitWrapper = styled.div`
  width: 15%;
  display: Flex;
`;

export const Exit = styled.h3`
  background-color: #0095f6;
  border-radius: 15px;
  margin-top: 100px;
  color: white;
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: Center;
  cursor: pointer;
`;

export const ExplanText = styled.img``;

export const Logo = styled.img`
  height: 112px;
  width: 250px;
`;

// export const PrintWrapper = styled.div`
//   width: 15%;
//   display: Flex;
// `;

// export const Print = styled.h3`
//   background-color: #0095f6;
//   border-radius: 15px;
//   margin-top: 100px;
//   color: white;
//   width: 100px;
//   height: 50px;
//   display: flex;
//   justify-content: center;
//   align-items: Center;
//   cursor: pointer;
// `;
