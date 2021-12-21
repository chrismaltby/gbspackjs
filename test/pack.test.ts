import { ObjectBankData, parseSize, parseSizes } from "../src/gbspack";

describe("Parse", () => {
  it("should parse area size", () => {
    const input = "A _CODE_3 size 8 flags 0 addr 0";
    const expectedOutput = { size: 8, bank: 3 };
    expect(parseSize(input)).toEqual(expectedOutput);
  });

  it("should parse area size hex", () => {
    const input = "A _CODE_15 size ff flags 0 addr 0";
    const expectedOutput = { size: 255, bank: 15 };
    expect(parseSize(input)).toEqual(expectedOutput);
  });

  it("should parse areas", () => {
    const input = `XL3
H 2 areas 5 global symbols
S b_wait_frames Ref000000
S .__.ABS. Def000000
S _wait_frames Ref000000
S ___bank_SCRIPT_3 Def0000FF
A _CODE size 0 flags 0 addr 0
A _CODE_5 size 5 flags 0 addr 0
A _CODE_255 size 55 flags 0 addr 0
S _SCRIPT_3 Def000000`;
    const expectedOutput: ObjectBankData[] = [
      { size: 5, bank: 5 },
      {
        size: 85,
        bank: 255,
      },
    ];
    const output = parseSizes(input);
    expect(output.length).toEqual(2);
    expect(output).toEqual(expectedOutput);
  });
});
