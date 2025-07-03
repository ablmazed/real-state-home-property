'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { IProperty } from '@/lib/models/property.model'
import { IUser } from '@/lib/models/user.model'

// import { TrendingUp } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from 'recharts'

export default function Overview({
  property,
  user,
}: {
  property: IProperty[]
  user: IUser[]
}) {
  console.log('This is dynamic property for ', property)
  console.log('This is dynamic users for ', user)
  const chartData = [
    { month: 'Jan', value: 100 },
    { month: 'Feb', value: 200 },
    { month: 'Mar', value: 150 },
    { month: 'Apr', value: 250 },
    { month: 'May', value: 300 },
    { month: 'Jun', value: 350 },
  ]

  const pieData = [
    {
      name: 'For Sale',
      value: property.filter((p) => p.isForSale).length,
      color: '#8884d8',
    },
    {
      name: 'Not for Sale',
      value: property.filter((p) => !p.isForSale).length,
      color: '#82ca9d',
    },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Dashboard Stats */}
      <div className="grid grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            {/* <p className="text-4xl font-bold">{users.length}</p> */}
            <p className="text-4xl font-bold">{user.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Properties</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{property.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>For Sale</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">
              {property.filter((p) => p.isForSale).length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Saved Properties</CardTitle>
          </CardHeader>
          <CardContent>
            {/* <p className="text-4xl font-bold">{users.length * 2}</p> */}
            <p className="text-4xl font-bold">51</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Visitor Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <AreaChart width={400} height={250} data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Property Status</CardTitle>
          </CardHeader>
          <CardContent>
            <PieChart width={400} height={250}>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </CardContent>
        </Card>
      </div>

      {/* Property List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Properties</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="min-w-full table-auto border border-gray-200">
            <thead>
              <tr className="">
                <th className="border p-2">ID</th>
                <th className="border p-2">Title</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Location</th>
                <th className="border p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {property.slice(0, 5).map((item) => (
                <tr key={item._id}>
                  <td className="border p-2">{item._id}</td>
                  <td className="border p-2">{item.title}</td>
                  <td className="border p-2">${item.price}</td>
                  <td className="border p-2">{item.location}</td>
                  <td className="border p-2">
                    {item.isForSale ? 'For Sale' : 'Sold'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  )
}
