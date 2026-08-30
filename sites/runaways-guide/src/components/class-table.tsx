import type { ClassRow } from "@/lib/guides";

export function ClassTable({ rows }: { rows: ClassRow[] }) {
  return (
    <div className="table-wrap">
      <table className="data-table">
        <thead>
          <tr>
            <th>Class</th>
            <th>Cost</th>
            <th>Starting loadout</th>
            <th>Stat bonus</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <td>
                <strong>{row.name}</strong>
              </td>
              <td>{row.cost}</td>
              <td>{row.loadout}</td>
              <td>{row.bonus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
