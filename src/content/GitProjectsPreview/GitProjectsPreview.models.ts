import { Colors } from 'github-linguist-colours';

export interface Repo {
  /**
   * Repo name
   */
  repoName: string;
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
  repoLanguage: Colors;
  /**
   * How many starts does the repo have
   */
  stars: number;
  /**
   * Path to remote
   */
  gitUrl: string;
}
