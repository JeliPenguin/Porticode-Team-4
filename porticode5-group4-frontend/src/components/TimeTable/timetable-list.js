const TimetableComponent = ({color, event, time}) => {
    return (
        <div className="flex items-center mt-6 mb-6">
            <span className={"w-6/12 py-3 rounded font-bold " + color}>{event}</span>
            <span className="font-bold  ml-3">{time}</span>
        </div>
    )
}
export default TimetableComponent