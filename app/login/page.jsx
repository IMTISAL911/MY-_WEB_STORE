"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {

    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [emailerror, setEmailerror] = useState("");
    const [ paswrderror , setPassworderror] = useState("");

    const correctEmail = "admin@gmail.com";
    const correctpswrd = "123456";

    const handleLogin =(e)=>{
        e.preventDefault();

        let  hasError = false;
        setEmailerror("");
        setPassworderror("")

        if(!email.trim()){
            setEmailerror("please  enter your email")
            hasError = true
        }

        if(!password.trim()){
            setPassworderror("please enter your pasword")
            hasError = true;
        }

        if (email === correctEmail && password === correctpswrd){
            router.push("/products");
        }else{
            setEmailerror(" email  is incorrect");
            setPassworderror("password is incorrect")
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
        {/* Logo */}
        <Image src="/logo.png" width={220} height={220} alt="ShopSphere Logo" />

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900">Welcome Back</h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-base">Please login to your account</p>

        {/* Input Fields */}
        <div className=" w-full  flex flex-col gap-1">
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

        <div className="w-full flex flex-col gap-1">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          autoComplete="new-password"
          className={`w-full border rounded-xl p-4 text-gray-700 text-lg focus:outline-none ${
              paswrderror ? "border-red-500" : "border-gray-300"
            }`}
        />
        {paswrderror && <p className="text-red-500 text-sm">{paswrderror}</p>}
        </div>
        {/* Login Button */}
        <button
          type="submit"
          disabled={isbuttonDisabled}
          className={`w-full py-4 rounded-xl text-white text-lg font-semibold transition ${
            isbuttonDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-orange-400 to-orange-600 hover:opacity-90"
          }`}
        >
          Login
        </button>

        {/* Links */}
        <div className="w-full flex justify-between text-sm text-gray-500">
          <a href="#" className="hover:underline">Forgot Password?</a>
          <a href="#" className="hover:underline font-semibold text-orange-500">Sign Up</a>
        </div>
      </form>
    </div>
  );
}
