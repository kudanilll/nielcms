import { LoginForm } from "@/components/layout/login-form";
import { Command } from "lucide-react";
import Link from "next/link";
import Waves from "@/components/layout/wave-background";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 m-8 rounded-2xl overflow-hidden">
          <Waves
            lineColor="#fff"
            backgroundColor="rgba(255, 255, 255, 0.2)"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
          />
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile logo */}
          <div className="lg:hidden flex justify-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Command className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-foreground">NCMS</span>
            </Link>
          </div>

          <div className="text-center lg:text-left space-y-2">
            <h1 className="text-3xl font-bold text-foreground">
              Selamat Datang
            </h1>
            <p className="text-muted-foreground">
              Masuk ke akun Anda untuk melanjutkan
            </p>
          </div>

          <LoginForm />
        </div>
      </div>
    </div>
  );
}
