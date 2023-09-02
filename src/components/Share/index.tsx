import ChosenPhotos from "../SelectPhotos/ChosenPhotos";
import { ChosenPhotosContainer } from "../SelectPhotos/style";
import * as S from "./style";
import logo2 from "../../assets/common/logo2.svg";
import kakaoTalk from "../../assets/Share/kakaoTalk.svg";
import { useState } from "react";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import { SwatchesPicker } from "react-color";

export default function Share() {
  const [selectColor, setSelectColor] = useState("#d9d9d9");
  const [colorPaletteOn, setColorPaletteOn] = useState(false);
  const [imageUrl, setImageUrl] = useState<any>("");
  const handleChangeComplete = (color: any) => {
    setSelectColor(color.hex);
  };
  const onDownloadBtn = () => {
    const answer = window.confirm("사진을 다운로드 하시겠습니까?");
    if (answer) {
      domtoimage.toBlob(document.getElementById("photo")!!).then((blob) => {
        saveAs(blob, "여름세컷.png");
        setImageUrl(blob);
      });
    }
  };

  const handleKakaoImgSubmit = () => {};

  return (
    <S.ShareContainer>
      <S.ShareWrapper>
        <ChosenPhotosContainer>
          <ChosenPhotos
            isSelectPhotos={false}
            backgroundColor={selectColor}
            id="photo"
          />
        </ChosenPhotosContainer>
        <S.OptionContainer>
          <S.Logo src={logo2} alt="이미지 없음" />
          <S.FrameColorContainer>
            <p>프레임 색상을 지정해주세요!</p>
            <ul>
              <S.FrameColorBox
                color={selectColor}
                onClick={() => setColorPaletteOn((prev) => !prev)}
              />
              {colorPaletteOn && (
                <SwatchesPicker
                  color={selectColor}
                  onChangeComplete={handleChangeComplete}
                />
              )}
              <S.ShareButton color="#16BE78" onClick={onDownloadBtn}>
                저장하기
              </S.ShareButton>
            </ul>
          </S.FrameColorContainer>
        </S.OptionContainer>
      </S.ShareWrapper>
    </S.ShareContainer>
  );
}
