import { CSSProperties, ReactNode, useState } from 'react';

export function Tip(props: {
    children: ReactNode;
    style?: CSSProperties;
    title: string;
    bottom?: boolean;
}) {
    const [isShow, setIsShow] = useState(false);

    return (
        <div
            style={{
                ...props.style,
            }}
            onMouseEnter={() => setIsShow(true)}
            onMouseLeave={() => setIsShow(false)}
        >
            {props.children}
            {isShow ? (
                <div style={{ position: 'relative' }}>
                    <div
                        className="text-xs p-3 bg-gray-700/50 rounded text-white"
                        style={{
                            position: 'absolute',
                            bottom: props.bottom ? undefined : 20,
                            top: props.bottom ? 5 : undefined,
                        }}
                    >
                        <p>{props.title}</p>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
