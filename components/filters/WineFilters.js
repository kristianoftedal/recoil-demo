import Typeahead from 'components/Typeahead';
import CategoryFilterButtons from 'components/filters/CategoryFilterButtons';
import ColumnSelector from 'components/filters/ColumnSelector';
import RangeFilters from './RangeFilters';
import { useRecoilState, useRecoilValue } from 'recoil';
import { countries, districts, countryFilter, districtFilter } from 'store/wineFilter';
import { wines } from 'store/wineList';

export default function WineFilters() {
  const countryList = useRecoilValue(countries);
  const districtList = useRecoilValue(districts);
  const wineList = useRecoilValue(wines);
  const [district, setDistrict] = useRecoilState(districtFilter);
  const [country, setCountry] = useRecoilState(countryFilter);

  return (
    <>
      <div className="columns">
        <div className="column">
          <CategoryFilterButtons />
        </div>
        <div className="column">
          <div style={{ marginBottom: '1em' }}>
            <Typeahead
              data={wineList.map(x => x.name)}
              placeholder="Type a name"
              onSelected={setDistrict}
            />
          </div>
          <div style={{ marginBottom: '1em' }}>
            <Typeahead data={countryList} onSelected={setCountry} placeholder="Type a country" />
          </div>
          <Typeahead data={districtList} placeholder="Type a district" onSelected={setDistrict} countries />
        </div>
        <div className="column">
          <RangeFilters />
        </div>
        <div className="column">
          <ColumnSelector />
        </div>
      </div>
    </>
  );
}
