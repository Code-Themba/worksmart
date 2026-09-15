import ThemeToggler from "./ThemeToggler";

export default function Navbar() {
  return (
    <div>
      <nav className="w-full h-16 flex items-center justify-between bg-gray-100/2 p-4 border-b border-gray-400/2 shadow-sm">
        <input
          type="search"
          placeholder="Search projects, tasks, or team members..."
          className="w-2/5 px-4 py-1 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
        />
        <ThemeToggler />
      </nav>
    </div>
  );
}
