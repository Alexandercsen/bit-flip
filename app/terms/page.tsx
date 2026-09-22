import {
  buildLegalMetadata,
  LegalDocument,
} from "@/components/bitflip/LegalDocument";
import { termsAndConditions } from "@/lib/legal";

export const metadata = buildLegalMetadata(
  termsAndConditions.title,
  "Terms for using the BIT FLIP website and tutoring."
);

export default function TermsPage() {
  return (
    <LegalDocument
      title={termsAndConditions.title}
      lastUpdated={termsAndConditions.lastUpdated}
      sections={termsAndConditions.sections}
    />
  );
}
