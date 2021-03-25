import React from 'react';

function TransferList({transfers, approveTransfer}) {
    return (
        <div className="alert-primary">
            <h2 className="alert-heading"> &ensp;Transfers</h2>
            <table>
                <thead>
                    <tr>
                        <th >&ensp;Id</th>
                        
                        <th >&ensp;Amount</th>
                        <th> &ensp;To</th>
                        <th >&ensp;Approvals</th>
                        <th >&ensp;Sent</th>
                    </tr>
                </thead>
                <tbody>
                    {transfers.map(transfer => (
                        <tr key={transfer.id}>
                            <td> {transfer.id}</td>
                            <td>{transfer.amount}</td>
                            <td>{transfer.to}</td>
                            <td>
                                {transfer.approvals}
                                <button className="button" onClick={()=> approveTransfer(transfer.id)}>Approve</button>
                                </td>
                            <td>{transfer.sent ? 'yes': 'no'}</td>
                        </tr>
                    
                    ))}
                </tbody>
            </table>

        </div>
    )

}

export default TransferList;

