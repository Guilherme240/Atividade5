import React from 'react';
import { Box, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
  return (
    <Box bg="gray.800" color="white" p={4}>
      <Flex justify="center" gap={4}>
        <Link as={RouterLink} to="/">Início</Link>
        <Link as={RouterLink} to="/sobre">Sobre</Link>
        <Link as={RouterLink} to="/contato">Contato</Link>
        <Link as={RouterLink} to="/atividades">Atividades</Link>
      </Flex>
    </Box>
  );
};

export default Header;
