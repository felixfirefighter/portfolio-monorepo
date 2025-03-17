import {
  RiBriefcase3Line,
  RiEyeLine,
  RiHome6Line,
  RiSpeakLine,
} from '@remixicon/react';

export const MAIN_NAVBAR = [
  {
    href: '/',
    title: 'New',
    icon: <RiHome6Line />,
  },
  {
    href: '/ask',
    title: 'Ask',
    icon: <RiSpeakLine />,
  },
  {
    href: '/show',
    title: 'Show',
    icon: <RiEyeLine />,
  },
  {
    href: '/jobs',
    title: 'Jobs',
    icon: <RiBriefcase3Line />,
  },
];
