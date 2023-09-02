import * as S from "./style";
import logo from "../../../assets/common/logo.svg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <S.HeaderContainer>
      <S.HeaderWrapper>
        <img src={logo} alt="이미지 없음" onClick={() => navigate("/")} />
      </S.HeaderWrapper>
    </S.HeaderContainer>
  );
}
