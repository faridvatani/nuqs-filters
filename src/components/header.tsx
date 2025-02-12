import { ModeToggle } from "./ui/mode-toggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 dark:bg-gray-900">
      <h2 className="text-2xl font-bold text-white">
        Nuqs Filters
      </h2>
      <ModeToggle />
    </header>
  );
}
