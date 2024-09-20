import { PropsWithChildren } from "react";

type Props = {
    className? :string;
};

function Text({ children, className }: PropsWithChildren<Props>) {
    return (
        <p className={"font-noto-sans-thai ${className}"}>{children}</p>
    );
}

export default Text;
