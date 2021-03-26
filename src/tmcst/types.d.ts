/**
 * World, contains 100x100 Biome (Global 6kkm)
 */
interface TmcstWorld {
  children: TmcstBiome[][]
}

/**
 * Biome, contains 250x250 Overmap (City 6km)
 */
interface TmcstBiome {
  type: "BiomeNode"
  /**
   * `value` field is a `string`, is the biome type name, such as "City" or "MountainArea2" or "slum".
   */
  value: string
  children: TmcstOverMap[][]
}

/**
 * Overmap, contains 24x24 Tile (House 24m)
 */
interface TmcstOverMap {
  type: "OverMapNode"
  /**
   * `value` field is a `string`, is the overmap type name, such as "Forest" or "Desert1" or "house".
   */
  value: string
  children: TmcstTile[][]
}

/**
 * A single block in the user playable game ground.
 */
interface TmcstTile {
  type: "TileNode"
  /**
   * `value` field is a `string`, is the tile type name, such as "Lava Tile" or "wooden-seat-west" or "door".
   */
  value: string
}
