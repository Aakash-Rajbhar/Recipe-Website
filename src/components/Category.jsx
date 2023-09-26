import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {FaBowlRice} from 'react-icons/fa6';


function Category() {
  return (
    <List className='list'>
      <SLink className="icon" to={'/cuisine/Indian'}>
        <FaBowlRice/>
        <h4 className='title'>Indian</h4>
      </SLink>
      <SLink className="icon" to={'/cuisine/Italian'}>
        <FaPizzaSlice/>
        <h4 className='title'>Italian</h4>
      </SLink>
      <SLink className="icon" to={'/cuisine/American'}>
        <FaHamburger/>
        <h4 className='title'>American</h4>
      </SLink>
      <SLink className="icon" to={'/cuisine/Thai'}>
        <GiNoodles/>
        <h4 className='title'>Thai</h4>
      </SLink>
      <SLink className="icon" to={'/cuisine/Japanese'}>
        <GiChopsticks/>
        <h4 className='title'>Japanese</h4>
      </SLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;

`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%; 
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  transform: scale(0.8);

  h4{
    color: white;
    font-size: 0.8rem;
  }
  svg{
    color: white;
    font-size: 1.5rem;
  }
  &.active{
    background: linear-gradient(to right, #f27121, #e94057);

    svg{
      color: white;
    }
    h4{
      color: white;
    }
  }

  @media screen and (max-width: 600px){
    margin-right: 0rem;
    width: 4rem;
    height: 4rem;
    padding: 15px;

    h4{
      font-size: 12px;
    }

  }
`;


export default Category
