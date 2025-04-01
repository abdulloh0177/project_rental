"use client"
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function RegisterPage() {
  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease-out-cubic",
      delay: 0,
      offset: 80,
    });
  }, []);
  return (
    <div
      data-aos="fade-left"
      className="flex items-center justify-center min-h-screen p-4"
    >
      <Card className="w-full max-w-md">
        <CardContent className="pt-6 px-6 pb-8">
          <div className="space-y-6">
            <h1 data-aos="zoom-out" className="text-2xl font-semibold">
              Registration
            </h1>

            <div className="space-y-4">
              <div className="text-sm text-muted-foreground">
                <Link href="/login">Login</Link>
              </div>

              <div className="space-y-4">
                <Input
                  placeholder="First name"
                  className="border-b border-t-0 border-x-0 rounded-none px-0 h-10 focus-visible:ring-0 focus-visible:border-primary"
                />

                <Input
                  placeholder="Last name"
                  className="border-b border-t-0 border-x-0 rounded-none px-0 h-10 focus-visible:ring-0 focus-visible:border-primary"
                />

                <Input
                  placeholder="Email"
                  type="email"
                  className="border-b border-t-0 border-x-0 rounded-none px-0 h-10 focus-visible:ring-0 focus-visible:border-primary"
                />

                <Select>
                  <SelectTrigger className="border-b border-t-0 border-x-0 rounded-none px-0 h-10 focus:ring-0">
                    <SelectValue placeholder="User role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="user">User</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                  </SelectContent>
                </Select>

                <Input
                  placeholder="Password"
                  type="password"
                  className="border-b border-t-0 border-x-0 rounded-none px-0 h-10 focus-visible:ring-0 focus-visible:border-primary"
                />

                <Input
                  placeholder="Re-enter password"
                  type="password"
                  className="border-b border-t-0 border-x-0 rounded-none px-0 h-10 focus-visible:ring-0 focus-visible:border-primary"
                />
              </div>

              <Button data-aos="fade-left" className="w-full h-[44px] rounded-[3px] bg-blue-600 hover:bg-blue-700">
                Register
              </Button>

              <div className="text-center text-sm">
                Already have an account?{" "}
                <a href="/login" className="text-blue-600">
                  Login
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
