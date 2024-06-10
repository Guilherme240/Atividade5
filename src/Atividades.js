import React from 'react';
import { Box, Heading, List, ListItem, ListIcon, Container } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

const atividades = [
  'Atividade 1: Descrição da atividade 1',
  'Atividade 2: Descrição da atividade 2',
  'Atividade 3: Descrição da atividade 3',
  'Atividade 4: Descrição da atividade 4',
  'Atividade 5: Descrição da atividade 5',
];

const Atividades = () => {
  return (
    <Container maxW="container.md" mt={4}>
      <Heading as="h1" mb={4}>Atividades</Heading>
      <List spacing={3}>
        {atividades.map((atividade, index) => (
          <ListItem key={index}>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            {atividade}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Atividades;
