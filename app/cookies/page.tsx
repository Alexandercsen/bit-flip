import {
  buildLegalMetadata,
  LegalDocument,
} from "@/components/bitflip/LegalDocument";
import { cookiePolicy } from "@/lib/legal";

export const metadata = buildLegalMetadata(
  cookiePolicy.title,
  "How BIT FLIP uses cookies and similar technologies."
);

export default function CookiesPage() {
  return (
    <LegalDocument
      title={cookiePolicy.title}
      lastUpdated={cookiePolicy.lastUpdated}
      sections={cookiePolicy.sections}
    />
  );
}
