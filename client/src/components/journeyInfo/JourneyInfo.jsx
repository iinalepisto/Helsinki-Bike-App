import React from 'react'

const JourneyInfo = (journey) => {
    return (
        <div>
            {journey.departureStationName}
            {journey.returnStationName}
        </div>
    )
}

export default JourneyInfo