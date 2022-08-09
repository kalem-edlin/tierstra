import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { TierlistProps } from 'prop-types';
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Tier from './Tier';

const Wrapper = styled(Paper)`
    background-color: transparent;
`

const Tierlist = React.forwardRef((props: TierlistProps, screenshotRef: any) => {

    return (
        <Droppable
            droppableId="tierlist"
            direction="vertical"
            type="tier"
        >
            {provided => (
                <Wrapper
                    elevation={6}
                    ref={provided.innerRef} 
                    {...provided.droppableProps}
                >
                    <div ref={screenshotRef}>
                        {props.data.tierOrder && props.data.tierOrder.map((tierId: string, index: number) => {
                            const tier = props.data.tiers[tierId]
                            return <Tier
                                key={tier.id}
                                {...props}
                                tier={tier}
                                index={index} />
                        })}
                        {provided.placeholder}
                    </div>
                </Wrapper>
            )}
        </Droppable>
    )
})

export default Tierlist

