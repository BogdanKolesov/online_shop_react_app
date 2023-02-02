export const calcFontSize = (vmin, vmax, fmax, fmin) => {
    return `calc((100vw - Vmin)/(${vmax} - ${vmin}) * (${fmax}px - ${fmin}px) + ${fmin}px)`
}