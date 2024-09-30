import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import _default from '../../styles/default';
import GlobalStyles from '../../styles/GlobalStyles';
import ExperCmp from './index';

test('asd', () => {
  render(
    <ThemeProvider theme={_default}>
      <GlobalStyles />
      <ExperCmp/>
    </ThemeProvider>
  );

  expect(screen.getByText(/Experiences/i)).toBeInTheDocument();
})