import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from 'components/Router'
// import { Section, Hero, Columns, Container, Image } from 'react-bulma-components'
import { Box, Flex, Heading, Image } from 'rebass'
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
            <Box bg='darkteal'>
                <Flex flexWrap='wrap'>
                    <Box width={[1, 1/2]} pt={3}>
                        <Flex flexDirection='column' alignItems='center' m={3} justifyContent='space-around' css={{height: "100%"}}>
                            <Heading fontSize={5} fontFamily='sans' color='white' fontWeight='bold'>{data.title}</Heading>
                            <Heading fontSize={3} fontFamily='mono' color='white'>{data.titleTagline}</Heading>
                        </Flex >
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
            {/*<Hero color="info" size="medium">*/}
                {/*<Hero.Body>*/}
                    {/*<Container>*/}
                        {/*<Columns>*/}
                            {/*<Columns.Column>*/}
                                {/*<Heading>{data.title}</Heading>*/}
                                {/*<Heading subtitle>{data.titleTagline}</Heading>*/}
                                {/*<Link className="button is-large"*/}
                                      {/*to={data.ctaButton.ctaButtonLink}>*/}
                                    {/*{data.ctaButton.ctaButtonText}*/}
                                {/*</Link>*/}
                            {/*</Columns.Column>*/}
                            {/*<Columns.Column>*/}
                                {/*<HeroImgWrapper className="image">*/}
                                    {/*<img src={data.ctaImage} />*/}
                                {/*</HeroImgWrapper>*/}
                            {/*</Columns.Column>*/}
                        {/*</Columns>*/}
                    {/*</Container>*/}
                {/*</Hero.Body>*/}
            {/*</Hero>*/}

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
