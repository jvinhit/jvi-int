import { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import theme from '../styles/default'
const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;