import Link from "next/link";
import { nav } from "../navigation";

export default function Layout({
  children,
  sidepanel,
}: {
  children: React.ReactNode;
  sidepanel: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-3 gap-4 h-full">
      <div className="col-span-2 bg-slate-900 p-8">
        {children}
        <ul role="list" className="divide-y divide-slate-600">
          {nav.map((item, index) => (
            <li key={item.name + index} className="py-4">
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="col bg-slate-800 p-8">
        <p className="p-2 bg-slate-900 rounded-md mb-4">@Sidepanel</p>
        {sidepanel}
      </div>
    </div>
  );
}
