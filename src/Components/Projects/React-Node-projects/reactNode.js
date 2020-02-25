import React,{Component} from 'react'
import {Card,CardText,CardTitle,CardActions,CardMenu,Button,IconButton} from 'react-mdl';

class ReactNodeProjects extends Component{
    render(){
        return(
            <div className="projects-grid">
                <Card shadow={5} style={{minWidth:"350" , margin:"auto"}}>
                    <CardTitle style={{color:"black",height:"190px",background:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSni-gNTt5wDuS51XnoungjiMib-Zx7kLyj7WQjv_wwiiFyQGA0&s) center/cover"}}>
                    </CardTitle>
                    <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </CardText>
                    <CardActions border>
                       <a href="https://github.com/Medasele273/face-recongnize" target="_blank" rel="noopener noreferrer"><Button colored>GitHub</Button></a> 
                        <Button colored style={{border:"1px solid grey"}}>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color:"#fff"}}>
                        <IconButton name ="share"/>
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth:"350" , margin:"auto"}}>
                    <CardTitle style={{color:"black",height:"190px",background:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSni-gNTt5wDuS51XnoungjiMib-Zx7kLyj7WQjv_wwiiFyQGA0&s) center/cover"}}>
                    </CardTitle>
                    <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color:"#fff"}}>
                        <IconButton name ="share"/>
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth:"350" , margin:"auto"}}>
                    <CardTitle style={{color:"black",height:"190px",background:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSni-gNTt5wDuS51XnoungjiMib-Zx7kLyj7WQjv_wwiiFyQGA0&s) center/cover"}}>
                    </CardTitle>
                    <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color:"#fff"}}>
                        <IconButton name ="share"/>
                    </CardMenu>
                </Card>

            </div>

        );
    }
}
export default ReactNodeProjects;

