import {
  Wrapper,
  InputBox,
  Title,
  Label,
  ID,
  Password,
} from "../../styles/emotion";

export default function EmotionPage() {
  // JS 쓰는 곳

  return (
    <Wrapper>
      <Title>로그인</Title>
      <InputBox>
        <Label>아이디</Label>
        <ID type="text"></ID>
      </InputBox>
      <InputBox>
        <Label>비밀번호</Label>
        <Password type="password"></Password>
      </InputBox>
    </Wrapper>
  );
}
