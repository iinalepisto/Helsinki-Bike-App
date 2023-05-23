import React from 'react';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';
import "./SortingList.css";

const SortingList = ({ type, sortBy, sortByOrder, handleSorting }) => {
    if (type === "stations") {
        return (
            <div className='sortingList'>
                <div onClick={handleSorting} value="nimi">
                    Nimi {sortBy === "nimi" ? sortByOrder === "asc" ? <ArrowDownward fontSize="inherit" /> : <ArrowUpward fontSize="inherit" /> : null}
                </div>
                <div onClick={handleSorting} value="osoite">
                    Osoite {sortBy === "osoite" ? sortByOrder === "asc" ? <ArrowDownward fontSize="inherit" /> : <ArrowUpward fontSize="inherit" /> : null}
                </div>
                <div onClick={handleSorting} value="kaupunki">
                    Kaupunki {sortBy === "kaupunki" ? sortByOrder === "asc" ? <ArrowDownward fontSize="inherit" /> : <ArrowUpward fontSize="inherit" /> : null}
                </div>
            </div>
        )
    }
    else if (type === "journeys") {
        return (
            <div className='sortingList'>
                <div onClick={handleSorting} value="departureStationName">
                    Lähtöasema {sortBy === "departureStationName" ? sortByOrder === "asc" ? <ArrowDownward fontSize="inherit" /> : <ArrowUpward fontSize="inherit" /> : null}
                </div>
                <div onClick={handleSorting} value="returnStationName">
                    Pääteasema {sortBy === "returnStationName" ? sortByOrder === "asc" ? <ArrowDownward fontSize="inherit" /> : <ArrowUpward fontSize="inherit" /> : null}
                </div>
                <div onClick={handleSorting} value="coveredDistanceM">
                    Matkan pituus {sortBy === "coveredDistanceM" ? sortByOrder === "asc" ? <ArrowDownward fontSize="inherit" /> : <ArrowUpward fontSize="inherit" /> : null}
                </div>
                <div onClick={handleSorting} value="durationSec">
                    Matkan kesto {sortBy === "durationSec" ? sortByOrder === "asc" ? <ArrowDownward fontSize="inherit" /> : <ArrowUpward fontSize="inherit" /> : null}
                </div>
            </div>
        )
    }
}
export default SortingList