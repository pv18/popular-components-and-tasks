import styled from 'styled-components';

type FlexWrapperPropsType = {
    width?: string
    height?: string
    direction?: 'row' | 'column'
    justify?: string
    align?: string
    margin?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  margin: ${props => props.margin || '0 auto'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};
`
