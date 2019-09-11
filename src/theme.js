//https://rebassjs.org/theming

// colors from https://palx.jxnblk.com/FCB606
export const colors = {
    transparent: 'transparent',
    // yellow: '#F7C331',
    orange: '#FCB606',
    brightorange: '#fcb206',
    mediumorange: '#fcc33e',
    errorred: '#e33105',
    lightorange: '#feeabd',
    lightblue: '#e7eefe',
    lightyellow: '#f9fee3',
    minty: '#F2F9F4',
    brightteal: '#05e4a1',
    teal: '#04c88d',
    darkerteal: '#03a776',
    brightgreen: '#04c82b',
    lightteal: '#e9fef8',
    cyan: '#c5f3fe',
    codebggray: '#eff0f1',
    lightgray: '#eeeeed',
    lightmediumgray: '#aaa69b',
    mediumgray: '#726b59',
    darkgray: '#433e34',
    anotherblue: '#04a1c8',
    brightblue: '#043ec6',
    white: '#ffffff',
    darkblue: '#026178',
    darkishblue: '#0386a6',
    brightpurple: '#a105e3',
    lessintensepurple: '#8d04c8',

    /// start kenzie branding colors
    black: '#111319',
    green: '#00FFBC',
    shadedgreen: '#00b47a',
    yellow: '#FEB300',
    blue: '#4100FF',
    lessbrightblue: '#200085',
    red: 'FF4230'

}

export default {
    breakpoints: ['40em', '52em', '64em'],
    fontSizes: [
        12, 14, 16, 20, 24, 32, 48, 64
    ],
    colors: colors,
    space: [
        0, 4, 8, 16, 32, 64, 128, 256
    ],
    fonts: {
        sans: '"Nunito Sans", sans-serif',
        // need to load in this subheader font:
        submono: '"Ubuntu Mono", monospace',
        mono: '"OCR A Extended", monospace',
    },
    buttons: {
        // todo: we need to make this accent button have no background and have the >>>
        accent: {
            fontWeight: 'normal',
            fontFamily: '"Ubuntu Mono", monospace',
            textTransform: 'uppercase',
            backgroundColor: colors.brightorange,
            color: colors.white,
            '&:hover': {
                backgroundColor: colors.mediumorange
            },
        },
        accentBlack: {
            fontWeight: 'normal',
            fontFamily: '"Ubuntu Mono", monospace',
            textTransform: 'uppercase',
            backgroundColor: colors.lightgray,
            color: colors.white,
            '&:hover': {
                backgroundColor: colors.darkgray,
            },
        },
        transparent: {
            fontWeight: 'normal',
            fontFamily: '"Ubuntu Mono", monospace',
            textTransform: 'uppercase',
            backgroundColor: colors.transparent,
            color: colors.white,
            '&:hover': {
                color: colors.lightgray
            },
        },
        outline: {
            fontWeight: 'normal',
            boxShadow: 'inset 0 0 0 1px',
            color: colors.darkgray,
            backgroundColor: '#fff',
        },
        // primary: {
        //     color: '#fff',
        //     backgroundColor: blue,
        // },
    }
    // shadows: {
    //     small: '0 0 4px rgba(0, 0, 0, .125)',
    //     large: '0 0 24px rgba(0, 0, 0, .125)'
    // }
}
