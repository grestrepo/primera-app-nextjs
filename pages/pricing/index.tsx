import React from 'react';
import Link from 'next/link';
import { MainLayout } from '../../components/layouts/MainLayout';
import { DarkLayout } from '../../components/layouts/DarkLayout';

const PricingPage = () => {
  return (
    <>
      <h1>Pricing Page</h1>
      <h1 className={'title'}>
        Ir a <Link href="/">Pricing</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/pricing.jsx</code>
      </p>
    </>
  );
};

PricingPage.getLayout = function getLayout(page: JSX.Element | JSX.Element[]){
  return (
    <MainLayout>
      { page }
    </MainLayout>
  )
}

export default PricingPage;
