// ——————————————————————————————————————————————————
// TextScramble  |  Credit: https://codepen.io/soulwire/pen/mEMPrK
//
// Retrofitted to work as a typescript react component
// ——————————————————————————————————————————————————

import React, {useEffect, useRef} from "react";

interface Props {
    texts: string[];
}

class TextScramble {
    el: HTMLElement;
    chars: string;
    frameRequest: number | null;
    frame: number;
    queue: Array<{ from: string; to: string; start: number; end: number; char?: string }>;
    resolve: (() => void) | undefined;

    constructor(el: HTMLElement) {
        this.el = el;
        this.chars = "!<>-_\\/[]{}—=+*^?#________";
        this.frameRequest = null;
        this.frame = 0;
        this.queue = [];
        this.update = this.update.bind(this);
    }

    setText(newText: string): Promise<void> {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise<void>((resolve) => (this.resolve = resolve));
        this.queue = [];
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || "";
            const to = newText[i] || "";
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({from, to, start, end});
        }
        cancelAnimationFrame(this.frameRequest!);
        this.frame = 0;
        this.update();
        return promise;
    }

    update() {
        let output = "";
        let complete = 0;
        for (let i = 0, n = this.queue.length; i < n; i++) {
            const {from, to, start, end} = this.queue[i];
            let {char} = this.queue[i];
            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar();
                    this.queue[i].char = char;
                }
                output += `<span class="text-cyan-700">${char}</span>`;
            } else {
                output += from;
            }
        }
        this.el.innerHTML = output;
        if (complete === this.queue.length) {
            this.resolve && this.resolve();
        } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }

    randomChar(): string {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }

    dispose() {
        if (this.frameRequest) {
            cancelAnimationFrame(this.frameRequest);
        }
    }
}

const TextScrambleComponent: React.FC<Props> = ({texts}) => {
    const elRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const textScrambles = elRefs.current.map((el, index) => {
            if (el) {
                const textScramble = new TextScramble(el);
                textScramble.setText(texts[index]);
                return textScramble;
            }
            return null;
        });

        return () => {
            textScrambles.forEach((textScramble) => textScramble && textScramble.dispose());
        };
    }, [texts]);

    return (
        <div className="font-bold text-2xl text-cyan-500">
            {texts.map((_text, index) => (
                <div
                    key={index}
                    ref={(el) => (elRefs.current[index] = el)}
                    style={{marginBottom: "10px"}}
                ></div>
            ))}
        </div>
    );
};

export default TextScrambleComponent;
