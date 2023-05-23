import React, { useEffect, useState } from 'react';
import { fetchStations } from '../../utils/api';
import CustomPagination from '../../components/pagination/CustomPagination';

const Stations = () => {
    const [stations, setStations] = useState([]);
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(0);
    const [limit, setLimit] = useState(20);
    const [sortBy, setSortBy] = useState("nimi");
    const [sortByOrder, setSortByOrder] = useState("asc");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetchStations(page, limit, sortBy, sortByOrder);
                setStations(res.stations);
                setCount(res.totalCount);
            } catch (error) {
                console.error("Error while fetching stations data:", error);
            }
        };
        fetchData();
    }, [page, limit, sortBy, sortByOrder]);
    return (
        <div>
            <CustomPagination page={page} count={count} limit={limit} setPage={setPage} />
        </div>
    )
}

export default Stations