import type { PriceRow } from "@/lib/guides";

export function PriceTable({ rows }: { rows: PriceRow[] }) {
  return (
    <div className="table-wrap article-table">
      <table className="data-table">
        <thead>
          <tr>
            <th>Creature</th>
            <th>Raw value</th>
            <th>Cooked 1.5x</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <td>
                <strong>{row.name}</strong>
              </td>
              <td>{row.raw}</td>
              <td>{row.cooked}</td>
              <td>{row.note ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
