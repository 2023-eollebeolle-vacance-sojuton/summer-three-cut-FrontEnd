import { getDateText } from "../../../utils/Date/getDateText";
import * as S from "./style";
import logo from "../../../assets/common/logo.svg";
import { useNavigate } from "react-router-dom";
import { imageArr } from "../../../stores/atoms/image";
import { useRecoilState } from "recoil";

interface Props {
  isSelectPhotos: boolean;
  backgroundColor?: string;
  id?: string;
}

export default function ChosenPhotos({
  isSelectPhotos,
  backgroundColor,
  id,
}: Props) {
  const navigate = useNavigate();
  const [selcet, setSelect] = useRecoilState<any[]>(imageArr);
  return (
    <S.ChosenPhotosWrapper id={id}>
      <S.ChosenPhotosBox backgroundColor={backgroundColor}>
        <S.ChosenPhotoContainer>
          {selcet.map((item, idx) => (
            <S.ChosenPhoto key={idx} src={item} />
          ))}
        </S.ChosenPhotoContainer>
        <S.ChosenEtcContainer>
          <S.NowDate>{getDateText(new Date())}</S.NowDate>
          <S.Logo src={logo} alt="이미지 없음" />
        </S.ChosenEtcContainer>
      </S.ChosenPhotosBox>
      {isSelectPhotos && (
        <S.NextButton onClick={() => navigate("/share")}>다음으로</S.NextButton>
      )}
    </S.ChosenPhotosWrapper>
  );
}
