export default function Loading() {
  return (
    <div className="animate-pulse">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 pt-20 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image / Visual */}
        <div className="w-full max-w-md mx-auto">
          <div className="aspect-3/4 rounded-xl bg-background-secondary border border-border-primary" />
        </div>

        {/* Right: Identity */}
        <div className="space-y-6">
          {/* Greeting */}
          <div className="h-4 w-32 rounded bg-border-secondary" />

          {/* Name */}
          <div className="space-y-3">
            <div className="h-10 w-3/4 rounded bg-border-primary" />
            <div className="h-10 w-2/3 rounded bg-border-primary" />
          </div>

          {/* Role */}
          <div className="h-5 w-48 rounded bg-border-secondary" />

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="h-12 w-44 rounded-md bg-border-primary" />
            <div className="h-12 w-44 rounded-md bg-border-secondary" />
          </div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="max-w-7xl mx-auto px-4 pb-24 space-y-16">
        {/* About */}
        <div className="space-y-4">
          <div className="h-4 w-28 rounded bg-border-secondary" />
          <div className="h-8 w-1/2 rounded bg-border-primary" />
          <div className="space-y-3">
            <div className="h-4 w-full rounded bg-border-secondary" />
            <div className="h-4 w-5/6 rounded bg-border-secondary" />
            <div className="h-4 w-4/6 rounded bg-border-secondary" />
          </div>
        </div>

        {/* Repeating Resume Sections */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="space-y-4">
            <div className="h-6 w-1/3 rounded bg-border-primary" />
            <div className="space-y-3">
              <div className="h-4 w-full rounded bg-border-secondary" />
              <div className="h-4 w-11/12 rounded bg-border-secondary" />
              <div className="h-4 w-10/12 rounded bg-border-secondary" />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
