const convert = require("./text2image");

for (let i = 0; i < 30; ++i) {
  convert.convert(i.toString());
}
