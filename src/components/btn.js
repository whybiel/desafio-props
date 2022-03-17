import styled from "styled-components";

const Btn = styled.button`
  width: 20vw;
  height: 7vh;
  border: 1px solid #fff;
  background-color: #000;
  color: #cf5c36;
  font-size: 1.2rem;
  cursor: pointer;
  margin: 0vh 0 5vh 2vw;

  &:hover {
    transform: scale(1.1);
  }
`;

const Button = ({ button }) => {
  return (
    <div>
      <Btn>{button}</Btn>;
    </div>
  );
};
export default Button;
