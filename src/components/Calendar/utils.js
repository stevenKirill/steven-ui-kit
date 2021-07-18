//TODO 0 в js это воскресенье поэтому на один день идет сдвиг
export default function buildInitialCalendar(momentObject) {
    const startDay = momentObject.clone().startOf("month").startOf("week");
    const endDay = momentObject.clone().endOf("month").endOf("week");
    const dayIterator = startDay.clone();
    const calendar = [];
    while(dayIterator.isBefore(endDay, "day")) {
        calendar.push(
            Array.from({length: 7}, (_) => {
                return dayIterator.add(1,"day").clone();
            })
        )
    };
    return calendar;
};

export const isToday = (day) => day.isSame(new Date(),"day");
export const isBeforeToday = (day) => day.isBefore(new Date(),"day");
export const isSelected = (day, value) => value.isSame(day,"day");