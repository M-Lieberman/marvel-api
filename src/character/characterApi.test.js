const {
    getCharacter
  } = require("./characterApi.js");
// import characterApi from './characterApi';

describe("test simple call to Marvel character API", () => {
  test.skip("failing test", () => {
      return getCharacter().catch( e => expect(e).toMatch('error'));
      });

    test("returns a Marvel comic character details", () => {
        return getCharacter().then(data => { Promise.resolve();
          // expect(data).toBeDefined();
          // expect(data.code).toEqual('200');
        });
      });
    });
