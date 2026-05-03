import { PlusIcon } from  "lucide-react"

const AddProject = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text) return;
        onAdd(text, "Practice");
        setText('')
    };
    return(
<div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
    <div>

 < PlusIcon className="w-6 h-6 text-gray-500" />
<h2 className="text-lg font-bold text-blue-400">Add Project</h2>
  </div>
  
<form onSubmit={handleSubmit}>
    <input type="text" onChange={(e) => setText(e.target.value)} placeholder="Type here" className="flex-1 border border-gray-600 rounded-xl px-4 py-3 text-sm focus-outline-none focus:border-orange-500"/>
    
 <select name="" id=""className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-green-400">
    <option value="Practice">Practice</option>
    <option value="Assignment">Assignment</option>
</select>


    <button type="submit">Add</button>

</form>


</div>
    )
}

export default AddProject