import convert from 'color-convert';

// RGB to CMYK
console.log(convert.rgb.cmyk(167, 255, 4));     // [ 35, 0, 98, 0 ]

// RGB to HEX
console.log(convert.rgb.hex(123, 45, 67));      // '7B2D43'
console.log(convert.rgb.hex([123, 45, 67]));    // '7B2D43'

// HEX to RGB
console.log(convert.hex.rgb('7B2D43'));      // [ 123, 45, 67 ]
console.log(convert.hex.rgb('#7B2D43'));    // [ 123, 45, 67 ]