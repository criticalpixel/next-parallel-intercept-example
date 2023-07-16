import { interceptRoutes } from "@/app/navigation";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <pre className="text-xl rounded-md">[/projects] Projects</pre>
      <p>Go back before hitting second url</p>
      <ul role="list" className="mt-4 text-sm divide-y divide-slate-600">
        {interceptRoutes.map((item, index) => (
          <li key={item.name + index} className="py-1">
            INTERCEPT : <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
