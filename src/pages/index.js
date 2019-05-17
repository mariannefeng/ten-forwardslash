import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from 'components/Router'
// import { Section, Hero, Columns, Container, Image } from 'react-bulma-components'
import { Box, Flex, Heading, Image, Button } from 'rebass'
import styled from 'styled-components'

const HeroImgWrapper = styled.figure`
    max-width: 60%; 
    margin-left: auto !important;
    margin-right: auto !important; 
`


function Homepage() {
    const { data } = useRouteData()

    return (
        <div>
            <Box bg='darkteal' py={[2, 4]}>
                <Flex flexWrap='wrap'>
                    <Box width={[1, 1/2]} pt={3}>
                        <Flex css={{height: '100%'}} alignItems='flex-end' p={4}>
                            <div>
                                <Heading fontSize={5} color='white' fontWeight='bold' mb={3}>{data.title}</Heading>
                                <Heading fontSize={2} fontFamily='mono' color='white' mb={4}>{data.titleTagline}</Heading>
                                <Link to={data.ctaButton.ctaButtonLink}><Button variant='outline'>{data.ctaButton.ctaButtonText}</Button></Link>
                            </div>
                        </Flex>
                    </Box>
                    <Box width={[1, 1/2]}>
                        <Flex alignItems='center'>
                            <Image
                                mx='auto'
                                src={data.ctaImage}
                                width={1/2}
                                borderRadius={8}
                            />
                        </Flex>
                    </Box>
                </Flex>
            </Box>
            <Box bg='lightgray' py={[2, 4]}>
                <Heading mx='auto'>{data.ctaOne}</Heading>
            </Box>

            {/*<Hero color="success" size="medium">*/}
                {/*<Hero.Body>*/}
                    {/*<Container>*/}
                        {/*<Heading>{data.ctaOne}</Heading>*/}
                        {/*<Columns>*/}
                            {/*{data.blocks.map((block, i) => {*/}
                                {/*return (*/}
                                    {/*<Columns.Column key={i}>*/}
                                        {/*<h3>{block.name}</h3>*/}
                                        {/*<p>{block.text}</p>*/}
                                    {/*</Columns.Column>)*/}
                            {/*})}*/}
                        {/*</Columns>*/}
                    {/*</Container>*/}
                {/*</Hero.Body>*/}
            {/*</Hero>*/}

            {/*<Hero size="medium" color="dark">*/}
                {/*<Hero.Body>*/}
                    {/*<Container>*/}
                        {/*<Heading>{data.ctaTwo}</Heading>*/}
                    {/*</Container>*/}
                {/*</Hero.Body>*/}
            {/*</Hero>*/}

        </div>
    )
}

export default Homepage
