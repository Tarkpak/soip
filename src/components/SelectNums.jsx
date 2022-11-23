/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export function SelectNums() {
    return (
      <div className="mr-8">
        <select
          id="location"
          name="location"
          className="block w-full pl-3 pr-10 py-1 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          defaultValue="50"
        >
          <option>50</option>
          <option>100</option>
          <option>200</option>
        </select>
      </div>
    )
  }
  