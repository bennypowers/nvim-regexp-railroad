/**
 * **START**
 * `@scope/`
 * capture group 1:
 *   **ANY** (_>= 0x_)
 * `\\.js"`
 * `;` (_optional_)
 * **END**
 */
/^@scope\/(.*)\.js";?$/;

/**
 * `@scope/`
 * capture group 1:
 *   **ANY** (_>= 0x_)
 * `.`
 * named capture group 2 `extension`:
 *   Either `graphql` or non-capturing group:
 *     Either `t`, `j`, or `cs`
 *   `s`
 * `"`
 * `;` (_optional_)
 */
/@scope\/(.*)\.(?<extension>graphql|(?:t|j|cs)s)";?/;

