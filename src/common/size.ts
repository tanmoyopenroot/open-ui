export enum Size {
  SMALL = 'small',
  DEFAULT = 'default',
  LARGE = 'large',
}

export type TSize = typeof Size;

export const getSize = <T = number>(size: Size = Size.DEFAULT, data: T[]): T => {
  switch (size) {
    case Size.SMALL:
      return data[0];
    case Size.DEFAULT:
      return data[1];
    case Size.LARGE:
      return data[2];
  }
};
