const ProjectList = ({project, onToggle, onDelete}) => {
    return(
        <div className={`bg-white text-black rounded-xl p-4 shadpw-sm border-l-4 flex items-center gap-4 ${project.done ? 'border-green-400 opacity-60' : 'border-amber-500'}`}>



<button
onClick={() => onToggle(project.id)}
className={`w-6 h-6 rounded-full border-2 flex item-center justify-center shrink-0
    ${project.done ? 'bg-green-500 border-green-400 text-white' :'border-gray-400 hover:border-amber-500'}
    `}
>
</button>

<span className="text-xs font-medium text-cyan-400">
    {project.title}
</span>
   

        </div>
       
    )
}

export default ProjectList;