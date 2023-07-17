export default function Page({
  params,
  searchParams,
}: {
  params: string;
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      INTERCEPTED [@Sidepanel/projects] (..)admin/create?{" "}
      {JSON.stringify(searchParams)}
    </>
  );
}
