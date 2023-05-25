import React, { useEffect, useState } from 'react';
import { fetchStations, fetchSearchStations } from '../../utils/api';
import CustomPagination from '../../components/pagination/CustomPagination';
import ListItems from '../../components/listItems/ListItems';
import SortingList from '../../components/sortingList/SortingList';


const Stations = () => {
    const [stations, setStations] = useState([]);
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(0);
    const [limit, setLimit] = useState(20);
    const [sortBy, setSortBy] = useState("nimi");
    const [sortByOrder, setSortByOrder] = useState("asc");
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!search) {
                    const res = await fetchStations(page, limit, sortBy, sortByOrder);
                    setStations(res.stations);
                    setCount(res.totalCount);
                }
                else {
                    const res = await fetchSearchStations(page, limit, sortBy, sortByOrder, search);
                    setStations(res.stations);
                    setCount(res.totalCount);
                    console.log(res.totalCount);
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
                <h1>Asemat</h1>
                <input type='text'
                    value={search || ""}
                    onChange={(e) => setSearch(e.target.value)} />
            </div>
            <SortingList type={"stations"} sortBy={sortBy} sortByOrder={sortByOrder} handleSorting={handleSorting} />
            <ListItems items={stations} type={"stations"} />
            <CustomPagination page={page} count={count} limit={limit} setPage={setPage} />
        </div>
    )
}

export default Stations