import assert from "power-assert";
import Foo from "../src/Foo";

describe("Foo", () => {

  it("#getName", () => {
    const foo = new Foo();
    assert(foo.getName() === "Foo");
  });

});
