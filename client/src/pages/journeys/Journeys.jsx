import React, { useState, useEffect } from 'react';
import { fetchJourneyCount, fetchJourneys, fetchSearchJourneys } from '../../utils/api';
import SortingList from '../../components/sortingList/SortingList';
import ListItems from '../../components/listItems/ListItems';
import CustomPagination from '../../components/pagination/CustomPagination';
import Spinner from '../../components/spinner/Spinner';

const Journeys = () => {
    const [journeys, setJourneys] = useState([]);
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(0);
    const [limit, setLimit] = useState(20);
    const [sortBy, setSortBy] = useState("departureStationName");
    const [sortByOrder, setSortByOrder] = useState("asc");
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                if (!search) {
                    /*
                    if (count === 0) {
                        const countRes = await fetchJourneyCount();
                        setCount(countRes);
                        console.log(countRes);
                    }
                    */
                    const res = await fetchJourneys(page, limit, sortBy, sortByOrder);
                    setJourneys(res.journeys);
                    setCount(res.totalCount);
                    setIsLoading(false);
                } else {
                    const res = await fetchSearchJourneys(page, limit, sortBy, sortByOrder, search);
                    setJourneys(res.journeys);
                    setCount(res.totalCount);
                    setIsLoading(false);
                }

            } catch (error) {
                console.error("Error while fetching stations data:", error);
            }
        };
        fetchData();
    }, [page, limit, sortBy, sortByOrder, search]);

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
            <div className='pageContainer'>
                <h1>Matkat</h1>
                <input className='search'
                    type='text'
                    value={search || ""}
                    placeholder="Etsi"
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setPage(1);
                    }} />
                <div>
                </div>
            </div>
            <SortingList type={"journeys"} sortBy={sortBy} sortByOrder={sortByOrder} handleSorting={handleSorting} />
            {isLoading ? (
                <Spinner />
            ) : (
                <>
                    <ListItems items={journeys} type={"journeys"} />
                    <CustomPagination page={page} count={count} limit={limit} setPage={setPage} />
                </>
            )}
        </div>
    )
}

export default Journeys