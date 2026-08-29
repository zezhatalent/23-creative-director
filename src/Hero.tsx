import { motion } from 'framer-motion';
import { content } from './content';
import { useTheme } from './components/ThemeProvider';

const frames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function FilmStrip() {
  const { theme } = useTheme();
  return (
    <div className="grid grid-cols-5 gap-2 opacity-70">
      {frames.map((f) => (
        <motion.div
          key={f}
          className="aspect-square overflow-hidden rounded-sm bg-black"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 + f * 0.08 }}
          style={{ border: `2px solid ${theme.border}`, background: `linear-gradient(135deg, #000, ${theme.accent}${20 + (f % 3) * 20})` }}
        >
          <span className="font-mono text-[10px] text-white/70">{String(f).padStart(2, '0')}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default function Hero() {
  const { theme } = useTheme();
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden" style={{ background: theme.bg }}>
      {/* light sweep */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-y-0 w-1/3"
          style={{ background: `linear-gradient(90deg, transparent, ${theme.accent}22, transparent)` }}
          initial={{ x: '-100%' }}
          animate={{ x: '400%' }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
        />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <FilmStrip />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 font-mono text-xs uppercase tracking-[0.4em]"
          style={{ color: theme.accent }}
        >
          DIRECTOR&apos;S CUT · {content.role}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-4 text-6xl font-extrabold leading-[0.95] tracking-tight md:text-8xl"
          style={{ color: theme.text }}
        >
          {content.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-5 max-w-xl text-lg"
          style={{ color: theme.muted }}
        >
          {content.tagline}. {content.about[0]}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="rounded px-8 py-3 font-semibold text-white"
            style={{ background: theme.accent }}
          >
            View the work
          </a>
          <a
            href="#contact"
            className="rounded border px-8 py-3 font-semibold"
            style={{ borderColor: theme.text, color: theme.text }}
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
