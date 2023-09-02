import styled from "styled-components";

export const ChoosePhotosItemContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 5px;
`;

export const ChoosePhotosItemWrapper = styled.div`
  width: 100%;
  height: 179px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 30px;
`;

export const ChoosePhotoItem = styled.img`
  width: 237px;
  height: 100%;
  background-color: #d9d9d9;
  object-fit: cover;
  cursor: pointer;
`;
