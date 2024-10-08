
const GenderCheckbox = () => {
  return (
      <div className="flex gap-2">
        <label className=''>
            <span>Male</span>
            <input type='checkbox' className='ml-2 mt-2'/>
        </label>
        <label className='gap-2'>
            <span>Female</span>
            <input type='checkbox' className='ml-2 mt-2'/>
        </label>
      </div>
  )
}

export default GenderCheckbox
