import React from 'react';

import styled from 'styled-components/native';
export const CardItem = ({ name, company, title }) => {
  return (
    <Container>
      <Card>
        <Autor>Autor: {name}</Autor>
        <Company>Company: {company}</Company>
        <Title>Title:{title}</Title>
      </Card>
    </Container>
  );
};

const Container = styled.View`
  margin: 20px 5%;
  margin-top: 10px;
`;

const Card = styled.View`
margin-bottom:20px
  display: flex;
  flex-direction: column;
  max-width: 467px;
  box-sizing: border-box;
  border: 5px solid #27569c;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  border-radius: 5px;
  padding: 12px 17px;
`;

const Autor = styled.Text`
    font-size:16px
    font-weight: 800;
    margin-top: 13px;
`;

const Company = styled.Text`
margin-top: 19px;
font-size:16px
    font-weight: 800;
`;

const Title = styled.Text`
margin-top: 17px;
margin-bottom: 19px;
font-size:16px
    font-weight: 800;
`;

const Block = styled.View`
  margin-bottom: 120px;
`;
