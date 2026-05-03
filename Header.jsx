const Header = ({DoneProjects, PendingProjects}) => {
    return (
        <div>
            <header className="bg-blue-700 text-white px-8 py-6 flex justify-between items-center">
  <h1 className="text-xl font-bold">Agency Projects</h1>
  <p className="text-right">{DoneProjects} </p>
  <p className="text-right">Done</p>

  <p>{PendingProjects} {1} </p>
  <p>Pending</p>
            </header>
              
        </div>
       
    )

}

export default Header