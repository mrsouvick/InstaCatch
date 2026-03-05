export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center gap-3 text-sm text-slate-600 dark:text-slate-300">
      <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-brand-500 border-r-transparent" />
      Fetching media...
    </div>
  );
}
