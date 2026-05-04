import { useEffect, useState } from "react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { FiPlus } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";

const TransactionTable = () => {
  const [activeCell, setActiveCell] = useState(null);
  const [hoveredCell, setHoveredCell] = useState(null);

  const {
    register,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const items = watch("items");

  /* ✅ CALCULATE AMOUNT */
  useEffect(() => {
    if (!items) return;

    items.forEach((item, index) => {
      const qty = Number(item.qty) || 0;
      const rate = Number(item.rate) || 0;
      const discountPercent = Number(item.discountPercent) || 0;
      const discountRs = Number(item.discountRs) || 0;

      let total = qty * rate;

      if (discountPercent) {
        total -= (total * discountPercent) / 100;
      }

      if (discountRs) {
        total -= discountRs;
      }

      const finalAmount = Math.max(0, total);

      if (item.amount !== finalAmount) {
        setValue(`items.${index}.amount`, finalAmount);
      }
    });
  }, [items, fields, setValue]);

  /* ✅ SUBTOTAL */
  const subtotal =
    items?.reduce((sum, item) => sum + (Number(item.amount) || 0), 0) || 0;

  useEffect(() => {
    setValue("totalAmount", subtotal);
  }, [subtotal, setValue]);

  /* ✅ ADD ITEM */
  const addItem = () => {
    append({
      name: "",
      qty: "",
      rate: "",
      discountPercent: "",
      discountRs: "",
      amount: 0,
    });
  };

  const getCellStyle = (cellId) =>
    `border border-white/10 p-0 transition ${
      activeCell === cellId ? "ring-1 ring-btnblue" : ""
    }`;

  const renderCell = (cellId, content) => (
    <TableCell
      className={getCellStyle(cellId)}
      onClick={() => setActiveCell(cellId)}
    >
      <div
        onMouseEnter={() => setHoveredCell(cellId)}
        onMouseLeave={() => setHoveredCell(null)}
        className={`px-2 py-2 transition ${
          hoveredCell === cellId ? "bg-background" : ""
        }`}
      >
        {content}
      </div>
    </TableCell>
  );

  return (
      <div className=" bg-backgrounddeep overflow-x-auto rounded-2xl border border-white/10">
        <Table className="table-fixed w-full">
          <TableHeader>
            <TableRow className="bg-background hover:bg-transparent">
              <TableHead className="border border-white/10 ">S.N.</TableHead>
              <TableHead className="border border-white/10 ">
                Name
              </TableHead>
              <TableHead className="border border-white/10">
                Quantity
              </TableHead>
              <TableHead className="border border-white/10 ">
                Rate
              </TableHead>
              <TableHead
                colSpan={2}
                className="border border-white/10 text-center "
              >
                Discount
              </TableHead>
              <TableHead className="border border-white/10 text-right">
                Amount
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {fields.map((field, index) => {
              return (
                <TableRow key={field.id} className="hover:bg-transparent">
                  {renderCell(`sn-${index}`, index + 1)}

                  {renderCell(
                    `name-${index}`,
                    <Input
                      {...register(`items.${index}.name`)}
                      placeholder="Enter Item name"
                      className="bg-transparent border-none focus-visible:ring-0 px-0 h-auto"
                    />,
                  )}

                  {renderCell(
                    `qty-${index}`,
                    <Input
                      {...register(`items.${index}.qty`)}
                      className="bg-transparent border-none focus-visible:ring-0 px-0 h-auto"
                    />,
                  )}

                  {renderCell(
                    `rate-${index}`,
                    <div className="flex items-center gap-1">
                      <span className="text-white/60">Rs.</span>
                      <Input
                        {...register(`items.${index}.rate`)}
                        className="bg-transparent border-none focus-visible:ring-0 px-0 h-auto"
                      />
                    </div>,
                  )}

                  {renderCell(
                    `discountP-${index}`,
                    <div className="flex items-center gap-1">
                      <Input
                        {...register(`items.${index}.discountPercent`)}
                        className="w-[30px] bg-transparent border-none focus-visible:ring-0 px-0 h-auto"
                      />
                      <span className="text-white/60">%</span>
                    </div>,
                  )}

                  {renderCell(
                    `discountR-${index}`,
                    <div className="flex items-center gap-1">
                      <span className="text-white/60">Rs.</span>
                      <Input
                        {...register(`items.${index}.discountRs`)}
                        className="bg-transparent border-none focus-visible:ring-0 px-0 h-auto"
                      />
                    </div>,
                  )}
                  {renderCell(
                    `amount-${index}`,
                    <div className="  flex items-center justify-between">
                      <span>Rs. {Number(items?.[index]?.amount || 0)}</span>

                      <RiDeleteBin6Line
                        onClick={() => remove(index)}
                        className="text-red-500 cursor-pointer"
                      />
                    </div>,
                  )}
                  
                </TableRow>
              );
            })}

            {/* ADD + SUBTOTAL */}
            <TableRow className="hover:bg-transparent">
              <TableCell
                colSpan={4}
                onClick={addItem}
                className="border border-white/10 cursor-pointer text-green-400 px-2 py-2 hover:bg-background"
              >
                <div className="flex items-center gap-2">
                  <FiPlus />
                  Add Billing Item
                </div>
              </TableCell>

              <TableCell
                colSpan={3}
                className="border border-white/10 text-left text-white/70 px-2 py-2"
              >
                Sub Total :Rs. {subtotal}
              </TableCell>

             
            </TableRow>
          </TableBody>
        </Table>
      </div>
    
  );
};

export default TransactionTable;
