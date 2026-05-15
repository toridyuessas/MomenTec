// MomenTec — section components. Pure presentational, driven by data + tweaks.

const {
  IconPhone, IconMessage, IconCheck, IconPin, IconArrowRight,
  IconAC, IconDrops,
  IconTool,
  IconSparkles, IconFan, IconFlame, IconWash, IconBulb, IconScissors,
  IconCurtain, IconWall, IconRecycle,
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

// ── Reusable: audience band (個人 / 事業) ───────────────────────────────────
function AudienceBand({ kicker, title, desc, variant = 'home' }) {
  return (
    <section className={`audience-band ${variant === 'biz' ? 'audience-band--biz' : ''}`}>
      <div className="container">
        <Reveal>
          <span className="band-kicker">{kicker}</span>
          <h2 className="band-title">{title}</h2>
          {desc && <p className="band-desc">{desc}</p>}
        </Reveal>
      </div>
    </section>
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

// ── Main services (個人向け3枚) ─────────────────────────────────────────────
const SERVICES = [
  { id: 'ac', tone: 'ac', icon: IconAC, label: 'Service 01',
    title: 'エアコン工事', sub: '取付・取外し・移設・ガスチャージ・化粧カバー',
    desc: '新規取付から引越しに伴う移設、ガスチャージまで一括対応。配管化粧カバーや延長配管などの細かい注文もOKです。',
    examples: ['標準取付工事', '化粧カバー施工', '移設・取外し', 'ガスチャージ'],
    price: '18,000' },
  { id: 'clean', tone: 'clean', icon: IconDrops, label: 'Service 02',
    title: 'エアコンクリーニング', sub: '標準ルーム / お掃除機能付き',
    desc: '分解して内部までしっかり洗浄。カビ・嫌な臭いを除去し、冷暖房の効きも改善します。お掃除機能付きにも対応。',
    examples: ['標準ルームエアコン', 'お掃除機能付き', '難分解機種対応'],
    price: '11,000' },
  { id: 'course', tone: 'course', icon: IconSparkles, label: 'Service 03 ★',
    title: '完全分解洗浄コース', sub: '本体取外し → 分解 → 徹底洗浄 → 取付け直し',
    desc: '通常クリーニングでは届かない「壁との隙間」「熱交換器の裏」「基板裏」までクリアに。水漏れ・結露の根本解消を目指します。',
    examples: ['標準ルーム ¥28,000', 'お掃除機能付き ¥35,000', 'お預かり洗浄あり'],
    price: '28,000', featured: true },
];

function Services() {
  return (
    <section id="services" className="section-services">
      <div className="container">
        <SectionHead eyebrow="Services" title="主なサービス" />
        <div className="service-list">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} className={`service-card ${s.featured ? 'is-feature' : ''}`} delay={i * 60}>
              {s.featured && <span className="feature-flag">人気</span>}
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
                  <a href={s.featured ? '#fullcourse' : '#pricing'} className="service-cta">
                    詳しく見る <IconArrowRight size={14} stroke={2} />
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

// ── Full Disassembly Course (完全分解洗浄コース・新規) ──────────────────────
const FC_STEPS = [
  { num: '①', title: '本体取外し', text: 'エアコン本体を壁から取り外し、汚れの状況を確認します。' },
  { num: '②', title: 'バラバラに分解', text: '壁に掛けたままでは外せない部品まで完全に分解します。' },
  { num: '③', title: '徹底洗浄', text: '熱交換器・基板裏・ケーシングを丸ごと洗浄。設置壁のホコリも除去します。' },
  { num: '④', title: '組立て・取付け直し', text: '正しく綺麗に組み立て直し、再設置。試運転で動作確認します。' },
];

const FC_SPOTS = [
  '裏板と本体裏・壁の間のホコリやカビ',
  '熱交換器の裏側',
  '基板裏の埃',
  '前回施工で取り切れなかった汚れ',
];

const FC_DIFFICULT_MODELS = [
  '霧ヶ峰「FZシリーズ」',
  'エオリア「Xシリーズ」',
  'うるさらX(RX・ATRシリーズ)',
  'ノクリア「Xシリーズ」',
];

function FullCourse() {
  return (
    <section id="fullcourse" className="section-fullcourse">
      <div className="container">
        <SectionHead eyebrow="Full Disassembly Course" title="エアコン完全分解洗浄コース" />
        <Reveal as="p" className="fc-lede">
          通常クリーニングだけでは取り切れない汚れ、ありませんか？<br />
          完全分解洗浄なら<strong>熱交換器の裏側・基板裏・壁との隙間</strong>まで、<br />
          一度バラして徹底的に。水漏れ・結露の根本解消もこちらで。
        </Reveal>

        <Reveal className="fc-steps">
          {FC_STEPS.map((s, i) => (
            <div key={i} className="fc-step">
              <div className="fc-num">{s.num}</div>
              <div className="fc-body">
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal className="fc-highlight">
          <h4><span className="badge">CLEAR</span>このコースで届く汚れ</h4>
          <ul className="fc-spots">
            {FC_SPOTS.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </Reveal>

        <Reveal className="fc-prices">
          <div className="fc-price">
            <div className="label">標準ルームエアコン</div>
            <div className="val">¥28,000<small>-</small></div>
          </div>
          <div className="fc-price">
            <div className="label">お掃除機能付き</div>
            <div className="val">¥35,000<small>-</small></div>
          </div>
        </Reveal>
        <Reveal as="div" className="fc-time">作業時間: 半日〜1日</Reveal>

        <Reveal className="fc-pickup">
          <h4>
            <IconRecycle size={22} stroke={1.7} />
            お預かり洗浄
            <span className="pickup-flag">便利</span>
          </h4>
          <p className="pickup-target">
            多忙でまとまった時間が取りづらい方／お休みを有効活用されたい方／<br />
            お子様・ペット・ご近所の目が気になる方におすすめのプランです。
          </p>
          <div className="fc-pickup-flow">
            <span className="step">室内機お預かり</span>
            <span className="arrow">→</span>
            <span className="step">事務所で分解洗浄</span>
            <span className="arrow">→</span>
            <span className="step">後日 or 当日夕方に再取付</span>
          </div>
          <p className="pickup-note">パーツの洗浄前・洗浄後の様子はお写真でご報告します。</p>
        </Reveal>

        <Reveal className="fc-warning">
          <div className="w-title">分解難易度が高い機種は別途加算</div>
          <p>機種により分解難易度が跳ね上がるため、費用と作業時間が追加になる場合があります。</p>
          <ul>
            {FC_DIFFICULT_MODELS.map((m) => <li key={m}>{m}</li>)}
            <li>その他、機種により判断</li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

// ── Home Troubles (お家のお困り事・旧Othersを昇格) ──────────────────────────
const TROUBLE_PRICES = [
  { icon: IconFan,   name: '換気扇のお掃除',         amount: '5,000' },
  { icon: IconFlame, name: 'キッチン換気扇のお掃除', amount: '9,000' },
  { icon: IconWash,  name: '洗濯機クリーニング',     amount: '12,000' },
];

const TROUBLE_CHIPS = [
  { icon: IconBulb,     text: '照明の交換' },
  { icon: IconCurtain,  text: 'カーテンレール交換' },
  { icon: IconTool,     text: '建具のガタ付き' },
  { icon: IconDrops,    text: 'キッチンの水垢' },
  { icon: IconScissors, text: '庭・所有地の草刈り' },
  { icon: IconWall,     text: '子供部屋に間仕切り壁' },
];

function HomeTroubles() {
  return (
    <section className="section-troubles">
      <div className="container">
        <SectionHead eyebrow="Home Troubles" title="お家のお困り事" />

        <Reveal className="troubles-prices">
          {TROUBLE_PRICES.map((t, i) => (
            <div key={i} className="trouble-price">
              <span className="icon"><t.icon size={22} stroke={1.7} /></span>
              <span className="name">{t.name}</span>
              <span className="amount">¥{t.amount}<small>〜</small></span>
            </div>
          ))}
        </Reveal>

        <Reveal as="div" className="troubles-chips-title">こんなことも、ご相談ください</Reveal>
        <Reveal className="troubles-chips">
          {TROUBLE_CHIPS.map((c, i) => (
            <span key={i} className="trouble-chip">
              <c.icon size={14} stroke={1.8} /> {c.text}
            </span>
          ))}
        </Reveal>

        <Reveal className="troubles-message">
          <p className="lead">なんでもできる訳ではありませんが、</p>
          <p>全てを出し切ってお客様の力になれるよう全力を尽くします。<br />
            まずは気軽にご相談ください。</p>
        </Reveal>
      </div>
    </section>
  );
}

// ── Pricing ─────────────────────────────────────────────────────────────────
const PRICE_GROUPS = [
  { head: 'エアコン工事', rows: [
    { name: '標準取付工事', note: '配管化粧テープ処理 / 配管長4mまで', amount: '18,000', suffix: '-' },
    { name: '配管延長',     note: '1mにつき',                            amount: '2,000',  suffix: '〜' },
    { name: '2階室内機+1階室外機', note: '料金が異なります',              amount: '別途見積', suffix: '' },
    { name: '外部化粧カバー(基本セット)', note: '例: カバー1m+曲がり1個。長さ・曲がり数で変動', amount: '7,000',  suffix: '〜' },
    { name: '内部化粧カバー(基本セット)', note: '同上',                   amount: '10,000', suffix: '〜' },
    { name: 'エアコン取外し', note: '',                                    amount: '5,000',  suffix: '-' },
    { name: 'エアコン移設工事', note: '',                                  amount: '25,000', suffix: '〜' },
    { name: 'ガスチャージ', note: '繰返しを防ぐため原因調査をおすすめ',    amount: '15,000', suffix: '〜' },
  ]},
  { head: 'エアコンクリーニング', rows: [
    { name: '標準ルームエアコン', note: '',                              amount: '11,000', suffix: '-' },
    { name: 'お掃除機能付きルームエアコン', note: '',                    amount: '18,000', suffix: '-' },
  ], warn: {
    head: '分解難易度が高い機種は別途加算',
    list: ['霧ヶ峰「FZシリーズ」', 'エオリア「Xシリーズ」', 'うるさらX(RX・ATRシリーズ)', 'ノクリア「Xシリーズ」'],
  }},
  { head: '完全分解洗浄コース', rows: [
    { name: '標準ルームエアコン', note: '本体取外→分解→徹底洗浄→組立て直し / 半日〜1日', amount: '28,000', suffix: '-' },
    { name: 'お掃除機能付き',     note: '同上',                                            amount: '35,000', suffix: '-' },
  ]},
  { head: 'お家のお困り事', rows: [
    { name: '換気扇のお掃除',         note: '',  amount: '5,000',  suffix: '〜' },
    { name: 'キッチン換気扇のお掃除', note: '',  amount: '9,000',  suffix: '〜' },
    { name: '洗濯機クリーニング',     note: '',  amount: '12,000', suffix: '〜' },
  ]},
  { head: '業務用エアコンクリーニング', rows: [
    { name: '天カセ 4方向・2方向', note: '',                          amount: '30,000', suffix: '-' },
    { name: '天吊 1方向',         note: '',                          amount: '35,000', suffix: '-' },
    { name: '厨房用 天吊 1方向',   note: '',                          amount: '40,000', suffix: '-' },
    { name: '床置き型',           note: '',                          amount: '30,000', suffix: '-' },
    { name: 'ハウジングエアコン 1・2方向', note: '',                  amount: '25,000〜35,000', suffix: '-' },
    { name: '自動掃除ユニット搭載の場合', note: '内部に搭載されているとき', amount: '+¥10,000', suffix: '-' },
  ]},
  { head: '低圧太陽光 保守点検 (50kW未満・野立て)', rows: [
    { name: '定期保守点検 / 除草作業 / 保険利用のパネル・PC交換', note: '現状確認のうえお見積もり', amount: 'お見積り', suffix: '' },
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
                  <div className="name">
                    {r.name}
                    {r.note && <span className="pn-note">{r.note}</span>}
                  </div>
                  <div className="amount">
                    {r.amount.startsWith('¥') || r.amount.includes('お見積') || r.amount.includes('別途') || r.amount.startsWith('+')
                      ? r.amount
                      : <>¥{r.amount}</>}
                    {r.suffix && <small>{r.suffix}</small>}
                  </div>
                </div>
              ))}
              {g.warn && (
                <div className="price-warn">
                  <div className="w-head">⚠ {g.warn.head}</div>
                  <ul className="w-list">
                    {g.warn.list.map((m) => <li key={m}>{m}</li>)}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </Reveal>
        <Reveal className="price-notes">
          <ul>
            <li>現地状況により金額は変動します</li>
            <li>お見積もりは無料です。お気軽にご相談ください</li>
            <li>太陽光の保守は、取り扱いメーカー外の場合はお断りすることがあります</li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

window.MSections1 = {
  Header, MobileBar, Hero, Services, FullCourse, HomeTroubles, Pricing,
  Reveal, SectionHead, AudienceBand,
};
