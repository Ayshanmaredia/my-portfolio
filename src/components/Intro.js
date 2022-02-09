import React from 'react';

const Intro = () => {
    return (
        <section id="home">
            <div className="flex flex-col justify-center items-center px-10 md:flex-row md:px-32 md:h-[calc(100vh-48px)]">
                <div className="basis-1/2 mt-6 md:mt-0">
                    <h1 className="text-4xl text-center leading-tight md:text-5xl md:text-left">Hi, I am Ayshan Maredia, a <span className="text-theme-primary font-semibold">Front-End-Developer</span></h1>
                    <p className="mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className="basis-1/2 content-center">
                    <img className="mx-auto w-full" src={require("../assets/programmer_image.png")} alt="programmerImage" />
                </div>
            </div>
        </section>
    );
};

export default Intro;
