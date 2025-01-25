
import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom'; // Import Link

export default function AdminDashboard() {

  return (
    <div className="flex h-screen  ">
    {/* Sidebar */}
    <div className="bg-gray-900 text-white w-64 p-4 py-10">
      <div className="text-2xl font-bold mb-6">Admin Dashboard</div>
      <nav>
        <ul>
          <li className="mb-4">
            <Link to={''} className="flex items-center">
              <i className="fas fa-home mr-2" /> Manage Users
            </Link>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center">
              <i className="fas fa-users mr-2" /> Customers
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center">
              <i className="fas fa-cog mr-2" /> Settings
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center">
              <i className="fas fa-chart-line mr-2" /> Analytics
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center">
              <i className="fas fa-envelope mr-2" /> Messages
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center">
              <i className="fas fa-file-alt mr-2" /> Reports
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center">
              <i className="fas fa-calendar-alt mr-2" /> Calendar
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center">
              <i className="fas fa-folder mr-2" /> Files
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center">
              <i className="fas fa-plug mr-2" /> Plugins
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center">
              <i className="fas fa-cogs mr-2" /> Settings
            </a>
          </li>
        </ul>
      </nav>
    </div>
    {/* Main Content */}
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-6  flex justify-between items-center">
        <div className="text-xl font-bold">Admin Dashboard</div>
        <div className="text-sm">
          Work in progress <span className="ml-2">😊</span>
        </div>
      </header>
      {/* Toolbar */}
      <div className="bg-white p-4 shadow flex justify-between items-center">
        <div className="flex space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Add new post
          </button>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded">
            All customers
          </button>
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded">
            Settings
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search customers"
            className="border border-gray-300 rounded px-4 py-2"
          />
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded">
            Small button
          </button>
        </div>
      </div>
      {/* Stats */}
      <div className="p-4 grid grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded shadow text-center">
          <div className="text-2xl font-bold">$2,456</div>
          <div className="text-gray-500">Total Sales</div>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <div className="text-2xl font-bold">$1,000</div>
          <div className="text-gray-500">Total Expenses</div>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <div className="text-2xl font-bold">6,535</div>
          <div className="text-gray-500">Total Visitors</div>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <div className="text-2xl font-bold">1,121</div>
          <div className="text-gray-500">Total Users</div>
        </div>
      </div>
      {/* Table */}
      <div className="p-4">
        <div className="bg-white p-4 rounded shadow">
          <div className="text-lg font-bold mb-4">Farm table</div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Farm ID</th>
                  <th className="py-2 px-4 border-b">Farm Name</th>
                  <th className="py-2 px-4 border-b">TODAY</th>
                  <th className="py-2 px-4 border-b">TODAY</th>
                  <th className="py-2 px-4 border-b">TODAY</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">1</td>
                  <td className="py-2 px-4 border-b">Quis autem vel</td>
                  <td className="py-2 px-4 border-b">Lorem ipsum dolor</td>
                  <td className="py-2 px-4 border-b">Commodi consequatur</td>
                  <td className="py-2 px-4 border-b">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded">
                      Edit
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">2</td>
                  <td className="py-2 px-4 border-b">Ut enim ad minima</td>
                  <td className="py-2 px-4 border-b">Lorem ipsum dolor</td>
                  <td className="py-2 px-4 border-b">Commodi consequatur</td>
                  <td className="py-2 px-4 border-b">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded">
                      Edit
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">3</td>
                  <td className="py-2 px-4 border-b">Quis autem vel</td>
                  <td className="py-2 px-4 border-b">Lorem ipsum dolor</td>
                  <td className="py-2 px-4 border-b">Commodi consequatur</td>
                  <td className="py-2 px-4 border-b">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded">
                      Edit
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">4</td>
                  <td className="py-2 px-4 border-b">Ut enim ad minima</td>
                  <td className="py-2 px-4 border-b">Lorem ipsum dolor</td>
                  <td className="py-2 px-4 border-b">Commodi consequatur</td>
                  <td className="py-2 px-4 border-b">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded">
                      Edit
                    </button>
                  </td>
                </tr>
              
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

