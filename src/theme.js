//https://rebassjs.org/theming

// colors from https://palx.jxnblk.com/FCB606
export const colors = {
    orange: '#FCB606',
    lightorange: '#fcc33e',
    lightblue: '#e7eefe',
    lightyellow: '#f9fee3',
    minty: '#F2F9F4',
    teal: '#04c88d',
    lightteal: '#e9fef8',
    cyan: '#c5f3fe',
    lightgray: '#eeeeed',
    mediumgray: '#726b59',
    darkgray: '#433e34',
    white: '#ffffff',
    darkblue: '#026178',
    darkishblue: '#0386a6'
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
        sans: 'Helvetica, sans-serif',
        // need to load in these fonts:
        // test: 'Proxima Nova, sans-serif',
        mono: 'Consolas, monospace',
    },
    buttons: {
        accent: {
            fontWeight: 'normal',
            backgroundColor: colors.orange,
            color: colors.white,
            '&:hover': {
                backgroundColor: colors.lightorange
            }
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
