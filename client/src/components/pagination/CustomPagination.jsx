import React from 'react';
import { Box, Pagination } from "@mui/material";
import "./CustomPagination.css";

const CustomPagination = ({ page, count, limit, setPage }) => {
    const totalPages = Math.ceil(count / limit);

    const handlePageChange = (value) => {
        setPage(value);
        console.log(value);
        console.log(page);
    };

    return (
        <div>
            <Box classname="pagiBox">
                <Pagination className='pagination'
                    count={totalPages}
                    page={page}
                    onChange={handlePageChange}
                />
            </Box>
        </div>
    )
}

export default CustomPagination;