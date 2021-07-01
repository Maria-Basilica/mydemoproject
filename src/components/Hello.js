import classes from './Hello.module.css';
import image from '../image1.jpg';
function Hello (){
    return(
        <div >
            <hr className={classes.myhr}></hr>
            <h1 className={classes.myh1}>Hello World!!!!!</h1>
            <img src={image} className={classes.myimg}/>
        </div>
    )
}

export default Hello;