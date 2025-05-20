"use client";

    import { QueryClientProvider } from "@tanstack/react-query";
    import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
      import { orpc, ORPCContext, queryClient } from "@/utils/orpc";

import { ThemeProvider } from "./theme-provider";
import { Toaster } from "./ui/sonner";


export default function Providers({ children }: { children: React.ReactNode }) {  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
          <QueryClientProvider client={queryClient}>
              <ORPCContext.Provider value={orpc}>
                {children}
              </ORPCContext.Provider>
            <ReactQueryDevtools />
          </QueryClientProvider>
      <Toaster richColors />
    </ThemeProvider>
  );
}
