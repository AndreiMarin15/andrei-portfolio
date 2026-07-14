# Coding Standards & Best Practices

This project is a personal portfolio built with Next.js 14 (App Router), React 18, Tailwind CSS, shadcn/ui, and Framer Motion. It uses JavaScript (JSX) with path aliases configured via jsconfig.json (`@/*` → `./src/*`).

---

## Project Structure

- `src/app/` — Next.js App Router pages, layouts, and API routes
- `src/components/ui/` — shadcn/ui primitives (do not edit directly)
- `src/components/templates/` — Composed, project-specific components
- `src/app/framer/` — Shared animation utilities (Framer Motion)
- `src/lib/` — Utility functions (e.g., `cn()` for class merging)
- `public/assets/` — Static images and files

---

## React & JSX Guidelines

### Component Design
- Use functional components exclusively. No class components.
- Keep components small and focused on a single responsibility.
- Extract reusable logic into custom hooks (prefix with `use`).
- Prefer composition over prop-drilling — use children and render patterns.
- Co-locate related files: keep component-specific styles, hooks, and helpers next to the component.

### Hooks
- Only call hooks at the top level — never inside loops, conditions, or nested functions.
- Always include all dependencies in `useEffect` dependency arrays. Use ESLint's `react-hooks/exhaustive-deps` rule.
- Clean up side effects in `useEffect` return functions (event listeners, subscriptions, timers).
- Extract complex or shared stateful logic into custom hooks in a `hooks/` directory or next to the consuming component.
- Prefer `useCallback` and `useMemo` only when there is a measurable performance benefit — do not prematurely optimize.

### Props & State
- Destructure props in the function signature for readability.
- Keep state as close to where it's used as possible — lift only when necessary.
- Derive values from existing state instead of storing redundant state.
- Use controlled components for form inputs.

### Event Handlers
- Name handlers with the `handle` prefix (e.g., `handleSubmit`, `handleClick`).
- For prop callbacks, use the `on` prefix (e.g., `onSubmit`, `onChange`).

---

## Next.js App Router Conventions

### Server vs Client Components
- Components are Server Components by default. Only add `"use client"` when you need browser APIs, hooks, or event handlers.
- Keep `"use client"` boundaries as low as possible in the tree — wrap the smallest interactive piece, not entire pages.
- Server Components can import Client Components, but not the other way around.

### Data Fetching
- Prefer fetching data in Server Components using `async/await` directly.
- For Client Components that need data, use `useEffect` with proper loading and error states.
- Always handle loading states (skeletons or spinners) and error states gracefully.

### Routing & Layouts
- Use the file-system routing conventions: `page.jsx` for routes, `layout.jsx` for shared layouts, `loading.jsx` for Suspense boundaries, `error.jsx` for error boundaries.
- Route groups `(groupName)` are for organizing without affecting URL structure.
- Keep layouts minimal — do not put page-specific logic in them.

### API Routes
- Use Route Handlers (`route.js`) in `src/app/api/` for API endpoints.
- Return proper HTTP status codes and consistent JSON shapes.
- Validate incoming request data before processing.

### Metadata & SEO
- Use the `metadata` export in `layout.jsx` or `page.jsx` for SEO — avoid the `<Head>` component from `next/head` in App Router (it's a Pages Router pattern).
- Always include a descriptive `title` and `description`.

---

## JavaScript Best Practices

### Naming Conventions
- `camelCase` for variables, functions, and hook names.
- `PascalCase` for components and classes.
- `UPPER_SNAKE_CASE` for true constants and environment variable references.
- Prefix booleans with `is`, `has`, or `should` (e.g., `isLoading`, `hasError`).
- Use descriptive names — prioritize clarity over brevity.

### Code Style
- Use `const` by default; use `let` only when reassignment is needed. Never use `var`.
- Prefer template literals over string concatenation.
- Use optional chaining (`?.`) and nullish coalescing (`??`) for safer property access.
- Prefer early returns to reduce nesting.
- Destructure objects and arrays where it improves readability.
- Use arrow functions for inline callbacks and non-exported helpers. Use named function declarations for exported/top-level functions.

### Error Handling
- Always wrap async operations in try/catch blocks.
- Provide meaningful error messages in user-facing contexts.
- Never silently swallow errors — at minimum, log them.

### Imports
- Use the `@/` path alias for project imports (e.g., `@/components/ui/button`).
- Group imports in this order: (1) React/Next.js, (2) third-party libraries, (3) project aliases, (4) relative imports. Separate groups with a blank line.

---

## Tailwind CSS & Styling

### Utility-First Approach
- Style directly with Tailwind utility classes in JSX. Avoid custom CSS unless absolutely necessary.
- Use the `cn()` utility from `@/lib/utils` to conditionally merge classes.
- Keep class strings readable — break long class lists onto multiple lines for complex elements.
- Use `class-variance-authority` (CVA) for component variants when building reusable UI.

### Responsive Design
- Mobile-first: start with base styles, layer on `sm:`, `md:`, `lg:` breakpoints.
- Use `dvh` units for viewport height on mobile (as already done in this project).
- Test on multiple screen sizes — this portfolio is viewed on all devices.

### Design Tokens
- Use CSS variables defined in `globals.css` for theme colors (configured via shadcn/ui).
- Reference theme tokens like `bg-background`, `text-foreground`, `border-border` for consistency.
- Use the teal color palette (`teal-500`, `teal-600`, `#008080`) as the project's primary accent.

---

## Framer Motion & Animations

- Use the shared `<Reveal>` component from `@/app/framer/animate-on-view.jsx` for scroll-triggered reveals.
- Keep animation values consistent: use `0.25s–0.5s` durations and `easeInOut` easing as the default.
- Use `initial`, `animate`, and `exit` props for enter/exit animations.
- Avoid animating layout-triggering properties (width, height) — prefer `opacity`, `transform`, and `scale`.
- Set `once: true` on intersection observer hooks to avoid re-triggering on scroll.

---

## Accessibility

- All images must have meaningful `alt` text (not just "image" or "pfp").
- Interactive elements must be keyboard-accessible.
- Use semantic HTML (`nav`, `main`, `header`, `section`) over generic `div` soup.
- Ensure sufficient color contrast — especially with teal on dark backgrounds.
- Add `aria-label` to icon-only buttons and links.

---

## Performance

- Use `next/image` for all images — configure `priority` for above-the-fold content.
- Lazy-load below-the-fold content and heavy components.
- Avoid unnecessary re-renders: memoize expensive computations, not everything.
- Keep client bundle small — push logic to Server Components where possible.
- Use `next/font` for font loading (already configured with Inter).

---

## General Principles

- DRY (Don't Repeat Yourself) — but not at the expense of readability. A little duplication is better than a bad abstraction.
- YAGNI (You Ain't Gonna Need It) — don't build features or abstractions preemptively.
- Keep functions under ~30 lines. If a function does too much, split it.
- Write code for the next reader (including future you).
- Leave code better than you found it — small improvements are welcome, but don't refactor unrelated code in the same change.
