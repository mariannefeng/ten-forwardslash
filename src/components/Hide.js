import styled from 'styled-components'
import theme from '../theme'
import { Flex } from 'rebass'

const { breakpoints } = theme
const lastIndex = breakpoints.length - 1

//this guy fucks: https://gist.github.com/Kikobeats/0dbda3ec8154fa942dc47d36504681c6

const getMediaBreakpoint = (breakpoints, breakpoint, index) => {
    if (index === 0) return `@media screen and (max-width: ${breakpoint})`
    const prevBreakpoint = breakpoints[index - 1]
    if (index === lastIndex) {
        return `@media screen and (min-width: ${prevBreakpoint})`
    }
    return `@media screen and (min-width: ${prevBreakpoint}) and (max-width: ${breakpoint})`
}

const mediaBreakpoints = breakpoints.reduce((acc, breakpoint, index) => {
    acc[index] = getMediaBreakpoint(breakpoints, breakpoint, index)
    return acc
}, {})

const hidden = key => props => {
    const breakpoints = [].concat(props.breakpoints)
    return breakpoints.includes(key)
        ? {
            [mediaBreakpoints[key]]: {
                display: 'none'
            }
        }
        : null
}

const Hide = styled(Flex)(
    [],
    ...Object.keys(mediaBreakpoints).map(i => hidden(Number(i)))
)

export default Hide