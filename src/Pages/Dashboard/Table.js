import React from "react";
import { Link } from "react-router-dom";

const Table = ({ appointmentData, index }) => {
  const {
    _id,
    patientName,
    treatment,
    slot,
    price,
    paid,
    date,
    transactionId,
  } = appointmentData;
  return (
    <>
      <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{index + 1}</p>
        </td>

        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{patientName}</p>
        </td>

        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{treatment}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{slot}</p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          {price && !paid && (
            <Link to={`/dashboard/payment/${_id}`}>
              <button className="btn btn-primary">Pay bill</button>
            </Link>
          )}
          {price && paid && (
            <div>
              <p>
                <span className="text-success">Paid</span>
              </p>
              <p>
                Transaction id:{" "}
                <span className="text-success">{transactionId}</span>
              </p>
            </div>
          )}
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          {date}
        </td>
      </tr>
    </>
  );
};

export default Table;
