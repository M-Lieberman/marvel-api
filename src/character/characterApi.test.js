const {
  getCharacter
} = require("./characterApi.js");
// import characterApi from './characterApi';

describe("test simple call to Marvel character API", () => {
  test("expected failing test", () => {
    return getCharacter().catch(e => expect(e).toMatch('error'));
  });

  test("returns Hulk comic character details", () => {
    expect.assertions(3);
    return getCharacter('hulk').then(response => {
      expect(response).toBeDefined();
      expect(response.status).toEqual(200);
      expect(response.data.data.results[0].name).toEqual("Hulk");
   });
  });

  test("returns Wolverine details", () => {
    expect.assertions(2);
    return getCharacter('wolverine').then(response => {
      expect(response.status).toEqual(200);
      expect(response.data.data.results[0].name).toEqual("Wolverine");
   });
  });  

});
