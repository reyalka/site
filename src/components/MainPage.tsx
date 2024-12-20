import { useSpring, animated } from "@react-spring/web";

export default function Page() {
    function make_horizonal_spring({
        from,
        delay = 0,
    }: { from: number; delay?: number }) {
        return useSpring({
            from: { x: from, opacity: 0 },
            to: { opacity: 1, x: 0 },
            delay: delay,
            config: {
                mass: 2,
                tention: 200,
            },
        });
    }

    function make_vertical_spring({
        from,
        delay = 0,
    }: { from: number; delay?: number }) {
        return useSpring({
            from: { y: from, opacity: 0 },
            to: { opacity: 1, y: 0 },
            delay: delay,
            config: {
                mass: 2,
                tention: 200,
            },
        });
    }
    const icon_spring = make_horizonal_spring({ from: -200, delay: 0 });
    const name_spring = make_vertical_spring({ from: -100, delay: 200 });
    const sub_name_spring = make_vertical_spring({ from: -100, delay: 250 });
    const title_spting = make_horizonal_spring({ from: -100, delay: 300 });
    function generate_about_spring(index: number) {
        return make_horizonal_spring({
            from: -30,

            // if index is 0, delay is 375,
            // if index is 1, delay is 450,
            // ...
            delay: 400 + index * 100,
        });
    }

    function ProfileList({
        icon = false,
        title,
        contents,
    }: { icon?: boolean; title: string; contents: string[] }) {
        return (
            <div className="flex flex-col">
                <animated.h2
                    style={title_spting}
                    className="text-2xl font-bold"
                >
                    {title}
                </animated.h2>
                <ul>
                    {contents.map((text, index) => {
                        return (
                            <li key={text}>
                                <animated.h3
                                    style={generate_about_spring(index)}
                                    className="text-2xl font-semibold"
                                >
                                    ・ {text}
                                </animated.h3>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }

    return (
        <div className="flex gap-10 shadow-md p-5 bg-green-100 rounded-lg">
            <animated.div className="flex flex-col justify-center z-10">
                <animated.img
                    src="/reyalka.jpg"
                    style={icon_spring}
                    className="shadow w-60 h-60 rounded-[20%] z-20 border-2 border-black-200 "
                />
                <animated.h2
                    style={name_spring}
                    className="font-bold text-5xl font-serif mr-4 my-3 "
                >
                    reyalka
                </animated.h2>
                <animated.p
                    style={sub_name_spring}
                    className="text-xl text-cente"
                >
                    れやか
                </animated.p>
            </animated.div>

            <ul className="flex flex-col gap-3 ">
                <li>
                    <ProfileList
                        title=""
                        contents={["Web engineer", "Student"]}
                    />
                </li>
            </ul>
        </div>
    );
}
