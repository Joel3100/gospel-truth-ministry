import { Link } from "react-router-dom";

const sections = [
  {
    id: 1,
    title: "The Holy Scripture",
    content: `We believe that the Holy Bible, both Old and New Testaments,
is the inspired and inerrant Word of God. It is the supreme and
final authority in all matters of faith and practice. Scripture
alone is sufficient to make the believer complete and equipped
for every good work.`,
  },
  {
    id: 2,
    title: "The Nature of God",
    content: `We believe in one God, eternal, almighty, and perfect in
holiness, truth, and love. He exists in three persons — Father,
Son, and Holy Spirit — each fully God, equal in power and glory.`,
  },
  {
    id: 3,
    title: "Jesus Christ",
    content: `We believe that Jesus Christ is fully God and fully man.
He was born of a virgin, lived a sinless life, died as a
substitutionary atonement for sin, rose bodily from the dead,
ascended to the right hand of the Father, and will return
in glory to judge the living and the dead.`,
  },
  {
    id: 4,
    title: "Salvation",
    content: `We believe that salvation is entirely by the grace of God.
Man is totally depraved and unable to save himself. God in His
sovereignty elects sinners to salvation. Christ atoned for their
sins. The Holy Spirit regenerates and calls them to faith.
Salvation is by grace alone, through faith alone, in Christ alone.`,
  },
  {
    id: 5,
    title: "The Church",
    content: `We believe in the importance of the local church as the
God-ordained community for worship, discipleship, the administration
of baptism and the Lord's Supper, and the mission of the Gospel.
We practice believer's baptism by immersion as a public declaration
of faith in Christ.`,
  },
  {
    id: 6,
    title: "Last Things",
    content: `We believe in the personal, bodily, and glorious return of
Jesus Christ. At His return, the dead will be raised — the saved
to eternal life and the lost to eternal condemnation. God will
make all things new, and His people will dwell with Him forever.`,
  },
];

export default function Beliefs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── PAGE HEADER ── */}
      <div className="py-16 bg-brand-900">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <p className="mb-2 text-sm font-medium tracking-widest uppercase text-brand-300">
            What We Stand On
          </p>
          <h1 className="mb-4 text-4xl font-bold text-white font-heading md:text-5xl">
            Statement of Faith
          </h1>
          <p className="max-w-xl mx-auto leading-relaxed text-brand-200">
            The complete doctrinal confession of Gospel Truth Ministry.
          </p>
          {/* Back to About */}
          <Link
            to="/about"
            className="inline-block mt-6 text-sm transition-colors duration-200 text-brand-300 hover:text-white"
          >
            ← Back to About
          </Link>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="max-w-4xl px-6 py-16 mx-auto">
        <div className="flex flex-col gap-12">
          {sections.map((section, index) => (
            <div key={section.id} className="flex flex-col gap-4">
              {/* Article number + title */}
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-sm font-bold text-white rounded-full bg-brand-600">
                  {index + 1}
                </div>
                <h2 className="text-2xl font-bold font-heading text-brand-900">
                  {section.title}
                </h2>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gray-200 ml-14" />

              {/* Content paragraphs */}
              <div className="ml-14">
                {section.content
                  .split("\n\n")
                  .filter((p) => p.trim())
                  .map((paragraph, i) => (
                    <p
                      key={i}
                      className="mb-4 text-base leading-relaxed text-gray-600"
                    >
                      {paragraph.replace(/\n/g, " ").trim()}
                    </p>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
