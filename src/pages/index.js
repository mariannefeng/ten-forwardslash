import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from 'components/Router'
import { Box, Flex, Heading, Image, Button, Card, Text } from 'rebass'
import styled from 'styled-components'

import { Section, FullHeightFlex, ClickableButton } from 'components/rebass';

const HeroImgWrapper = styled.figure`
    max-width: 60%; 
    margin-left: auto !important;
    margin-right: auto !important; 
`

function Homepage() {
    const { data } = useRouteData()

    return (
        <div>
            <Section bg='minty'>
                <Flex flexWrap='wrap'>
                    <Box width={[1, 1/2]} pt={3}>
                        <Flex css={{height: '100%'}} alignItems='flex-end' p={4}>
                            <div>
                                <Heading fontSize={6} fontWeight='bold' mb={3}>{data.title}</Heading>
                                <Heading fontSize={2} fontFamily='mono' mb={4}>{data.titleTagline}</Heading>
                                <Link to={data.ctaButton.ctaButtonLink}>
                                    <ClickableButton variant='accent'>{data.ctaButton.ctaButtonText}</ClickableButton>
                                </Link>
                            </div>
                        </Flex>
                    </Box>
                    <Flex alignItems='center' width={[1, 1/2]}>
                        <Image
                            mx='auto'
                            src={data.ctaImage}
                            width={[3/4, 2/3, 1/2]}
                            borderRadius={8}
                        />
                    </Flex>
                </Flex>
            </Section>
            <Section bg='teal'>
                <Flex flexDirection='column' alignItems='center'>
                    <Heading mb={3} color='teal' fontSize={5}>{data.ctaOne}</Heading>
                </Flex>
            </Section>
            <Section bg='lightgray'>
                <Flex flexDirection='column' alignItems='center' justifyContent='space-around'>
                    <Heading mb={3} color='teal' fontSize={5}>{data.ctaOne}</Heading>
                    <Flex flexWrap='wrap'  justifyContent='space-around'>
                        {/*todo: if this is ever gonna be more than 3, we should do a length check*/}
                        {data.blocks.map((block, i) => {
                            return (
                                <Card bg='white' width={[1, 1/4]} key={i} p={2} m={1}>
                                    <Heading fontFamily='mono' mb={2} fontSize={2}>{block.name}</Heading>
                                    <Text>{block.text}</Text>
                                </Card>
                            )
                        })}
                    </Flex>
                </Flex>
            </Section>
            <Section bg='darkblue'>
                <FullHeightFlex justifyContent='center'>
                    <Heading fontSize={4} fontWeight='normal' color='white'>{data.ctaTwo}</Heading>
                </FullHeightFlex>
            </Section>

        </div>
    )
}

export default Homepage
