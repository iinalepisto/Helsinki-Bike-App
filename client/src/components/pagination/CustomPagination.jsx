import React from 'react';
import { Box, Pagination } from "@mui/material";
import "./CustomPagination.css";

const CustomPagination = ({ page, count, limit, setPage }) => {
    const totalPages = Math.ceil(count / limit);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    return (
        <div>
            <Box className="pagiBox">
                <Pagination
                    className='pagination'
                    count={totalPages}
                    page={page}
                    onChange={handlePageChange}
                />
            </Box>
        </div>
    )
}

export default CustomPagination;