import styled from 'styled-components';

type ListItemPropsType = {
    width?: number
}

export const ListItem = styled.div<ListItemPropsType>`
  width: ${props => `${props.width}px` || 'auto'};
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  border: 4px solid darkviolet;
  font-size: 16px;
  font-weight: 500;
  font-family: cursive;
  font-style: italic;
`