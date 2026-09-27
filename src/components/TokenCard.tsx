import { Fingerprint, BadgeCheck } from "lucide-react";

const K = ({ children }: { children: string }) => (
  <span className="text-blue-600 dark:text-blue-300">"{children}"</span>
);
const S = ({ children }: { children: string }) => (
  <span className="text-emerald-600 dark:text-emerald-300">"{children}"</span>
);
const P = ({ children }: { children: string }) => (
  <span className="text-slate-400 dark:text-slate-500">{children}</span>
);
/** A playful decoded ID Token with claims about the site owner. */
const TokenCard = () => {
  return (
    <div className="relative">
      <div className="absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-blue-400/30 via-blue-500/10 to-transparent blur-2xl" />
      <div className="card relative overflow-hidden p-0 shadow-glow">
        <div className="flex items-center justify-between border-b border-slate-200/80 px-4 py-2.5 dark:border-slate-800">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
            <Fingerprint className="h-3.5 w-3.5 text-blue-500" />
            id_token
            <span className="text-slate-300 dark:text-slate-600">·</span>
            <span className="font-mono">alg: ES256</span>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-700 dark:border-emerald-800/60 dark:bg-emerald-900/30 dark:text-emerald-300">
            <BadgeCheck className="h-3 w-3" />
            signature valid
          </span>
        </div>
        <pre className="overflow-x-auto px-4 py-4 font-mono text-[12.5px] leading-6 text-slate-700 dark:text-slate-300">
          <code>
            <P>{"{"}</P>
            {"\n  "}
            <K>iss</K>
            <P>:</P> <S>https://skoruba.com</S>
            <P>,</P>
            {"\n  "}
            <K>sub</K>
            <P>:</P> <S>jan</S>
            <P>,</P>
            {"\n  "}
            <K>name</K>
            <P>:</P> <S>Jan Škoruba</S>
            <P>,</P>
            {"\n  "}
            <K>role</K>
            <P>:</P> <S>identity_engineer</S>
            <P>,</P>
            {"\n  "}
            <K>zoneinfo</K>
            <P>:</P> <S>Europe/Prague</S>
            <P>,</P>
            {"\n"}
            <P>{"}"}</P>
          </code>
        </pre>
      </div>
    </div>
  );
};

export default TokenCard;
