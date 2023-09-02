import * as S from "./style";

export default function ChoosePhotos() {
  return (
    <S.ChoosePhotosItemContainer>
      <S.ChoosePhotosItemWrapper>
        {Array.from({ length: 20 }).map((item, idx) => (
          <S.ChoosePhotoItem key={idx}></S.ChoosePhotoItem>
        ))}
      </S.ChoosePhotosItemWrapper>
    </S.ChoosePhotosItemContainer>
  );
}
