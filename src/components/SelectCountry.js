import axios from 'axios';
import React from 'react';

const SelectCountry = ({country,setCountry}) => {
    const [countries, setCountries] = React.useState([]);
    React.useEffect(()=>{
        axios.get("https://calendarific.com/api/v2/countries?&api_key=a3e07c8d9c0f9d63e2a3ef99952f35c1c5843ccc")
        .then(res=> setCountries(res.data.response.countries))
        .catch(err=> console.log(err));
    },[]);
    const selectChange = (e) => setCountry(e.target.value);
    return (
        <select value={country} onChange={selectChange} placeholder='select country'>
            {
                countries.map(item=>{
                    return <option value={item[`iso-3166`]} key={item.uuid}>{item.country_name + ' ' + item[`iso-3166`]}</option>
                })
            }
        </select>
    )
}

export default SelectCountry;
