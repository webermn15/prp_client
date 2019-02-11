import { keyframes } from 'styled-components';

const rotateHalf = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(180deg);
  }
`;

const rotateHalfReverse = keyframes`
  from {
    transform: rotate(180deg);
  }

  to {
    transform: rotate(0deg);
  }
`;

export {
	rotateHalf,
	rotateHalfReverse
}