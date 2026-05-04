import { useState, lazy, Suspense } from "react";
import { MdQrCodeScanner, MdOutlineEmail, MdOutlineLock } from "react-icons/md";

import logo from "../../assets/logo-dark.png";
import CountryDropDown from "./CountryDropDown";
import CountryCodeSelector from "./CountryCodeSelector";
import { SIGN_IN_METHODS, COUNTRY_CODES } from "../../constants/authConstants";
const QrPopUp = lazy(() => import("./QrPopUp"));

const SignInForm = () => {
  const [isEmailLogin, setIsEmailLogin] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0]);
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleClose() {
    setShowQR(false);
  }

  const handlePhoneChange = (e) => {
    // Only allow numbers
    const value = e.target.value.replace(/\D/g, "");
    setPhoneNumber(value);
  };

  return (
    <>
      {/* Logo + Language */}
      <div className="flex items-center justify-between ">
        <div className="flex items-center h-10">
          <img src={logo} alt="Chalayo Logo" className="h-8 object-contain" />
        </div>
        <CountryDropDown />
      </div>

      {/* Heading */}
      <h2 className="text-3xl font-bold mb-2 mt-6">Let's Get Started</h2>
      <p className="text-white/60 mb-5 text-lg">Please login to continue</p>

      {/* CONDITIONAL FORM */}
      {!isEmailLogin ? (
        <>
          {/* Phone Input with Country Selector */}
          <div className="flex items-center w-full rounded-xl bg-white/5 border border-white/10 focus-within:ring-2 focus-within:ring-btnprimary mb-4 transition-all duration-300">
            <CountryCodeSelector
              selectedCountry={selectedCountry}
              onSelect={setSelectedCountry}
            />
            <input
              type="text"
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder="9XXXXXXXXX"
              className="flex-1 px-5 py-3 bg-transparent placeholder-white/40 focus:outline-none text-white font-medium"
            />
          </div>

          {/* Continue   */}
          <button className="w-full py-3 rounded-xl bg-btnprimary text-black font-semibold hover:bg-btnprimaryHover active:bg-btnprimaryActive active:scale-[0.98] transition-all duration-200 mb-5 shadow-lg shadow-primary/10">
            continue
          </button>
        </>
      ) : (
        <>
          {/* Email */}
          <div className="flex items-center w-full rounded-xl bg-white/5 border border-white/10 focus-within:ring-2 focus-within:ring-btnprimary mb-4 transition-all duration-300">
            <div className="pl-5 text-white/40">
              <MdOutlineEmail size={22} />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-4 py-3 bg-transparent placeholder-white/40 focus:outline-none text-white font-medium"
            />
          </div>

          {/* Password */}
          <div className="flex items-center w-full rounded-xl bg-white/5 border border-white/10 focus-within:ring-2 focus-within:ring-btnprimary mb-5 transition-all duration-300">
            <div className="pl-5 text-white/40">
              <MdOutlineLock size={22} />
            </div>
            <input
              type="password"
              placeholder="Password"
              className="flex-1 px-4 py-3 bg-transparent placeholder-white/40 focus:outline-none text-white font-medium"
            />
          </div>

          {/* Continue */}
          <button className="w-full py-3 rounded-xl bg-btnprimary text-black font-semibold hover:bg-btnprimaryHover active:bg-btnprimaryActive active:scale-[0.98] transition-all duration-200 mb-5 shadow-lg shadow-primary/10">
            Sign In
          </button>
        </>
      )}

      {/* Divider */}
      {!isEmailLogin && (
        <>
          <div className="flex items-center gap-4 mb-5">
            <div className="flex-1 h-[1px] bg-white/10"></div>
            <span className="text-white/40 text-sm">or</span>
            <div className="flex-1 h-[1px] bg-white/10"></div>
          </div>

          {/* Dynamic Sign-in Methods (Google, Email) */}
          <div className="flex gap-4 mb-4">
            {SIGN_IN_METHODS.map((method) => (
              <button
                key={method.id}
                onClick={
                  method.id === "email"
                    ? () => setIsEmailLogin(true)
                    : undefined
                }
                className="flex-1 py-3 px-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 active:scale-[0.97] transition-all duration-200 text-sm flex items-center justify-center gap-2 font-medium"
              >
                {method.label}
                <method.icon size={20} />
              </button>
            ))}
          </div>

          {/* QR */}
          <button
            onClick={() => setShowQR(true)}
            className="w-full py-3 px-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 active:scale-[0.97] transition-all duration-200 text-sm flex items-center justify-center gap-2 mb-4 font-medium"
          >
            <MdQrCodeScanner size={20} />
            Login by Scanning QR Code
          </button>
        </>
      )}

      {/* Back to phone login (ONLY when email login active) */}
      {isEmailLogin && (
        <p className="text-center text-white/60 text-sm mb-4">
          <span
            onClick={() => setIsEmailLogin(false)}
            className="text-yellow-400 cursor-pointer hover:underline font-medium transition-all"
          >
            ← Back to phone login
          </span>
        </p>
      )}

      {/* Terms & Privacy */}
      <p className="mt-6 text-center text-white/40 text-xs px-4">
        By continuing, you agree to our{" "}
        <span className="text-white/60 hover:text-yellow-400 cursor-pointer transition-colors">
          Terms of Service
        </span>{" "}
        and{" "}
        <span className="text-white/60 hover:text-yellow-400 cursor-pointer transition-colors">
          Privacy Policy
        </span>
        .
        <br />
        An account will be created automatically if you don't have one.
      </p>

      {showQR && (
        <Suspense
          fallback={
            <div className="fixed inset-0 flex items-center justify-center bg-black/50">
              <div className="w-8 h-8 border-4 border-btnprimary/30 border-t-btnprimary rounded-full animate-spin"></div>
            </div>
          }
        >
          <QrPopUp onClose={handleClose} />
        </Suspense>
      )}
    </>
  );
};

export default SignInForm;
