import React, { useState } from 'react';

function NewTransfer({createTransfer}) {
    const [transfer, setTransfer] = useState(undefined);

    const event = "";
    const submit = event => {
        event.preventDefault();
        createTransfer(transfer)  // receive the object with all the details
    }
    const updateTransfer = (event, field) => {
        const value = event.target.value;
        setTransfer({...transfer, [field]: value});
    }

    return (
        <div>
            <h2 className="alert-heading">&ensp;Create Transfer</h2>
            <br></br>
            <form onSubmit={(event) => submit(event)}>
                <label htmlFor="amount">&ensp;Amount &ensp;</label>
                <input
                id="amount"
                type="text"
                onChange={event => updateTransfer(event, 'amount')}
                />
                <label htmlFor="to">&ensp; To &ensp; </label>
                <input
                id="to"
                type="type"
                onChange={event => updateTransfer(event, 'to')}
                />  &ensp;
                <button type="button" className="btn btn-primary">Submit</button>
            </form>
            <br></br>
                      <hr></hr>
        </div>
    );

}

export default NewTransfer;

