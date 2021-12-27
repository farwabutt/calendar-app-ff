import React, { useEffect } from 'react';
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { useDispatch, useSelector } from "react-redux";
import { setEvents } from './calender.slice';
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import axios from 'axios';
import SelectCountry from '../../components/SelectCountry';


const locales={ "en-US": require("date-fns/locale/en-US"),};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const styles = { height: 500, margin: "50px" };

const Calender = () => {
    const [country, setCountry] = React.useState("US");
    const dispatch = useDispatch();
    const events = useSelector((state)=>state.calender)
    useEffect(()=>{
        axios.get(`https://calendarific.com/api/v2/holidays?&api_key=a3e07c8d9c0f9d63e2a3ef99952f35c1c5843ccc&country=${country}&year=2021`)
        .then(res=> dispatch(setEvents(res.data)))
        .catch(err=> console.log(err));
    },[country]);
    return (
        <>
            <SelectCountry country={country} setCountry={setCountry} />
            <Calendar localizer={localizer} events={events.calender.events} startAccessor="start" endAccessor="end" style={styles} />
        </>
    )
}

export default Calender;
