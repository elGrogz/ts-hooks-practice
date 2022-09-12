import { ReactNode } from "react";

export interface HeadingProps {
  title: string;
}

export const Heading = ({ title }: { title: string }) => {
  return <h3>{title}</h3>;
};

export function List<ListItem>({
  items,
  render,
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li>{render(item)}</li>
      ))}
    </ul>
  );
}

function TestComponent() {
  return (
    <div>
      <Heading title="Hello!" />
      <List
        items={["a", "b", "c"]}
        render={(string) => <strong>{string}</strong>}
      />
    </div>
  );
}

export default TestComponent;
