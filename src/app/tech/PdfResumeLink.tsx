"use client";

import { FilePdf } from "@phosphor-icons/react";

export default function PdfResumeLink() {
  return (
    <a
      href="/content/nick_golebiewski_resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition-colors mt-2 mb-4"
    >
      View My Resume
      <FilePdf size={20} weight="duotone" alt="PDF" />
    </a>
  );
}
