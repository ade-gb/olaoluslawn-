export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
      <div className="animate-pulse space-y-8">
        <div className="h-6 w-40 bg-white/10 rounded-full"></div>
        <div className="h-12 w-2/3 bg-white/10 rounded-2xl"></div>
        <div className="h-4 w-1/2 bg-white/10 rounded-full"></div>
        <div className="grid md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="h-64 rounded-3xl bg-white/5 border border-white/10" />
          ))}
        </div>
      </div>
    </div>
  );
}
