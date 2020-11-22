import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import Container from '@material-ui/core/container';
import Grid from '@material-ui/core/grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import MicButton from './mic';


const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
    url('https://images.unsplash.com/photo-1602525664253-c68233a93fb9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  }
}));

function App() {
  const classes = useStyles();  

  return (
    <div className="App">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="primary">
            Memories
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
        <Box>Cathy Wang's Memory</Box>
      </Box>
      {/* <Container maxWidth="lg" className={classes.blogsContainer}> */}
      <Typography variant="h4" className={classes.blogTitle}>
          Tweets
      </Typography>
      <MicButton />
      <br />
      <br />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://images.unsplash.com/photo-1604060361232-0213c2ad2eaa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Birthday Surprise
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Today is my birthday, I am super happy that my children and grandchildren come back home to celebrate with me. 
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>                    
                  <Box className={classes.author}>
                    <Typography variant="subtitle2" component="p">
                      13:25 Nov 20, 2020
                    </Typography>
                  </Box>
                  <Box>
                    <BookmarkBorderIcon />
                  </Box>
                </CardActions>
              </Card>
          
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://images.unsplash.com/photo-1570586459874-1e533f0ed995?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Happy Halloween 
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      I curved pumpkins with my grandchildren. So glad to see them grow up happily. I bought a lot of candies for the little trick-or-treaters. 
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>                    
                  <Box className={classes.author}>
                    <Typography variant="subtitle2" component="p">
                      18:25 Oct 30, 2020
                    </Typography>
                  </Box>
                  <Box>
                    <BookmarkBorderIcon />
                  </Box>
                </CardActions>
              </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://images.unsplash.com/photo-1539248519424-b4b8f9a99a4a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Watermelon Sugar
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Today my granddaughter said that she really likes watermelon sugar. I told her that I am not really a fan of sweets.  
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>                    
                  <Box className={classes.author}>
                    <Typography variant="subtitle2" component="p">
                      12:35 May 30, 2020
                    </Typography>
                  </Box>
                  <Box>
                    <BookmarkBorderIcon />
                  </Box>
                </CardActions>
              </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://images.unsplash.com/photo-1553565592-01aa6682bed7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Dinner with Catherine 
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      It's been quite a while since I last visited Catherine. She is still a really great cook. I loved the Parmesan Baked Asparagus she made so I asked for the recipe. 
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>                    
                  <Box className={classes.author}>
                    <Typography variant="subtitle2" component="p">
                      12:35 May 30, 2020
                    </Typography>
                  </Box>
                  <Box>
                    <BookmarkBorderIcon />
                  </Box>
                </CardActions>
              </Card>
        </Grid>
      </Grid>
      {/* </Container> */}
    </div>
  );
}

export default App;
