export default function Navbar() {
  return (
    <nav className="border-b border-slate-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-2xl tracking-tight">
          ResumeAI
        </h1>

        <div className="flex items-center gap-8">
          <a href="#" className="hover:text-blue-400 transition">
            Features
          </a>

          <a href="#" className="hover:text-blue-400 transition">
            Pricing
          </a>

          <a href="#" className="hover:text-blue-400 transition">
            Contact
          </a>

          <button className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-lg font-medium">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}