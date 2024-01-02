import { Container } from "./styles";

export const ButtonText = ({ title, isActive = "false", ...rest }) => {
  return (
    <Container type="button" {...rest} $isactive={isActive.toString()}>
      {title}
    </Container>
  );
};
