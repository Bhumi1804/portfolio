
function Card({skill})
{
    return(<>
    <div className="card">
        <h>{skill.h}</h>
        <p>{}</p>
        <img src={skill.p} alt="HTML" />
    </div>
    </>
    )
}
export default Card;