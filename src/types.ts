import { TmcstOverMapTile } from './tmcst';

export interface IGenerationDimensionParameters {
  /** Length of the X axis ↔ */
  width: number;
  /** Length of the Y axis ↕ */
  height: number;
  /** Length of the Z axis ↗, that is, how many floors does this map have */
  zLevels: number;
}

export interface ILabOverMapTile extends TmcstOverMapTile {
  floorDown: boolean;
  floorUp: boolean;
}
