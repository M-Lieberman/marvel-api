const {
    getCharacter
  } = require("./characterApi.js");
// import characterApi from './characterApi';

describe("test simple call to Marvel character API", () => {
  test("failing test", () => {
      return getCharacter().catch( e => expect(e).toMatch('error'));
      });

    test.skip("returns a Marvel comic character details", () => {
        return getCharacter().then(data => {
          expect(data).toBe('HULK');
        });
      });
    });
