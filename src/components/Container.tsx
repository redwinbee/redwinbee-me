import React, {ReactNode} from "react";

interface Props {
    children: ReactNode;
}

const Container: React.FC<Props> = ({children}) => {
    return (
        <div className="flex items-center justify-center mx-48 my-8">
            <div className="bg-neutral-900 rounded-xl shadow-2xl">{children}</div>
        </div>
    );
}

export default Container;