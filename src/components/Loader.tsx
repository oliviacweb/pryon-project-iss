import React from 'react'
import { FaSpinner } from 'react-icons/fa'

type Props = {}

export default function Loader({}: Props) {
  return (
    <div>
        <FaSpinner className="animate-spin text-2xl text-gray-300" />
    </div>
  )
}