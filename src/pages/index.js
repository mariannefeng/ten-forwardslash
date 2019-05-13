import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from 'components/Router'
import { Section, Hero, Columns, Container, Image, Heading } from 'react-bulma-components';

export default () => {
    const { data } = useRouteData()

    return (
        <div>

            <Hero color="info" size="medium">
                <Hero.Body>
                    <Container>
                        <Columns>
                            <Columns.Column>
                                <Heading>{data.title}</Heading>
                                <Heading subtitle>{data.titleTagline}</Heading>
                                <Link className="button is-large"
                                      to={data.ctaButton.ctaButtonLink}>
                                    {data.ctaButton.ctaButtonText}
                                </Link>
                            </Columns.Column>
                            <Columns.Column>
                                <Image src={data.ctaImage} size="is-square"/>
                            </Columns.Column>
                        </Columns>
                    </Container>
                </Hero.Body>
            </Hero>

            <Hero color="success" size="medium">
                <Hero.Body>
                    <Container>
                        <Heading>{data.ctaOne}</Heading>
                        <Columns>
                            {data.blocks.map((block, i) => {
                                return (
                                    <Columns.Column key={i}>
                                        <h3>{block.name}</h3>
                                        <p>{block.text}</p>
                                    </Columns.Column>)
                            })}
                        </Columns>
                    </Container>
                </Hero.Body>
            </Hero>

            <Hero size="medium" color="dark">
                <Hero.Body>
                    <Container>
                        <Heading>{data.ctaTwo}</Heading>
                    </Container>
                </Hero.Body>
            </Hero>

        </div>
    )
}