"use client";

import { FilePdf } from "@phosphor-icons/react";

export default function PdfResumeLink() {
  return (
    <a
      href="/content/nick_golebiewski_resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-red-600 hover:underline mt-2 mb-4"
    >
      <FilePdf size={24} weight="duotone" />
      Resume
    </a>
  );
}
