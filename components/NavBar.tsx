import { Facebook } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function NavBar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-xl font-semibold text-blue-600 flex items-center"
          >
            <Facebook className="mr-2 h-6 w-6" />
            <span>FB Video Link</span>
          </Link>
          <Button variant="ghost" size="sm">
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
}
