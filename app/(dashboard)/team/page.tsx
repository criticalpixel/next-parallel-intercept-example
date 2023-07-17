import { interceptRoutes } from "@/app/navigation";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-slate-800 rounded-md p-4">
      <pre className="text-xl rounded-md">[/team] Team</pre>
      <p>Go back before hitting second url</p>
      <ul role="list" className="mt-4 text-sm divide-y divide-slate-600">
        <li className="py-1">
          <Link href={"/admin/create?y=9999"}>intercept create</Link>
        </li>
        {interceptRoutes.map((item, index) => (
          <li key={item.name + index} className="py-1">
            INTERCEPT : <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
