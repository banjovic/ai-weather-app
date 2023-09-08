"use client";

// import { Country, State, City } from 'country-state-city';
// import { useRouter } from 'next/navigation';
// import { useState } from 'react';
// import Select from 'react-select';

// import { GlobeAltIcon } from '@heroicons/react/20/solid';

// type Props = {};

// type option = {
//   value: {
//     latitude: string;
//     longitude: string;
//     isoCode: string;
//   };
//   label: string;
// } | null;

// type stateOption = {
//   value: {
//     latitude: string;
//     longitude: string;
//     countryCode: string;
//     name: string;
//     isoCode: string;
//   };
//   label: string;
// } | null;

// type cityOption = {
//   value: {
//     latitude: string;
//     longitude: string;
//     countryCode: string;
//     name: string;
//     stateCode: string;
//   };
//   label: string;
// } | null;

// const options = Country.getAllCountries().map((country) => ({
//   value: {
//     latitude: country.latitude,
//     longitude: country.longitude,
//     isoCode: country.isoCode,
//   },
//   label: country.name,
// }));

// const CityPicker = (props: Props) => {
//   const [selectedCountry, setSelectedCountry] = useState<option>(null);
//   const [selectedState, setSelectedState] = useState<stateOption>(null);
//   const [selectedCity, setSelectedCity] = useState<cityOption>(null);
//   const router = useRouter();

//   const handleSelectedCountry = (option: option) => {
//     setSelectedCountry(option);
//     setSelectedState(null);
//     setSelectedCity(null);
//   };

//   const handleSelectedState = (option: stateOption) => {
//     setSelectedState(option);
//     setSelectedCity(null);
//   };

//   const handleSelectedCity = (option: cityOption) => {
//     setSelectedCity(option);
//     router.push(
//       `/location/${option?.value?.name}/${option?.value.latitude}/${option?.value.longitude}`
//     );
//   };

//   return (
//     <div className="space-y-4">
//       <div className="space-y-2">
//         <div className="flex items-center space-x-2 text-white/80">
//           <GlobeAltIcon className="h-5 w-5 text-white" />
//           <label htmlFor="country">Country</label>
//         </div>
//         <Select
//           className="text-black"
//           value={selectedCountry}
//           onChange={handleSelectedCountry}
//           options={options}
//         />
//       </div>

//       {selectedCountry && (
//         <div className="space-y-2">
//           <div className="flex items-center space-x-2 text-white/80">
//             <GlobeAltIcon className="h-5 w-5 text-white" />
//             <label htmlFor="state">State</label>
//           </div>
//           <Select
//             className="text-black"
//             value={selectedState}
//             onChange={handleSelectedState}
//             options={State.getStatesOfCountry(
//               selectedCountry.value.isoCode
//             ).map((state) => ({
//               value: {
//                 latitude: state.latitude!,
//                 longitude: state.longitude!,
//                 countryCode: state.countryCode,
//                 name: state.name,
//                 isoCode: state.isoCode,
//               },
//               label: state.name,
//             }))}
//           />
//         </div>
//       )}

//       {selectedState && (
//         <div className="space-y-2">
//           <div className="flex items-center space-x-2 text-white/80">
//             <GlobeAltIcon className="h-5 w-5 text-white" />
//             <label htmlFor="country">City</label>
//           </div>
//           <Select
//             className="text-black"
//             value={selectedCity}
//             onChange={handleSelectedCity}
//             options={City.getCitiesOfState(
//               selectedCountry!.value.isoCode,
//               selectedState.value.isoCode
//             ).map((city) => ({
//               value: {
//                 latitude: city.latitude!,
//                 longitude: city.longitude!,
//                 countryCode: city.countryCode,
//                 stateCode: city.stateCode,
//                 name: city.name,
//               },
//               label: city.name,
//             }))}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default CityPicker;

"use client";

import { Country, State, City } from "country-state-city";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Select from "react-select";

import { GlobeAltIcon } from "@heroicons/react/20/solid";

type Props = {};

type option = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
  };
  label: string;
} | null;

type cityOption = {
  value: {
    latitude: string;
    longitude: string;
    countryCode: string;
    name: string;
    stateCode: string;
  };
  label: string;
} | null;

const options = Country.getAllCountries().map((country) => ({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },
  label: country.name,
}));

const CityPicker = (props: Props) => {
  const [selectedCountry, setSelectedCountry] = useState<option>(null);
  const [selectedCity, setSelectedCity] = useState<cityOption>(null);
  const router = useRouter();

  const handleSelectedCountry = (option: option) => {
    setSelectedCountry(option);
    setSelectedCity(null);
  };

  const handleSelectedCity = (option: cityOption) => {
    setSelectedCity(option);
    router.push(
      `/location/${option?.value?.name}/${option?.value.latitude}/${option?.value.longitude}`
    );
  };

  return (
    <div className='space-y-4'>
      <div className='space-y-2'>
        <div className='flex items-center space-x-2 text-white/80'>
          <GlobeAltIcon className='h-5 w-5 text-white' />
          <label htmlFor='country'>Country</label>
        </div>
        <Select
          className='text-black'
          value={selectedCountry}
          onChange={handleSelectedCountry}
          options={options}
        />
      </div>

      {selectedCountry && (
        <div className='space-y-2'>
          <div className='flex items-center space-x-2 text-white/80'>
            <GlobeAltIcon className='h-5 w-5 text-white' />
            <label htmlFor='country'>City</label>
          </div>
          <Select
            className='text-black'
            value={selectedCity}
            onChange={handleSelectedCity}
            options={City.getCitiesOfCountry(
              selectedCountry!.value.isoCode
            )?.map((city) => ({
              value: {
                latitude: city.latitude!,
                longitude: city.longitude!,
                countryCode: city.countryCode,
                stateCode: city.stateCode,
                name: city.name,
              },
              label: city.name,
            }))}
          />
        </div>
      )}
    </div>
  );
};

export default CityPicker;
