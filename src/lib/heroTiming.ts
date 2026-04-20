/** Single source of truth for hero intro + rotating-word timing (keep in sync). */

export const ROTATING_WORD_INITIAL_MS = 3600;
export const READ_BEFORE_STRIKE_MS = 300;
export const WORD_ENTER_MS = 420;
export const STRIKE_DRAW_MS = 540;
export const BETWEEN_WORDS_MS = 420;

/** Time from `RotatingWord` mount until the last word step finishes (inclusive). */
export function rotatingWordSequenceMs(): number {
  const strikeBlock =
    WORD_ENTER_MS + READ_BEFORE_STRIKE_MS + STRIKE_DRAW_MS + BETWEEN_WORDS_MS;
  const nonStrikeBlock = WORD_ENTER_MS + BETWEEN_WORDS_MS;
  return ROTATING_WORD_INITIAL_MS + 3 * strikeBlock + nonStrikeBlock;
}

/** Title + rotating line appear (`phase >= 4`). */
export const HERO_TITLE_REVEAL_MS = 3000;

/** Brief beat after the last “Revenue.” before unlocking scroll / body. */
export const HERO_POST_CYCLE_BUFFER_MS = 500;

/** Unlock hero body + scroll (`phase === 6`). */
export const HERO_PHASE6_MS =
  HERO_TITLE_REVEAL_MS + rotatingWordSequenceMs() + HERO_POST_CYCLE_BUFFER_MS;

/** Optional beat before phase 6 (keeps spacing from original 10.5s / 11.5s pair). */
export const HERO_PHASE5_MS = HERO_PHASE6_MS - 1000;

/** Framer `transition.delay` in seconds — nav should not appear before phase 6. */
export const HERO_HEADER_DELAY_SEC = HERO_PHASE6_MS / 1000;
