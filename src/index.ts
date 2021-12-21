interface PackArgs {
  bankOffset: number; // Sets the first bank to use (default 1)
  filter: number; // Only repack files from specified bank (default repack all banks)
  extension: string; // Replace the file extension for output files
  mbc1: boolean; // Use MBC1 hardware (skip banks 0x20, 0x40 and 0x60)
  additional: number; // Reserve N additional banks at end of cart for batteryless saving (default 0)
}

interface PackResult {
  cartSize: number;
  maxBank: number;
}

const pack = (files: string[], args: PackArgs): PackResult => {
  let cartSize = 0;
  let maxBank = 0;
  return {
    cartSize,
    maxBank,
  };
};
