import classes from './Homepage.module.css'
import { useNavigate } from 'react-router-dom'
import cl from '../UI/Pub.module.css'
import CaverButton from '../UI/Buttons/CaverButton'
import IconButtonHome from '../UI/Buttons/IconButtonHome'
const FrontPage = () => {
    const navigate = useNavigate();
  const imgUrl = "https://sun9-65.userapi.com/impg/2Lja6JtCEPXMAfmmWVXb4c5RUA0FGJoKVwWDQw/ndHjJDmr3lY.jpg?size=852x802&quality=96&sign=05ab4a84a7f79a9ec9359e226d1fe3d4&type=album"
  const imgAlt = "Каверы Подземки"
  return (
  
    <div className={cl.tribute_app}>
      <div className={classes.content}>
        <IconButtonHome onClick={() => navigate("/")}>Главная</IconButtonHome>
        <CaverButton onClick={() => navigate("/cavers")}>Каверы</CaverButton>
        {/* <PlayButton  onClick={() => navigate("/playlist")}></PlayButton> */}
        {/* <div className={classes.front_header}>
                    <p>Letov-56</p>
                </div> */}
                <div className={classes.front_media}>
                  {/* <Img imgUrl = {imgUrl} imgAlt={imgAlt}/> */}
                    <img src={imgUrl} width={80} alt="Каверы Подземки" />
                </div>
                <div className={classes.front_body}>
                    <span>Трибьют, посвященный музыкантам, родившимся в январе </span>
                </div>
      </div>
    </div>
  )
}
  export default FrontPage