const {
    getCharacter
  } = require("../src/characterApi");

  describe("test simple call to Marvel character API", () => {
    test("returns a Marvel comic character details", () => {
      expect(getCharacter()).toBe("HULK");
    });

  });