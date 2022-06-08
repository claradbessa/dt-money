import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';

import { GlobalStyle } from './sytles/global';

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}