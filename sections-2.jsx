// MomenTec — second half of sections.

const {
  IconPhone: IconPhone2, IconMessage: IconMessage2, IconCheck: IconCheck2,
  IconPin: IconPin2, IconPlus: IconPlus2, IconClose: IconClose2,
  IconClipboard: IconClipboard2, IconHammer: IconHammer2,
} = window.MIcons;
const { Reveal: Reveal2, SectionHead: SectionHead2 } = window.MSections1;

// ── Gallery ─────────────────────────────────────────────────────────────────
const GALLERY = [
  { tone: 'clean', title: '分解洗浄', area: '〇〇市・戸建て' },
  { tone: 'install', title: 'エアコン取付', area: '△△市・マンション' },
  { tone: 'solar', title: 'パネル清掃', area: '□□町・戸建て' },
  { tone: 'clean', title: 'お掃除機能付き分解', area: '◇◇町・戸建て' },
  { tone: 'install', title: '室外機移設', area: '〇〇市・賃貸' },
  { tone: 'solar', title: '売電手続き代行', area: '✕✕市・戸建て' },
];

const galleryGradients = {
  clean:   { before: 'linear-gradient(135deg, #6e5c44, #4a3d2c)',
             after:  'linear-gradient(135deg, #c8d8be, #a8c9a0)' },
  install: { before: 'linear-gradient(135deg, #7d8a96, #4f5a66)',
             after:  'linear-gradient(135deg, #d8e8ec, #a5c3cb)' },
  solar:   { before: 'linear-gradient(135deg, #8a7250, #5d4a32)',
             after:  'linear-gradient(135deg, #f5e0a8, #d4ad60)' },
};

function Gallery() {
  const [open, setOpen] = React.useState(null);
  const [showAll, setShowAll] = React.useState(false);
  const visible = showAll ? GALLERY : GALLERY.slice(0, 6);
  return (
    <section className="gallery-section">
      <div className="container">
        <SectionHead2 eyebrow="Gallery" title="施工実績ギャラリー" />
        <Reveal2 as="div" className="gallery-grid">
          {visible.map((g, i) => {
            const grad = galleryGradients[g.tone];
            return (
              <button key={i} className="gallery-cell" onClick={() => setOpen(g)} aria-label={`${g.title} の詳細を見る`}>
                <div className="gallery-art">
                  <div className="ba-split">
                    <div className="before" style={{ background: grad.before }}><span>Before</span></div>
                    <div className="after" style={{ background: grad.after }}><span>After</span></div>
                  </div>
                  <div className="divider" />
                </div>
                <div className="gallery-meta">
                  <div className="title">{g.title}</div>
                  <div className="area">{g.area}</div>
                </div>
              </button>
            );
          })}
        </Reveal2>

        {/* Lightbox */}
        <div className={`lightbox-overlay ${open ? 'open' : ''}`} onClick={() => setOpen(null)}>
          {open && (
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <div className="lb-art">
                <div className="gallery-art" style={{ position: 'absolute', inset: 0 }}>
                  <div className="ba-split">
                    <div className="before" style={{ background: galleryGradients[open.tone].before }}><span>Before</span></div>
                    <div className="after" style={{ background: galleryGradients[open.tone].after }}><span>After</span></div>
                  </div>
                  <div className="divider" />
                </div>
                <button className="lb-close" onClick={() => setOpen(null)} aria-label="閉じる">
                  <IconClose2 size={18} stroke={2} />
                </button>
              </div>
              <div className="lb-body">
                <h4>{open.title}</h4>
                <p>{open.area} ・ 施工写真は準備中です。実際の写真と差し替え予定。</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ── Stats with count-up ─────────────────────────────────────────────────────
function CountUp({ to, duration = 1500 }) {
  const [val, setVal] = React.useState(0);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current) return undefined;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min(1, (now - start) / duration);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - t, 3);
            setVal(Math.round(to * eased));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{val.toLocaleString()}</span>;
}

function Stats() {
  return (
    <section className="section-stats">
      <div className="container">
        <div className="stats-grid">
          <Reveal2 as="div" className="stat">
            <div className="number"><span className="placeholder">〇〇〇</span><span className="plus">+</span></div>
            <div className="label">累計施工件数</div>
          </Reveal2>
          <Reveal2 as="div" className="stat" delay={100}>
            <div className="number"><span className="placeholder">〇</span><span className="y">年</span></div>
            <div className="label">地域歴</div>
          </Reveal2>
          <Reveal2 as="div" className="stat" delay={200}>
            <div className="number"><span className="placeholder">〇〇</span><span className="pct">%</span></div>
            <div className="label">リピート率</div>
          </Reveal2>
        </div>
      </div>
    </section>
  );
}

// ── Testimonials ────────────────────────────────────────────────────────────
const VOICES = [
  { initial: 'K', name: 'K.S 様', city: '〇〇市',
    body: 'エアコンの効きが悪く相談したところ、即日来てくださり、丁寧に分解洗浄をしていただきました。冷えが見違えるように良くなり、本当に助かりました。' },
  { initial: 'M', name: 'M.T 様', city: '△△市',
    body: '太陽光の売電契約の切替えで困っていたところ、面倒な手続きをすべて代行してくださって本当に助かりました。何でも相談できる安心感があります。' },
  { initial: 'A', name: 'A.Y 様', city: '□□町',
    body: 'エアコン取付から、ついでに頼んだ物干し金具の取付まで快く対応いただきました。料金も明朗で、また何かあったらお願いしたい職人さんです。' },
];

function Voices() {
  return (
    <section className="section-voices">
      <div className="container">
        <SectionHead2 eyebrow="Voices" title="お客様の声" />
        <div className="voices-grid">
          {VOICES.map((v, i) => (
            <Reveal2 key={i} as="div" className="voice" delay={i * 100}>
              <div className="quote-mark">〝</div>
              <p>{v.body}</p>
              <div className="who">
                <span className="avatar">{v.initial}</span>
                <span>{v.name} / {v.city}</span>
              </div>
            </Reveal2>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Area ────────────────────────────────────────────────────────────────────
const AREAS = ['〇〇市', '△△市', '□□町', '✕✕市', '◇◇町', '◯◯町'];

function Area() {
  return (
    <section className="area-section">
      <div className="container">
        <SectionHead2 eyebrow="Service Area" title="対応エリア" />
        <Reveal2 as="div" className="area-pins">
          {AREAS.map((a) => (
            <span key={a} className="area-pin">
              <IconPin2 size={14} stroke={2} /> {a}
            </span>
          ))}
          <span className="area-pin area-pin--other">上記以外もご相談ください</span>
        </Reveal2>
        <div className="area-note">※ 隣接エリアも出張可能です。まずはお問い合わせください。</div>
      </div>
    </section>
  );
}

// ── Flow ────────────────────────────────────────────────────────────────────
const FLOW = [
  { num: '①', icon: IconPhone2, title: 'ご相談', text: '電話またはLINEからお気軽にお問い合わせください。' },
  { num: '②', icon: IconHouseFlow, title: '現地調査', text: 'ご都合に合わせて訪問。状況を確認します(無料)。' },
  { num: '③', icon: IconClipboard2, title: 'お見積もり', text: '内容と金額を丁寧にご説明。納得いただいてから施工です。' },
  { num: '④', icon: IconHammer2, title: '施工', text: '経験豊富な職人が責任を持って作業いたします。' },
];

function IconHouseFlow(p) {
  return (
    <svg viewBox="0 0 24 24" width={p.size || 22} height={p.size || 22} fill="none"
         stroke="currentColor" strokeWidth={p.stroke || 1.6}
         strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5 12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1V9.5z" />
    </svg>
  );
}

function Flow() {
  return (
    <section className="section-flow">
      <div className="container">
        <SectionHead2 eyebrow="Steps" title="ご相談から施工までの流れ" />
        <div className="flow-steps">
          {FLOW.map((s, i) => (
            <Reveal2 key={i} as="div" className="flow-step" delay={i * 80}>
              <span className="step-num">{s.num}</span>
              <div className="step-icon"><s.icon size={28} stroke={1.6} /></div>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </Reveal2>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FAQ ─────────────────────────────────────────────────────────────────────
const FAQ = [
  { q: '見積もりは無料ですか?', a: 'はい、現地調査・お見積もりはすべて無料です。お気軽にご相談ください。' },
  { q: '土日や夜間も対応していますか?', a: '土日も対応しております。夜間も状況に応じてご相談承ります(基本営業時間 8:00〜20:00)。' },
  { q: '支払い方法は何が使えますか?', a: '現金、銀行振込、PayPay、各種クレジットカードに対応しております。' },
  { q: '即日対応はできますか?', a: '在庫・スケジュールに余裕がある場合は即日対応可能です。まずはお電話・LINEでご相談ください。' },
  { q: 'キャンセル料はかかりますか?', a: '現地調査前のキャンセルは無料です。施工日確定後のキャンセルは内容により異なりますので、お早めにご連絡ください。' },
  { q: 'エアコン本体の販売もしていますか?', a: 'はい、ご希望のメーカー・機種の手配も承ります。お得な型落ち品のご提案も可能です。' },
  { q: '賃貸でも工事できますか?', a: '大家様・管理会社様の許可があれば可能です。書類が必要な場合もサポートいたします。' },
];

function FaqItem({ q, a, open, onToggle }) {
  const innerRef = React.useRef(null);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-q" onClick={onToggle} aria-expanded={open}>
        <span className="q-mark">Q</span>
        <span className="text">{q}</span>
        <span className="toggle"><IconPlus2 size={20} stroke={2} /></span>
      </button>
      <div className="faq-a" style={{ maxHeight: open ? (innerRef.current?.scrollHeight || 0) + 'px' : '0' }}>
        <div className="faq-a-inner" ref={innerRef}>{a}</div>
      </div>
    </div>
  );
}

function Faq() {
  const [openIdx, setOpenIdx] = React.useState(0);
  return (
    <section className="faq-section">
      <div className="container">
        <SectionHead2 eyebrow="FAQ" title="よくあるご質問" />
        <Reveal2 as="div" className="faq-list">
          {FAQ.map((f, i) => (
            <FaqItem key={i} {...f} open={openIdx === i}
                     onToggle={() => setOpenIdx(openIdx === i ? -1 : i)} />
          ))}
        </Reveal2>
      </div>
    </section>
  );
}

// ── Final CTA ───────────────────────────────────────────────────────────────
function FinalCTA({ tel }) {
  return (
    <section id="cta" className="section-cta">
      <div className="container">
        <Reveal2 as="h2">お気軽にご相談ください</Reveal2>
        <Reveal2 delay={80}>
          <a href={`tel:${tel.replace(/-/g, '')}`} className="cta-tel">
            <IconPhone2 size={36} stroke={2} /> {tel}
          </a>
        </Reveal2>
        <Reveal2 delay={140}>
          <div className="cta-hours">
            営業時間: 8:00 〜 20:00 / 年中無休<br />
            即日対応可能なケースもございます
          </div>
        </Reveal2>
        <Reveal2 delay={200}>
          <a href="#" className="btn btn-primary btn-large" style={{ background: 'var(--accent-deep)' }}>
            <IconMessage2 size={20} stroke={2} /> LINEで相談する
          </a>
        </Reveal2>
      </div>
    </section>
  );
}

// ── Footer ──────────────────────────────────────────────────────────────────
function Footer({ tel, area }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="brand">MomenTec<span className="dot" /></div>
        <div className="footer-rule" />
        <div className="footer-info">
          <div><b>代表者</b>山田 太郎(ダミー)</div>
          <div><b>所在地</b>〇〇県{area}△△町 1-2-3</div>
          <div><b>電話番号</b>{tel}</div>
          <div><b>LINE</b>@momentec</div>
          <div><b>営業時間</b>8:00 〜 20:00 / 年中無休</div>
        </div>
        <div className="footer-divide" />
        <div className="footer-copy">© 2026 MomenTec. All rights reserved.</div>
      </div>
    </footer>
  );
}

window.MSections2 = { Gallery, Stats, Voices, Area, Flow, Faq, FinalCTA, Footer };
