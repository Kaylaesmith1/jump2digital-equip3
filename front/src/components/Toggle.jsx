const Toggle = ({ id, onChange, checked }) => {
  return (
    <div>
      <label className={`text-black border rounded-lg text-xs px-5 py-2.5 me-2 mb-2 cursor-pointer focus:outline-none select-none ${checked ? 'bg-blue-300 border-blue-400' : 'bg-gray-300 border-gray-400'}`}  >
        <input type="checkbox" value={id} className="sr-only peer" id={id} onChange={onChange} checked={checked} />
        <span className={`transition-ease duration-300 font-bold ${checked ? 'text-white' : 'text-gray-600'}`}>{id}</span>
      </label>
    </div>
  )
}

export default Toggle;