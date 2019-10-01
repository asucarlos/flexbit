import styled, {keyframes} from 'styled-components'

const scale = keyframes`

  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }

`

export const Wrapper = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: rgba(140, 140, 140, 0.1);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 3;
	font-family: 'Montserrat', sans-serif;
`

export const Container = styled.div`
	border-radius: 3px;
	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
	max-width: 480px;
	animation: ${scale} 0.3s both ease-in;
`