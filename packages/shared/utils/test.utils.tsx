import { ReactNode, ReactElement } from 'react';
import {
  render, RenderOptions,
} from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { Theme } from '../src/styling';

function WrapedRender({ children }: {children: ReactNode}) {
  return (
    <HashRouter>
      <Theme>
        {children}
      </Theme>
    </HashRouter>
  );
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: WrapedRender, ...options });

export * from '@testing-library/react';
export { customRender as render };
