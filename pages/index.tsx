import { ColumnList } from "../components/organisms";

export default function Home() {
  return (
    <ColumnList
      columns={[
        { title: "Column 1", cards: ["Card 1", "Card 2"] },
        { title: "Column 2", cards: ["Card 3", "Card 4"] },
      ]}
    />
  );
}
