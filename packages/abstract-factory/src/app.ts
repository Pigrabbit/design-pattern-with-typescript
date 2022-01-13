import {
  AbstractDialogFactory,
  MacOsDialogFactory,
  WindowsOsDialogFactory,
} from "./factory-class";

function main() {
  console.log(`application stated... os: [${process.env.NODE_ENV}]`);

  let dialogFactory: AbstractDialogFactory;
  if (process.env.NODE_ENV === "WINDOWS") {
    dialogFactory = new WindowsOsDialogFactory();
  } else {
    dialogFactory = new MacOsDialogFactory();
  }

  clientCode(dialogFactory);
}

function clientCode(factory: AbstractDialogFactory) {
  const dialogTitle = factory.createTitle();
  const dialogCloseButton = factory.createCloseButton();
  const dialogActionButtonGroup = factory.createActionButtonGroup();

  console.log(dialogTitle.render());
  console.log(dialogCloseButton.render());
  console.log(dialogActionButtonGroup.render());
}

main();
