import React from 'react';
import {
    Segment,
    Image,
    Header
} from 'semantic-ui-react'
const PokedexHeader = ({author, name}) => {
 return (
     <Segment basic inverted padded='very' vertical>
     <Header as='h1'>this is the header for {name} thing!</Header>
     <Image centered src={'cd.png'} size={'tiny'}/>
     <Header as='h3'>Author: {author}</Header>
     </Segment>
     )
}

export default PokedexHeader