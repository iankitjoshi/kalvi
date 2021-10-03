import './App.scss';
import { AppBar, Box, Toolbar, Typography, Button, Grid, Card, CardContent} from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

function App() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <img src="https://kalvi.tech/static/media/y.d9e61755.png" className="logo-img" />
                    </Typography>
                    <div className="btn-div" >
                        {
                            ['Home','About','Contact'].map(btn => {
                                return <Button className="head-btn">{btn}</Button>
                            })                            
                        }
                    </div>
                </Toolbar>
            </AppBar>
            <div className="container">
                <img src="https://kalvi.tech/static/media/bg.65a80e0c.png" className="intro-img" />
                <div class="centered">
                    <h1>Come, let’s enjoy learning!</h1>
                    <p>We’re preparing our students for the adventure of Life</p>
                    <div>
                        <a className="btn-get-started">Get Started</a>
                        <a href="https://www.youtube.com/c/KalviKids" target="_blank" className="glightbox btn-watch-video"><PlayCircleOutlineIcon width={10} /> <span>Concept Videos</span></a>
                    </div>
                </div>
            </div>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="two-cards" spacing={10} >
                    <Card sx={{ minWidth: 275 }} style={{margin : '30px'}} >
                        <CardContent>
                                <div className="icon-box" >
                                    <div className="icon" >
                                        <img src="https://kalvi.tech/static/media/a.ed7384a1.svg" />
                                    </div>
                                    <h4>Explore</h4>
                                    <p>Fun, affordable suvy science/math clubs!</p>
                                </div>
                         </CardContent>
                    </Card>
                <Card sx={{ minWidth: 275 }} style={{ margin: '30px' }} >
                    <CardContent>
                        <div className="icon-box" >
                            <div className="icon" >
                                <img src="https://kalvi.tech/static/media/discord.1a0c3dc4.svg" style={{width : '69px'}} />
                            </div>
                            <h4>Explore</h4>
                            <p>Fun, affordable suvy science/math clubs!</p>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
            <div className="about-us" >
                <div className="mx-auto">
                    <h1 className="main-heading">About Us</h1>
                    <h3 className="main-hero-para">We know how expensive,  and boring online classes can be. 
                    That's why at Suvy, we offer affordable and immersive online Math, Science, English and Coding classes 
                    for Class 8-10 students, in your preferred  language (Tamil, Hindi, English etc). We make sure students 
                    are actively participating and curious throughout the learning experience. Let us train your child for life’s adventure!
                    <br /><br/><br/>
                    ஆன்லைன் வகுப்புகள் எவ்வளவு விலை உயர்ந்தவை மற்றும் சலிப்பானவை என்பது எங்களுக்குத் தெரியும். அதனால்தான் சுவியில் 8-10 வகுப்பு 
                    மாணவர்களுக்கு மலிவு விலையில் கணிதம், அறிவியல், ஆங்கிலம் மற்றும் குறியீட்டு வகுப்புகளை நாங்கள் உங்களுக்கு விருப்பமான மொழியில் 
                    (தமிழ், ஆங்கிலம் போன்றவை) வழங்குகிறோம். கற்றல் அனுபவம் முழுவதும் மாணவர்கள் சுறுசுறுப்பாக பங்கேற்று ஆர்வமாக இருப்பதை உறுதி 
                    செய்கிறோம். வாழ்க்கையின் சாகசத்திற்காக உங்கள் குழந்தைக்கு பயிற்சி அளிப்போம், வாருங்கள்!</h3>
                    </div>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdgOKkOyIp6H3hoz8R7V3s1Jkw_11PdkYwW3frjW5FS-QdfwA/viewform" className="btn-get-started" target="_blank">Join Classes</a>
                <h1 class="heading">What students and parents say about our live classes</h1>
            </div>
        </Box>
    );
}

export default App;

