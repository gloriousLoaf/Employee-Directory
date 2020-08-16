// Directory
import React from "react";
import "./style.css";
import ServerTable from 'react-strap-table';

// big thanks to GH use Asem Alalami for npm react-strap-table
// https://github.com/AsemAlalami/react-strap-table
function Directory() {
    // vars to get mock data, set table parameters
    const url = 'https://5efe2a74dd373900160b3f24.mockapi.io/api/users';
    const columns = ['id', 'name', 'email'];
    const options = {
        headings: { id: '#', created_at: 'Created At' },
        sortable: ['id', 'name', 'email'],
        requestParametersNames: { query: 'search', direction: 'order' },
        loading: ''
    };

    return (
        <div className="tableStyle">
            <ServerTable
                // search={false}
                perPage={false}
                columns={columns}
                url={url}
                options={options}
            />
        </div>
    );
};

export default Directory;