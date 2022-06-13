import React from 'react';

type FilterProps = {
    options: string[],
    name: string
}

const Filter = ({ options, name }: FilterProps) => {
  return (
    <>
      <select name={name} aria-label={name} title={name} multiple>
        {
          options.map((option: string, key: number) =>  {
            return (
              <option value={option} key={key}>{option}</option>
            )
          })
        }
      </select>
    </>
  );
}

export default Filter
