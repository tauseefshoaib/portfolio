# Frontend Optimization Playbook: Measurable Wins

Performance work should be visible to users and measurable for you. This is a quick, practical playbook for common frontend bottlenecks and how to fix them.

## Start With Measurement

Before changing code:
- Run Lighthouse or WebPageTest
- Capture a baseline
- Focus on LCP, INP, and CLS

## Biggest Wins First

1. Reduce JavaScript
2. Defer non-critical work
3. Optimize images and fonts
4. Cut layout thrash

## Practical Tactics

### 1. Split and Defer

Use dynamic imports for routes and heavy components. Defer analytics and third-party widgets until after the main content is interactive.

### 2. Optimize Assets

- Serve responsive images
- Compress and preconnect critical fonts
- Avoid multiple font families

### 3. Reduce Re-Renders

- Stabilize props
- Memoize only when profiling shows a win
- Avoid inline object/array props in hot paths

### 4. Avoid Layout Thrash

- Batch DOM reads and writes
- Prefer `transform` and `opacity` for animations
- Set image dimensions to prevent layout shifts

## A Simple Checklist

- Baseline metrics saved
- Largest bundles identified
- Heavy components split
- Images resized and compressed
- Fonts minimized
- Re-render hotspots profiled

## Final Take

Optimization is not a one-time task. Ship, measure, improve, repeat.
