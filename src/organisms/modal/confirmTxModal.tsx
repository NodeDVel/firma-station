import React from "react";
import numeral from "numeral";
import { useSelector } from "react-redux";

import { isValid } from "../../utils/common";
import { rootState } from "../../redux/reducers";
import { Modal } from "../../components/modal";
import { modalActions } from "../../redux/action";

import {
  confirmTxModalWidth,
  ModalContainer,
  ModalTitle,
  ModalContent,
  ConfirmWrapper,
  ConfirmLabel,
  ConfirmInput,
  NextButton,
} from "./styles";

const DENOM = "FCT";

const ConfirmTxModal = () => {
  const confirmTxModalState = useSelector((state: rootState) => state.modal.confirmTx);
  const modalData = useSelector((state: rootState) => state.modal.data);

  const fee = 0.002;

  const closeConfirmTxModal = () => {
    modalActions.handleModalConfirmTx(false);
  };

  const prevModal = () => {
    closeConfirmTxModal();
    modalData.prevModalAction && modalData.prevModalAction(true);
  };

  const queueTx = () => {
    closeConfirmTxModal();
    modalActions.handleModalQueueTx(true);
  };

  return (
    <Modal
      visible={confirmTxModalState}
      closable={true}
      onClose={closeConfirmTxModal}
      prev={prevModal}
      width={confirmTxModalWidth}
    >
      <ModalContainer>
        <ModalTitle>Confirm</ModalTitle>
        <ModalContent>
          <ConfirmWrapper>
            <ConfirmLabel>Amount</ConfirmLabel>
            <ConfirmInput>
              {isValid(modalData.data) && `${numeral(modalData.data.amount).format("0,0.000000")} ${DENOM}`}
            </ConfirmInput>
          </ConfirmWrapper>
          <ConfirmWrapper>
            <ConfirmLabel>Fee</ConfirmLabel>
            <ConfirmInput>{`${numeral(fee).format("0,0.000000")} ${DENOM}`}</ConfirmInput>
          </ConfirmWrapper>
          <NextButton
            style={{ marginTop: "50px" }}
            onClick={() => {
              queueTx();
            }}
            active={true}
          >
            {modalData && modalData.action}
          </NextButton>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};

export default React.memo(ConfirmTxModal);