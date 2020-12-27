const {
  getCharacter
} = require("./characterApi.js");
// import characterApi from './characterApi';

// TODO pass in search term to function call
// TODO update to valid failing test
describe("test simple call to Marvel character API", () => {
  test.skip("failing test", () => {
    return getCharacter().catch(e => expect(e).toMatch('error'));
  });

  test("returns a Marvel comic character details", () => {
    // expect.assertions(1);
    return getCharacter().then(response => {
      expect(response).toBeDefined();
      expect(response.status).toEqual(200);
      expect(response.data.data.results[0].name).toEqual("Hulk");
      console.log("test= " + JSON.stringify(response.data.data.results[0].name));
      // expect(data.results).toEqual("Hulk");
    });
  });

});
