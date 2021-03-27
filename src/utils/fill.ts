import fill from 'lodash/fill';
import { IGenerationDimensionParameters } from '../types';

/**
 * Initialize a 3D array with the given dimensions. So you can `array[z][y][x] = {}` on it.
 * @param dimensions
 * @returns 3D array of undefined
 */
export function get3DEmptyArray(
  dimensions: IGenerationDimensionParameters
): undefined[][][] {
  const twoDArray = fill(Array(dimensions.height), Array(dimensions.width));
  return fill(Array(dimensions.zLevels), twoDArray);
}
