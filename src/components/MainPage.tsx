import { useSpring, animated } from "@react-spring/web";

export default function Page() {
    function makeHorizonalSpring({
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

    function makeVerticalSpring({
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
    const iconSpring = makeHorizonalSpring({ from: -200, delay: 0 });
    const nameSpring = makeVerticalSpring({ from: -100, delay: 200 });
    const subNameSpring = makeVerticalSpring({ from: -100, delay: 250 });
    const titleSpting = makeHorizonalSpring({ from: -100, delay: 300 });
    function generateAboutSpring(index: number) {
        return makeHorizonalSpring({
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
                    style={titleSpting}
                    className="font-bold text-2xl"
                >
                    {title}
                </animated.h2>
                <ul>
                    {contents.map((text, index) => {
                        return (
                            <li key={text}>
                                <animated.h3
                                    style={generateAboutSpring(index)}
                                    className="font-semibold text-2xl"
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
        <div className="flex gap-10 rounded-lg p-5 shadow-md">
            <animated.div className="z-10 flex flex-col justify-center">
                <animated.img
                    src="/reyalka.png"
                    style={iconSpring}
                    className="z-20 h-60 w-60 rounded-[20%] border-2 border-black-200 shadow "
                />
                <animated.h2
                    style={nameSpring}
                    className="my-3 mr-4 font-bold font-serif text-5xl "
                >
                    reyalka
                </animated.h2>
                <animated.p
                    style={subNameSpring}
                    className="text-center text-xl"
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
