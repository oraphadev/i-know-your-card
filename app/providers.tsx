"use client";

import type { ThemeProviderProps } from "next-themes";

import * as React from "react";
import { HeroUIProvider } from "@heroui/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { cn } from "@heroui/theme";

type ProvidersProps = React.ComponentProps<typeof HeroUIProvider> & {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
};

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export function Providers({
  children,
  themeProps,
  className,
  ...props
}: ProvidersProps) {
  const router = useRouter();

  return (
    <HeroUIProvider
      className={cn("flex flex-col flex-1", className)}
      navigate={router.push}
      {...props}
    >
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </HeroUIProvider>
  );
}
