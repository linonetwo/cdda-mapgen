/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable security/detect-object-injection */
import { TmcstWorld, TmcstBiome } from './tmcst';
import { ILabOverMapTile, IGenerationDimensionParameters } from './types';
import { get3DEmptyArray } from './utils/fill';

/**
 * Generate 3D map from cdda data
 */
export function generate(
  parameters: IGenerationDimensionParameters
): TmcstWorld {
  const labBiome = biomeLabGen(parameters);
  return { type: 'WorldNode', children: [[[labBiome]]] };
}

/**
 * Generate lab biome tile
 * @returns TmcstBiome
 */
export function biomeLabGen(
  parameters: IGenerationDimensionParameters
): TmcstBiome<'lab'> {
  // define the generation rules here, and use later in the for-for-for loop
  function getAnOverMapTile(x: number, y: number, z: number): ILabOverMapTile {
    return {
      floorDown: false,
      floorUp: false,
      value: 'lab1',
      children: [],
      type: 'OverMapNode',
    };
  }

  // Fill in the map
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore 'undefined' is not assignable to type 'ILabOvermap'
  const overMapOfBiome: ILabOverMapTile[][][] = get3DEmptyArray(parameters);
  for (let indexZ = 0; indexZ < parameters.zLevels; indexZ += 1) {
    for (let indexY = 0; indexY < parameters.height; indexY += 1) {
      for (let indexX = 0; indexX < parameters.width; indexX += 1) {
        overMapOfBiome[indexZ]![indexY]![indexX] = getAnOverMapTile(
          indexX,
          indexY,
          indexZ
        );
      }
    }
  }

  return {
    type: 'BiomeNode',
    value: 'lab',
    children: overMapOfBiome,
  };
}
