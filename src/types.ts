import { TmcstOverMap } from './tmcst';

export interface IGenerationDimensionParameters {
  /** Length of the X axis ↔ */
  width: number;
  /** Length of the Y axis ↕ */
  height: number;
  /** Length of the Z axis ↗, that is, how many floors does this map have */
  zLevels: number;
}

export interface ILabOvermap extends TmcstOverMap {
  floorDown: boolean;
  floorUp: boolean;
}
