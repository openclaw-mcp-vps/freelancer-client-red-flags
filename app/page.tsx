export default function Page() {
  const faqs = [
    {
      q: 'What does the scanner analyze?',
      a: 'It analyzes client emails, project briefs, and company info for classic non-payment patterns: vague scope, pressure tactics, missing contact details, and more.'
    },
    {
      q: 'How accurate is the AI detection?',
      a: 'Our model is trained on thousands of real freelancer experiences. It flags high-risk signals with explanations so you can make an informed decision.'
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes. Cancel anytime from your billing portal — no questions asked, no lock-in.'
    }
  ]

  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-16">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Freelancer Protection
        </span>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Spot Bad Clients<br />
          <span className="text-[#58a6ff]">Before They Ghost You</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Paste a client email or project description. Our AI scans for payment red flags in seconds — so you never chase an invoice again.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Scanning — $12/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No lock-in.</p>
      </section>

      {/* Red flags preview */}
      <section className="mb-16">
        <h2 className="text-center text-sm font-semibold text-[#8b949e] uppercase tracking-widest mb-6">Red Flags We Detect</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            '🚩 Vague project scope',
            '🚩 "Exposure" as payment',
            '🚩 Pressure to start immediately',
            '🚩 No company info online',
            '🚩 Requests to skip contract',
            '🚩 Lowball after agreement'
          ].map((flag) => (
            <div key={flag} className="bg-[#161b22] border border-[#30363d] rounded-lg px-4 py-3 text-sm text-[#c9d1d9]">
              {flag}
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-16">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] text-xs font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$12<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to vet clients</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited client scans',
              'AI-powered red flag detection',
              'Company online presence check',
              'Risk score + detailed report',
              'Email & project brief analysis'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#3fb950] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-xl font-bold text-white mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-16 text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} Freelancer Client Red Flags. All rights reserved.
      </footer>
    </main>
  )
}
