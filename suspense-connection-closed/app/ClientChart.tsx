"use client";

import { HighchartsReact } from "highcharts-react-official";
import Highcharts from "highcharts";
import { useRouter, useSearchParams } from "next/navigation";

export type NearbyData = [string, number][];

export function ClientChart({ data }: { data?: NearbyData }) {
  const router = useRouter();
  const params = useSearchParams();
  const highchartsOptions: Highcharts.Options = {
    chart: {
      type: "bar",
    },
    title: {
      text: "",
    },
    yAxis: {
      title: {
        text: "Count",
      },
    },
    xAxis: {
      categories: data?.map(([term, _]) => term),
      title: {
        text: null,
      },
      gridLineWidth: 1,
      lineWidth: 0,
    },
    series: [
      // @ts-ignore
      {
        name: "Count",
        data: data?.map(([_, count]) => count),
      },
    ],
  };

  return (
    <>
      {data && data.length > 0 && (
        <div className={"flex flex-col gap-5 m-2"}>
          <h2 className={"text-lg"}>
            {`Terms associated with ${params.get("term") ?? "eiffel"} in 1889`}
          </h2>
          <HighchartsReact
            highcharts={Highcharts}
            options={highchartsOptions}
          />
        </div>
      )}
      <label htmlFor="term">Search for a new term: </label>
      <input
        type="text"
        name="term"
        id="term"
        className={"border "}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            router.push("/?term=" + e.currentTarget.value);
          }
        }}
      />
    </>
  );
}
