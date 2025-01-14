// Copyright 2021 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import { AttachmentType } from '../types/Attachment';

export async function deleteDraftAttachment(
  attachment: Pick<AttachmentType, 'screenshotPath' | 'path'>
): Promise<void> {
  if (attachment.screenshotPath) {
    await window.Signal.Migrations.deleteDraftFile(attachment.screenshotPath);
  }
  if (attachment.path) {
    await window.Signal.Migrations.deleteDraftFile(attachment.path);
  }
}
