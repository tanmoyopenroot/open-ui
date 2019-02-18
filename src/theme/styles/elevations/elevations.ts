const createElevation = (...args: number[]) => {
  return [
    `${args[0]}px ${args[1]}px ${args[2]}px rgba(0,0,0, ${args[3]})`,
    `${args[4]}px ${args[5]}px ${args[6]}px rgba(0,0,0, ${args[7]})`,
  ].join(',');
};

export default [
  createElevation(0, 1, 3, 0.12, 0, 1, 2, 0.24),
  createElevation(0, 3, 6, 0.16, 0, 3, 6, 0.23),
  createElevation(0, 10, 20, 0.19, 0, 6, 6, 0.23),
  createElevation(0, 2, 14, 0.25, 28, 10, 10, 0.22),
  createElevation(0, 19, 38, 0.30, 0, 15, 12, 0.22),
];
