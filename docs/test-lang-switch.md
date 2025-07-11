# Language Switch Test

Current path: {{ $route.path }}

## Test Links

- [Root /](/)
- [Chinese /zh/](/zh/)
- [English /en/](/en/)
- [Japanese /ja/](/ja/)

## Expected Behavior

When on homepage:
- English (root) → `/`
- Chinese → `/zh/`
- Other languages → `/[lang]/`

When on content page (e.g., `/whitepaper/chapter1/`):
- English → `/whitepaper/chapter1/`
- Chinese → `/zh/whitepaper/chapter1/`
- Other languages → `/[lang]/whitepaper/chapter1/`