import { PropsWithChildren } from "react";

type Props = {};

function Text({ children }: PropsWithChildren<Props>) {
    return (
        <p className="font-noto-sans-thai">{children}</p>
    );
}

export default Text;
