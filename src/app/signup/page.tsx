'use client';

import { AuthLayout } from "@/components/auth/AuthLayout";
import { AuthForm } from "@/components/auth/AuthForm";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";
import Link from "next/link";

const formSchemaBaseForPage = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
});

const signupFormSchema = formSchemaBaseForPage.extend({
  displayName: z.string().min(2, { message: "Display name must be at least 2 characters." }).optional(),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match.",
  path: ["confirmPassword"],
});

type SignupFormValues = z.infer<typeof signupFormSchema>;

export default function SignupPage() {
  const router = useRouter();
  const { signUpWithEmail } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSignup = async (values: SignupFormValues) => {
    setLoading(true);
    try {
      await signUpWithEmail(values.email, values.password, values.displayName);

      toast({
        title: "Signup Successful",
        description: "Welcome! Your account has been created.",
      });

      router.push("/dashboard");
    } catch (error: any) {
      console.error("Signup Error:", error);
      toast({
        title: "Signup Failed",
        description: error.message || "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Create Your Account" description="Enter your details below to create your account.">
      <AuthForm mode="signup" onSubmit={handleSignup} loading={loading} />
      <p className="mt-4 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Button variant="link" className="px-1" asChild>
          <Link href="/login">Login</Link>
        </Button>
      </p>
    </AuthLayout>
  );
}
