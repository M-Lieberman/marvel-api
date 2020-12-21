const {
    getCharacter
  } = require("./characterApi.js");
// import characterApi from './characterApi';

  describe("test simple call to Marvel character API", () => {
    test("returns a Marvel comic character details", () => {
      expect(getCharacter()).toBe("HULK");
    });

  });