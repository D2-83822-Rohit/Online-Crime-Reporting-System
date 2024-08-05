import React from 'react'
import { Link } from 'react-router-dom'

const AssignedComplaints = () => {
  return (
    <div>
        <center>
            <div className="table-responsive">
                <table className="table table-striped table-bordered text-center" >
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Complaint Category</th>
                            <th>Date Of Crime</th>
                            <th>Location</th>                        
                            <th>Assigned To</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                <Link to={'/view'}>
                                <button className="btn btn-outline-primary">View</button>
                                </Link>
                                </td>
                            </tr>
                        
                    </tbody>
                </table>
            </div>
        </center>
    </div>
  )
}

export default AssignedComplaints
