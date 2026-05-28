import { Link } from "react-router-dom";

export default function WhoWeAre() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl px-6 mx-auto text-center">
        {/* ── SECTION LABEL ── */}
        <p className="mb-3 text-sm font-medium tracking-widest uppercase text-brand-600">
          Our Story
        </p>

        {/* ── HEADING ── */}
        <h2 className="mb-6 text-3xl font-bold font-heading text-brand-900 md:text-4xl">
          Who We Are
        </h2>

        {/* ── DECORATIVE DIVIDER ── */}
        <div className="w-16 h-px mx-auto mb-8 bg-brand-400" />

        {/* ── PARAGRAPHS ── */}
        <div className="flex flex-col gap-5 text-lg leading-relaxed text-gray-600">
          <p>
            Gospel Truth Ministry is a Reformed Baptist church in Jimma,
            Ethiopia, committed to preaching the whole counsel of God and making
            disciples who love Christ and faithfully serve their community.
          </p>
          <p>
            We believe in the authority of Scripture, the sovereignty of God in
            salvation, and the centrality of the local church in the life of
            every believer. Our worship is Word-centered, our fellowship is
            genuine, and our mission is clear — to proclaim Jesus Christ as
            Lord.
          </p>
          <p>
            Whether you are new to faith or have walked with Christ for decades,
            whether you are searching for answers or longing for a community
            rooted in truth — you are welcome here.
          </p>
        </div>

        {/* ── BUTTON ── */}
        <div className="mt-10">
          <Link
            to="/about"
            className="inline-block px-8 py-3 font-semibold text-white transition-colors duration-200 rounded-lg bg-brand-600 hover:bg-brand-700"
          >
            Learn More About Us →
          </Link>
        </div>
      </div>
    </section>
  );
}
