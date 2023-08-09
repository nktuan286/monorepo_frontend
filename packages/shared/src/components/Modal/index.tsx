import { ReactNode, useEffect } from 'react';
import styled, { FlattenInterpolation, ThemeProps } from 'styled-components';
import { Flex, FlexColumn } from '../Flex';
import { Icon } from '../Icon';
import { ThemeType } from '../../styling';

export type ModalSize = 'sm' | 'md' | 'lg';

const ModalBlock = styled(Flex)`${() => `
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  z-index: 99999;
`}`;

const ModalOverlay = styled.a`${({ theme }) => `
  background-color: ${theme.colours.neutral[2]};
  opacity: 0.75;
  bottom: 0;
  cursor: default;
  display: block;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`}`;

const ModalClose = styled.a`${({ theme }) => `
  float: right;
  text-decoration: none;
  cursor: pointer;
  font-size: ${theme.fontSize[2]};
  
  :hover {
    transform: scale(1.2);
  }
`}`;

const ModalCloseIcon = styled(Icon) <{ css?: FlattenInterpolation<ThemeProps<ThemeType>> }>`${({ theme }) => `
  color: ${theme.colours.neutral[10]};
  font-size: ${theme.fontSize[3]};
  
  :hover {
    transform: scale(1.2);
  }
`};
  
  ${({ css }) => css};
`;
const ModalContainer = styled(FlexColumn) <{ size: ModalSize, open?: boolean }>`${({ theme, size, open }) => `
  background: ${theme.colours.neutral[10]};
  transition: all 300ms ease;
  border-radius: ${theme.padding[2]};
  max-width: ${size === 'sm' ? theme.smModalWidth : ''};
  max-width: ${size === 'md' ? '60%' : ''};
  max-width: ${size === 'lg' ? '80%' : ''};
  width: 100%;
  z-index: 1;
  opacity: ${!open ? '0' : '1'};
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.1), 0px 8px 8px -4px rgba(16, 24, 40, 0.04);
`}`;

const ModalHeader = styled.div<{ css?: FlattenInterpolation<ThemeProps<ThemeType>>, backgroundColor?: string, titleColor?: string }>`
  ${({ theme, backgroundColor, titleColor }) => `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: ${theme.padding[3]} ${theme.padding[6]};
    background-color: ${backgroundColor || theme.colours.primary[1]};
    color: ${titleColor || theme.colours.neutral[10]};
    border-bottom: ${theme.borderWidth[1]} solid ${theme.colours.neutral[10]};
    border-top-right-radius: inherit;
    border-top-left-radius: inherit;
    min-height: ${theme.fontSize[8]};
`};
  
  ${({ css }) => css};
`;

const ModalTitle = styled.span`${({ theme }) => `
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSize[3]};
  line-height: ${theme.fontSize[7]};
`}`;

export const ModalBody = styled.div`${({ theme }) => `
  overflow-y: auto;
  word-break: break-word;
  padding: ${theme.padding[6]};
  font-size:  ${theme.fontSize[2]};
  padding-bottom: 0;
`}`;

export const ModalFooter = styled(Flex)`${({ theme }) => `
  gap: ${theme.padding[4]};
  padding: ${theme.padding[6]};
  justify-content: end;
`}`;

type ModalProps = {
  title: string | ReactNode,
  children: ReactNode,
  isOpen: boolean,
  preventOutsideClose?: boolean,
  hideModal?: () => void,
  size?: ModalSize,
  headerCss?: FlattenInterpolation<ThemeProps<ThemeType>>,
  closeIconCss?: FlattenInterpolation<ThemeProps<ThemeType>>,
  backgroundColor?: string,
  titleColor?: string,
}

export function Modal({
  title, children, isOpen, preventOutsideClose = false, hideModal, size = 'lg', headerCss, closeIconCss, backgroundColor, titleColor,
}: ModalProps) {
  const handleClickOutSideModal = () => {
    if (preventOutsideClose) return;
    hideModal?.();
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <ModalBlock>
          <ModalOverlay id="btn-close-modal" onClick={() => handleClickOutSideModal()} />
          <ModalContainer size={size} open={isOpen}>
            <ModalHeader css={headerCss} backgroundColor={backgroundColor} titleColor={titleColor} aria-labelledby="modal-title" aria-modal="true" aria-live="assertive">
              <ModalTitle id="modal-title">
                {title}
              </ModalTitle>
              <ModalClose onClick={() => hideModal?.()} aria-label="Close">
                <ModalCloseIcon className="mi-close" css={closeIconCss} />
              </ModalClose>
            </ModalHeader>
            {children}
          </ModalContainer>
        </ModalBlock>
      )}
    </>
  );
}
