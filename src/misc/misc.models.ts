import { IconType } from 'react-icons';

export interface Social {
  /**
   * Name of the social media
   */
  name: string;
  /**
   * Path to account
   */
  path: string;
  /**
   * Icon from react-icons
   */
  icon: IconType;
  /**
   * Icon fill
   */
  color: string;
}

export interface Skill {
  /**
   * Name of skill
   */
  name: string;
}

export interface Project {
  /**
   * Preview picture
   */
  picture: string;
  /**
   * Name of the project
   */
  title: string;
  /**
   * Short description
   */
  description: string;
  /**
   * Path (if exists)
   */
  path?: string;
  /**
   * Team (if applicable)
   */
  team?: string;
}
