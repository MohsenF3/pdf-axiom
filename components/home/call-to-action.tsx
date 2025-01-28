import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <BackgroundBeamsWithCollision>
      <section className="relative z-20 mx-auto w-full max-w-7xl py-60">
        <div className="relative z-20 mx-auto w-full bg-gradient-to-br from-neutral-900 to-gray-900 md:rounded-2xl">
          <div className="relative -mx-6 overflow-hidden px-6 sm:mx-0 md:rounded-2xl md:px-8">
            <div
              className="bg-noise fade-vignette absolute inset-0 h-full w-full opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]"
              style={{
                backgroundImage: "url(/noise.webp)",
                backgroundSize: "30%",
              }}
            ></div>
            <div
              className="pointer-events-none absolute inset-y-0 right-0 select-none overflow-hidden rounded-2xl"
              style={{
                mask: "radial-gradient(33.875rem 33.875rem at calc(100% - 8.9375rem) 0, white 3%, transparent 70%)",
              }}
            ></div>
            <div className="relative px-6 pb-14 pt-20 sm:px-10 sm:pb-20 lg:px-[4.5rem]">
              <h2 className="mx-auto text-balance text-center text-3xl font-semibold tracking-[-0.015em] md:text-5xl">
                Simplify Your Workflow with PDF Axiom!
              </h2>
              <p className="mx-auto mt-4 max-w-[30rem] text-balance text-center align-top text-muted-foreground decoration-inherit">
                Upload your PDF and let AI do the heavy lifting! Get instant
                answers, summaries, and insights from your documents.
              </p>
              <div className="relative z-10 mx-auto mt-6 flex justify-center">
                <Button>Start for free today</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BackgroundBeamsWithCollision>
  );
}
