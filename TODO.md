# TODO: Fix CSS Specificity and Responsiveness Issues

## Issues Identified
- Dashboard.jsx has redundant flex layout conflicting with MainLayout, causing horizontal overflow when sidebar expands.
- Sidebar pushes content off-screen on small screens.
- Navbar and other components need better responsiveness.
- Lack of overflow-x-hidden leading to horizontal scrolling.

## Plan
1. **Remove redundant layout in Dashboard.jsx**: Eliminate the outer flex div and Sidebar import to let MainLayout handle layout.
2. **Make Sidebar responsive**: On screens < md (768px), make sidebar overlay (absolute position) instead of pushing content.
3. **Add overflow-x-hidden**: Prevent horizontal scrolling.
4. **Adjust Navbar**: Ensure responsive behavior.
5. **Enhance overall responsiveness**: Add responsive classes to components, ensure grids and flex adapt to all screen sizes.
6. **Add smoothness**: Include transitions for sidebar toggle, hover effects.
7. **Optimize for performance**: Ensure no unnecessary re-renders, use efficient CSS.

## Steps
- [x] Edit Dashboard.jsx: Remove redundant layout div and Sidebar import.
- [x] Edit Sidebar.jsx: Add responsive overlay behavior for small screens.
- [x] Edit MainLayout.jsx: Add overflow-x-hidden, adjust padding/margins.
- [x] Edit Navbar.jsx: Make search bar and buttons responsive.
- [x] Edit StatCards.jsx: Ensure max-width and responsive grid.
- [x] Edit Buckets.jsx: Responsive height and layout.
- [x] Edit StreakCard.jsx: Responsive text sizes.
- [x] Edit RevisonProblemCard.jsx: Responsive flex and tags.
- [x] Edit ProgressCard.jsx: Responsive width and layout.
- [x] Test on various screen sizes and fix any remaining issues.
- [x] Add transitions for smoother interactions.
