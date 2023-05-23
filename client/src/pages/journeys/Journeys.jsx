import React, { useState, useEffect } from 'react';
import { fetchJourneys } from '../../utils/api';
import SortingList from '../../components/sortingList/SortingList';
import ListItems from '../../components/listItems/ListItems';
import CustomPagination from '../../components/pagination/CustomPagination';

const Journeys = () => {
    const [journeys, setJourneys] = useState([]);
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(0);
    const [limit, setLimit] = useState(20);
    const [sortBy, setSortBy] = useState("departureStationName");
    const [sortByOrder, setSortByOrder] = useState("asc");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetchJourneys(page, limit, sortBy, sortByOrder);
                setJourneys(res.journeys);
                setCount(res.totalCount);
            } catch (error) {
                console.error("Error while fetching stations data:", error);
            }
        };
        fetchData();
    }, [page, limit, sortBy, sortByOrder]);

    const handleSorting = (event) => {
        const value = event.currentTarget.getAttribute("value");
        if (value === sortBy) {
            setSortByOrder(sortByOrder === "asc" ? "desc" : "asc");
        } else {
            setSortByOrder("asc");
            setSortBy(value);
        }
    };
    return (
        <div>
            <SortingList type={"journeys"} sortBy={sortBy} sortByOrder={sortByOrder} handleSorting={handleSorting} />
            <ListItems items={journeys} type={"journeys"} />
            <CustomPagination page={page} count={count} limit={limit} setPage={setPage} />
        </div>
    )
}

export default Journeys