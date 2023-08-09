import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Modal } from '@collies/shared';

const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:stretch;
`;

export default function Main() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCancel = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);
  return (
    <Container>
      <Button onClick={handleOpen}>Show Modal</Button>
      <Modal
        isOpen={isOpen}
        hideModal={handleCancel}
        title="Modal title"
        size="sm"
      >
        <div style={{ height: '300px', padding: '20px' }}>Body content</div>
      </Modal>
    </Container>
  );
}
