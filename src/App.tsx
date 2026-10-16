import { useEffect } from 'react';
import AuthPage from './components/Auth';
import { GlassTextDefs } from './components/GlassText';
import Home from './components/Home';
import Hub from './components/Hub';
import PlayerBar from './components/PlayerBar';
import Reader from './components/Reader';
import { findLevel } from './data/levels';
import { SIGN_UP_OPEN, useAuth } from './lib/auth';
import { LevelContext, useLevelData } from './lib/level';
import { hubHref, useRoute } from './lib/route';
import { useTheme } from './lib/theme';

export default function App() {
  const route = useRoute();
  const theme = useTheme();
  const auth = useAuth();
  const meta = route.name === 'level' || route.name === 'section' ? findLevel(route.level) : undefined;
  const level = useLevelData(meta);
  const section = route.name === 'section' && level ? level.findSection(route.id) : undefined;

  useEffect(() => {
    if (route.name !== 'section') window.scrollTo({ top: 0 });
  }, [route.name, meta]);

  // Unknown level or a level without data yet → back to the start page.
  useEffect(() => {
    if ((route.name === 'level' || route.name === 'section') && (!meta || !meta.load)) location.hash = hubHref;
  }, [route.name, meta]);

  // Signed in on the Log in / Sign up page → on to the start page.
  // (Any other address is kept, so a shared link opens where it points after signing in.)
  useEffect(() => {
    if (auth.user && (route.name === 'login' || route.name === 'register')) location.hash = hubHref;
  }, [auth.user, route.name]);

  if (!auth.user) {
    const mode = route.name === 'register' && SIGN_UP_OPEN ? 'register' : 'login';
    return (
      <div className="paper-grain min-h-dvh">
        <AuthPage key={mode} mode={mode} auth={auth} theme={theme} />
      </div>
    );
  }

  let page: React.ReactNode;
  if (route.name === 'hub' || !meta?.load) page = <Hub theme={theme} onLogOut={auth.logOut} />;
  else if (!level) page = <Loading />;
  else
    page = (
      <LevelContext.Provider value={level}>
        {section ? (
          <Reader key={`${level.id}/${String(section.n)}`} section={section} startPage={route.name === 'section' ? route.page : undefined} theme={theme} />
        ) : (
          <Home theme={theme} />
        )}
      </LevelContext.Provider>
    );

  return (
    <div className="paper-grain min-h-dvh">
      {!section && <SchoolBackdrop />}
      {!section && <GlassTextDefs />}
      {page}
      <PlayerBar />
    </div>
  );
}

/** Photo of the school behind the start page and the level pages (not inside a book). */
function SchoolBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <img
        src="/images/myschool-2400.webp"
        srcSet="/images/myschool-1280.webp 1280w, /images/myschool-2400.webp 2400w"
        sizes="100vw"
        alt=""
        className="size-full object-cover object-[45%_center]"
      />
      {/* keeps the text on top readable without blurring the photo */}
      <div className="absolute inset-0 bg-linear-to-b from-paper/80 via-paper/45 to-paper/75 dark:from-night/85 dark:via-night/55 dark:to-night/85" />
    </div>
  );
}

function Loading() {
  return (
    <div className="grid min-h-dvh place-items-center">
      <span className="size-10 animate-spin rounded-full border-4 border-coral/20 border-t-coral" />
    </div>
  );
}
