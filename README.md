# Issues found:

1. Cahed Parallel Route?

@sidepanel/projects and @sidepanel/team are both intercepting the same route `/admin/create` and `admin/edit/[id]`

If you intercept the the route from /team , the intercepted route is @sidepanel/team(...)admin/_ Afterwards, if you go back and
try and intercept the route from /projects the intercepted route displayed is @sidepanel/team(...)admin/_ instead of @sidepanel/projects(...)admin/\*
The same happens if you try it the other way around. I have tried using force-dynamic, no joy.

# Fix:

Adding a searchParams to the parallel route page fixes this issue. The correct parallel page is displayed when intercepted.

```typescript
export default function Page({
  params,
  searchParams,
}: {
  params: string;
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      INTERCEPTED [@Sidepanel/team] (..)admin/create?{" "}
      {JSON.stringify(searchParams)}
    </>
  );
}`
```
