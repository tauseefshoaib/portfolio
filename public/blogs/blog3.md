# React Native Performance: 12 Practical Wins

Performance wins in React Native usually come from a few repeatable fixes. Here are 12 practical improvements that show measurable impact.

## 1. Avoid Unnecessary Re-Renders

Stabilize props, memoize heavy components, and avoid inline objects in hot paths.

## 2. Optimize Lists

Tune `FlatList` props like `keyExtractor`, `getItemLayout`, and `windowSize`.

## 3. Use `React.memo` Strategically

Memoize components that re-render frequently with stable props.

## 4. Defer Non-Critical Work

Move heavy work after interactions or idle time when possible.

## 5. Use Native Driver for Animations

Prefer animations that can run off the JS thread.

## 6. Reduce Bundle Size

Code-split when appropriate and avoid unused dependencies.

## 7. Image Optimization

Use properly sized images and cache them aggressively.

## 8. Avoid Layout Thrash

Batch layout reads and writes to reduce jank.

## 9. Prefer `useCallback` for Handlers

Stable callbacks help prevent unnecessary re-renders.

## 10. Profile Regularly

Use Flipper and the React DevTools Profiler.

## 11. Avoid Heavy JSON in Render

Move parsing and formatting outside render cycles.

## 12. Measure in Real Devices

Simulators can hide real performance problems.

## Final Take

Start with measurement, fix the biggest issues first, and keep verifying the wins.
