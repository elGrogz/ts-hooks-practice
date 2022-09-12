import { useState, useEffect } from "react";

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
  const { data, done } = useFetchData<Beverage[]>("/hv-taplist.json");
  return <div>{done && <img alt="Beverage Logo" src={data![1].logo} />}</div>;
}

export default UseCustomHookComponent;
