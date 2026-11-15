# Understanding Type Aliases Versus Interfaces in TypeScript

Choosing between type aliases and interfaces is a fundamental decision when we define types. Both tools are used to define the shape of objects. Knowing when to use each improves code maintainability and type safety.

Interfaces refers to declaration merging. This feature allows us to extend or augment existing definitions without blockings across different files. For example, declaring an interface `Person` with a `name` property and later extending it via inheritance automatically merges both into a single cohesive structure.
