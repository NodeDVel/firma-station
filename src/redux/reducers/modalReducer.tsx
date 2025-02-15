import { createReducer } from "@reduxjs/toolkit";
import {
  HANDLE_MODAL_RESET,
  HANDLE_MODAL_DATA,
  HANDLE_MODAL_NETWORK,
  HANDLE_MODAL_LOGIN,
  HANDLE_MODAL_NEWWALLET,
  HANDLE_MODAL_CONFIRMWALLET,
  HANDLE_MODAL_RECOVERMNEMONIC,
  HANDLE_MODAL_IMPORTPRIVATEKEY,
  HANDLE_MODAL_CONNECTLEDGER,
  HANDLE_MODAL_DELEGATE,
  HANDLE_MODAL_REDELEGATE,
  HANDLE_MODAL_UNDELEGATE,
  HANDLE_MODAL_DEPOSIT,
  HANDLE_MODAL_VOTING,
  HANDLE_MODAL_NEWPROPOSAL,
  HANDLE_MODAL_SEND,
  HANDLE_MODAL_CONFIRMTX,
  HANDLE_MODAL_QUEUETX,
  HANDLE_MODAL_RESULTTX,
} from "../types";

export interface IModalState {
  data: any;
  network: boolean;
  login: boolean;
  newWallet: boolean;
  confirmWallet: boolean;
  recoverMnemonic: boolean;
  importPrivatekey: boolean;
  connectLedger: boolean;
  delegate: boolean;
  redelegate: boolean;
  undelegate: boolean;
  deposit: boolean;
  voting: boolean;
  newProposal: boolean;
  send: boolean;
  confirmTx: boolean;
  queueTx: boolean;
  resultTx: boolean;
}

const initialState: IModalState = {
  data: {},
  network: false,
  login: false,
  newWallet: false,
  confirmWallet: false,
  recoverMnemonic: false,
  importPrivatekey: false,
  connectLedger: false,
  delegate: false,
  redelegate: false,
  undelegate: false,
  deposit: false,
  voting: false,
  newProposal: false,
  send: false,
  confirmTx: false,
  queueTx: false,
  resultTx: false,
};

export default createReducer(initialState, {
  [HANDLE_MODAL_RESET]: (state: IModalState) => {
    return {
      ...initialState,
    };
  },
  [HANDLE_MODAL_DATA]: (state: IModalState, { data }) => {
    state.data = data;
  },
  [HANDLE_MODAL_NETWORK]: (state: IModalState, { isVisible }) => {
    state.network = isVisible;
  },
  [HANDLE_MODAL_LOGIN]: (state: IModalState, { isVisible }) => {
    state.login = isVisible;
  },
  [HANDLE_MODAL_NEWWALLET]: (state: IModalState, { isVisible }) => {
    state.newWallet = isVisible;
  },
  [HANDLE_MODAL_CONFIRMWALLET]: (state: IModalState, { isVisible }) => {
    state.confirmWallet = isVisible;
  },
  [HANDLE_MODAL_RECOVERMNEMONIC]: (state: IModalState, { isVisible }) => {
    state.recoverMnemonic = isVisible;
  },
  [HANDLE_MODAL_IMPORTPRIVATEKEY]: (state: IModalState, { isVisible }) => {
    state.importPrivatekey = isVisible;
  },
  [HANDLE_MODAL_CONNECTLEDGER]: (state: IModalState, { isVisible }) => {
    state.connectLedger = isVisible;
  },
  [HANDLE_MODAL_DELEGATE]: (state: IModalState, { isVisible }) => {
    state.delegate = isVisible;
  },
  [HANDLE_MODAL_REDELEGATE]: (state: IModalState, { isVisible }) => {
    state.redelegate = isVisible;
  },
  [HANDLE_MODAL_UNDELEGATE]: (state: IModalState, { isVisible }) => {
    state.undelegate = isVisible;
  },
  [HANDLE_MODAL_DEPOSIT]: (state: IModalState, { isVisible }) => {
    state.deposit = isVisible;
  },
  [HANDLE_MODAL_VOTING]: (state: IModalState, { isVisible }) => {
    state.voting = isVisible;
  },
  [HANDLE_MODAL_NEWPROPOSAL]: (state: IModalState, { isVisible }) => {
    state.newProposal = isVisible;
  },
  [HANDLE_MODAL_SEND]: (state: IModalState, { isVisible }) => {
    state.send = isVisible;
  },
  [HANDLE_MODAL_CONFIRMTX]: (state: IModalState, { isVisible }) => {
    state.confirmTx = isVisible;
  },
  [HANDLE_MODAL_QUEUETX]: (state: IModalState, { isVisible }) => {
    state.queueTx = isVisible;
  },
  [HANDLE_MODAL_RESULTTX]: (state: IModalState, { isVisible }) => {
    state.resultTx = isVisible;
  },
});
