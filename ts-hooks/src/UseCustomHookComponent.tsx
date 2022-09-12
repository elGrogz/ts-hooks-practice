import { useState, useEffect, useMemo } from "react";

export interface Beverage {
  name: string;
  producerName: string;
  beverageName: string;
  beverageColor: string;
  beverageStyle: string;
  producerLocation: string;
  abv: number;
  ibu: number;
  logo: string;
  level: number;
}

function useFetchData<Payload>(url: string): {
  data: Payload | null;
  done: boolean;
} {
  const [data, setData] = useState<Payload | null>(null);
  const [done, setDone] = useState<boolean>(false);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data: Payload) => {
        setData(data);
        setDone(true);
      });
  }, [url]);

  return {
    data,
    done,
  };
}

function UseCustomHookComponent() {
  // const { data, done } = useFetchData<Beverage[]>("/hv-taplist.json");
  const { data, done } = useFetchData<Beverage[]>(
    "https://raw.githubusercontent.com/jherr/ts-hooks/master/public/hv-taplist.json"
  );

  const portlandTaps = useMemo(
    () =>
      (data || []).filter((bev) => bev.producerLocation.includes("Portland")),
    [data]
  );

  return (
    <div>
      {done && portlandTaps.length && (
        <img alt="Beverage Logo" src={portlandTaps![0].logo} />
      )}
    </div>
  );
}

export default UseCustomHookComponent;
