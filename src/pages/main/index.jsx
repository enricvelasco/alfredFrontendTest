import { useNavigate } from 'react-router-dom';
import ListContainer from "../../common/components/listContainer";
import Card from "../../common/components/card";

const Main = () => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    const path = `/${id}`;
    navigate(path)
  }

  return (
      <div>
        <ListContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ListContainer>
      </div>
  )
}

export default Main;
