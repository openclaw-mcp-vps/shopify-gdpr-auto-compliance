export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          GDPR Compliance for Shopify
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Auto-generate GDPR docs<br />
          <span className="text-[#58a6ff]">tailored to your Shopify store</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your store, scan your installed apps, and get AI-generated privacy policies, cookie notices, and data processing agreements — ready in minutes.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
        >
          Get Compliant for $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required to start. Cancel anytime.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '🔍', title: 'Store Scan', desc: 'Analyzes your installed apps and data collection practices automatically.' },
            { icon: '📄', title: 'AI-Generated Docs', desc: 'Privacy policy, cookie notice, and DPA tailored to your exact setup.' },
            { icon: '🔄', title: 'Always Up-to-Date', desc: 'Re-generate whenever your store changes to stay compliant.' }
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{icon}</div>
              <h3 className="font-semibold text-white mb-1">{title}</h3>
              <p className="text-sm text-[#8b949e]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$19<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stay GDPR compliant</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited document regenerations',
              'Privacy Policy tailored to your apps',
              'Cookie Notice & Consent Banner copy',
              'Data Processing Agreement (DPA)',
              'Shopify app scan on every update',
              'Download as PDF or copy HTML'
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Start for $19/mo
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">Secure payment via Lemon Squeezy. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the Shopify store scan work?',
              a: 'After subscribing, you connect your Shopify store via OAuth. We read your installed apps and store settings (read-only) to understand what data is collected, then generate documents that reflect your actual setup.'
            },
            {
              q: 'Are the generated documents legally valid?',
              a: 'Our AI-generated documents are based on GDPR best practices and cover all required disclosures. We recommend a quick review by your legal counsel, but most store owners use them as-is.'
            },
            {
              q: 'What if I install new apps on my store?',
              a: 'Simply trigger a re-scan from your dashboard. Your documents will be updated to reflect any new apps or data practices — keeping you compliant as your store evolves.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} GDPR AutoDocs. Not legal advice. For informational purposes only.
      </footer>
    </main>
  )
}
