# TMCST

**T**ile**M**ap **C**oncrete **S**yntax **T**ree format.

***

**tmcst** is a specification for representing game tile map in a [syntax
tree](https://github.com/syntax-tree/unist#syntax-tree).
It implements the **[unist](https://github.com/syntax-tree/unist)** spec.

## Introduction

This document defines a format for representing grid of tiles as a [concrete
syntax tree](https://github.com/syntax-tree/unist#syntax-tree), which records every detail of the map.

Why syntax tree instead of 3D grid for a game map? Because complex map generation and manipulation needs a more structural data.

## Nodes

### `Parent`

```idl
interface Parent <: UnistParent {
  children: [[Tile | OverMap]]
}
```

**Parent** ([**TmcstParent**](https://github.com/syntax-tree/unist#parent)) represents a node in tmcst containing other nodes (said to be [*children*](https://github.com/syntax-tree/unist#child)).

It is an abstract interface that add `children` field to the node.

Children's first dimension is the rows (0th row, 1st row), from top ↓to bottom, so human reading of map is easier:

```json
[
  [],
  []
]
```

And the second dimension is the columns (0th row, 1st row), from left →to right.

### `World`

```idl
interface World <: Parent {
  type: "WorldNode"
  value: string
  children: [Tile]
}
```

Its `value` field is a `string`, is the overmap type name, such as "Forest" or "Desert1" or "house".

This `value` field is used by the game engine, and the `type` field will be used by syntax tree transformation.

### `Biome`

```idl
interface Biome <: Parent {
  type: "BiomeNode"
  value: string
  children: [Tile]
}
```

Its `value` field is a `string`, is the biome type name, such as "City" or "MountainArea2" or "slum".

This `value` field is used by the game engine, and the `type` field will be used by syntax tree transformation.

### `OverMap`

```idl
interface OverMap <: Parent {
  type: "OverMapNode"
  value: string
  children: [Tile]
}
```

Its `value` field is a `string`, is the overmap type name, such as "Forest" or "Desert1" or "house".

This `value` field is used by the game engine, and the `type` field will be used by syntax tree transformation.

### `Tile`

```idl
interface Tile <: UnistLiteral {
  type: "TileNode"
  value: string
}
```

**Tile** ([**UnistLiteral**](https://github.com/syntax-tree/unist#literal)) represents a node in tmcst containing actuarial tile data.

Its `value` field is a `string`, is the tile type name, such as "Lava Tile" or "wooden-seat-west" or "door".

This `value` field is used by the game engine, and the `type` field will be used by syntax tree transformation.
