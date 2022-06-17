import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';

import { GlobalStyle } from './sytles/global';

Modal.setAppElement('#root');

export function App() {
  const [ isNewTransictionModalOpen, setIsNewTransictionModalOpen ] = useState(false);

  function handleOpenNewTransictionModal() {
      setIsNewTransictionModalOpen(true);
  }

  function handleCloseNewTransictionModal() {
      setIsNewTransictionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransictionModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransictionModalOpen} onRequestClose={handleCloseNewTransictionModal}/>
      <GlobalStyle />
    </>
  );
}