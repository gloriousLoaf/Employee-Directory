// Directory
import React from "react";
import "./style.css"

function Directory() {
    return (
        <div className="container">
            <table className="tableStyle">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    <td>Dummy Text</td>
                    <td>loopSomeJSON@mail.com</td>
                    <td>765-4321</td>
                </tbody>
                <tbody>
                    <td>John Smith</td>
                    <td>john@mail.com</td>
                    <td>123-4567</td>
                </tbody>
                <tbody>
                    <td>Jane Brown</td>
                    <td>jane@mail.com</td>
                    <td>987-6543</td>
                </tbody>
            </table>
        </div>
    )
};

export default Directory;