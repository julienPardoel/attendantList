const List = ({student}) => {
    return (
        <>
        {student.map((eleve)=>{
            const {id, name, attendance}=eleve;
            
        
                return (
                    <article className="student" key="id">
                        <div>
                            <h4> {name} </h4>
                            <p> {attendance ? 'présent' : 'absent'} </p>
                        </div>
                    </article>
                )
        })}
        </>
    )
}

export default List
