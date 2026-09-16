import React, { useState } from 'react';
import { X, Copy, Check, Download, Code, ExternalLink } from 'lucide-react';

interface ExportHtmlModalProps {
  isOpen: boolean;
  onClose: () => void;
  htmlContent: string;
}

export const ExportHtmlModal: React.FC<ExportHtmlModalProps> = ({
  isOpen,
  onClose,
  htmlContent,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(htmlContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleDownload = () => {
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'westbound-barber-lounge.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div
        className="relative bg-[#181818] border border-[#333333] rounded-2xl w-full max-w-4xl text-white shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#202020] px-6 py-4 border-b border-[#2C2C2C] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5 text-[#D97706]" />
            <h3 className="font-heading text-lg font-bold uppercase text-white">
              Single-File Executable HTML (Tailwind CDN + Vanilla JS)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-[#2B2B2B] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 bg-[#141414] border-b border-[#242424] flex items-center justify-between gap-3 flex-wrap">
          <p className="text-xs text-neutral-300">
            This self-contained file can be saved as <code className="text-amber-400 bg-black/50 px-1.5 py-0.5 rounded">index.html</code> and opened in any browser without needing Node, npm, or build tools.
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3.5 py-1.5 rounded-lg bg-[#2A2A2A] hover:bg-[#383838] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-amber-400" />
                  <span>Copy Code</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownload}
              className="px-3.5 py-1.5 rounded-lg gold-gradient text-[#121212] font-heading font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .html</span>
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-4 bg-[#0F0F0F]">
          <pre className="text-[11px] font-mono text-neutral-300 whitespace-pre leading-relaxed select-all">
            {htmlContent}
          </pre>
        </div>
      </div>
    </div>
  );
};
