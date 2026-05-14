// MomenTec — App entry + Tweaks integration.

const { Header, MobileBar, Hero, Why, Services, Others, Pricing } = window.MSections1;
const { Gallery, Stats, Voices, Area, Flow, Faq, FinalCTA, Footer } = window.MSections2;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#A8C9A0",
  "accentDeep": "#4A6F40",
  "accentSoft": "#E3EFE0",
  "headingFont": "Noto Serif JP",
  "heroVariant": "katei",
  "showStats": true,
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
    sublede: 'エアコンも、クリーニングも、太陽光も。○○市の何でも屋 MomenTec が、窓口ひとつで承ります。',
    label: '家庭向け',
  },
  shokunin: {
    headline: '町の職人を、<br/><span class="accent">あなたの家に。</span>',
    sublede: '〇年、地域のお家を見守ってきました。エアコン・クリーニング・太陽光、丁寧な手仕事でお応えします。',
    label: '職人推し',
  },
  benriya: {
    headline: '困った、<br/>ぜんぶ任せて。<br/><span class="accent">何でも屋 MomenTec。</span>',
    sublede: 'エアコン工事から太陽光まで、家の困りごとを丸ごとお引き受け。一本の電話で完結します。',
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
        <Why />
        <Services />
        <Others />
        <Pricing />
        <Gallery />
        {t.showStats && <Stats />}
        <Voices />
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
          <TweakToggle label="実績数アピール"
                       value={t.showStats}
                       onChange={(v) => setTweak('showStats', v)} />
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
