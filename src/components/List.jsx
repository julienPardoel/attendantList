const List = ({student}) => {
    return (
        <>
        {student.map((eleve)=>{
            const {id, name, comment}=eleve;
        
                return (
                    <article className="student" key="id">
                        <div>
                            <h4> {name} </h4>
                            <p> {comment} </p>
                        </div>
                    </article>
                )
        })}
        </>
    )
}

export default List
