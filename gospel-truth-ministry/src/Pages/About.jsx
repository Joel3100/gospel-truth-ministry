import { Link } from "react-router-dom";

const beliefs = [
  {
    id: 1,
    icon: "📖",
    title: "The Holy Scripture",
    summary:
      "We believe the Bible is the inspired, inerrant Word of God and the supreme authority in all matters of faith and practice.",
  },
  {
    id: 2,
    icon: "✝️",
    title: "The Trinity",
    summary:
      "We believe in one God, eternally existing in three persons — Father, Son, and Holy Spirit — equal in power and glory.",
  },
  {
    id: 3,
    icon: "🕊️",
    title: "Salvation by Grace",
    summary:
      "We believe that salvation is by grace alone, through faith alone, in Christ alone — not by human effort or merit.",
  },
  {
    id: 4,
    icon: "⛪",
    title: "The Local Church",
    summary:
      "We believe in the importance of the local church as the primary community for worship, discipleship, and mission.",
  },
  {
    id: 5,
    icon: "🙏",
    title: "Believer's Baptism",
    summary:
      "We believe in baptism by immersion for those who have personally trusted in Jesus Christ as Lord and Savior.",
  },
  {
    id: 6,
    icon: "👑",
    title: "The Return of Christ",
    summary:
      "We believe in the personal, bodily return of Jesus Christ to judge the living and the dead and to establish His kingdom.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── i. PAGE HEADER ── */}
      <div className="py-16 bg-brand-900">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <p className="mb-2 text-sm font-medium tracking-widest uppercase text-brand-300">
            Get To Know Us
          </p>
          <h1 className="mb-4 text-4xl font-bold text-white font-heading md:text-5xl">
            About Us
          </h1>
          <p className="max-w-xl mx-auto leading-relaxed text-brand-200">
            A Reformed Baptist church in Jimma, Ethiopia, committed to the Word
            of God and the Gospel of Jesus Christ.
          </p>
        </div>
      </div>

      {/* ── ii. OUR STORY ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl px-6 mx-auto">
          {/* Section label + heading */}
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-medium tracking-widest uppercase text-brand-600">
              Our Story
            </p>
            <h2 className="text-3xl font-bold font-heading text-brand-900 md:text-4xl">
              How We Started
            </h2>
            <div className="w-16 h-px mx-auto mt-6 bg-brand-400" />
          </div>

          {/* Story paragraphs — replace with real history */}
          <div className="flex flex-col gap-6 text-lg leading-relaxed text-gray-600">
            <p>
              {/* ← Replace with real founding story */}
              Gospel Truth Ministry was founded in Jimma, Ethiopia, by a group
              of believers with a deep conviction that the city needed a church
              committed to expository preaching and the doctrines of grace. From
              humble beginnings, God has been faithful to grow this congregation
              in both number and maturity.
            </p>
            <p>
              {/* ← Replace with real growth/mission story */}
              Over the years, the church has grown into a vibrant community of
              disciples who gather weekly not only on Sundays but throughout the
              week for prayer, Bible study, and fellowship. Every program of the
              church is built around one central mission: to proclaim Jesus
              Christ as Lord.
            </p>
            <p>
              {/* ← Replace with vision/future paragraph */} We are a young
              church with a big vision — to see the Gospel transform lives,
              families, and communities across Jimma and beyond. We believe that
              a church faithful to the Word of God is the greatest gift any city
              can receive.
            </p>
          </div>

          {/* Mission + Vision boxes */}
          <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2">
            <div className="p-6 border bg-brand-50 border-brand-100 rounded-2xl">
              <p className="mb-2 text-xs font-medium tracking-widest uppercase text-brand-600">
                Our Mission
              </p>
              <h3 className="mb-3 text-xl font-bold font-heading text-brand-900">
                Preach the Gospel
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {/* ← Replace with real mission statement */}
                To proclaim Jesus Christ as Lord through faithful preaching,
                discipleship, and community — for the glory of God alone.
              </p>
            </div>
            <div className="p-6 bg-brand-900 rounded-2xl">
              <p className="mb-2 text-xs font-medium tracking-widest uppercase text-brand-300">
                Our Vision
              </p>
              <h3 className="mb-3 text-xl font-bold text-white font-heading">
                Make Disciples
              </h3>
              <p className="text-sm leading-relaxed text-brand-200">
                {/* ← Replace with real vision statement */}
                To see every believer grow into a mature disciple of Christ who
                loves God deeply and serves their community faithfully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── iii. WHAT WE BELIEVE ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl px-6 mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-medium tracking-widest uppercase text-brand-600">
              Our Doctrine
            </p>
            <h2 className="mb-4 text-3xl font-bold font-heading text-brand-900 md:text-4xl">
              What We Believe
            </h2>
            <p className="max-w-xl mx-auto leading-relaxed text-gray-500">
              These are the core convictions that shape everything we do — our
              worship, our preaching, and our life together.
            </p>
            <div className="w-16 h-px mx-auto mt-6 bg-brand-400" />
          </div>

          {/* Belief cards grid */}
          <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2 lg:grid-cols-3">
            {beliefs.map((belief) => (
              <div
                key={belief.id}
                className="p-6 transition-all duration-200 bg-white border border-gray-100 shadow-sm rounded-2xl hover:shadow-md hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 mb-4 text-2xl bg-brand-50 rounded-xl">
                  {belief.icon}
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg font-bold font-heading text-brand-900">
                  {belief.title}
                </h3>

                {/* Summary */}
                <p className="text-sm leading-relaxed text-gray-500">
                  {belief.summary}
                </p>
              </div>
            ))}
          </div>

          {/* Link to full confession */}
          <div className="p-8 text-center bg-brand-900 rounded-2xl">
            <p className="mb-2 text-sm font-medium tracking-widest uppercase text-brand-300">
              Go Deeper
            </p>
            <h3 className="mb-3 text-2xl font-bold text-white font-heading">
              Read Our Full Statement of Faith
            </h3>
            <p className="max-w-lg mx-auto mb-6 text-sm leading-relaxed text-brand-200">
              Our complete doctrinal statement covers every area of Christian
              belief in detail — from Scripture and the nature of God to the
              church and last things.
            </p>
            <Link
              to="/beliefs"
              className="inline-block px-8 py-3 font-semibold transition-colors duration-200 bg-white rounded-lg text-brand-800 hover:bg-brand-100"
            >
              Read Full Confession →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
