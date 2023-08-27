import Chart from "@/app/Chart";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams: { term: string };
}) {
  return (
    <Suspense fallback={<BarSkeleton />} key={searchParams.term}>
      <Chart term={searchParams.term} />
    </Suspense>
  );
}

function BarSkeleton() {
  return (
    <div className="p-6 space-y-4 flex flex-col">
      <div className="w-10/12 h-4 bg-gray-200 rounded animate-pulse" />
      <div className="w-7/12 h-4 bg-gray-200 rounded animate-pulse" />
      <div className="w-6/12 h-4 bg-gray-200 rounded animate-pulse" />
      <div className="w-4/12 h-4 bg-gray-200 rounded animate-pulse" />
      <div className="w-3/12 h-4 bg-gray-200 rounded animate-pulse" />
      <div className="w-2/12 h-4 bg-gray-200 rounded animate-pulse" />
    </div>
  );
}
