/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'

import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { deleteProperty } from '@/lib/actions/property.actions'
import { getUser } from '@/lib/actions/user.action'
import { IUser } from '@/lib/models/user.model'
import React, { useEffect, useState } from 'react'
// Define the User type

type UserProps = {
  user: IUser[]
}

export default function UserTable() {
  const [users, setUsers] = useState<UserProps>()
  const router = useRouter()

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUser()
      setUsers(data)
    }

    fetchUsers()
  }, [])

  console.log('This is user from UserDetails', users)

  // Handle user deletion
  const handleDelete = async (id: string) => {
    try {
      const response = await deleteProperty(id)

      if (response) {
        toast.success('User Deleted successfully')
      } else {
        toast.error('Failed to delete user')
      }
    } catch (error) {
      toast.error('Failed to delete user')
      console.log(error)
    }
  }

  // Render cells in the table
  const renderCell = (user: IUser, columnKey: string) => {
    switch (columnKey) {
      case 'name':
        return `${user.name}`
      case 'email':
        return user.email

        return (
          <DropdownMenu>
            {[
              // Wrap in an array
              <DropdownMenuContent aria-label="Actions" key="menu">
                <DropdownMenuItem
                  key="dashboard"
                  onClick={() => router.push(`/dashboard/${user._id}`)}
                >
                  Give Dashboard Access
                </DropdownMenuItem>
                <DropdownMenuItem
                  key="delete"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete User
                </DropdownMenuItem>
              </DropdownMenuContent>,
            ]}
          </DropdownMenu>
        )
      default:
        return (user as any)[columnKey] // Use `as any` for dynamic keys
    }
  }

  return (
    <div className="p-4">
      {/* Show loading as overlay */}

      {/* User Table */}

      <Table aria-label="User Table">
        <TableHeader>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>NAME</TableCell>
            <TableCell>EMAIL</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.user.map((user) => (
            <TableRow key={user._id}>
              {['_id', 'name', 'email'].map((columnKey) => (
                <TableCell key={columnKey}>
                  {renderCell(user, columnKey)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
