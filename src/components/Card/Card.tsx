import React, {ReactNode, useEffect, useState} from "react";
import TextScramble from "../../utilities/TextScramble.tsx";

interface Props {
    title: string,
    subtitle: string,
    phrases: string[],
    children: ReactNode;
}

const Card: React.FC<Props> = ({subtitle, phrases, children}) => {
    const [texts] = useState(phrases);
    const [idx, setIdx] = useState(0);

    const nextText = () => {
        setIdx((prevIdx) => (prevIdx + 1) % texts.length);
    }

    useEffect(() => {
        const intervalId = setInterval(nextText, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div
            className="card flex flex-col flex-auto justify-center text-center h-full pl-12 pr-12 pt-6 pb-6 rounded-xl shadow-xl">
            <TextScramble texts={[texts[idx]]}/>
            <div className="font-light text-sm text-neutral-400">
                <h6 className="p-2">{subtitle}</h6>
                <div className="p-5 break-words">{children}</div>
            </div>
        </div>
    );
}

export default Card;