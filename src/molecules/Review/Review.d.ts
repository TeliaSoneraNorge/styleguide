export interface ReviewProps {
  children?: React.ReactNode;
}

export interface ReviewHeaderProps {
  name: string;
  rating: number;
  timestamp: string;
  buyTimestamp: string;
}

export interface ReviewBodyProps {
  text: string;
  votesUp: number;
  votesDown: number;
}
