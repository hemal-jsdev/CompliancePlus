export type AppEnv = "development" | "staging" | "production";

const ENVIRONMENTS: readonly AppEnv[] = ["development", "staging", "production"];

function resolveAppEnv(): AppEnv {
  const value = import.meta.env["VITE_APP_ENV"];
  if (ENVIRONMENTS.includes(value as AppEnv)) return value as AppEnv;
  return import.meta.env.DEV ? "development" : "production";
}

export const APP_ENV: AppEnv = resolveAppEnv();
export const isProduction = APP_ENV === "production";
export const isStaging = APP_ENV === "staging";
