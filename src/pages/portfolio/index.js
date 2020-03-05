import React from 'react'
import { useRouteData } from "react-static"
import {
    BrandedSubHeading,
    Section,
    FlexContent,
} from "../../components/rebass"
import GreyBlocksWithIcon from '../../components/GreyBlocksWithIcon'

export default () => {
    const {data} = useRouteData()
    return (
        <Section>
            <FlexContent flexDirection='column' alignItems='center' justifyContent='space-around' mb={5}>
                <BrandedSubHeading m={4} fontSize={5}>PORTFOLIO</BrandedSubHeading>
                <GreyBlocksWithIcon data={data.singlePortfolio}/>
            </FlexContent>
        </Section>
    )
}
