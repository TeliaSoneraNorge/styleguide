import * as React from 'react';

export interface MiniDashboardLinks {
  text?: string;
  href?: string;
  notifications?: number;
}

export interface MiniDashboardProps {
  headingText?: string;
  children?: React.ReactNode;
  links?: MiniDashboardLinks[];
}

const MiniDashboard: React.FC<MiniDashboardProps>;

export default MiniDashboard;
