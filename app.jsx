// MomenTec — App entry + Tweaks integration.

const {
  Header, MobileBar, Hero, Services,
  FullCourse, HomeTroubles, Pricing,
  AudienceBand,
} = window.MSections1;
const {
  Gallery, Area, Flow, Faq, FinalCTA, Footer,
  CommercialCleaning, SolarMaintenance,
} = window.MSections2;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#A8C9A0",
  "accentDeep": "#4A6F40",
  "accentSoft": "#E3EFE0",
  "headingFont": "Noto Serif JP",
  "heroVariant": "katei",
  "tel": "090-1234-5678",
  "area": "○○市"
}/*EDITMODE-END*/;

// Curated palette options shown as swatches in Tweaks.
const PALETTES = [
  ['#A8C9A0', '#4A6F40', '#E3EFE0'],   // soft green (default)
  ['#C4A879', '#7A5A2E', '#F0E5D0'],   // cha / wheat
  ['#B89AAB', '#6B3F58', '#F0E1EA'],   // sakura / dusty rose
  ['#88A7B8', '#3D5A6C', '#DBE7EF'],   // ai / dusty indigo
];

const HEADING_FONTS = [
  { value: 'Noto Serif JP', label: '明朝' },
  { value: 'Shippori Mincho', label: 'しっぽり' },
  { value: 'Zen Kaku Gothic New', label: 'ゴシック' },
];

const HERO_VARIANTS = {
  katei: {
    headline: '家のことは、<br/>ぜんぶ<br/><span class="accent">この一人に。</span>',
    sublede: 'エアコン工事も、完全分解洗浄も、業務用も。○○市の何でも屋 MomenTec が、窓口ひとつで承ります。',
    label: '家庭向け',
  },
  shokunin: {
    headline: '町の職人を、<br/><span class="accent">あなたの家に。</span>',
    sublede: '〇年、地域のお家を見守ってきました。エアコン工事・分解洗浄・業務用・太陽光保守まで、丁寧な手仕事でお応えします。',
    label: '職人推し',
  },
  benriya: {
    headline: '困った、<br/>ぜんぶ任せて。<br/><span class="accent">何でも屋 MomenTec。</span>',
    sublede: 'エアコン工事から業務用クリーニング、低圧太陽光保守まで、家と事業所の困りごとを丸ごとお引き受け。',
    label: 'コミカル',
  },
};

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply tweaks to CSS vars + heading font live.
  React.useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--accent', t.accent);
    r.style.setProperty('--accent-deep', t.accentDeep);
    r.style.setProperty('--accent-soft', t.accentSoft);
    r.style.setProperty('--font-serif', `"${t.headingFont}", "Hiragino Mincho ProN", "Yu Mincho", serif`);
  }, [t.accent, t.accentDeep, t.accentSoft, t.headingFont]);

  const palette = [t.accent, t.accentDeep, t.accentSoft];
  const setPalette = (arr) => setTweak({ accent: arr[0], accentDeep: arr[1], accentSoft: arr[2] });

  const variant = HERO_VARIANTS[t.heroVariant] || HERO_VARIANTS.katei;

  return (
    <>
      <Header tel={t.tel} />
      <MobileBar tel={t.tel} />

      <main>
        <Hero
          headline={variant.headline}
          sublede={variant.sublede}
          area={t.area}
          tel={t.tel}
        />

        {/* ── 個人のお客様へ ────────────────────────────── */}
        <AudienceBand
          kicker="For Households"
          title="個人のお客様へ"
          desc="エアコン工事・クリーニング・完全分解洗浄から、お家の細かな困りごとまで。"
          variant="home"
        />
        <Services />
        <FullCourse />
        <HomeTroubles />

        {/* ── 事業者・オーナー様へ ─────────────────────── */}
        <AudienceBand
          kicker="For Business Owners"
          title="事業者・オーナー様へ"
          desc="業務用エアコンクリーニングと、低圧太陽光発電所の保守点検を承ります。"
          variant="biz"
        />
        <CommercialCleaning />
        <SolarMaintenance />

        <Pricing />
        <Gallery />
        <Area />
        <Flow />
        <Faq />
        <FinalCTA tel={t.tel} />
      </main>

      <Footer tel={t.tel} area={t.area} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="カラー (Palette)">
          <TweakColor label="配色"
                      value={palette}
                      options={PALETTES}
                      onChange={setPalette} />
        </TweakSection>

        <TweakSection label="タイポグラフィ">
          <TweakRadio label="見出しフォント"
                      value={t.headingFont}
                      options={HEADING_FONTS}
                      onChange={(v) => setTweak('headingFont', v)} />
        </TweakSection>

        <TweakSection label="ヒーロー">
          <TweakRadio label="コピー"
                      value={t.heroVariant}
                      options={[
                        { value: 'katei', label: '家庭' },
                        { value: 'shokunin', label: '職人' },
                        { value: 'benriya', label: '何でも' },
                      ]}
                      onChange={(v) => setTweak('heroVariant', v)} />
        </TweakSection>

        <TweakSection label="内容">
          <TweakText label="電話番号"
                     value={t.tel}
                     onChange={(v) => setTweak('tel', v)} />
          <TweakText label="地域名"
                     value={t.area}
                     onChange={(v) => setTweak('area', v)} />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
