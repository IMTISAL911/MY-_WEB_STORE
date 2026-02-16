


// "use client";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import LogoSvg from "@/app/Components/logoSvg";

// export default function Login() {
//   const router = useRouter();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailerror, setEmailerror] = useState("");
//   const [paswrderror, setPassworderror] = useState("");
//   const [loading, setLoading] = useState(false);

//   const correctEmail = "admin@gmail.com";
//   const correctpswrd = "123456";

//   const handleLogin = (e) => {
//     e.preventDefault();

//     let hasError = false;
//     setEmailerror("");
//     setPassworderror("");

//     if (!email.trim()) {
//       setEmailerror("please enter your email");
//       hasError = true;
//     }

//     if (!password.trim()) {
//       setPassworderror("please enter your password");
//       hasError = true;
//     }

//     if (hasError) return;

//     if (email === correctEmail && password === correctpswrd) {
//       setLoading(true);

//       setTimeout(() => {
//         router.push("/products");
//       }, 3000);
//     } else {
//       setEmailerror("email is incorrect");
//       setPassworderror("password is incorrect");
//     }
//   };

//   const isbuttonDisabled = !email || !password;

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <form
//         autoComplete="off"
//         onSubmit={handleLogin}
//         className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-12 flex flex-col items-center gap-8"
//       >
//         <LogoSvg />

//         <h1 className="text-4xl font-bold text-gray-900">Welcome Back</h1>
//         <p className="text-gray-600 text-base">
//           Please login to your account
//         </p>

//         <div className="w-full flex flex-col gap-1">
//           <input
//             type="text"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             autoComplete="off"
//             className={`w-full border rounded-xl p-4 text-gray-700 text-lg focus:outline-none ${
//               emailerror ? "border-red-500" : "border-gray-300"
//             }`}
//           />
//           {emailerror && (
//             <p className="text-red-500 text-sm">{emailerror}</p>
//           )}
//         </div>

//         <div className="w-full flex flex-col gap-1">
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             autoComplete="new-password"
//             className={`w-full border rounded-xl p-4 text-gray-700 text-lg focus:outline-none ${
//               paswrderror ? "border-red-500" : "border-gray-300"
//             }`}
//           />
//           {paswrderror && (
//             <p className="text-red-500 text-sm">{paswrderror}</p>
//           )}
//         </div>

//         <button
//           type="submit"
//           disabled={isbuttonDisabled || loading}
//           className={`w-full py-4 rounded-xl text-white text-lg font-semibold transition flex justify-center items-center ${
//             isbuttonDisabled || loading
//               ? "bg-gray-400 cursor-not-allowed"
//               : "bg-gradient-to-r from-orange-400 to-orange-600 hover:opacity-90"
//           }`}
//         >
//           {loading ? (
//             <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
//           ) : (
//             "Login"
//           )}
//         </button>

//         <div className="w-full flex justify-between text-sm text-gray-500">
//           <a href="#" className="hover:underline">
//             Forgot Password?
//           </a>
//           <a
//             href="#"
//             className="hover:underline font-semibold text-orange-500"
//           >
//             Sign Up
//           </a>
//         </div>
//       </form>
//     </div>
//   );
// }



"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LogoSvg from "@/app/Components/logoSvg";
import { useDispatch } from "react-redux";
import { loginSuccess } from "@/app/redux/authSlice";

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch(); // ✅ Redux dispatch

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailerror, setEmailerror] = useState("");
  const [paswrderror, setPassworderror] = useState("");
  const [loading, setLoading] = useState(false);

  const correctEmail = "admin@gmail.com";
  const correctpswrd = "123456";

  const handleLogin = (e) => {
    e.preventDefault();

    let hasError = false;
    setEmailerror("");
    setPassworderror("");

    if (!email.trim()) {
      setEmailerror("please enter your email");
      hasError = true;
    }

    if (!password.trim()) {
      setPassworderror("please enter your password");
      hasError = true;
    }

    if (hasError) return;

    if (email === correctEmail && password === correctpswrd) {
      setLoading(true);

      // ✅ Save email to Redux
      dispatch(loginSuccess({ userEmail: email }));

      // fake 3-second loader before redirect
      setTimeout(() => {
        router.push("/products");
      }, 3000);
    } else {
      setEmailerror("email is incorrect");
      setPassworderror("password is incorrect");
    }
  };

  const isbuttonDisabled = !email || !password;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        autoComplete="off"
        onSubmit={handleLogin}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-12 flex flex-col items-center gap-8"
      >
        <LogoSvg />

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900">Welcome Back</h1>
        <p className="text-gray-600 text-base">Please login to your account</p>

        {/* Email Input */}
        <div className="w-full flex flex-col gap-1">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            className={`w-full border rounded-xl p-4 text-gray-700 text-lg focus:outline-none ${
              emailerror ? "border-red-500" : "border-gray-300"
            }`}
          />
          {emailerror && <p className="text-red-500 text-sm">{emailerror}</p>}
        </div>

        {/* Password Input */}
        <div className="w-full flex flex-col gap-1">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            className={`w-full border rounded-xl p-4 text-gray-700 text-lg focus:outline-none ${
              paswrderror ? "border-red-500" : "border-gray-300"
            }`}
          />
          {paswrderror && (
            <p className="text-red-500 text-sm">{paswrderror}</p>
          )}
        </div>

        {/* Login Button with loader */}
        <button
          type="submit"
          disabled={isbuttonDisabled || loading}
          className={`w-full py-4 rounded-xl text-white text-lg font-semibold transition flex justify-center items-center ${
            isbuttonDisabled || loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-orange-400 to-orange-600 hover:opacity-90"
          }`}
        >
          {loading ? (
            <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Login"
          )}
        </button>

        {/* Links */}
        <div className="w-full flex justify-between text-sm text-gray-500">
          <a href="#" className="hover:underline">
            Forgot Password?
          </a>
          <a
            href="#"
            className="hover:underline font-semibold text-orange-500"
          >
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
}
