// components/ui/use-toast.ts
import { toast as sonner } from 'sonner'

export function useToast() {
  return {
    toast: sonner,
  }
}
