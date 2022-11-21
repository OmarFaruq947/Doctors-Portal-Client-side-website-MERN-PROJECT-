import React from "react";

const Table = ({ appointmentData, index }) => {
  const { patientName, treatment, slot, date } = appointmentData;
  return (
    <>
      <tr>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p class="text-gray-900 whitespace-no-wrap">{index + 1}</p>
        </td>

        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p class="text-gray-900 whitespace-no-wrap">{patientName}</p>
        </td>

        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p class="text-gray-900 whitespace-no-wrap">{treatment}</p>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p class="text-gray-900 whitespace-no-wrap">{slot}</p>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          {date}
        </td>
      </tr>
    </>
  );
};

export default Table;
