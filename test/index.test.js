const {
    getMarvelCharacter
  } = require("../src/index");

  describe("dummy", () => {
    test("returns a Marvel comic character details", () => {
      expect(getMarvelCharacter()).toBe("HULK");
    });
  });