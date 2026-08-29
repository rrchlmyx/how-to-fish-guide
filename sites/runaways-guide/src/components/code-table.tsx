import type { CodeRow } from "@/lib/guides";
import { CopyCodeButton } from "@/components/copy-code-button";

export function CodeTable({ rows }: { rows: CodeRow[] }) {
  return (
    <div className="table-wrap">
      <table className="data-table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Reported reward</th>
            <th>Copy</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.code}>
              <td>
                <code>{row.code}</code>
              </td>
              <td>
                {row.reward}
                {row.note ? <small className="table-note">{row.note}</small> : null}
              </td>
              <td>
                <CopyCodeButton code={row.code} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
