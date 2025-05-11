import { CVBuilderProviders } from "./providers";

export default function CVBuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CVBuilderProviders>{children}</CVBuilderProviders>;
}
