// REACT
import React from 'react'
// REDUX
import {useSelector} from 'react-redux'
// SELECTORS
import {getWordsPerMinute, getCharactersPerMinute} from '../../store/reducers/typing'
// STYLES
import styled from 'styled-components'
import colors from '../../lib/colors'

export default () => {
    const wordsPerMinute = useSelector(getWordsPerMinute)
    const charactersPerMinute = useSelector(getCharactersPerMinute)

    return (
        <StatsWrapper>
            <StatsItem>
                <StatsItemValue>{wordsPerMinute}</StatsItemValue>
                <StatsItemLabel>WPM</StatsItemLabel>
            </StatsItem>
            <StatsItem>
                <StatsItemValue>{charactersPerMinute}</StatsItemValue>
                <StatsItemLabel>CPM</StatsItemLabel>
            </StatsItem>
            {/*<StatsItem>*/}
            {/*    <StatsItemValue>SOON</StatsItemValue>*/}
            {/*    <StatsItemLabel>ACC</StatsItemLabel>*/}
            {/*</StatsItem>*/}
        </StatsWrapper>
    )
}

const StatsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 0 auto;
  padding: 32px 0;
  border-radius: 4px;
  background: ${colors.accent};
  
  @media (min-width: 768px) {
    width: 60%;
  }
  
  @media (min-width: 1024px) {
    width: 50%;
  }
`

const StatsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StatsItemValue = styled.p`
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  color: ${colors.background};
  
  @media(min-width: 375px) {
    font-size: 2.4rem;
  }
`

const StatsItemLabel = styled(StatsItemValue)`
  margin: 8px 0 0;
  font-size: 1rem;
  font-weight: 400;
  opacity: 0.75;
  
  @media(min-width: 375px) {
    font-size: 1rem;
  }
`
