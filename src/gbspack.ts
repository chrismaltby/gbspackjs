export interface ObjectBankData {
  size: number;
  bank: number;
}

export const parseSize = (line: string): ObjectBankData => {
  const split = line.split(" ");
  const bankSplit = split[1].split("_");
  const size = parseInt(split[3], 16);
  const bank = parseInt(bankSplit[2]);
  return { size, bank };
};

export const parseSizes = (contents: string): ObjectBankData[] => {
  const banks: ObjectBankData[] = [];
  const lines = contents.split("\n");
  for (const line of lines) {
    if (line.includes("A _CODE_")) {
      const parsedSize = parseSize(line);
      banks.push(parsedSize);
    }
  }
  return banks;
};
