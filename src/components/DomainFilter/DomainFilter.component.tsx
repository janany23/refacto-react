import React from 'react';
import FilterComponent from "../Filter/Filter.component";

interface Props {
  domains: string[]
}

const DomainFilter = ({ domains }: Props) => {
  const countries: Set<string> = new Set();
  const classifications: Set<string> = new Set();
  const subClassifications: Set<string> = new Set();

  for(let i = 0; i < domains.length; i++) {
    // countries
    countries.add(domains[i].substring(0, 2));

    // classifications
    classifications.add(domains[i].substring(3, 5));

    // subClassifications
    subClassifications.add(domains[i].substring(6));
  }

  return (<>
    <FilterComponent name="countries"  options={Array.from(countries)} />
    <FilterComponent name="classifications" options={Array.from(classifications)} />
    <FilterComponent name="subClassifications" options={Array.from(subClassifications)} />
  </>)
}

export default DomainFilter
