// MomenTec — section components. Pure presentational, driven by data + tweaks.

const {
  IconPhone, IconMessage, IconCheck, IconPin, IconArrowRight, IconPlus, IconClose,
  IconHouse, IconYen, IconHandshake,
  IconAC, IconDrops, IconSun,
  IconWrench, IconBolt, IconTool, IconBox,
  IconClipboard, IconHammer,
} = window.MIcons;

// ── Reusable: animated reveal on scroll ─────────────────────────────────────
function Reveal({ children, as: As = 'div', className = '', delay = 0, ...rest }) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return undefined;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          io.disconnect();
        }
      });
    }, { threshold: 0.14 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [delay]);
  return (
    <As ref={ref} className={`reveal ${visible ? 'visible' : ''} ${className}`} {...rest}>
      {children}
    </As>
  );
}

// ── Reusable: section head ──────────────────────────────────────────────────
function SectionHead({ eyebrow, title }) {
  return (
    <Reveal as="div" className="section-head">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      <span className="divider" />
    </Reveal>
  );
}

// ── Header ──────────────────────────────────────────────────────────────────
function Header({ tel }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#top" className="brand">MomenTec<span className="dot" /></a>
        <div className="header-cta">
          <a href={`tel:${tel.replace(/-/g, '')}`} className="tel-link" aria-label="電話する">
            <span className="icon-circle"><IconPhone size={16} stroke={2} /></span>
            {tel}
          </a>
          <a href={`tel:${tel.replace(/-/g, '')}`} className="tel-link-mobile" aria-label="電話する">
            <IconPhone size={18} stroke={2} />
          </a>
          <a href="#cta" className="header-line">
            <IconMessage size={14} stroke={2} />
            LINEで相談
          </a>
        </div>
      </div>
    </header>
  );
}

// ── Mobile bottom bar ───────────────────────────────────────────────────────
function MobileBar({ tel }) {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const ctaEl = document.getElementById('cta');
      const inFinalCta = ctaEl && ctaEl.getBoundingClientRect().top < window.innerHeight - 40;
      setVisible(y > 480 && !inFinalCta);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    document.body.classList.add('has-bottom-bar');
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className={`mobile-bar ${visible ? 'visible' : ''}`}>
      <a href={`tel:${tel.replace(/-/g, '')}`} className="btn btn-primary">
        <IconPhone size={18} stroke={2} /> 電話で相談
      </a>
      <a href="#cta" className="btn btn-secondary" style={{ background: 'var(--accent-soft)', borderColor: 'transparent' }}>
        <IconMessage size={18} stroke={2} /> LINEで相談
      </a>
    </div>
  );
}

// ── Hero ────────────────────────────────────────────────────────────────────
function Hero({ headline, sublede, area, tel }) {
  return (
    <section id="top" className="hero">
      <div className="container">
        <div>
          <Reveal>
            <span className="hero-eyebrow">
              <IconPin size={12} stroke={2} className="pin" />
              {area}の何でも屋
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h1 dangerouslySetInnerHTML={{ __html: headline }} />
          </Reveal>
          <Reveal delay={120}>
            <p className="lede">{sublede}</p>
          </Reveal>
          <Reveal delay={180}>
            <div className="hero-ctas">
              <a href={`tel:${tel.replace(/-/g, '')}`} className="btn btn-primary btn-large">
                <IconPhone size={20} stroke={2} /> 電話で相談する
              </a>
              <a href="#cta" className="btn btn-secondary btn-large">
                <IconMessage size={20} stroke={2} /> LINEで相談
              </a>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="hero-badges">
              <span className="hero-badge"><IconCheck size={16} stroke={2.4} /> 見積もり無料</span>
              <span className="hero-badge"><IconCheck size={16} stroke={2.4} /> 即日対応可</span>
              <span className="hero-badge"><IconCheck size={16} stroke={2.4} /> 地域歴〇年</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="hero-art hero-art--logo" aria-hidden="true">
            <div className="hero-logo-plate">
              <div className="hero-logo-mark">M</div>
              <div className="hero-logo-name">MomenTec</div>
              <div className="hero-logo-tagline">家のことは、ひとつの窓口で。</div>
              <div className="hero-logo-note">ロゴ(仮)</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── Why MomenTec ────────────────────────────────────────────────────────────
const WHY_DATA = [
  { num: '其の一', icon: IconHouse, title: '窓口ひとつで完結',
    text: 'エアコン・クリーニング・太陽光、複数業者に頼む手間なし。家のことは、ぜんぶお任せください。' },
  { num: '其の二', icon: IconYen, title: '明朗な目安料金',
    text: 'ホームページに料金を明記。見積もり後の「追加料金」はありません。' },
  { num: '其の三', icon: IconHandshake, title: '地域密着〇年の安心',
    text: '〇〇市で〇年、地域の皆さまのお家を守ってきました。すぐに駆けつけます。' },
];

function Why() {
  return (
    <section className="section-why">
      <div className="container">
        <SectionHead eyebrow="Why MomenTec" title="MomenTec が選ばれる理由" />
        <div className="why-grid">
          {WHY_DATA.map((w, i) => (
            <Reveal key={i} className="why-card" delay={i * 80}>
              <div className="why-icon"><w.icon size={28} stroke={1.6} /></div>
              <span className="num">{w.num}</span>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Main services ──────────────────────────────────────────────────────────
const SERVICES = [
  { id: 'ac', tone: 'ac', icon: IconAC, label: 'Service 01',
    title: 'エアコン工事', sub: '取付・取外し・移設・ガス補充',
    desc: '新規取付から引越しに伴う移設、ガス補充まで一括対応。標準工事は即日対応も可能です。',
    examples: ['壁掛け新規取付', '室外機の移設', 'ガス補充'],
    price: '12,000' },
  { id: 'clean', tone: 'clean', icon: IconDrops, label: 'Service 02',
    title: 'エアコンクリーニング', sub: '分解洗浄・カビ除去',
    desc: '分解して内部までしっかり洗浄。カビ・嫌な臭いを根本から除去し、冷房効率も改善します。',
    examples: ['壁掛けタイプ', 'お掃除機能付き', '業務用エアコン'],
    price: '12,000' },
  { id: 'solar', tone: 'solar', icon: IconSun, label: 'Service 03',
    title: '太陽光管理・売電サポート', sub: 'パネル清掃・売電代行・メンテナンス',
    desc: 'パネル清掃で発電効率を回復。煩雑な売電手続きの代行や、点検・メンテナンスもお任せください。',
    examples: ['発電量低下の改善', '卒FIT後の切替', '年次点検'],
    price: '15,000' },
];

function Services() {
  return (
    <section id="services" className="section-services">
      <div className="container">
        <SectionHead eyebrow="Services" title="主なサービス" />
        <div className="service-list">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} className="service-card" delay={i * 60}>
              <div className={`service-art service-art--${s.tone}`}>
                <div className="icon-bg" />
                <span className="label-chip">{s.label}</span>
                <s.icon size={64} stroke={1.4} />
              </div>
              <div className="service-body">
                <h3>{s.title}</h3>
                <div className="service-sub">{s.sub}</div>
                <p className="desc">{s.desc}</p>
                <div className="service-examples">
                  {s.examples.map((e) => <span key={e}>{e}</span>)}
                </div>
                <div className="service-price-row">
                  <div className="service-price">
                    <span className="label">目安料金</span>
                    <span className="val">¥{s.price}</span>
                    <span className="unit">〜</span>
                  </div>
                  <a href="#cta" className="service-cta">
                    このサービスを相談する <IconArrowRight size={14} stroke={2} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Other services ──────────────────────────────────────────────────────────
const OTHERS = [
  { icon: IconWrench, text: '水回り修理' },
  { icon: IconBolt, text: '電気工事' },
  { icon: IconBox, text: '物品組立' },
  { icon: IconTool, text: '軽作業全般' },
];

function Others() {
  return (
    <section className="section-others">
      <div className="container">
        <SectionHead eyebrow="Other Works" title="こんなことも対応しています" />
        <div className="other-grid">
          {OTHERS.map((o, i) => (
            <Reveal key={i} className="other-card" delay={i * 50}>
              <span className="other-icon"><o.icon size={20} stroke={1.7} /></span>
              <span className="other-text">{o.text}</span>
            </Reveal>
          ))}
        </div>
        <Reveal className="other-foot">「これ頼めるかな?」も、まずはご相談を。</Reveal>
      </div>
    </section>
  );
}

// ── Pricing ─────────────────────────────────────────────────────────────────
const PRICE_GROUPS = [
  { head: 'エアコン工事', rows: [
    { name: 'エアコン取付(標準)', amount: '12,000' },
    { name: 'エアコン取外し', amount: '8,000' },
    { name: 'エアコン移設', amount: '25,000' },
    { name: 'ガス補充', amount: '10,000' },
  ]},
  { head: 'エアコンクリーニング', rows: [
    { name: '分解洗浄(壁掛けタイプ)', amount: '12,000' },
    { name: '分解洗浄(お掃除機能付き)', amount: '18,000' },
  ]},
  { head: '太陽光管理・売電サポート', rows: [
    { name: 'パネル清掃', amount: '15,000' },
    { name: '売電手続き代行', amount: '20,000' },
    { name: '年次点検', amount: '10,000' },
  ]},
];

function Pricing() {
  return (
    <section id="pricing" className="price-section">
      <div className="container">
        <SectionHead eyebrow="Price" title="料金のめやす" />
        <Reveal className="price-table">
          {PRICE_GROUPS.map((g, gi) => (
            <div className="price-group" key={gi}>
              <div className="price-group-head">{g.head}</div>
              {g.rows.map((r, ri) => (
                <div className="price-row" key={ri}>
                  <div className="name">{r.name}</div>
                  <div className="amount">¥{r.amount}<small>〜</small></div>
                </div>
              ))}
            </div>
          ))}
        </Reveal>
        <Reveal className="price-notes">
          <ul>
            <li>現地状況により金額は変動します</li>
            <li>お見積もりは無料です。お気軽にご相談ください</li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

window.MSections1 = { Header, MobileBar, Hero, Why, Services, Others, Pricing, Reveal, SectionHead };
