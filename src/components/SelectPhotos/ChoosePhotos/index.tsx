import { TEST_ITMES } from "../../../constants/test/test.consant";
import * as S from "./style";
import { useRecoilState } from "recoil";
import { imageArr } from "../../../stores/atoms/image";

export default function ChoosePhotos() {
  const [selcet, setSelect] = useRecoilState<any[]>(imageArr);
  return (
    <S.ChoosePhotosItemContainer>
      <S.ChoosePhotosItemWrapper>
        {TEST_ITMES.map((item, idx) => (
          <S.ChoosePhotoItem
            key={item.id}
            src={item.img}
            onClick={() => setSelect((prev) => [...prev, item.img])}
            alt="이미지 없음"
          />
        ))}
      </S.ChoosePhotosItemWrapper>
    </S.ChoosePhotosItemContainer>
  );
}
