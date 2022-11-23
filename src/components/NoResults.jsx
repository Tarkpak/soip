
export function NoResults({children}) {
  return (
    <div className="min-h-full px-4 sm:px-6  md:grid md:place-items-center lg:px-8 relative">
    <div className="max-w-max mx-auto min-w-full">
    <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="px-4 mb-8 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 bg-white">
              <h2 className="mx-auto max-w-2xl text-lg text-gray-300 font-medium text-center my-6">{children}</h2>
              <div className=""></div>
            </div>
          </div>
          {/* /End replace */}
        </div>
      </main>
    </div>
  </div>
  )
}

