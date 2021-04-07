import { Language } from '@misc/languages';

export interface Repo {
  /**
   * Repo name
   */
  name: string;
  /**
   * Repo description
   */
  description: string;
  /**
   * How many forks does the repo have
   */
  forks: number;
  /**
   * Main language of the repo
   *
   * [Allowed languages](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml)
   */
  language: Language;
  /**
   * How many starts does the repo have
   */
  stars: number;
  /**
   * Path to remote
   */
  url: string;
}
