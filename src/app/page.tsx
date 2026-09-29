export default function Home() {
  return (
    <div className="flex flex-col items-center max-w-3xl mx-auto space-y-16 lg:space-y-24">
      {/* Hero Section */}
      <section className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-50">
          Pinterest, inside <span className="text-[#e11d48]">Telegram.</span>
        </h1>
        <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          PinFind is an in-development Telegram inline experience for discovering and sharing Pinterest content directly inside conversations.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button className="px-8 py-3 rounded-full bg-[#e11d48] text-white font-medium hover:bg-[#be123c] transition-colors cursor-not-allowed opacity-90">
            Coming soon
          </button>
          <span className="text-sm text-zinc-500 font-medium">Built by BuildByBits</span>
        </div>
      </section>

      {/* Visual Mockup */}
      <section className="w-full relative animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10" />
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 sm:p-6 shadow-2xl backdrop-blur-sm overflow-hidden relative">
          
          {/* Telegram Input Mock */}
          <div className="flex items-center gap-3 bg-zinc-950 border border-zinc-800 rounded-full px-4 py-3 mb-6 shadow-inner">
            <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400">@</div>
            <div className="flex-1 font-mono text-sm sm:text-base">
              <span className="text-[#e11d48]">@pinfind</span> <span className="text-zinc-300">dark brutalist architecture</span>
            </div>
            <div className="w-4 h-4 rounded-full bg-blue-500/20 border border-blue-500/50 animate-pulse" />
          </div>

          {/* Pinterest Grid Mock */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 opacity-70">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i} 
                className={`rounded-xl bg-zinc-800 animate-pulse`}
                style={{ 
                  height: i % 2 === 0 ? '160px' : '200px',
                  animationDelay: `${i * 150}ms`
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="w-full space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-both">
        <div className="text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100">Search → Select → Share</h2>
          <p className="text-zinc-400">A seamless workflow without leaving the app.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="space-y-3 p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50">
            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 font-semibold mb-4">1</div>
            <h3 className="text-lg font-medium text-zinc-200">Search</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Type <span className="text-zinc-300 font-mono text-xs">@pinfind</span> followed by what you’re looking for.
            </p>
          </div>

          {/* Step 2 */}
          <div className="space-y-3 p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50">
            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 font-semibold mb-4">2</div>
            <h3 className="text-lg font-medium text-zinc-200">Discover</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Browse relevant Pinterest results directly in Telegram’s inline picker.
            </p>
          </div>

          {/* Step 3 */}
          <div className="space-y-3 p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50">
            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 font-semibold mb-4">3</div>
            <h3 className="text-lg font-medium text-zinc-200">Share</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Select a result and send it into the conversation instantly.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full text-center max-w-xl mx-auto pt-8 border-t border-zinc-800/50">
        <h3 className="text-sm font-semibold tracking-widest uppercase text-zinc-500 mb-4">About the Project</h3>
        <p className="text-zinc-400 text-sm leading-relaxed">
          PinFind is being developed by <strong className="text-zinc-300 font-medium">BuildByBits</strong> as an experiment in making visual discovery faster inside everyday messaging workflows.
        </p>
      </section>
    </div>
  );
}
