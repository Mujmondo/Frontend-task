import { Link } from "react-router-dom";

const Welcome = () => {
    return (
        <div className="welcome-page">
            <div className="container flex justify-center items-center mx-auto min-h-screen">
                <div className="form-container bg-white shadow-xl w-full">
                    <div className="bg-gray-200 w-full py-2"><Link to="/" className="bg-sky-500 px-3 py-2.5 text-white">Logout</Link></div>
                    <div className="w-full bg-gray-400 h-full text-white flex items-center justify-center text-center text-2xl">Hello!</div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;