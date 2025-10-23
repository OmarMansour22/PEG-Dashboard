export default function ProjectRisks() {
  const risks = [
    {
      id: 1,
      risk: "تأخر في توريد المواد للموقع.",
      solution: "إجراء متابعة دقيقة مع الموردين لتفادي أي تأخير في التسليم.",
    },
    {
      id: 2,
      risk: "سوء الأحوال الجوية وتأثيرها على الجدول الزمني.",
      solution: "تعديل الخطة الزمنية بما يتناسب مع الظروف المناخية المتوقعة.",
    },
    {
      id: 3,
      risk: "تأخر إصدار التصاريح اللازمة.",
      solution: "التنسيق المسبق مع الجهات المعنية.",
    },
  ];

  return (
    <div className="overflow-x-auto text-xs text-gray-300">
      <table className="w-full border border-gray-700 text-center">
        <thead className="bg-gray-800 text-gray-300 text-xs">
          <tr>
            <th className="border border-gray-700 px-1 py-1">الرقم</th>
            <th className="border border-gray-700 px-1 py-1">المخاطر</th>
            <th className="border border-gray-700 px-1 py-1">الحل</th>
          </tr>
        </thead>
        <tbody>
          {risks.map((r) => (
            <tr key={r.id} className="hover:bg-gray-800/60">
              <td className="border border-gray-700 px-2 py-1">{r.id}</td>
              <td className="border border-gray-700 px-2 py-1">{r.risk}</td>
              <td className="border border-gray-700 px-2 py-1">{r.solution}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
