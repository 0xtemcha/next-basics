import { ThemeProvider as BaseThemeProvider } from "next-themes";
import React from "react";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <BaseThemeProvider
      attribute={"class"}
      defaultTheme={"system"}
      enableSystem={true}
    >
      {children}
    </BaseThemeProvider>
  );
};

export default ThemeProvider;
