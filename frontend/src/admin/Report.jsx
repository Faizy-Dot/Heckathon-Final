// import React from 'react'

// export default function Report() {
//   return (
//     <div>
//         <div className="flex-1 flex flex-col">
//       {/* Header */}
//       <header className="bg-white shadow-md p-4 flex justify-between items-center rounded-md">
//         <h1 className="text-xl font-semibold">Custom Reports</h1>
//         <div className="flex items-center">
//           <i className="fas fa-user-circle text-2xl text-gray-700 mr-2" />
//           <span className="text-gray-700">Hi John Doe!</span>
//         </div>
//       </header>
//       {/* Content */}
//       <div className="flex-1 p-6">
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <div className="flex justify-between items-center mb-4">
//             <div>
//               <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
//                 Active Reports
//               </button>
//             </div>
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Search Reports"
//               className="w-full p-2 border border-gray-300 rounded-lg"
//             />
//           </div>
//           <div>
// <table className="w-full border-collapse ">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="p-2 border border-gray-300 text-left ">
//                   REPORT NAME
//                 </th>
//                 <th className="p-2 border border-gray-300 text-left">MODULE</th>
//                 <th className="p-2 border border-gray-300 text-left">GROUP</th>
//                 <th className="p-2 border border-gray-300 text-left">
//                   FILE TYPE
//                 </th>
//                 <th className="p-2 border border-gray-300 text-left">
//                   CREATED BY
//                 </th>
//                 <th className="p-2 border border-gray-300 text-left">
//                   LAST UPDATED
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td colSpan={6} className="p-4 text-center text-gray-500">
//                   No data available in table
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//           </div>
//           <div className="flex justify-between items-center mt-4">
//             <div className="text-gray-700">Showing 0 to 0 of 0 entries</div>
//             <div className='space-x-3'>
//               <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg">
//                 Previous
//               </button>
//               <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg">
//                 Next
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   )
// }
import React from 'react';

export default function Report() {
  // Sample report data
  const reportData = [
    { id: 1, name: 'Sales Report', value: '$3,200' },
    { id: 2, name: 'Visitors Report', value: '12,000' },
    { id: 3, name: 'Users Report', value: '3,500' },
    // Additional report data can go here
  ];

  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="text-lg font-bold mb-4">Reports</div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Report Name</th>
              <th className="py-2 px-4 border-b">Value</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reportData.map((report) => (
              <tr key={report.id}>
                <td className="py-2 px-4 border-b">{report.name}</td>
                <td className="py-2 px-4 border-b">{report.value}</td>
                <td className="py-2 px-4 border-b">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
