import {
  buildLegalMetadata,
  LegalDocument,
} from "@/components/bitflip/LegalDocument";
import { privacyPolicy } from "@/lib/legal";

export const metadata = buildLegalMetadata(
  privacyPolicy.title,
  "How BIT FLIP collects and uses personal data."
);

export default function PrivacyPage() {
  return (
    <LegalDocument
      title={privacyPolicy.title}
      lastUpdated={privacyPolicy.lastUpdated}
      sections={privacyPolicy.sections}
    />
  );
}
