export default function Card({ move, onClick }: { move: string; onClick: () => void }) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5"
      onClick={onClick}
    >
      {move}
    </button>
  )
}