
const GenderCheckbox = ({selectedGender,onCheckboxgender}:{selectedGender:string|undefined;onCheckboxgender:(gender:"male"|"female")=>void}) => {
  return (
      <div className="flex gap-2">
        <label className=''>
            <span>Male</span>
            <input type='checkbox' className='ml-2 mt-2' checked={selectedGender==="male"}
            onChange={()=>onCheckboxgender("male")}
            />
        </label>
        <label className='gap-2'>
            <span>Female</span>
            <input type='checkbox' className='ml-2 mt-2' checked={selectedGender==="female"}
            onChange={()=>onCheckboxgender("female")}
            />
        </label>
      </div>
  )
}

export default GenderCheckbox
