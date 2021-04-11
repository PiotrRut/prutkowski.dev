export interface TimelineEvent {
  date: string;
  title: string;
  content: string;
}

export interface TimelineProps {
  events: TimelineEvent[];
}
