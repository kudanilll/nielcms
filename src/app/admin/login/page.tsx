"use client";

import { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useAuth } from "@/context/auth";
import { auth } from "@/lib/firebase";
import { cn } from "@/lib/utils";

import { GridPattern } from "@/components/magicui/grid-pattern";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function DashboardLogin() {
  const [visible, setVisible] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();
  const { user } = useAuth();

  // Redirect if user already logged in
  useEffect(() => {
    if (user) {
      router.push("/admin/dashboard/");
    }
  }, [user, router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Login successful, Firebase automatically stores auth state in localStorage
      router.push("/admin/dashboard/");
    } catch (err) {
      toast("Invalid email or password", {
        duration: 3000,
        style: {
          background: "red",
          color: "white",
        },
      });
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
      <Card className="w-auto">
        <CardHeader>
          <CardTitle>
            <h1>Login to NielCMS</h1>
          </CardTitle>
          <CardDescription>
            <p className="text-md">Fill in your email and password to login</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">
                  <span>
                    Email<span className="text-destructive">*</span>
                  </span>
                </Label>
                <Input
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">
                  <span>
                    Password<span className="text-destructive">*</span>
                  </span>
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    placeholder="Password"
                    className="pe-9"
                    type={visible ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                    type="button"
                    onClick={() => setVisible(!visible)}
                    aria-label={visible ? "Hide password" : "Show password"}
                    aria-pressed={visible}
                    aria-controls="password"
                  >
                    {visible ? (
                      <EyeOffIcon size={16} aria-hidden="true" />
                    ) : (
                      <EyeIcon size={16} aria-hidden="true" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <Button type="submit" disabled={loading} className="mt-4 w-full">
              {loading ? "Processing..." : "Login"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
