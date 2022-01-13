import { MacOsTitle, MacOsCloseButton, MacOsActionButtonGroup } from "./mac-os";
import { Title, CloseButton, ActionButtonGroup } from "./ui-component";
import { WindowsOsTitle, WindowsOsCloseButton, WindowsOsActionButtonGroup } from "./windows-os";

export interface AbstractDialogFactory {
  createTitle(): Title;
  createCloseButton(): CloseButton;
  createActionButtonGroup(): ActionButtonGroup;
}

export class MacOsDialogFactory implements AbstractDialogFactory {
  createTitle(): MacOsTitle {
    return new MacOsTitle();
  }

  createCloseButton(): MacOsCloseButton {
    return new MacOsCloseButton();
  }

  createActionButtonGroup(): MacOsActionButtonGroup {
    return new MacOsActionButtonGroup();
  }
}

export class WindowsOsDialogFactory implements AbstractDialogFactory {
  createTitle(): WindowsOsTitle {
    return new WindowsOsTitle();
  }

  createCloseButton(): WindowsOsCloseButton {
    return new WindowsOsCloseButton();
  }

  createActionButtonGroup(): WindowsOsActionButtonGroup {
    return new WindowsOsActionButtonGroup();
  }
}
