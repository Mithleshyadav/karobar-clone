import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TransactionsTable = () => {
  const data = [
    {
      id: 1,
      type: "Credit",
      date: "2026-04-14",
      total: "Rs 1000",
      status: "Completed",
      balance: "Rs 5000",
      remarks: "Payment received",
    },
    {
      id: 2,
      type: "Debit",
      date: "2026-04-13",
      total: "Rs 2000",
      status: "Pending",
      balance: "Rs 3000",
      remarks: "Purchase",
    },
  ];

 const tableFields = [ "Type", "Date", "Total", "Status", "Balance", "Remarks" ];
 

  return (
    <>
      <Table className="[&_tr]:border-b-0">
        {/* Header */}
        <TableHeader className="bg-backgroundLight">
          <TableRow>
            {tableFields.map((field) => (
              <TableHead key={field} className="py-4 text-white/60 text-base">
                {field}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id} className="hover:bg-white/5">
              <TableCell className="py-4 text-white/60 text-base">{item.type}</TableCell>
              <TableCell className="py-4 text-white/60 text-base">{item.date}</TableCell>
              <TableCell className="py-4 text-white/60 text-base">{item.total}</TableCell>
              <TableCell className="py-4 text-white/60 text-base">{item.status}</TableCell>
              <TableCell className="py-4 text-white/60 text-base">{item.balance}</TableCell>
              <TableCell className="py-4 text-white/60 text-base">{item.remarks}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default TransactionsTable;
