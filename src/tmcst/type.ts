/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * World, contains 100x100 Biome (Global 6kkm)
 */
export interface TmcstWorld {
  type: 'WorldNode';
  children: TmcstBiome[][][];
}

/**
 * Biome, contains 250x250 Overmap (City 6km)
 */
export interface TmcstBiome<V extends string = any> {
  type: 'BiomeNode';
  /**
   * `value` field is a `string`, is the biome type name, such as "City" or "MountainArea2" or "slum".
   */
  value: V;
  children: TmcstOverMapTile[][][];
}

/**
 * Overmap, contains 24x24 Tile (House 24m)
 */
export interface TmcstOverMapTile<V extends string = any> {
  type: 'OverMapNode';
  /**
   * `value` field is a `string`, is the overmap type name, such as "Forest" or "Desert1" or "house".
   */
  value: V;
  children: TmcstTile[][][];
}

/**
 * A single block in the user playable game ground.
 */
export interface TmcstTile<V extends string = any> {
  type: 'TileNode';
  /**
   * `value` field is a `string`, is the tile type name, such as "Lava Tile" or "wooden-seat-west" or "door".
   */
  value: V;
}
