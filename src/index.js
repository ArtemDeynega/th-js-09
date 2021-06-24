import "./styles/main.scss";
import { test } from "./utils/utils";

test();

class Test {
  constructor(item) {
    this.item = item;
  }
  consoleItem() {
    console.log(this.item);
  }
}

const test1 = new Test("Привет");

test1.consoleItem();
