export default function expectChars(regex, amount = 1) {
  let remaining = amount;

  return Object.freeze(Object.defineProperties(c => {
    if (!c.match(regex)) {
      remaining = amount;
      return undefined;
    }

    remaining--;
    return remaining > 0;
  }, {
    length: {
      value: amount,
    },
    reset: {
      value: () => {
        remaining = amount;
        return;
      },
    },
  }));
}
