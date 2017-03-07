import mask from '../utils/mask';

export default function maskIBAN(input) {
  return mask(input, {
    ranges: 'A-Za-z0-9',
  });
}
