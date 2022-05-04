import React from 'react'
import MiniProject from './MiniProject'

const MiniProjectLists = () => {

    const miniProjects = [{
        "id": 1,
        "name": "Keeper App",
        "image": require("../../assets/keeper.png"),
        "link": "https://codesandbox.io/s/using-pre-built-react-components-forked-737tc",
    },
    {
        "id": 2,
        "name": "Light-Dark Theme",
        "image": require("../../assets/dark.png"),
        "link": "https://codesandbox.io/s/dark-theme-zibi30",
    }]

    return (
        <section id="mini-project">
            <h4 className="text-3xl font-Montserrat font-bold my-5 text-center">Mini Projects</h4>
            <div className='flex flex-col justify-center items-center px-10 md:flex-row md:px-8 lg:px-32'>
                {
                    miniProjects.map((project) => (
                        <div key={project.id} className="m-4">
                            <MiniProject {...project} />
                        </div>
                    ))
                }
            </div>

        </section>
    )
}

export default MiniProjectLists