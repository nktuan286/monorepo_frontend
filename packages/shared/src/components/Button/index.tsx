import styled, { css } from 'styled-components';

export const ButtonCss = css<{ disabled?: boolean, small?: boolean, fontSize?: string }>`${({
  theme, disabled, small, fontSize,
}) => `
  font-family: 'Open Sans', sans-serif;
  display:flex;
  flex-wrap: nowrap;
  justify-content:center;
  gap:${theme.padding[2]};
  white-space:nowrap;
  align-items:center;
  color:${disabled ? theme.colours.neutral[5] : theme.colours.neutral[10]};
  padding-top:${theme.padding[1]};
  padding-bottom:${theme.padding[1]};
  padding-left: ${small ? theme.padding[5] : theme.padding[8]};
  padding-right: ${small ? theme.padding[5] : theme.padding[8]};
  background:${disabled ? theme.colours.neutral[7] : theme.colours.primary[1]};
  border-radius: ${theme.borderRadius[2]};
  font-size: ${fontSize || (small ? theme.fontSize[1] : theme.fontSize[3])};
  font-weight: ${theme.fontWeight.bolder};
  border: none;
  min-width:${theme.padding[7]};
  cursor:  ${disabled ? 'default' : 'pointer'};
  opacity: ${disabled ? 0.5 : 1};
  line-height: ${small ? theme.fontSize[3] : theme.fontSize[6]};
  height: ${small ? theme.smallButtonHeight : theme.buttonHeight};

  &:hover {
    background: ${disabled ? '' : theme.colours.primary[2]};
  };
  &:active {
    color: ${disabled ? '' : theme.colours.primary[5]};
    background: ${disabled ? '' : theme.colours.primary[1]};
  };
`}`;

export const Button = styled.button<{ disabled?: boolean, small? : boolean, fontSize?: string }>`
  ${ButtonCss};
`;
