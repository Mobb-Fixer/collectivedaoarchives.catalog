import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <div className="flex flex-col items-center bg-primary text-white pb-20 md:pb-52">
      <div className="container mx-auto w-[1080px] max-w-[90%] mt-16 md:mt-44">
        <h1 className="font-bold text-xl md:text-6xl mb-10">THE COLLECTIVE DAO CATALOG</h1>
        <div className="text-lg md:text-2xl italic">
          <p className="bg-secondary text-primary px-1 inline">
            The Collective DAO Catalog is an open source database of off-chain, DAO historical events.
          </p>

          <p className="my-8 md:my-14">
            We believe there’s invaluable insight in off-chain DAO Events and their discussions. A DAO Event is any
            relevant occurrence in a DAO or DAO-adjacent org’s lifecycle, currently indicated by a public document on
            any platform like Discourse or Twitter. Our big vision is to expand Optimism's original Collective Archives
            by building the largest, most reliable database for querying across all DAOs, bringing qualitative
            information of DAO Events into one searchable, source of truth. This enables anyone to contribute,
            integrate, and extend ways to engage with the data.
          </p>

          <p className="mb-8 md:mb-14">
            Built by{" "}
            <Link href="https://github.com/amy-jung" target="_blank" className="link">
              Amy
            </Link>
            ,{" "}
            <Link href="https://github.com/carletex" target="_blank" className="link">
              Carletex
            </Link>
            , and{" "}
            <Link href="https://github.com/damianmarti" target="_blank" className="link">
              Damu
            </Link>
            .
          </p>

          <p className="font-bold mb-2 md:mb-4">We'd love to thank and give attributes to:</p>
          <ol className="mb-8 md:mb-14 list-decimal list-inside">
            <li>The Optimism Foundation for this grant 💕</li>
            <li>
              The Original{" "}
              <Link href="https://twitter.com/lalalavendr/status/1631349711956484097" target="_blank" className="link">
                Collective Archives
              </Link>{" "}
              by lavande
            </li>
            <li>
              Design Framework from{" "}
              <Link href="https://github.com/benbrignell/principles.design" target="_blank" className="link">
                Ben Brignell's Open Sourced Design Principles
              </Link>
            </li>
          </ol>

          <h2 className="font-bold mb-2 md:mb-4">Our Roadmap</h2>
          <p className="mb-2 md:mb-4">
            The initial launch of the Collective DAO Catalog is a simple interface to query data.
          </p>
          <p className="mb-6 md:mb-10">
            Next up is an API that allows anyone to build extensions such as AI chatbots, or connect on-chain data.
          </p>

          <p>
            If you'd like to contribute or build on top of the Collective DAO Catalog, please get in touch on{" "}
            <Link
              href="https://github.com/amy-jung/collectivedaoarchives.catalog"
              className="bg-secondary text-primary link p-1 pt-0"
              target="_blank"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
