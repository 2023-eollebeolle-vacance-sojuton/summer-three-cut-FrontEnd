import styled from "styled-components";

export const ChosenPhotosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
`;

export const ChosenPhotosBox = styled.div<{ backgroundColor?: string }>`
  width: 378px;
  height: 760px;
  background-color: ${(props) => props.backgroundColor || "#d9d9d9"};
  border-radius: 5px;
  border: 3px solid #000;
`;

export const ChosenPhotoContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 20px;
  padding-top: 2rem;
`;

export const ChosenPhotosBoxContainer = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 20px;
`;

export const ChosenEtcContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ChosenPhoto = styled.img`
  width: 290px;
  height: 180px;
  background-color: red;
  object-fit: cover;
`;

export const NowDate = styled.p`
  font-size: 28px;
`;

export const Logo = styled.img`
  width: 176px;
  height: 75px;
`;

export const NextButton = styled.button`
  width: 378px;
  height: 70px;
  background-color: #16be78;
  cursor: pointer;
  outline: none;
  border: none;
  font-size: 30px;
  color: #fff;
  border-radius: 10px;
`;
