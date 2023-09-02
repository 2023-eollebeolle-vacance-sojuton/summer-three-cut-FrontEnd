import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Wrapper = styled.div`
  width: 70%;
  height: 100%;
  position: relative;
`;

export const CamWrapper = styled.div`
  position: absolute;
  left: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 600px;
  .webcam {
    border-radius: 15px;
    width: 700px;
    height: 600px;
  }
  .canvas {
    position: absolute;
    width: 700px;
    height: 600px;
    border-radius: 15px;
  }
`;

export const Text = styled.p`
  font-size: 44px;
  color: #000;
  margin-top: 101px;
  margin-left: 95px;
  font-family: "Black Han Sans";
`;

export const BackgroundSelectText = styled.p`
  color: #000;
  font-family: Black Han Sans;
  font-size: 31px;
  font-style: normal;
`;

export const ButtonContainer = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: white;
`;
export const HeaderText = styled.p`
  color: #000;
  font-family: Black Han Sans;
  font-size: 31px;
  font-style: normal;
`;

export const BackgoundText = styled.p`
  color: #000;
  font-family: Black Han Sans;
  font-size: 24px;
  font-style: normal;
  width: 100px;
`;

export const Button = styled.button<{ isSelect?: boolean }>`
  cursor: pointer;
  width: 100px;
  height: 100px;
  outline: none;
  border: 0px;
  background-color: #f2f2f2;
  margin: 10px;
  border-radius: 20px;
  border: ${(props) =>
    props.isSelect ? "1px solid #16be78" : "1px solid #000"};
  background: #f9fafb;
`;

// export const Button = styled.button`
//   cursor: pointer;
//   width: 100px;
//   height: 100px;
//   outline: none;
//   border: 0px;
//   background-color: #f2f2f2;
//   margin: 10px;
//   border-radius: 20px;
//   border: 1px solid #000;
//   background: #f9fafb;
// `;

export const NextButton = styled.button`
  width: 350px;
  height: 70px;
  background-color: #16be78;
  cursor: pointer;
  outline: none;
  border: none;
  font-size: 30px;
  color: #fff;
  border-radius: 10px;
`;
