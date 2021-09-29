import React from "react";
import { useSelector } from "react-redux";

import { Modal } from "components/modal";
import { modalActions } from "redux/action";

import {
  ModalContainer,
  ModalTitle,
  ModalContent,
  ModalLabel,
  ModalInput,
  MnemonicTextArea,
  NextButton,
} from "./styles";

function ImportPrivatekeyModal() {
  const importPrivatekeyModalState = useSelector((state) => state.modal.importPrivatekey);

  const closeImportPrivatekeyModal = () => {
    modalActions.handleModalImportPrivatekey(false);
  };

  const prevModal = () => {
    closeImportPrivatekeyModal();
    modalActions.handleModalLogin(true);
  };

  return (
    <Modal
      visible={importPrivatekeyModalState}
      closable={true}
      maskClosable={true}
      onClose={closeImportPrivatekeyModal}
      prev={prevModal}
      width={"600px"}
    >
      <ModalContainer>
        <ModalTitle>Import Private Key</ModalTitle>
        <ModalContent>
          <ModalLabel>Private Key</ModalLabel>
          <ModalInput>
            <MnemonicTextArea />
          </ModalInput>
          <NextButton onClick={() => closeImportPrivatekeyModal()}>Import</NextButton>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
}

export default ImportPrivatekeyModal;