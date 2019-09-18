import React from 'react'
import { useRouteData } from 'react-static'
import { Box, Flex, Image } from 'rebass'

import { PageHero, BrandedSubHeading, BrandedMainHeading, FlexContent } from '../components/rebass';
import { THE_OUTCAST } from '../components/text-overlay-filler'

let max = '/images/sketched-pets/max.png'
let meesh = '/images/sketched-pets/meesh-standing.png'
let gandalf = '/images/sketched-pets/gandalf-lay.png'

function Credits() {
    const { data } = useRouteData()
    return (
            <Box>
                <PageHero
                    bg='black'
                    color='white'
                    overlay={THE_OUTCAST}
                    title={data.title}
                    blurb={data.content}
                    overlayFontSize='10px'/>
                <Box bg='white' py={3} >
                    <BrandedMainHeading fontSize={5} textAlign='center'>&lt;aminals&gt;</BrandedMainHeading>
                    <FlexContent width={1} py={3} flexDirection={['column', 'row']} justifyContent='space-between'>
                        {[meesh, gandalf, max].map((animal, i) => {
                            return (
                                <Box alignSelf='center' width={[1, 0.3]}>
                                    <Image
                                        key={i}
                                        width={1}
                                        mx='auto'
                                        src={animal}
                                        css={{objectFit: 'contain', minHeight: '100px', maxHeight: '150px'}}
                                        mb={3}
                                    />
                                    <BrandedSubHeading textAlign='center'>pet {i+1}</BrandedSubHeading>
                                </Box>
                            )
                        })}
                    </FlexContent>
                </Box>
            </Box>
    )
}

export default Credits
