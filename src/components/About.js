import styled from "styled-components";

const Text = styled.h2`
  font-size: 40px;
  color: #cf5c36;
`;

const About = ({ nome, idade, estudando }) => {
  return (
    <div>
      <Text>
        me chamo {nome}, tenho {idade}, e estudo {estudando}
      </Text>
    </div>
  );
};

export default About;
