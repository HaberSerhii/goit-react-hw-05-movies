import styled from 'styled-components';

export const HeaderStyled = styled('header')({
  position: 'fixed',
  zIndex: '20',
  width: '100%',
  background: '#1f1f1ff1',
  boxShadow: '0 4px 8px 2px #0a0a0a',

  '&>div': {
    display: 'flex',
  },
});
