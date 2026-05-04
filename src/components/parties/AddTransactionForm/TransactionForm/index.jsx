import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

import { LuSettings } from "react-icons/lu";
import { FaArrowLeft } from "react-icons/fa";
import { IoCameraOutline } from "react-icons/io5";
import { Calendar } from "lucide-react";

import TransactionTable from "../TransactionTable";

import { useForm, FormProvider } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

/* ---------------- SCHEMA ---------------- */
const itemSchema = z.object({
  name: z.string().min(1, "Item name required"),
  qty: z.number().min(1, "Qty required"),
  rate: z.number().min(0),
  discountPercent: z.number().optional(),
  discountRs: z.number().optional(),
  amount: z.number(),
});

const formSchema = z.object({
  party: z.string().min(1, "Party required"),
  invoiceNo: z.string(),
  date: z.string().min(1, "Date required"),
  notes: z.string().optional(),
  paymentMode: z.string(),
  totalAmount: z.number(),
  image: z.any().optional(),
  items: z.array(itemSchema).min(1, "Add at least one item"),
});

const TransactionForm = () => {
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      party: "",
      invoiceNo: "3",
      date: "",
      notes: "",
      paymentMode: "Cash",
      totalAmount: 0,
      image: null,
      items: [
        {
          name: "",
          qty: "",
          rate: "",
          discountPercent: "",
          discountRs: "",
          amount: 0,
        },
      ],
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = methods;

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setValue("image", file);
    setPreview(URL.createObjectURL(file));
  };

  /* ---------------- SUBMIT ---------------- */
  const onSubmit = (data, isNew = false) => {
    console.log("FINAL FORM DATA:", data);

    if (isNew) {
      reset();
      setPreview(null);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit((data) => onSubmit(data, false))}
        className="bg-background p-8 space-y-6 w-full h-full text-white"
      >
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <Button
            onClick={() => navigate("/parties")}
            className="hover:bg-backgroundLight">
              <FaArrowLeft />
            </Button>
            <h2 className="text-xl font-bold">Create Sales Invoices</h2>
          </div>

          <Button className="p-2 bg-backgrounddeep text-white/70 border border-white/10 hover:text-white">
            <LuSettings />
          </Button>
        </div>

        {/* MAIN CARD */}
        <div className="bg-backgrounddeep rounded-2xl border border-white/10 p-6 space-y-6">
          {/* TOP */}
          <div className="flex justify-between items-end">
            <div className="space-y-2 w-[300px]">
              <label className="text-sm text-white/70">Select Party</label>
              <p className="text-green-400 text-sm">Rs. 3,100</p>

              <Input
                {...register("party")}
                placeholder="Enter party name"
                className="bg-transparent border-white/20"
              />
              {errors.party && (
                <p className="text-red-500 text-sm">{errors.party.message}</p>
              )}
            </div>

            <div className="flex gap-6 items-end">
              <div className="flex flex-col">
                <label className="text-sm text-white/70 mb-1">Invoice No</label>
                <Input
                  {...register("invoiceNo")}
                  className="bg-transparent border-white/20 w-[120px]"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-white/70 mb-1">
                  Invoice Date
                </label>

                <div className="relative">
                  <Input
                    type="date"
                    {...register("date")}
                    className="bg-transparent border-white/20 text-white pr-10 [color-scheme:dark]"
                  />

                  <Calendar
                    className="absolute right-3 top-1/2 -translate-y-1/2 
                 text-white pointer-events-none"
                    size={18}
                  />
                </div>

                {errors.date && (
                  <p className="text-red-500 text-sm">{errors.date.message}</p>
                )}
              </div>
            </div>
          </div>

          

          {/* TABLE */}
          <TransactionTable />

          {/* BOTTOM */}
          <div className="grid grid-cols-2 gap-8">
            {/* LEFT */}
            <div className="space-y-6">
              <div>
                <label className="text-sm text-white/70">
                  Notes or Remarks
                </label>
                <textarea
                  {...register("notes")}
                  className="w-full mt-1 p-3 rounded-lg bg-transparent border border-white/20 outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-white/70">Attach Images</label>

                <label className="w-20 h-20 border border-white/20 rounded-lg flex items-center justify-center cursor-pointer overflow-hidden">
                  {preview ? (
                    <img src={preview} className="w-full h-full object-cover" />
                  ) : (
                    <IoCameraOutline size={22} />
                  )}

                  <input
                    type="file"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* RIGHT */}
            <div className="space-y-6">
              <div className="flex items-center justify-between gap-4">
                <label className="text-sm text-white/70 w-40">
                  Total Amount
                </label>
                <Input
                  {...register("totalAmount", { valueAsNumber: true })}
                  className="bg-transparent border-white/20 flex-1"
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                <label className="text-sm text-white/70 w-40">
                  Payment Mode
                </label>

                <select
                  {...register("paymentMode")}
                  className="flex-1 p-2 rounded-lg bg-transparent border border-white/20"
                >
                  <option className="bg-black">Cash</option>
                  <option className="bg-black">Bank</option>
                  <option className="bg-black">Online</option>
                </select>
              </div>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleSubmit((data) => onSubmit(data, true))}
              className="border-white/20"
            >
              Save & New
            </Button>

            <Button type="submit" className="bg-btnblue hover:bg-btnblue/90">
              Save Sales Invoice
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default TransactionForm;
