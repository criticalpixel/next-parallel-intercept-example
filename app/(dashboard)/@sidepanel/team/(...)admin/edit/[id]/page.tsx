export default function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      INTERCEPTED [@Sidepanel/team] (..)admin/edit/[{params.id}] ?{" "}
      {JSON.stringify(searchParams)}
    </>
  );
}
