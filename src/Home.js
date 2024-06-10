import React from 'react';
import { Box, Heading, Container } from '@chakra-ui/react';

const Home = () => {
  return (
    <Container maxW="container.md" mt={4}>
      <Heading as="h1">Bem-vindo ao Nosso Projeto</Heading>
      <Box mt={4}>
        <p>Este projeto tem como objetivo demonstrar a estrutura básica de um site com várias páginas interligadas.</p>
      </Box>
    </Container>
  );
};

export default Home;
