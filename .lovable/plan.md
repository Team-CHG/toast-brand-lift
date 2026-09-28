# Sync Downtown Menu Now

## What
Trigger the nightly Toast menu sync for the Downtown location immediately.

## Steps
1. Call the `sync-toast-menus` backend function with `group=downtown`.
2. Confirm the result: category and item counts, items removed, Sides still hidden.
3. Report the fresh Downtown menu counts to the user.

## Notes
- No code or design changes.
- Sides exclusion stays in place automatically.
