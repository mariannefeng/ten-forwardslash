import React from 'react'
import { useRouteData } from 'react-static'
import { Link } from 'components/Router'

export default () => {
    const { data } = useRouteData()

    return (
        <div>
            <section className="hero is-info is-medium">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns">
                            <div className="column">
                                <h1 className="title">
                                    {data.title}
                                </h1>
                                <h2 className="subtitle">
                                    {data.titleTagline}
                                </h2>
                                <Link className="button is-large"
                                      to={data.ctaButton.ctaButtonLink}>
                                    {data.ctaButton.ctaButtonText}
                                </Link>
                            </div>
                            <div className="column">
                                <figure className="image is-square">
                                    <img src={data.ctaImage} />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <p>{data.ctaOne}</p>
            <hr/>
            <p>{data.blocks.map((block, i) => {
                return (<span key={i}>{block.name}</span>)
            })}</p>
            <hr/>
            <p>{data.ctaTwo}</p>
        </div>
    )
}