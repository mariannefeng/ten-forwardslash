//https://rebassjs.org/theming

export const colors = {
    orange: '#FCB606',
    minty: '#d0fef0',
    darkteal: '#04c88d',
    cyan: '#c5f3fe',
    lightgray: '#f9f9f8',
    darkgray: '#433e34',
    white: "#ffffff",
}

export default {
    breakpoints: ['40em', '52em', '64em'],
    fontSizes: [
        12, 14, 16, 20, 24, 32, 48, 64
    ],
    // colors from https://palx.jxnblk.com/FCB606
    colors: colors,
    space: [
        0, 4, 8, 16, 32, 64, 128, 256
    ],
    fonts: {
        sans: 'Helvetica, sans-serif',
        // need to load in these fonts:
        // test: 'Proxima Nova, sans-serif',
        mono: 'Menlo, monospace',
    },
    buttons: {
        accent: {
            fontWeight: 'normal',
            backgroundColor: colors.orange,
            color: colors.white,
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
