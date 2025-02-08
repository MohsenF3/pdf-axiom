import { FEATURES } from "@/lib/placeholder";
import dynamic from "next/dynamic";

const Earth = dynamic(() => import("../ui/earth"), {
  ssr: false,
});

export default function GlobeFeaturesSection() {
  return (
    <section className="relative mx-auto mb-20 mt-14 flex w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-3xl pt-24 shadow-xl">
      <div className="absolute top-[17rem] size-[40rem] rounded-full bg-primary blur-3xl md:top-[20rem]" />
      <div className="z-10 inline-block rounded-lg border border-primary/60 bg-primary-light/10 px-3 py-1.5 font-semibold uppercase leading-4 tracking-tight sm:text-sm">
        <span className="bg-gradient-to-b from-primary-light to-primary-high bg-clip-text text-transparent">
          Powered by AI
        </span>
      </div>
      <h2
        id="global-database-title"
        className="z-10 mt-6 inline-block bg-gradient-to-b from-foreground to-primary/50 bg-clip-text px-2 text-center text-4xl font-bold tracking-tighter text-transparent md:text-8xl"
      >
        Connect Your PDFs <br /> to a World of Answers
      </h2>

      {/* Globe canvas */}
      <Earth />

      <div className="z-20 -mt-32 h-[36rem] w-full overflow-hidden md:-mt-36">
        <div className="via- absolute bottom-0 h-3/5 w-full bg-gradient-to-b from-transparent to-gray-950" />
        <div className="absolute inset-x-6 bottom-12 m-auto max-w-4xl md:top-2/3">
          <Features />
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-6 rounded-lg border px-6 py-6 shadow-xl backdrop-blur md:grid-cols-3 md:p-8">
      {FEATURES.map((item) => (
        <FeatureItem
          key={item.name}
          name={item.name}
          description={item.description}
        />
      ))}
    </div>
  );
}

function FeatureItem({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="whitespace-nowrap bg-gradient-to-br from-primary-light to-primary-high bg-clip-text text-lg font-semibold text-transparent md:text-xl">
        {name}
      </h3>
      <p className="text-sm leading-6 text-muted-foreground">{description}</p>
    </div>
  );
}
