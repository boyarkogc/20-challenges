export default function Stopwatch() {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Stopwatch</h2>
      <div className="text-5xl font-mono bg-white py-6 px-8 rounded-lg shadow-inner w-full text-center mb-6">
        Time placeholder 0:00
      </div>
    </div>
  )
}