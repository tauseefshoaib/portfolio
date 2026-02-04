# Memoization in React: When It Helps (And When It Hurts)

Memoization is a performance tool, not a default setting. Use it to avoid repeated work, not to make everything “faster.” This post covers the signals to look for and the practical places where `useMemo`, `useCallback`, and `React.memo` actually pay off.

## The Core Idea

Memoization caches the result of expensive work so you skip recomputation when inputs haven’t changed. In React, that usually means:
- Skipping expensive calculations
- Avoiding unnecessary re-renders in child components
- Stabilizing references passed to children

## When It Helps

Memoize when the following are true:
- A calculation is meaningfully expensive and re-runs often.
- A child component is re-rendering due to unstable props.
- The component tree is large and the render cost is measurable.

Practical examples:
- Sorting or filtering large lists on every render
- Heavy string or date formatting in tight loops
- Components that render many items and receive object or function props

## When It Hurts

Memoization has a cost:
- More code
- More memory
- Extra comparisons

Avoid it when:
- The work is cheap
- The component rarely re-renders
- The props are primitives and stable already

Premature memoization can slow you down and make the code harder to maintain.

## A Simple Heuristic

If you cannot measure it, do not memoize it. Start by shipping the simplest version, then profile:
- Use the React DevTools Profiler
- Check render counts
- Measure time in real flows, not just theory

## Common Patterns That Work

1. `useMemo` for expensive derived data
2. `useCallback` for stable event handlers passed to memoized children
3. `React.memo` for components that render often with stable props

## Final Take

Memoization is great when you can prove it saves time. Keep it as a targeted optimization, not a blanket rule.
