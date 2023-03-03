import { Link, Outlet } from "react-router-dom"

function Dashboard() {

    return (
        <>
            <div className="title">Dashboard</div>
            <div className="d-flex justify-content-evenly w-100">
                <Link className="btn btn-primary link-light text-decoration-none" to='/dashboard/subcription'>Subcription</Link>

                <Link className="btn btn-primary link-light text-decoration-none" to='/dashboard/revenue'>Revenue</Link>

            </div>
            <div className="content-data dashboard">
                <Outlet />
            </div>
        </>
    )
}

export default Dashboard