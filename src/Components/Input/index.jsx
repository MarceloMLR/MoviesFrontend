import { Container } from "./style";

export const Input = ({ icon: Icon, ...rest }) => {
  return (
    <Container>
      {Icon && <Icon size={15} />}
      <input type="text" {...rest} />
    </Container>
  );
};
