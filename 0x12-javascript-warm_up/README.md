# 0x12. JavaScript - Warm up

Introductory JavaScript scripts executed with Node.js (v14.x) adhering to `semistandard` code style guidelines.

## `deepMerge`

`deepMerge(target, source)` recursively merges properties from `source` into
`target` and returns the updated target object.

- Nested plain objects are merged recursively.
- Arrays and primitive values replace the corresponding target values.
- The target object is mutated.

```javascript
const deepMerge = require('./deepMerge');

const target = { user: { name: 'Ada', active: true } };
const source = { user: { active: false, role: 'engineer' } };

deepMerge(target, source);
// { user: { name: 'Ada', active: false, role: 'engineer' } }
```
