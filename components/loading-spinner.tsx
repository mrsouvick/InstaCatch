export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center gap-3 rounded-xl border border-slate-200/80 bg-slate-50/70 px-3 py-2 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300">
      <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-brand-500 border-r-transparent" />
      Fetching media...
    </div>
  );
}
