import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

/* ---------------- SCHEMA ---------------- */
const partySchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  phone: z.string().min(10, "Phone must be at least 10 digits"),
  partyType: z.enum(["customer", "supplier"]),
  openingBalance: z.string().optional(),
  date: z.string().optional(),
  balanceType: z.enum(["receive", "give"]),
  address: z.string().optional(),
  email: z.string().email("Invalid email").optional().or(z.literal("")),
  pan: z.string().optional(),
  image: z.any().optional(), // ✅ IMAGE FIELD
});

const AddNewParty = ({ open, setOpen }) => {
  const [activeTab, setActiveTab] = useState("credit");
  const [preview, setPreview] = useState(null); // ✅ IMAGE PREVIEW

  const ref = useRef();
  const fileRef = useRef(); 
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(partySchema),
    defaultValues: {
      fullName: "",
      phone: "",
      partyType: "customer",
      openingBalance: "",
      date: "",
      balanceType: "receive",
      address: "",
      email: "",
      pan: "",
      image: null,
    },
  });

  const partyType = watch("partyType");
  const balanceType = watch("balanceType");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setValue("image", file); // store in form

    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl); // show preview
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [setOpen]);

  if (!open) return null;

  const onSubmit = (data, isNew = false) => {
    console.log("FORM DATA:", data);

    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    console.log("FORMDATA OBJECT:", formData);

    if (isNew) {
      reset();
      setPreview(null);
    } else {
      setOpen(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40">
      <div
        ref={ref}
        className="w-[900px] bg-background p-4 rounded-xl text-white"
      >
        <h1 className="text-2xl font-semibold mb-6">Add New Party</h1>

        <form
          onSubmit={handleSubmit((data) => onSubmit(data, false))}
          className="bg-background  p-6 space-y-6"
        >

          <div className="flex gap-6">

            <div className="w-40 flex flex-col items-center">

              <div
                onClick={() => fileRef.current.click()}
                className="w-40 h-40 border border-white/20 rounded-xl overflow-hidden flex items-center justify-center cursor-pointer hover:bg-white/5"
              >
                {preview ? (
                  <img
                    src={preview}
                    alt="preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-3xl">📷</span>
                )}
              </div>

              <input
                type="file"
                accept="image/*"
                ref={fileRef}
                onChange={handleImageChange}
                className="hidden"
              />

              <Button
                type="button"
                variant="ghost"
                onClick={() => fileRef.current.click()}
                className="w-full mt-3 text-btnblue hover:bg-white/5"
              >
                Upload Photo
              </Button>
            </div>

            {/* FORM */}
            <div className="flex-1 space-y-4">

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-white/70">
                    Full Name
                  </label>
                  <Input
                    placeholder="Enter full name"
                    {...register("fullName")}
                    className="mt-1 py-5 bg-transparent border-white/20"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-sm text-white/70">
                    Phone Number
                  </label>
                  <Input
                    placeholder="Enter phone number"
                    {...register("phone")}
                    className="mt-1 py-5 bg-transparent border-white/20"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              {/* PARTY TYPE */}
              <div>
                <label className="text-sm text-white/70">
                  Party Type
                </label>

                <div className="flex gap-3 mt-2">
                  {["customer", "supplier"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setValue("partyType", type)}
                      className={`px-4 py-2 rounded-lg border ${
                        partyType === type
                          ? "bg-btnblue border-btnblue"
                          : "border-white/20 hover:bg-white/10"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* TABS */}
          <div className="flex gap-6 border-b border-white/10 pb-2">
            {["credit", "additional"].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`pb-2 ${
                  activeTab === tab
                    ? "text-btnblue border-b-2 border-btnblue"
                    : "text-white/60"
                }`}
              >
                {tab === "credit" ? "Credit Info" : "Additional Info"}
              </button>
            ))}
          </div>

          {/* CREDIT */}
          {activeTab === "credit" && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Opening balance"
                  {...register("openingBalance")}
                  className="py-5 bg-transparent border-white/20"
                />
                <Input
                  type="date"
                  {...register("date")}
                  className=" py-5 bg-transparent border-white/20"
                />
              </div>

              <div className="flex gap-3">
                {["receive", "give"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setValue("balanceType", type)}
                    className={`px-4 py-2 rounded-lg border ${
                      balanceType === type
                        ? type === "receive"
                          ? "bg-green-500/20 border-green-500 text-green-400"
                          : "bg-red-500/20 border-red-500 text-red-400"
                        : type === "receive"
                        ? "border-green-500 text-green-400"
                        : "border-red-500 text-red-400"
                    }`}
                  >
                    {type === "receive" ? "To Receive" : "To Give"}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ADDITIONAL */}
          {activeTab === "additional" && (
            <div className="space-y-4">
              <Input placeholder="Enter party's address" {...register("address")}
              className="py-5 bg-transparent border-white/20" />
              <Input placeholder="Enter party's email" {...register("email")}
              className="py-5 bg-transparent border-white/20" />
              <Input placeholder="Enter PAN Number" {...register("pan")} 
              className="py-5 bg-transparent border-white/20"/>
            </div>
          )}

          {/* ACTIONS */}
          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleSubmit((data) => onSubmit(data, true))}
            >
              Save & New
            </Button>

            <Button type="submit" className="bg-btnblue">
              Save Party
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewParty;