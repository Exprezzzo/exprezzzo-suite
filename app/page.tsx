export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-purple-600 to-red-500 opacity-20"></div>
        <div className="relative px-6 py-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-purple-400 to-red-400 bg-clip-text text-transparent mb-4">
            Las Vegas Good Times
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Your premium concierge to the complete Vegas experience
          </p>
          <div className="text-lg text-yellow-300 font-semibold">
            Vegas Strip • Downtown • Summerlin • Henderson • Area 51 • Utah Lakes • Laughlin Beaches
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="px-6 py-12">
        {/* Hero */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              200+ exclusive venues across the extended Vegas metro
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              From the Strip to Area 51. From Utah’s lakes to California’s Laughlin beaches – 
              the only concierge app covering the entire ecosystem.
            </p>
            <button className="bg-gradient-to-r from-yellow-400 to-red-500 text-black font-bold py-4 px-8 rounded-full text-xl hover:shadow-2xl hover:shadow-yellow-400/50 transition-all duration-300">
              Explore Vegas like never before
            </button>
          </div>
        </section>

        {/* Services grid */}
        <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
          <Card color="purple" title="VIP Strip Access"
                text="Reservations, skip-the-line, insider experiences at the most coveted venues." />
          <Card color="red" title="Adventure Beyond"
                text="Area 51 tours, Utah lake adventures, Laughlin beach getaways." />
          <Card color="yellow" title="White-Label Solutions"
                text="Custom concierge platforms for casinos, resorts and hospitality partners." />
        </section>

        {/* Stats */}
        <Stats />

        {/* Call-to-action */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-purple-900/50 to-red-900/50 p-8 rounded-3xl border border-yellow-400/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to experience Vegas differently?
            </h2>
            <p className="text-gray-300 mb-6">
              Join the network of insiders with access to experiences you won’t find anywhere else.
            </p>
            <button className="bg-gradient-to-r from-red-500 to-purple-600 text-white font-bold py-4 px-8 rounded-full text-xl hover:shadow-2xl hover:shadow-purple-400/50 transition-all duration-300 mr-4">
              Get VIP Access
            </button>
            <button className="border border-yellow-400 text-yellow-400 font-bold py-4 px-8 rounded-full text-xl hover:bg-yellow-400 hover:text-black transition-all duration-300">
              Partner with Us
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-400 border-t border-gray-800">
        <p>&copy; 2025 Las Vegas Good Times. Powered by 23+ years of Vegas industry connections.</p>
      </footer>
    </div>
  );
}

/* --- small helper components --- */
function Card({ color, title, text }: { color: string; title: string; text: string }) {
  return (
    <div className={`bg-gradient-to-br from-${color}-800/50 to-black/50 p-8 rounded-2xl border border-${color}-400/30`}>
      <h3 className="text-2xl font-bold text-yellow-400 mb-4">{title}</h3>
      <p className="text-gray-300">{text}</p>
    </div>
  );
}

function Stats() {
  return (
    <section className="text-center mb-16">
      <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-8">
        {[
          { num: "200+", label: "Exclusive Venues", color: "yellow" },
          { num: "23+", label: "Years Experience", color: "purple" },
          { num: "5",   label: "States Coverage", color: "red" },
          { num: "24/7",label: "Concierge Access", color: "yellow" },
        ].map(s => (
          <div key={s.label}>
            <div className={`text-4xl font-bold text-${s.color}-400 mb-2`}>{s.num}</div>
            <div className="text-gray-300">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
