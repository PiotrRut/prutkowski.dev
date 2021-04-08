export interface ProjectCardProps {
  /**
   * Preview picture
   */
  picturePath?: string;
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
