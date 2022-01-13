import { Title, CloseButton, ActionButtonGroup } from "../ui-component";

export class WindowsOsTitle implements Title {
  render() {
    return "Title should be aligned [LEFT]";
  }
}

export class WindowsOsCloseButton implements CloseButton {
  render() {
    return "CloseButton should be aligned [RIGHT]";
  }
}

export class WindowsOsActionButtonGroup implements ActionButtonGroup {
  render() {
    return "Order of buttons in the group should be [ACTION, CANCEL]";
  }
}
