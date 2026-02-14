import Image from "next/image";

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        autoComplete="off"
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-12 flex flex-col items-center gap-8"
      >
        {/* Logo */}
        <Image src="/logo.png" width={220} height={220} alt="ShopSphere Logo" />

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900">Welcome Back</h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-base">Please login to your account</p>

        {/* Input Fields */}
        <input
          type="text"
          placeholder="Email"
          autoComplete="off"
          className="w-full border border-gray-300 rounded-xl p-4 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg"
        />
        <input
          type="password"
          placeholder="Password"
          autoComplete="off"
          className="w-full border border-gray-300 rounded-xl p-4 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg"
        />

        {/* Login Button */}
        <button className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-400 to-orange-600 text-white text-lg font-semibold hover:opacity-90 transition">
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
