// Copyright 2021 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import React from 'react';
import { LocalizerType } from '../types/Util';
import { Toast } from './Toast';

export type ToastPropsType = {
  onShowDebugLog: () => unknown;
};

type PropsType = {
  i18n: LocalizerType;
  onClose: () => unknown;
} & ToastPropsType;

export const ToastDecryptionError = ({
  i18n,
  onClose,
  onShowDebugLog,
}: PropsType): JSX.Element => {
  return (
    <Toast
      autoDismissDisabled
      className="decryption-error"
      onClick={onShowDebugLog}
      onClose={onClose}
    >
      {i18n('decryptionErrorToast')}
    </Toast>
  );
};
