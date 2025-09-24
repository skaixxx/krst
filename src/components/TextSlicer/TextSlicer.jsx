import style from "./TextSlicer.module.css"
function TextSlicer({ text, ratio, ratios=null }) {
    if(!text) return null;
    const words = text.split(" ");
    let fractions = [];
    if (ratios && ratios.length > 0) {
        let idx = 0;
        const totalWords = words.length;
        ratios.forEach((r, i) => {
            let count;
            if (i === ratios.length - 1) {
                count = totalWords - idx;
            } else {
                count = Math.ceil(totalWords * r);
            }
            fractions.push(words.slice(idx, idx+count).join(" "));
            idx += count;
        });
    } else {
        const fractionSize = Math.ceil(words.length * ratio);
        for (let i = 0; i < words.length; i+= fractionSize) {
        fractions.push(words.slice(i, i + fractionSize).join(" "));
    }
    }
    return (
        <div className={style.textContainer}>
            {fractions.map((line, index) => (
                <p key={index} className={style.textLine}>{line}</p>
            ))}
        </div>
    );
}
export default TextSlicer;