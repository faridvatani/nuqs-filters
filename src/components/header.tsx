import { ModeToggle } from "./ui/mode-toggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-4 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <h2 className="text-2xl font-bold text-black dark:text-white">
        Nuqs Filters
      </h2>
      <ModeToggle />
    </header>
  );
}
