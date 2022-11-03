import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import WineFilters from 'components/filters/WineFilters';
import Loader from 'components/Loader';
import SelectedWines from 'components/SelectedWines';
const WineList = dynamic(() => import('components/WineList'), { suspense: true });

export default function Index() {
  return (
    <>
      <h1 className="title is-centered-text">List of wines</h1>
      <Suspense fallback={<Loader />}>
        <WineFilters />
        <SelectedWines />
        <WineList />
      </Suspense>
    </>
  );
}
