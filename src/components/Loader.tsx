import React from 'react'
import { FaSpinner } from 'react-icons/fa'

export default function Loader() {
  return (
    <div>
        <FaSpinner className="animate-spin text-2xl text-gray-300" />
    </div>
  )
}