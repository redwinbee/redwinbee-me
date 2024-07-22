import React, {ReactNode} from "react";

interface Props {
    children: ReactNode;
}

const Layout: React.FC<Props> = ({children}) => {
    return (
        <div className="grid grid-cols-6 grid-rows-6 h-fit gap-5 p-10 m-5">
            {children}
        </div>
    )
}

export default Layout;