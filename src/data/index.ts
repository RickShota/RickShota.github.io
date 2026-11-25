import * as zh from './site';
import * as en from './site.en';
import type { Lang } from '../i18n';

export const content = { zh, en };

export function getContent(lang: Lang) {
  return content[lang];
}

export type { ExperienceItem, CapabilityItem, SkillTier, Exploration, ExplorationStatusKey } from './site';
