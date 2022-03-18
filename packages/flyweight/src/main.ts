import { Sky } from "./sky";
import "./style.css";


const init = () => {
  const canvasEl = document.getElementById("canvas") as HTMLCanvasElement;

  const sky = new Sky(canvasEl);
  sky.draw();
};

init();
