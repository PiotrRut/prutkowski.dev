export interface SectionProps extends React.HTMLProps<HTMLElement> {
  /**
   * Section heading/title
   */
  heading?: string;
  /**
   * When true the section will have a height of 100vh
   */
  isFullScreen?: boolean;
}
