import { useState } from "react";
import Wrapper from "./components/Wrapper";

const posts = [
  {
    id: 1,
    title: "React best practices",
    body: "Learn the foundations of modern React development and build great user experiences.",
    image: "https://picsum.photos/400/400?random=1",
    category: "React",
    theme: "border-violet-300/20 bg-violet-400/10",
    badge: "bg-violet-300/15 text-violet-200",
  },
  {
    id: 2,
    title: "Frontend workflow",
    body: "Structure projects cleanly, keep components reusable, and ship polished interfaces.",
    image: "https://picsum.photos/400/400?random=2",
    category: "Workflow",
    theme: "border-cyan-300/20 bg-cyan-400/10",
    badge: "bg-cyan-300/15 text-cyan-200",
  },
  {
    id: 3,
    title: "Design with purpose",
    body: "Build a visual rhythm with thoughtful spacing, expressive type, and clear contrast.",
    image: "https://picsum.photos/400/400?random=3",
    category: "Design",
    theme: "border-amber-300/20 bg-amber-400/10",
    badge: "bg-amber-300/15 text-amber-200",
  },
  {
    id: 4,
    title: "Small details, big impact",
    body: "A few carefully chosen details can make a simple interface feel memorable.",
    image: "https://picsum.photos/400/400?random=4",
    category: "Inspiration",
    theme: "border-rose-300/20 bg-rose-400/10",
    badge: "bg-rose-300/15 text-rose-200",
  },
  {
    id: 5,
    title: "Reusable components",
    body: "Create flexible building blocks that keep your project consistent as it grows.",
    image: "https://picsum.photos/400/400?random=5",
    category: "Components",
    theme: "border-emerald-300/20 bg-emerald-400/10",
    badge: "bg-emerald-300/15 text-emerald-200",
  },
  {
    id: 6,
    title: "Make it responsive",
    body: "Give every screen size a comfortable, polished experience with responsive layouts.",
    image: "https://picsum.photos/400/400?random=6",
    category: "Responsive",
    theme: "border-sky-300/20 bg-sky-400/10",
    badge: "bg-sky-300/15 text-sky-200",
  },
];

function App() {
  const [news, setNews] = useState(posts);
  const [count, setCount] = useState(0);

  const removePost = (id) => {
    setNews((currentNews) => currentNews.filter((item) => item.id !== id));
  };

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-slate-950 py-10 text-white sm:py-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-violet-600/25 blur-3xl" />
        <div className="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-fuchsia-600/15 blur-3xl" />
      </div>

      <Wrapper>
        <section
          aria-labelledby="counter-title"
          className="mx-auto mb-16 max-w-sm rounded-3xl border border-white/10 bg-white/6 p-7 text-center shadow-2xl shadow-black/20 backdrop-blur-xl"
        >
          <h1
            className="mb-4 text-sm font-semibold tracking-[0.25em] text-slate-300 uppercase"
            id="counter-title"
          >
            Counter
          </h1>
          <p
            aria-live="polite"
            className="mb-6 bg-linear-to-r from-violet-300 to-cyan-200 bg-clip-text text-7xl font-bold tabular-nums text-transparent"
          >
            {count}
          </p>
          <div className="flex justify-center gap-3">
            <button
              aria-label="Kamaytirish"
              className="h-11 w-11 rounded-xl border border-white/10 bg-white/10 text-xl font-semibold text-white transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
              type="button"
              onClick={() => setCount((currentCount) => currentCount - 1)}
            >
              −
            </button>
            <button
              className="rounded-xl border border-white/10 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300"
              type="button"
              onClick={() => setCount(0)}
            >
              Reset
            </button>
            <button
              aria-label="Oshirish"
              className="h-11 w-11 rounded-xl bg-violet-500 text-xl font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:bg-violet-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
              type="button"
              onClick={() => setCount((currentCount) => currentCount + 1)}
            >
              +
            </button>
          </div>
        </section>

        <header className="mb-9 text-center sm:mb-12">
          <p className="mb-3 text-sm font-semibold tracking-[0.25em] text-violet-300 uppercase">
            Fresh ideas
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Posts <span className="text-violet-300">for you</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-400">
            A little inspiration for your next creative project.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.length > 0 &&
            news.map((item) => (
              <article
                className={`group overflow-hidden rounded-3xl border shadow-xl shadow-black/10 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${item.theme}`}
                key={item.id}
              >
                <div className="relative overflow-hidden">
                  <img
                    className="aspect-16/10 w-full object-cover transition duration-500 group-hover:scale-105"
                    src={item.image}
                    alt=""
                  />
                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold tracking-wide backdrop-blur-md ${item.badge}`}
                  >
                    {item.category}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <h2 className="mb-2 text-xl font-semibold text-white">
                    {item.title}
                  </h2>
                  <p className="mb-6 leading-relaxed text-slate-300">
                    {item.body}
                  </p>
                  <button
                    className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    type="button"
                    onClick={() => removePost(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </article>
            ))}
        </div>
        {news.length === 0 && (
          <p className="py-12 text-center text-slate-400">Hozircha postlar yo‘q.</p>
        )}
      </Wrapper>
    </main>
  );
}

export default App;
