import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    calender: {
        events: []
    }
};

export const calenderSlice = createSlice({
    name:"calender",
    initialState,
    reducers: {
        setEvents: (state, action) =>{
            const events = [];
            action.payload.response.holidays.forEach(item=>{
                events.push({
                    title: item.name,
                    start: item.date.iso,
                    end: item.date.iso
                })
            })
            state.calender = {
                events
            };
        }
    },
})

export const {setEvents} = calenderSlice.actions;

export default calenderSlice.reducer;