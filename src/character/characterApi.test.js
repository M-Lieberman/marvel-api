const {
  getCharacter
} = require("./characterApi.js");
// import characterApi from './characterApi';

describe("test simple call to Marvel character API", () => {
  test.skip("failing test", () => {
    return getCharacter().catch(e => expect(e).toMatch('error'));
  });

  test("returns a Marvel comic character details", () => {
    // expect.assertions(1);
    return getCharacter().then(data => {
      expect(data).toBeDefined();
      expect(data.status).toEqual(200);
    });
  });
});
