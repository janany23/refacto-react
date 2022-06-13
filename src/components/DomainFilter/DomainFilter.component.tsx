import React from 'react';
import FilterComponent from "../Filter/Filter.component";

interface State {
  countries: string[],
  classifications: string[],
  subClassifications: string[]
}

interface Props {
  domains: string[]
}

class DomainFilter extends React.Component<Props, State> {
  state: State = {
    countries: [],
    classifications: [],
    subClassifications: []
  }
  componentDidMount() {
    const { domains } = this.props;

    for(let i = 0; i < domains.length; i++) {
      if (this.state.countries.indexOf(domains[i].substring(0,2)) <= 0) {
        this.state.countries.push(domains[i].substring(0,2))
      }
      this.state.classifications.push(domains[i].substring(3,5));
      let flag = false;
      for(let j = 0; j < this.state.subClassifications.length; j++) {
        if (this.state.subClassifications[j] === domains[i].substring(6)) {
          flag = true
          break;
        }
      }
      if (!flag) {
        this.state.subClassifications.push(domains[i].substring(6));
      }
    }

    this.setState({
      ...this.state,
      classifications: this.state.classifications.filter((e, i, l) => l.indexOf(e) === i),
    })
    this.forceUpdate()
  }

  render() {
    const {countries = [], classifications = [], subClassifications = []} = this.state;

    return (<>
      <FilterComponent name="countries"  options={countries} />
      <FilterComponent name="classifications"  options={classifications} />
      <FilterComponent name="subClassifications"  options={subClassifications} />
    </>)
  }
}

export default DomainFilter
