import React, { useState, useEffect, useRef } from "react";
import numeral from "numeral";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";

import useFirma from "../../utils/wallet";
import { isValidString } from "../../utils/common";
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
  InputBoxDefault,
  PasswordWrapper,
} from "./styles";

const DENOM = "FCT";

const ConfirmTxModal = () => {
  const confirmTxModalState = useSelector((state: rootState) => state.modal.confirmTx);
  const modalData = useSelector((state: rootState) => state.modal.data);
  const { enqueueSnackbar } = useSnackbar();
  const { isCorrectPassword } = useFirma();

  const [password, setPassword] = useState("");
  const [actionName, setActionName] = useState("");
  const [amount, setAmount] = useState("");
  const [fee, setFee] = useState("0.002");
  const [isActive, setActive] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    setActionName(modalData.action);
    setAmount(modalData.data.amount);
    setFee("0.002");
  }, [modalData]);

  const closeConfirmTxModal = () => {
    modalActions.handleModalConfirmTx(false);
  };

  const prevModal = () => {
    closeConfirmTxModal();
    modalData.prevModalAction && modalData.prevModalAction(true);
  };

  const queueTx = () => {
    if (isCorrectPassword(password)) {
      closeConfirmTxModal();
      modalActions.handleModalQueueTx(true);
    } else {
      enqueueSnackbar("Invalid Password", {
        variant: "error",
        autoHideDuration: 1000,
      });
    }
  };

  const onChangePassword = (e: any) => {
    if (e === null) return;
    setPassword(e.target.value);
    setActive(e.target.value.length >= 8);
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
          {isValidString(amount) && (
            <ConfirmWrapper>
              <ConfirmLabel>Amount</ConfirmLabel>
              <ConfirmInput>{`${numeral(amount).format("0,0.000000")} ${DENOM}`}</ConfirmInput>
            </ConfirmWrapper>
          )}
          <ConfirmWrapper>
            <ConfirmLabel>Fee</ConfirmLabel>
            <ConfirmInput>{`${numeral(fee).format("0,0.000000")} ${DENOM}`}</ConfirmInput>
          </ConfirmWrapper>
          <PasswordWrapper>
            <InputBoxDefault
              ref={inputRef}
              placeholder="PASSWORD"
              type="password"
              value={password}
              onChange={onChangePassword}
              autoFocus={true}
            />
          </PasswordWrapper>
          <NextButton
            style={{ marginTop: "50px" }}
            onClick={() => {
              if (isActive) queueTx();
            }}
            active={isActive}
          >
            {actionName}
          </NextButton>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};

export default React.memo(ConfirmTxModal);
