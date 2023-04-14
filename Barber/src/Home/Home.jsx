import { Agenda } from "../Agenda/Agenda"
export function Home(){
    return(
        <>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8">
                    <img src="https://firebasestorage.googleapis.com/v0/b/barbersg-480da.appspot.com/o/barber.jpg?alt=media&token=eb7d1f8c-c9f0-4bf3-ab32-4e1f9d6cbd8e"
                         alt="" className="img-fluid w-100"/>
                    </div>        
                    <div className="col-12 col-md-4">
                        <Agenda/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}