import { Title, CloseButton, ActionButtonGroup } from "../ui-component";

export class MacOsTitle implements Title {
  render() {
    return "Title should be aligned [CENTER]";
  }
}

export class MacOsCloseButton implements CloseButton {
  render() {
    return "CloseButton should be aligned [LEFT]";
  }
}

export class MacOsActionButtonGroup implements ActionButtonGroup {
  render() {
    return "Order of buttons in the group should be [CANCEL, ACTION]";
  }
}
