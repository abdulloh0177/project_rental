"use client"
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function LoginPage() {
  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease-out-cubic",
      delay: 0,
      offset: 80,
    });
  }, []);
  return (
    <div data-aos="fade-left" className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6 px-6 pb-8">
          <div className="space-y-6">
            <h1 data-aos="zoom-out" className="text-2xl font-semibold">Sign in</h1>

            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="login" className="block text-sm font-medium">
                  Login
                </label>
                <Input
                  id="login"
                  placeholder="Ali Tufa..."
                  className="border-b border-t-0 border-x-0 rounded-none px-0 h-10 focus-visible:ring-0 focus-visible:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  className="border-b border-t-0 border-x-0 rounded-none px-0 h-10 focus-visible:ring-0 focus-visible:border-primary"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <label htmlFor="remember" className="text-sm font-medium">
                    Remember me
                  </label>
                </div>
                <Link href="/forgot-password" className="text-blue-600 text-sm">
                  Forgot
                </Link>
              </div>

              <Button data-aos="fade-left" className="w-full h-[44px] rounded-[3px] bg-blue-600 hover:bg-blue-700">
                Login
              </Button>

              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <a href="/register" className="text-blue-600">
                  Register
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
