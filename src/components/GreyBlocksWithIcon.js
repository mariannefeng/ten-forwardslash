import React from 'react'
import { Flex, Text, Image, Box, Card } from 'rebass'
import Hide from './Hide'
import { ClickableLink, BrandedMainHeading } from "./rebass"
import styled from "styled-components"
import { colors } from "../theme"

const RedHoverCard = styled(Card)`
        :hover h2 {
            color: ${colors.red};
        }
    `

const GreyBlocksWithIcon = (props) => {
    return (<Flex flexDirection='column' flexWrap='wrap' justifyContent='space-around'>
        {props.data.map((block, i) => {
            return (
                <ClickableLink
                    key={i}
                    href={block.url}
                    target={block.external ? '_blank' : '_self'}
                    color='black'>
                    <RedHoverCard width={1}
                                  p={4}
                                  my={4}
                                  color='black'
                                  bg='lightgray'>
                        <Flex>
                            {i % 2 === 1 &&
                                <Hide breakpoints={[0, 1]} width={.2} px={4}>
                                    <Image src={block.icon} css={{ objectFit: 'contain' }}/>
                                </Hide>
                            }
                            <Box width={[1, 1, .8]}>
                                <Flex>
                                    <BrandedMainHeading mb={4} fontSize={3}>{block.title} {!block.external ? ' /' : <a className="external-link"/>}
                                    </BrandedMainHeading>
                                </Flex>
                                <Text lineHeight={4 / 3} fontSize={2} pb={3} fontWeight='400'
                                      fontFamily='sans'>{block.description}</Text>
                            </Box>
                            {i % 2 === 0 &&
                                <Hide breakpoints={[0, 1]} width={.2} px={4}>
                                    <Image src={block.icon} css={{ objectFit: 'contain' }}/>
                                </Hide>
                            }
                        </Flex>
                    </RedHoverCard>
                </ClickableLink>
            )
        })}
    </Flex>)
}

//takes in a data prop containing list of objects
GreyBlocksWithIcon.defaultProps = {
    data: []
    //each object contains:
        //icon
        //title
        //description
        //external (true if link goes to external site)
        //url
}

export default GreyBlocksWithIcon