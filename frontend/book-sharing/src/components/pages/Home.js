import '../../App.css'
import Hero from '../Hero'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import './Home.css'
  
function Home () {
    return (
        <div className="hero-container">
            <Hero />
        
        <Card  className="card1" style={{width: 400, backgroundColor: 'white'}}>
           <CardContent>
               <Typography variant="h2"
                           gutterBottom>
                   Current Family:
               </Typography>
               <Typography variant="h2">5</Typography>
           </CardContent>
        </Card>

        <Card className="card2"style={{width:400,backgroundColor:'white'}}>
            <CardContent>
                <Typography variant="h2">
                     Available Books:
                </Typography>
                <Typography variant="h2">20</Typography>
            </CardContent>

        </Card>
        </div>
    )
}
export default Home;