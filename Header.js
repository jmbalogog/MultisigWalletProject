import React from 'react';

function Header({approvers, quorum}) {
    return (
        <header className="form-group">
            <ul className="list-group">
                <li className="list-group-item active">Approvers: {approvers.join(',')} </li>
                <br></br>
                <li className="list-group-item active">Quorum: {quorum}</li>
            </ul>
            <hr></hr>
        </header>

        );
}

export default Header;
