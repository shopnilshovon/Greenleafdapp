export function ComingSoon({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center">
      <h2 className="text-3xl font-bold text-green-400">{title}</h2>
      <p className="text-zinc-400 mt-2">This feature is coming soon. Stay tuned!</p>
    </div>
  );
}
