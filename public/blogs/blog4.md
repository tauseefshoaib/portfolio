# FlatList Mastery: Rendering Large Lists Smoothly

Large lists are a top source of jank in React Native. `FlatList` is powerful, but only when tuned correctly.

## Key Practices

- Use stable `keyExtractor` values
- Provide `getItemLayout` when item heights are known
- Use `windowSize` and `initialNumToRender` wisely
- Avoid inline `renderItem` functions

## Reduce Work Per Row

Keep row components small, memoized, and avoid expensive formatting inside render.

## Avoid Nested Scrolls

Nested lists inside scroll views often cause performance issues.

## Debug and Profile

Use Flipper to monitor re-renders and measure JS thread time.

## Final Take

Lists should feel instant. Optimize early and keep them lean.
