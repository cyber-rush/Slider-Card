import { useState } from "react";

const Card = ({ educator }) => {

    const { name, photo, selfDescription, studiedFrom, designation } = educator
    const [isHovered, setIsHovered] = useState(false);

    // Event handler for when the mouse enters the component
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    // Event handler for when the mouse leaves the component
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (

        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-4 overflow-hidden"
            style={{ width: '300px', height: '400px' }} // Set width and height as per your requirement
        >
            {
                isHovered ?

                    (<div className="p-5 overflow-auto">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                        <p className="mt-2">{selfDescription}</p>
                    </div>) :

                    (<>
                        <img className="rounded-t-lg w-full h-2/3 object-cover" src={photo} alt="" />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{designation}</p>
                            <p className="mt-16">{studiedFrom}</p>
                        </div>
                    </>)
            }
        </div>


    )
}

export default Card
