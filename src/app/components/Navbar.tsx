import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { UserCircle } from "lucide-react";

const Navbar = () => {
  return (
    <div className="h-16 bg-background border-b px-4 hidden lg:flex items-center justify-between fixed top-0 right-0 left-0 lg:left-64">
      <div className="flex items-center gap-4">
        <div className="text-xl font-semibold">Dashboard</div>
      </div>
      <div className="flex items-center gap-4 ml-auto">
        <ThemeToggle />
        <Button variant="ghost" size="icon">
          <UserCircle className="h-5 w-5" />
          <span className="sr-only">Profile</span>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
