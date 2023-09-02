import ChoosePhotos from "./ChoosePhotos";
import ChosenPhotos from "./ChosenPhotos";
import * as S from "./style";

export default function SelectPhotos() {
  return (
    <S.SelectPhotosContainer>
      <S.SelectPhotosWrapper>
        <S.ChoosePhotosContainer>
          <p>마음에 드는 사진 3장을 선택해주세요!</p>
          <ChoosePhotos />
        </S.ChoosePhotosContainer>
        <S.ChosenPhotosContainer>
          <ChosenPhotos isSelectPhotos={true} />
        </S.ChosenPhotosContainer>
      </S.SelectPhotosWrapper>
    </S.SelectPhotosContainer>
  );
}
