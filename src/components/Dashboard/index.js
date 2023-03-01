import { Link, Outlet } from "react-router-dom"

function Dashboard() {

    return (
        <>
            <div className="title">Dashboard</div>
            <Link className="btn btn-primary ms-5 me-1 link-light text-decoration-none" to='/dashboard/subcription'>Subcription</Link>
            <Link className="btn btn-primary link-light text-decoration-none" to='/dashboard/revenue'>Revenue</Link>
            <div className="content-data">
                <Outlet />
            </div>
        </>
    )
}

export default Dashboard