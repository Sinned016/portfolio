export default function Loading() {
  return (
    <section className="py-24">
      <div className="container max-w-3xl space-y-4">
        <h2 className='title mb-12'>Projects</h2>

        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="h-24 w-full bg-zinc-800 animate-pulse rounded"
          />
        ))}
      </div>
    </section>
  )
}