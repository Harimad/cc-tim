import { Wrapper, Email, EmailInput, LogoImg } from "../../styles/emotion";

export default function EmotionPage() {
  // JS 쓰는 곳

  return (
    <Wrapper>
      <Email>철수</Email>
      <EmailInput type="text"></EmailInput>
      <button>또 클릭하세요!!</button>
      <LogoImg src="/vercel.svg"></LogoImg>
    </Wrapper>
  );
}
