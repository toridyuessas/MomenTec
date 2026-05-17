// MomenTec — second half of sections.

const {
  IconPhone: IconPhone2, IconMessage: IconMessage2, IconCheck: IconCheck2,
  IconPin: IconPin2, IconPlus: IconPlus2,
  IconClipboard: IconClipboard2, IconHammer: IconHammer2,
  IconBuilding, IconWrench: IconWrench2, IconSun: IconSun2,
  IconGear, IconLeaf, IconShield, IconChat,
  IconSparkles: IconSparkles2,
} = window.MIcons;
const { Reveal: Reveal2, SectionHead: SectionHead2,
        PhotoPlaceholder: PhotoPlaceholder2, BeforeAfter: BeforeAfter2 } = window.MSections1;

// ── Commercial Cleaning (業務用エアコンクリーニング・新規) ─────────────────
const COMMERCIAL_ROWS = [
  { icon: IconBuilding, name: '天カセ 4方向・2方向',         amount: '30,000', suffix: '-' },
  { icon: IconBuilding, name: '天吊 1方向',                   amount: '35,000', suffix: '-' },
  { icon: IconBuilding, name: '厨房用 天吊 1方向',            amount: '40,000', suffix: '-' },
  { icon: IconBuilding, name: '床置き型',                     amount: '30,000', suffix: '-' },
  { icon: IconBuilding, name: 'ハウジングエアコン 1・2方向',  amount: '25,000〜35,000', suffix: '-' },
];

const COMMERCIAL_BA = {
  caption: 'エアコン内部 熱交換器の洗浄 — 業務用機も同様の徹底度で対応します',
  beforeSrc: 'picture/gyoumu_before_1.png',
  afterSrc: 'picture/gyoumu_after_1.png',
};

function CommercialCleaning() {
  return (
    <section id="commercial" className="section-commercial">
      <div className="container">
        <SectionHead2 eyebrow="Commercial AC Cleaning" title="業務用エアコンクリーニング" />

        <Reveal2 className="commercial-photo">
          <BeforeAfter2
            caption={COMMERCIAL_BA.caption}
            beforeSrc={COMMERCIAL_BA.beforeSrc}
            afterSrc={COMMERCIAL_BA.afterSrc}
          />
        </Reveal2>

        <Reveal2 className="commercial-table">
          {COMMERCIAL_ROWS.map((r, i) => (
            <div key={i} className="commercial-row">
              <span className="name">
                <span className="ic"><r.icon size={20} stroke={1.7} /></span>
                {r.name}
              </span>
              <span className="amount">¥{r.amount}<small>{r.suffix}</small></span>
            </div>
          ))}
          <div className="commercial-row is-addon">
            <span className="name">
              <span className="ic"><IconGear size={18} stroke={1.7} /></span>
              自動掃除ユニット搭載の場合(加算)
            </span>
            <span className="amount">+¥10,000<small>-</small></span>
          </div>
        </Reveal2>

        <Reveal2 className="commercial-repair">
          <span className="text">
            <span className="ic"><IconWrench2 size={22} stroke={1.7} /></span>
            修理もご相談ください
          </span>
          <a href="#cta" className="btn btn-secondary">
            <IconMessage2 size={16} stroke={2} /> 問い合わせる
          </a>
        </Reveal2>
      </div>
    </section>
  );
}

// ── Solar Maintenance (低圧太陽光 保守点検・全面差替) ──────────────────────
const SOLAR_MENU = [
  { icon: IconClipboard2, title: 'システムの定期保守点検',
    text: '小出力発電設備として求められる点検と報告に対応します。' },
  { icon: IconLeaf, title: '敷地内の除草作業',
    text: '雑草によるパネルへの影響や火災リスクを抑えます。' },
  { icon: IconShield, title: '保険を利用したパネル・PC交換',
    text: '加入されている保険を活用したパネル・パワコン交換のご相談。' },
  { icon: IconChat, title: 'その他ご相談',
    text: 'お困りごと・ご質問はまずお気軽にお声かけください。' },
];

function SolarMaintenance() {
  return (
    <section id="solar" className="section-solar">
      <div className="container">
        <SectionHead2 eyebrow="Solar Maintenance" title="低圧太陽光 保守点検" />

        <Reveal2 className="solar-target">
          <span className="ic"><IconSun2 size={22} stroke={1.7} /></span>
          <div className="body">
            <div className="label">対象設備</div>
            <div className="name">野立て・50kW未満の低圧事業用太陽光発電設備</div>
          </div>
        </Reveal2>

        <Reveal2 className="solar-menu">
          {SOLAR_MENU.map((m, i) => (
            <div key={i} className="solar-item">
              <span className="ic"><m.icon size={20} stroke={1.7} /></span>
              <div>
                <h4>{m.title}</h4>
                <p>{m.text}</p>
              </div>
            </div>
          ))}
        </Reveal2>

        <Reveal2 className="solar-law">
          <h4>法定の保守点検について</h4>
          <p>
            かつては「低圧はメンテナンスフリー」と言われていましたが、
            現在は法改正により「小出力発電設備」として、適切な保守点検（メンテナンス）と
            報告が法的に義務付けられています。点検手順がよくわからない方も、まずはご相談だけでも構いません。
          </p>
        </Reveal2>

        <Reveal2 className="solar-flow">
          <span className="step">発電所のご案内</span>
          <span className="arrow">→</span>
          <span className="step">現状の確認</span>
          <span className="arrow">→</span>
          <span className="step">お見積り</span>
        </Reveal2>

        <Reveal2 as="div" className="solar-note">
          取り扱いメーカー外の場合はお断りすることがございます。ご了承ください。
        </Reveal2>
      </div>
    </section>
  );
}

// ── Area ────────────────────────────────────────────────────────────────────
const AREAS_PERSONAL = ['鹿児島県内 全域'];
const AREAS_COMMERCIAL = ['鹿児島県', '熊本県', '宮崎県', '大分県', '福岡県', '佐賀県', '長崎県'];

function Area() {
  return (
    <section className="area-section">
      <div className="container">
        <SectionHead2 eyebrow="Service Area" title="対応エリア" />

        <Reveal2 as="div" className="area-group">
          <div className="area-group-head">エアコン工事・クリーニング・お家のお困り事</div>
          <div className="area-pins">
            {AREAS_PERSONAL.map((a) => (
              <span key={a} className="area-pin">
                <IconPin2 size={14} stroke={2} /> {a}
              </span>
            ))}
          </div>
        </Reveal2>

        <Reveal2 as="div" className="area-group" delay={80}>
          <div className="area-group-head">業務用エアコンクリーニング</div>
          <div className="area-pins">
            {AREAS_COMMERCIAL.map((a) => (
              <span key={a} className="area-pin">
                <IconPin2 size={14} stroke={2} /> {a}
              </span>
            ))}
          </div>
        </Reveal2>

        <div className="area-note">
          ※ 鹿児島県外（九州他県）への業務用エアコン対応は、出張費を別途頂戴します。<br />
          ※ 上記以外のエリアもまずはご相談ください。
        </div>
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
  { q: '見積もりは無料ですか?',
    a: '鹿児島市内は無料です。市外でも当店で施工させていただいた方は無料で承ります。鹿児島市以外でお見積もりのみのご依頼は ¥3,000〜 頂戴しております。' },
  { q: '日曜や夜間も対応していますか?',
    a: '基本営業時間は 8:00〜18:00、日曜定休としております。事前にご相談いただければ、日曜・夜間の対応も可能ですのでお気軽にお声かけください。' },
  { q: '完全分解洗浄と通常クリーニングの違いは?',
    a: '通常クリーニングは設置したまま洗浄するため、熱交換器の表面や送風ファンの清掃が中心です。完全分解洗浄では一度本体を取り外し、すべて分解して、壁との隙間や熱交換器の裏側・基板裏まで徹底的に洗います。長年蓄積した汚れや、クリーニングだけでは改善しなかった水漏れ・結露でお困りの方におすすめです。' },
  { q: 'お預かり洗浄はどのくらいで戻ってきますか?',
    a: 'スケジュールが空いていれば当日夕方に再取付できます。混み合っている場合や手間のかかる機種の場合は後日のお持ち帰り設置になります。お預かり時に目安日数をご案内します。' },
  { q: '自分のエアコンが「お掃除機能付き」か分かりません',
    a: 'メーカー名と型番をLINEや電話でお伝えください。こちらで判別してご案内します。リモコンや本体に「お掃除」「自動清掃」などの表示がある場合は該当する可能性が高いです。' },
  { q: '業務用エアコンの修理にも対応してもらえますか?',
    a: 'はい、修理もご相談ください。状況によりメーカー手配が必要な場合もありますが、まずは現状確認のご相談からお受けしています。' },
  { q: '太陽光発電所の点検は、自分のメーカーが対象か分かりません',
    a: 'まずは発電所をご案内いただき、メーカー・型式を確認させてください。取り扱いメーカー外の場合はお断りする場合がございますが、対応可否のご案内は無料で行っています。' },
  { q: '化粧カバーは必ずつけたほうがいいですか?',
    a: '見た目を整えるだけでなく、配管の劣化を防ぐ役割もあります。外壁の見える面や、長い配管を引き回す場合にはおすすめしています。費用と相談しながらご提案します。' },
  { q: '支払い方法は何が使えますか?', a: '現金、または請求書払い（後日のお振込）に対応しております。' },
  { q: '即日対応はできますか?', a: 'ご予約状況と部材の在庫次第ですが、即日対応も可能です。まずはお電話・LINEでご相談ください。' },
  { q: 'キャンセル料はかかりますか?', a: '現地調査前のキャンセルは無料です。施工日確定後のキャンセルは内容により異なりますので、お早めにご連絡ください。' },
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
function FinalCTA({ tel, lineUrl }) {
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
            営業時間: 8:00 〜 18:00 / 日曜定休<br />
            （日曜・夜間も事前にご相談いただければ対応可能）<br />
            即日対応可能なケースもございます
          </div>
        </Reveal2>
        <Reveal2 delay={200}>
          <a href={lineUrl} target="_blank" rel="noopener noreferrer"
             className="btn btn-primary btn-large" style={{ background: 'var(--accent-deep)' }}>
            <IconMessage2 size={20} stroke={2} /> LINEで相談する
          </a>
        </Reveal2>
      </div>
    </section>
  );
}

// ── Footer ──────────────────────────────────────────────────────────────────
function Footer({ tel, area, lineUrl }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="brand">
          <img src="picture/logo.jpg" alt="MomenTec" className="brand-logo brand-logo--footer" />
        </div>
        <div className="footer-rule" />
        <div className="footer-info">
          <div><b>代表者</b>谷之口 勢也 (Taninokuchi Seiya)</div>
          <div><b>所在地</b>鹿児島県鹿児島市上谷口町493</div>
          <div><b>電話番号</b>{tel}</div>
          <div><b>LINE</b><a href={lineUrl} target="_blank" rel="noopener noreferrer" className="footer-link">公式アカウントを友だち追加</a></div>
          <div><b>営業時間</b>8:00 〜 18:00 / 日曜定休<br /><span className="muted">（日曜・夜間も事前相談で対応可）</span></div>
          <div><b>お支払い</b>現金 / 請求書払い</div>
        </div>
        <div className="footer-divide" />
        <div className="footer-copy">© 2026 MomenTec. All rights reserved.</div>
      </div>
    </footer>
  );
}

window.MSections2 = {
  Area, Flow, Faq, FinalCTA, Footer,
  CommercialCleaning, SolarMaintenance,
};
