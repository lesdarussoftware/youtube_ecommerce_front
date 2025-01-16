/* eslint-disable @typescript-eslint/no-explicit-any */
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export function DataGridComponent({ columns, rows }: any) {
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
}
