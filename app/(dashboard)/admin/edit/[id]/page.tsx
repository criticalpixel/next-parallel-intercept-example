export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <pre className="text-xl rounded-md p-4 bg-slate-800">
        [/admin/create] Edit Page for - {params.id}
      </pre>
    </>
  );
}
