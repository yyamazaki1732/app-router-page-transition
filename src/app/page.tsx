'use client';

import { TransitionButton } from '@/app/componets/TransitionButton';

export default function Home() {
  return (
    <>
      <div>Home Page</div>{' '}
      <TransitionButton href={'/about'}>AboutTest</TransitionButton>
    </>
  );
}
