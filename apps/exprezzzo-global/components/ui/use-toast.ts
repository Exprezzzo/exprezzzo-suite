// File: apps/exprezzzo-global/components/ui/use-toast.ts

export function useToast() {
  return {
    toast: ({ title, description, variant = "default" }: { title: string; description?: string; variant?: string }) => {
      alert(`${title}${description ? `\n${description}` : ""}`);
    }
  };
}