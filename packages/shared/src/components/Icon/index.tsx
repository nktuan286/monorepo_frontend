import styled, { FlattenInterpolation, ThemeProps } from 'styled-components';
import { ThemeType } from '../../styling';

export const Icon = styled.i<{ disabled?: boolean, color?: string, size?: string, css?: FlattenInterpolation<ThemeProps<ThemeType>> }>`
  font-size: ${({ size, theme }) => size || theme.fontSize[2]};

  ${({ disabled, theme, color }) => `
    color: ${disabled ? theme.borderFaint : (color || 'inherit')};
    opacity: ${disabled ? 0.5 : 1}; 
    cursor: ${disabled ? 'default' : 'pointer'}; 
  `};
  
  ${({ css }) => css};
`;
