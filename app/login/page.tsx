import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100dvh-64px)] flex-col items-center justify-center gap-6 p-6 md:p-10">
      <LoginForm />
    </div>
  )
}
