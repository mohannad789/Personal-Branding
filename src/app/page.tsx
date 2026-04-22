import AnimatedHeroIntro from "@/components/AnimatedHeroIntro";
import HeroPillarBackdrop from "@/components/HeroPillarBackdrop";

export default function Home() {
  return (
    <>
      <HeroPillarBackdrop />
      <main className="relative z-[15] min-h-screen">
      <AnimatedHeroIntro />

      <div
        className="relative"
        style={{
          backgroundImage: `linear-gradient(
            180deg,
            transparent 0px,
            transparent max(72px, 11vh),
            color-mix(in srgb, var(--bg-color) 38%, transparent) max(160px, 22vh),
            color-mix(in srgb, var(--bg-color) 78%, transparent) max(280px, 38vh),
            var(--bg-color) max(400px, 52vh),
            var(--bg-color) 100%
          )`,
        }}
      >
      {/* SECTION 2 — The Invisible Authority Trap */}
      <section id="home-section-after-hero" className="section-padding container scroll-mt-28">
        <span className="eyebrow">THE INVISIBLE AUTHORITY TRAP</span>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', maxWidth: '800px', marginBottom: '1.5rem' }}>
          You've Built A Business<br />
          That Proves You're Exceptional.<br />
          Your Market Hasn't Noticed Yet.
        </h2>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '4rem' }}>
          You've built a business that proves you are exceptional, but that success has created a prison. Your track record should be doing the selling. Instead, you're still the one doing all the explaining.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          <div style={{ padding: '2rem', border: '1px solid var(--text-muted)', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>The Referral Ceiling</h3>
            <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}>YOUR CURRENT REALITY:</p>
            <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', marginBottom: '1rem' }}>"Every client I have came through a warm introduction."</p>
            <p>That's not a strategy. That's a dependency. Your revenue has a ceiling, and scaling currently requires more team, more management, more complexity, and less freedom. Success has created your prison.</p>
          </div>
          <div style={{ padding: '2rem', border: '1px solid var(--text-muted)', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>The Multiplication Trap</h3>
            <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}>YOUR CURRENT REALITY:</p>
            <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', marginBottom: '1rem' }}>"I'm posting, but the leads are lukewarm and the brand sounds like everyone else's."</p>
            <p>Stuck between manual effort and algorithm chasing. You're feeding the machine, but the machine is not feeding you back. Revenue growth feels like a multiplication of problems, not profits.</p>
          </div>
          <div style={{ padding: '2rem', border: '1px solid var(--text-muted)', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>The Competence Discount</h3>
            <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}>YOUR CURRENT REALITY:</p>
            <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', marginBottom: '1rem' }}>"I keep losing deals to people with half my experience but twice my visibility."</p>
            <p>The market doesn't reward the best. It rewards the most legible. Right now, you're illegible.</p>
          </div>
          <div style={{ padding: '2rem', border: '1px solid var(--text-muted)', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>The Expertise Paradox</h3>
            <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}>YOUR CURRENT REALITY:</p>
            <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', marginBottom: '1rem' }}>"People who work with me are blown away. People who haven't, don't know I exist."</p>
            <p>Your reputation is locked behind a door that only opens from the inside. Everyone who's in the room knows. No one outside it does.</p>
          </div>
        </div>

        <div style={{ textAlign: 'center', margin: '4rem 0' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontStyle: 'italic', color: 'var(--accent-color)' }}>
            You don't have a marketing problem.<br />
            You have a positioning problem.<br />
            And it's costing you more than you think.
          </h2>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button className="cta-button">Book a Strategy Call</button>
        </div>
      </section>

      {/* SECTION 3 — The Shift */}
      <section className="section-padding container">
        <span className="eyebrow">THE POSITION-FIRST METHOD</span>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', maxWidth: '800px', marginBottom: '3rem' }}>
          The Market Doesn't Buy Expertise.<br />
          It Buys The Perception Of Expertise.<br />
          We Engineer That Perception.
        </h2>
        
        <div style={{ maxWidth: '800px', fontSize: '1.125rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <p>Here is the secret nobody in this industry will tell you:</p>
          <p>Asymmetric leverage is why the top 1% create their own narrative and become category kings. Your competitors aren't winning because they're better than you. They're winning because their market position does the selling before the conversation starts. By the time a prospect meets them, 70% of the decision is already made. Not by the pitch. Not by the proposal. By every signal the market absorbed before the first handshake.</p>
          <p>Your LinkedIn. Your media presence. Your speaking record. The way Google answers the question "Who is [your name]?" That's where deals are won or lost. And right now, your answer to that question is either silence, noise, or someone else's narrative.</p>
          <p>Markets are perception machines. We engineer how entire categories think about you—making your competitors look amateur by comparison. We reverse-engineer the exact perception that drives revenue in your market, then build every asset to make that perception the default. Not louder. Not more frequent. More precise.</p>
          <p>This isn't content marketing with a strategy label. It's commercial positioning with content as one of several tools.</p>
        </div>

        <div style={{ margin: '6rem 0' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', textAlign: 'center', fontStyle: 'italic' }}>
            We don't make you louder.<br />
            We make you inevitable.
          </h2>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button className="cta-button">Book a Strategy Call</button>
        </div>
      </section>

      {/* SECTION 4 — Objection Block */}
      <section className="section-padding container">
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '4rem', textAlign: 'center' }}>Real Conversations.</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', maxWidth: '800px', margin: '0 auto' }}>
          {/* Objection 1 */}
          <div>
            <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-color)', borderLeft: '4px solid var(--accent-color)', marginBottom: '1.5rem', borderRadius: '4px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <p style={{ fontStyle: 'italic', fontWeight: 500 }}>"I've heard this before. Another agency promising 'strategic positioning.' Last one gave me a content calendar and a LinkedIn audit."</p>
            </div>
            <div style={{ paddingLeft: '2rem', color: 'var(--text-muted)' }}>
              <p style={{ marginBottom: '1rem' }}>We get it. You're tired of marketing that feels like lying. We are not in the business of pushing hype or running formulas. Most agencies sell "activity" because activity is easy to deliver and easy to report on. "We posted 12 times this week" is a metric that sounds productive. It's also completely disconnected from revenue.</p>
              <p style={{ marginBottom: '1rem' }}>Here's the question they never asked you: What specific perception does your market need to hold about you for revenue to follow? Not "what should we post." Not "which platforms." What must the market believe about you, specifically, that would make your ideal clients reach out without a referral?</p>
              <p>That's where we start. We provide the complete infrastructure to create outcomes that actually matter. While others guess, we engineer certainty.</p>
            </div>
          </div>

          {/* Objection 2 */}
          <div>
            <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-color)', borderLeft: '4px solid var(--accent-color)', marginBottom: '1.5rem', borderRadius: '4px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <p style={{ fontStyle: 'italic', fontWeight: 500 }}>"Personal branding feels like self-promotion. I'm good at what I do. The work should speak for itself."</p>
            </div>
            <div style={{ paddingLeft: '2rem', color: 'var(--text-muted)' }}>
              <p style={{ marginBottom: '1rem' }}>It should. And in a perfect market, it would. But you don't operate in a perfect market. You operate in one where a founder with half your depth and a better LinkedIn presence is closing the deals you should be closing.</p>
              <p style={{ marginBottom: '1rem' }}>We're not asking you to become a content creator. We're not asking you to perform. We're asking you to stop subsidising your competitors' advantage by staying invisible.</p>
              <p>The work doesn't speak for itself. Positioning does. And then the work closes.</p>
            </div>
          </div>

          {/* Objection 3 */}
          <div>
            <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-color)', borderLeft: '4px solid var(--accent-color)', marginBottom: '1.5rem', borderRadius: '4px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <p style={{ fontStyle: 'italic', fontWeight: 500 }}>"I'm not sure personal branding delivers measurable ROI."</p>
            </div>
            <div style={{ paddingLeft: '2rem', color: 'var(--text-muted)' }}>
              <p style={{ marginBottom: '1rem' }}>Then you've been looking at the wrong agencies. Followers aren't ROI. Impressions aren't ROI. Media mentions aren't ROI.</p>
              <p style={{ marginBottom: '1rem' }}>Inbound leads from people who have never been referred to you — that's ROI. A shorter sales cycle because the prospect already trusts you before the meeting — that's ROI. Winning a deal you didn't pitch for because your name was already in the room — that's ROI.</p>
              <p>We measure what matters. If we can't tie it to revenue, we don't do it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Who This Is For / Who This Isn't For */}
      <section className="section-padding container">
        <span className="eyebrow">WHO WE WORK WITH</span>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '4rem' }}>
          This Isn't For Everyone.<br />
          That's The Point.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
          {/* Left Column - Who this is for */}
          <div>
            <h3 style={{ color: 'var(--accent-color)', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>WHO THIS IS FOR</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.125rem' }}>
              <li>✓ For Personal Brands and Founders who want to scale to 6 to 8 Figures. You've built something that works, but you are trapped in the fulfillment prison—you ARE the business.</li>
              <li>✓ Annual revenue of €1M+. Established in your field. Known within your network, invisible outside it.</li>
              <li>✓ Based in the DACH region or the Gulf. Operating in sectors where trust isn't a differentiator — it's the transaction.</li>
              <li>✓ You've probably tried some version of this before. An agency. A coach. A "brand strategist" who gave you a personal brand deck that's been gathering dust since 2022.</li>
              <li>✓ You're not here because you believe in personal branding. You're here because you're tired of watching less qualified founders command the market position that should be yours.</li>
            </ul>
          </div>

          {/* Right Column - Who we don't work with */}
          <div>
            <h3 style={{ color: 'var(--text-muted)', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>WHO WE DON'T WORK WITH</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.125rem', color: 'var(--text-muted)' }}>
              <li>✕ Founders looking for a social media manager with a strategy title.</li>
              <li>✕ Anyone who measures success in followers, likes, or impressions.</li>
              <li>✕ Entrepreneurs who want to "go viral." (Virality is a lottery ticket. Positioning is a pension.)</li>
              <li>✕ Anyone not willing to invest at the level the outcome requires.</li>
              <li>✕ Businesses without a proven offer. We position what works. We don't fix what doesn't.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 6 — The Method */}
      <section className="section-padding container">
        <span className="eyebrow">THE POSITION-FIRST METHOD</span>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', maxWidth: '800px', marginBottom: '2rem' }}>
          Why Most Personal Brands<br />
          Fail Before They Start.<br />
          And What The Ones That<br />
          Generate Revenue Do Differently.
        </h2>
        
        <div style={{ maxWidth: '800px', fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '4rem' }}>
          <p style={{ marginBottom: '1rem' }}>Most founders approach personal branding backwards. They start with content. They start with platforms. They start with "what should I post?"</p>
          <p style={{ marginBottom: '1rem', fontWeight: 700, color: 'var(--text-color)' }}>Wrong first step. Every time.</p>
          <p>The founders whose personal brands actually drive business — the ones who generate inbound from strangers, shorten their sales cycle, and command premium fees — they started with positioning. Not content. Not tactics. The strategic decision of how the market should perceive them, and for what commercial purpose.</p>
          <p style={{ marginTop: '1rem' }}>That's the difference between noise and a pipeline.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {/* Step 1 */}
          <div style={{ padding: '2rem', border: '1px solid var(--text-muted)', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>Step 1 — THE ILLUSION: Start by creating content.</h3>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-color)' }}>THE LEVERAGE: Engineer the perception that drives revenue.</h3>
            <p style={{ color: 'var(--text-muted)' }}>Before a single post, article, or interview, we define the exact market position that makes your ideal client feel foolish going elsewhere. Not a tagline. Not a "brand story." A commercial positioning decision that every future asset is built to reinforce. This is the blueprint. Without it, everything else is decoration.</p>
          </div>

          {/* Step 2 */}
          <div style={{ padding: '2rem', border: '1px solid var(--text-muted)', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>Step 2 — WRONG: Build a presence on every platform.</h3>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-color)' }}>RIGHT: Build authority in the rooms that matter.</h3>
            <p style={{ color: 'var(--text-muted)' }}>Your ideal client isn't everywhere. They're in specific rooms — industry events, publications, boards, networks, decision tables. We identify those rooms and engineer your entry. Not as a participant. As the person others reference when the conversation turns to your domain.</p>
          </div>

          {/* Step 3 */}
          <div style={{ padding: '2rem', border: '1px solid var(--text-muted)', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>Step 3 — WRONG: Post consistently and hope for compounding.</h3>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-color)' }}>RIGHT: Architect a system where every asset serves the position.</h3>
            <p style={{ color: 'var(--text-muted)' }}>Every article, every interview, every speaking engagement, every LinkedIn post is reverse-engineered from your target position. Nothing is filler. Nothing is "keeping the feed alive." Each asset is a brick in a structure that's designed to be discovered by the right person at the right moment and deliver the right signal.</p>
          </div>

          {/* Step 4 */}
          <div style={{ padding: '2rem', border: '1px solid var(--text-muted)', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>Step 4 — WRONG: Measure visibility metrics.</h3>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-color)' }}>RIGHT: Measure revenue impact.</h3>
            <p style={{ color: 'var(--text-muted)' }}>Inbound enquiries. Deal velocity. Average deal size. Pipeline from non-referral sources. Source attribution. These are the numbers we watch. If it doesn't move revenue, it doesn't survive the next quarter's strategy review.</p>
          </div>
        </div>

        <div style={{ margin: '6rem 0' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', textAlign: 'center', fontStyle: 'italic' }}>
            Personal brands don't launch.<br />
            They compound.<br />
            The goal isn't a campaign.<br />
            It's a market position that appreciates like equity.
          </h2>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button className="cta-button">Book a Strategy Call</button>
        </div>
      </section>

      {/* SECTION 7 — What We Build */}
      <section className="section-padding container">
        <span className="eyebrow">WHAT WE BUILD</span>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '2rem' }}>The Architecture Behind Authority.</h2>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '800px', marginBottom: '4rem' }}>
          Every engagement begins with diagnosis. Not templates. Not a kickoff deck we used for the last client. A forensic analysis of where you stand, where you should stand, and the shortest line between the two.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div style={{ padding: '2.5rem', backgroundColor: '#111', color: '#fff', borderRadius: '8px' }}>
            <div style={{ color: 'var(--accent-color)', fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>01</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Market Perception Engineering</h3>
            <p style={{ color: '#aaa' }}>Forget demographics. We target the unconscious patterns that control buying decisions. We engineer how entire categories think, making your competitors look amateur by comparison.</p>
          </div>
          
          <div style={{ padding: '2.5rem', backgroundColor: '#111', color: '#fff', borderRadius: '8px' }}>
            <div style={{ color: 'var(--accent-color)', fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>02</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Narrative Architecture</h3>
            <p style={{ color: '#aaa' }}>We build the story the market tells about you. Your messaging framework. Your thought leadership angle. Your point of view. Not platitudes. Not "passionate about innovation." A position that's worth having — and worth quoting.</p>
          </div>

          <div style={{ padding: '2.5rem', backgroundColor: '#111', color: '#fff', borderRadius: '8px' }}>
            <div style={{ color: 'var(--accent-color)', fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>03</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Asymmetric Distribution</h3>
            <p style={{ color: '#aaa' }}>While others guess, we engineer certainty. Multi-million dollar campaigns analyzed let us predict your customer's next move before they know it themselves. The right assets, aimed at the right rooms, at the right time.</p>
          </div>

          <div style={{ padding: '2.5rem', backgroundColor: '#111', color: '#fff', borderRadius: '8px' }}>
            <div style={{ color: 'var(--accent-color)', fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>04</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Revenue Infrastructure</h3>
            <p style={{ color: '#aaa' }}>The bridge between "I've heard of you" and "I want to hire you." Inbound architecture, authority assets, conversion signals. The invisible machinery that turns brand recognition into business.</p>
          </div>
        </div>
      </section>

      {/* SECTION 8 — Proof */}
      <section className="section-padding container">
        <span className="eyebrow">CLIENT OUTCOMES</span>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '4rem' }}>
          There's A Reason Founders<br />
          Stay With Us.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
          {/* Testimonial Placeholder */}
          <div style={{ padding: '2.5rem', border: '1px solid var(--text-muted)', borderRadius: '8px' }}>
            <p style={{ textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '1rem' }}>SaaS Founder, DACH region</p>
            <p style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--accent-color)', marginBottom: '1rem', lineHeight: 1.1 }}>3.2x inbound increase in 6 months</p>
            <p style={{ fontWeight: 600, marginBottom: '1.5rem' }}>First non-referral enterprise client within 90 days</p>
            <p style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>"A brief quote about the incredible experience and results achieved through the position-first method."</p>
          </div>

          {/* Testimonial Placeholder 2 */}
          <div style={{ padding: '2.5rem', border: '1px solid var(--text-muted)', borderRadius: '8px' }}>
            <p style={{ textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '1rem' }}>Fintech CEO, Gulf</p>
            <p style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--accent-color)', marginBottom: '1rem', lineHeight: 1.1 }}>Sales cycle halved to 45 days</p>
            <p style={{ fontWeight: 600, marginBottom: '1.5rem' }}>Secured two major board advisory roles</p>
            <p style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>"A brief quote about the incredible experience and results achieved through the position-first method."</p>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem', padding: '4rem 0', borderTop: '1px solid var(--text-muted)', borderBottom: '1px solid var(--text-muted)' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--accent-color)' }}>10+</p>
            <p style={{ textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '0.05em' }}>Years of strategic advisory</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--accent-color)' }}>2</p>
            <p style={{ textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '0.05em' }}>Markets across DACH & Gulf</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--accent-color)' }}>95%</p>
            <p style={{ textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '0.05em' }}>Client retention rate</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--accent-color)' }}>2.5x</p>
            <p style={{ textTransform: 'uppercase', fontSize: '0.875rem', letterSpacing: '0.05em' }}>Average inbound increase</p>
          </div>
        </div>
      </section>

      {/* SECTION 9 — The Deeper Layer */}
      <section className="section-padding container" style={{ padding: '8rem 2rem', textAlign: 'center' }}>
        <div style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontStyle: 'italic', display: 'flex', flexDirection: 'column', gap: '4rem', lineHeight: 1.2 }}>
          <p>
            The market is not rational.<br />
            It is perceptual.
          </p>
          <p>
            People don't choose<br />
            the most qualified expert.
          </p>
          <p>
            They choose<br />
            the one they already trust.
          </p>
          <p>
            Trust is not earned<br />
            in the meeting.
          </p>
          <p>
            It is engineered<br />
            before the meeting<br />
            ever happens.
          </p>
          <p style={{ color: 'var(--accent-color)', fontWeight: 700 }}>
            That's what we build.
          </p>
        </div>
      </section>

      {/* SECTION 10 — FAQ */}
      <section className="section-padding container">
        <span className="eyebrow">QUESTIONS WE HEAR</span>
        
        <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Q: How is this different from PR?</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}>PR gets you mentioned. We get you chosen. A media placement is one tool inside a positioning strategy. It's never the strategy itself. If your PR agency can't tell you which specific perception their work is building toward, they're not positioning you. They're publicising you.</p>
          </div>
          
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Q: How long before results?</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}>Depends on where you're starting. Some clients see inbound shift within 8-12 weeks. Full market repositioning takes 6-12 months. We'll tell you what's realistic in the strategy call. We don't sell timelines that sound good and deliver disappointment.</p>
          </div>
          
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Q: Do you manage social media?</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}>We can. But that's the smallest part of what we do. We build the strategic architecture that makes content work. Who executes — us, your team, a combination — is a logistics decision, not a strategic one.</p>
          </div>
          
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Q: What does it cost?</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}>Retained engagements tailored to scope. If you want a number before a conversation, we understand, but it would be meaningless without understanding your position, your market, and your commercial objectives. Book the call. We'll scope it properly.</p>
          </div>
          
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Q: I'm already well-known in my industry.</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}>Known and positioned are different things. If "well-known" generated the inbound revenue you wanted, you wouldn't be reading this. Reputation is what people say when you're in the room. Brand is what they say — and do — when you're not.</p>
          </div>
          
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Q: I don't want to become a "content creator."</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}>Neither do we. This isn't about turning you into someone who performs for an audience. It's about making your market position so clear that the right opportunities find you. Some clients post twice a month. The positioning does the rest.</p>
          </div>
        </div>
      </section>

      {/* SECTION 11 — Final CTA Block */}
      <section className="section-padding container" style={{ backgroundColor: '#111', color: '#fff', borderRadius: '8px', textAlign: 'center', padding: '6rem 2rem' }}>
        <span className="eyebrow" style={{ color: 'var(--accent-color)' }}>FOR FUTURE MARKET LEADERS ONLY</span>
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontStyle: 'italic', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
          Your Next Client Is<br />
          Forming An Opinion<br />
          About You Right Now.
        </h2>
        
        <div style={{ maxWidth: '600px', margin: '0 auto', color: '#aaa', fontSize: '1.125rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
          <p>Not tomorrow. Now. They're reading your LinkedIn. Googling your name. Asking a colleague what they know about you. And the answer they're getting is either silence, noise, or someone else's narrative.</p>
          <p style={{ color: '#fff', fontWeight: 600 }}>Choose your reality. You can stay trapped in the referral ceiling, or you can build the asymmetric leverage required to become the category king.</p>
          <p>A 30-minute strategy call. No pitch deck. No pressure. Just a forensic look at where your personal brand stands today, and what the gap between your reputation and your revenue is actually costing you.</p>
        </div>

        <button style={{ backgroundColor: 'var(--accent-color)', color: '#fff', padding: '1.25rem 2.5rem', fontSize: '1.25rem', fontWeight: 700, border: 'none', borderRadius: '9999px', cursor: 'pointer', fontFamily: 'var(--font-sans)', marginBottom: '1.5rem' }}>
          Book Your Strategy Call
        </button>

        <p style={{ color: '#fff', fontWeight: 600, marginBottom: '2rem' }}>Dubai-based. Serving the DACH region and the Gulf.</p>
        
        <p style={{ color: '#666', fontSize: '0.875rem', maxWidth: '500px', margin: '0 auto' }}>
          We take on a limited number of clients per quarter. If this page resonates, don't assume it'll still be available next month.
        </p>
      </section>

      {/* SECTION 12 — Footer */}
      <footer className="container" style={{ padding: '4rem 2rem', borderTop: '1px solid var(--text-muted)', marginTop: '4rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', color: 'var(--text-muted)' }}>
        <div>
          <p style={{ fontWeight: 700, color: 'var(--text-color)', marginBottom: '0.5rem' }}>Contact</p>
          <p>hello@personalbrand.com | +971 50 000 0000</p>
        </div>
        <div>
          <p style={{ fontWeight: 700, color: 'var(--text-color)', marginBottom: '0.5rem' }}>Legal</p>
          <p>Privacy Policy | Imprint</p>
        </div>
        <div>
          <p style={{ fontWeight: 700, color: 'var(--text-color)', marginBottom: '0.5rem' }}>Location</p>
          <p>Dubai, UAE</p>
        </div>
      </footer>

      </div>
    </main>
    </>
  );
}
