const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(
      joinNames([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }])
    ).toBe("Bart, Lisa, Maggie");//evet arkadaşlar bir virgül bu yazılımda boşluk bıraktığımdan dolayı 2 saatime mal olmuştur
  });
});
//bu sorunda burda kalıp ertesi günü olan problem çözme dersinden sonra bu sorunuda düzeltmiş durumdayım :)) okuyan herkese teşekkürler.