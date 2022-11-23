/* This example requires Tailwind CSS v2.0+ */
import { SelectNums } from '@/components/SelectNums'

export function Pagination() {
    return (
      <nav
        className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
        aria-label="Pagination"
      >
        <SelectNums />
        <div className="hidden sm:block">
          <p className="text-sm text-gray-700">
            <span className="font-medium">1</span> - <span className="font-medium">10</span> of{' '}
            <span className="font-medium">20</span>
          </p>
        </div>
        <div className="flex-1 flex justify-between sm:justify-end">
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
           {'<'}<span className="hidden sm:inline pl-1">Previous</span>
          </a>
          <a
            href="#"
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            <span className="hidden sm:inline pr-1">Next</span>{'>'}
          </a>
        </div>
      </nav>
    )
  }
  