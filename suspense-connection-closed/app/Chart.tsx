import { ClientChart } from "./ClientChart";

export default async function Chart({ term }: { term: string }) {
  const response = await fetch(
    `https://gallica-grapher-production.up.railway.app/api/mostTermsAtTime?term=${
      term ?? "eiffel"
    }&year=1889`
  );

  if (response.status !== 200) {
    return;
  }
  const parsedResponse = (await response.json()) as [string, number][];

  return <ClientChart data={parsedResponse} />;
}
