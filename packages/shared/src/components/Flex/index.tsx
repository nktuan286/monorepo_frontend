import styled, { css } from 'styled-components';

export const FlexGrowCss = css`
  flex:1;
`;
export const FlexGrow = styled.div`
  ${FlexGrowCss}
`;

export const FlexCss = css`
  display: flex;
`;

export const Flex = styled.div`
  ${FlexCss}
`;

export const FlexColumn = styled(Flex)`
  flex-direction: column;
`;

export const CenterFlex = styled(Flex)`
  width:100%;
  height:100%;
  align-items:center;
  justify-content:center;
`;
