import styled from "styled-components";

export const SelectPhotosContainer = styled.div`
  width: 100%;
  height: 100%;
  font-family: "Black Han Sans", sans-serif;
  display: flex;
  justify-content: center;
`;

export const SelectPhotosWrapper = styled.div`
  width: 1010px;
  height: 100%;
  padding-top: 4rem;
  display: flex;
`;

export const ChoosePhotosContainer = styled.div`
  width: 50%;
  height: 100%;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ChosenPhotosContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  overflow-y: scroll;
  padding-bottom: 10px;
  justify-content: center;
  ::-webkit-scrollbar {
    display: none;
  }
`;
