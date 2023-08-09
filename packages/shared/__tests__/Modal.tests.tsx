/* eslint-disable react/no-children-prop */
import { render } from '../utils/test.utils';
import 'jest-styled-components';
import {
  Modal,
} from '../src/components/Modal';

function Component({ isOpen = false }: { isOpen?: boolean }) {
  return (
    <Modal title="Modal title" isOpen={isOpen}>
      This is content of modal
    </Modal>
  );
}

const renderModal = (isOpen: boolean = true) => {
  const { container, rerender } = render(
    <Component isOpen={isOpen} />,
  );

  const rerenderForm = () => {
    rerender(
      <Component isOpen={isOpen} />,
    );
  };

  return { container, rerenderForm };
};

describe('<Modal /> Tests', () => {
  test('Render <Modal /> with out crash', () => {
    const { container } = renderModal();
    expect(container).toMatchSnapshot();
  });
});
