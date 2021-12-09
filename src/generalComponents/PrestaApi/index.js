import React, { useState, useEffect } from "react";
import "./index.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import DoneIcon from "@material-ui/icons/Done";
/* --- */
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import axios from "axios";
/* --- */
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
/* --- */
import AddchartIcon from "@mui/icons-material/Addchart";
import CelebrationIcon from "@mui/icons-material/Celebration";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import HikingIcon from "@mui/icons-material/Hiking";
import KayakingIcon from "@mui/icons-material/Kayaking";
import FavoriteIcon from "@mui/icons-material/Favorite";

/* --- */
import copy from "copy-to-clipboard";

function createData(groups, labelEn, decathlonIdNum) {
  return { groups, labelEn, decathlonIdNum };
}
const rows = [
  createData("billards,target sports", "carrom", 315),
  createData(
    "sliding sports,snowboarding,winter sports",
    "carving snowboarding, jib snowboarding",
    70
  ),
  createData("kitewing,towed sports", "kitewing", 548),
  createData(
    "pelota,traditional sports games,batt and racket sports",
    "one wall handball, leather paleta, paleta goma, pelota",
    311
  ),
  createData(
    "inline skating,sliding sports,urban sliding sports",
    "inline artistic skating, roller agressive skating, roller speed skating, inline agressive skating, inline freeride skating, inline freestyle skating, inline fitness skating",
    166
  ),
  createData("flying disc,throw and catch sports", "disc golf", 325),
  createData("martial arts sports,arnis", "arnis", 539),
  createData(
    "saltwater fishing,predation sports,fishing sports",
    "cuttlefish squid fishing, jigging fishing",
    333
  ),
  createData(
    "urban dances,dances",
    "commercial hip hop, commercial jazz, street jazz, contemporary dance, flamenco, modern dance, ballet, break dance",
    100
  ),
  createData(
    "snowboarding,sliding sports,winter sports",
    "split snowboarding",
    70
  ),
  createData("traditional sports games,tambourello", "tambourello", 525),
  createData("martial arts sports,kempo", "kempo", 524),
  createData("sports with animals,horse riding", "mounted games", 286),
  createData(
    "gymnastics,artistic and gymnastic sports",
    "soft gym, team gym, baby gymnastics, parkour",
    428
  ),
  createData(
    "target sports,kubb, traditional sports games,palet game",
    "kubb, vendean palets",
    182
  ),
  createData("paddling sports,rowing", "rowing", 538),
  createData("towed sports,water skiing", "water skiing", 328),
  createData("towed sports,wakeboard", "wakeboard", 329),
  createData("towed sports,towed buoy", "towed buoy", 330),
  createData(
    "towed sports,snowkite,winter sports, power kite, land kiteboarding",
    "snowkite, power kite, land kiteboarding",
    473
  ),
  createData(
    "towed sports,kitesurf",
    "wave kiteboarding, kiteboard racing, freestyle kiteboarding, freeride kiteboarding",
    324
  ),
  createData("towed sports,kite flying", "static kite, stunt kite", 325),
  createData(
    "underwater sports,underwater diving",
    "snorkeling, scuba diving, spearfishing, free diving",
    186
  ),
  createData(
    "predation sports,saltwater fishing,fishing sports",
    "surfcasting, shore fishing, sea  lures fishing, sea float fishing, boat bottom fishing, shellfish collecting, trolling fishing, handle fishing",
    333
  ),
  createData(
    "predation sports,predator fishing,fishing sports",
    "catfish fishing, trout fishing in lakes, trout fishing with natural baits in rivers, bombarda fishing, crayfish traps, trout lure fishing, zander lure fishing, perch lure fishing, predators lure fishing, pike lure fishing, black bass lure fishing, dead minnow fishing, ledgering fishing, dead bait fishing, fly fishing",
    332
  ),
  createData(
    "predation sports,pole fishing,fishing sports",
    "carp coarse fishing, quiver/feeder fishing, fishing with telescopic rod, fishing with pull appart rod, chinese pole fishing, bolognese fishing, match fishing",
    334
  ),
  createData(
    "predation sports,hunting,hunting & shooting sports",
    "wildlife watching, small game hunting, migratory game hunting, big game driven hunting beater, big game driven hunting shooter, waterfowl hunting, bowhunting, stalk hunting, bushcraft",
    29
  ),
  createData(
    "predation sports,carp fishing,fishing sports",
    "carp fishing",
    459
  ),
  createData(
    "outdoor and nature sports,trekking",
    "backpacking, tropical trekking, mountain trekking, desert trekking, arctic trekking",
    443
  ),
  createData("outdoor and nature sports,orienteering", "orienteering", 490),
  createData("athletic sports,walking", "nordic walking", 488),
  createData(
    "outdoor and nature sports,mountaineering",
    "glacier hiking, high altitude expedition, ice climbing, rock mountaineering",
    45
  ),
  createData(
    "outdoor and nature sports,hiking",
    "fast hiking, snow hiking, nature hiking, mountain hiking",
    458
  ),
  createData(
    "outdoor and nature sports,climbing",
    "via ferrata, indoor climbing, multi - pitch climbing, outdoor climbing, bouldering",
    37
  ),
  createData("outdoor and nature sports,caving", "caving", 49),
  createData("outdoor and nature sports,canyoning", "canyoning", 51),
  createData("sports combined events,swimrun", "swimrun", 224),
  createData("sports combined events,triathlon", "triathlon", 449),
  createData(
    "fitness,cardio training",
    "step, lia, cardio training, body attack, indoor cycling",
    109
  ),
  createData(
    "sailing sports,windsurfing",
    "windsurf wave, windsurf slalom, windsurf freestyle, windsurf free ride",
    323
  ),
  createData("sailing sports,sailing", "regatta, yacht sailing", 317),
  createData("sailing sports,sailing", "dinghy catamaran sailing", 316),
  createData(
    "board sports,skateboarding,urban sliding sports",
    "waveboard, longboard, cruiser",
    171
  ),
  createData(
    "shooting sports ,shooting,hunting & shooting sports",
    "air rifles sport shooting, 22 long rifle sport shooting, clay pigeon shooting",
    392
  ),
  createData("fitness,yoga", "yoga", 292),
  createData(
    "fitness,soft training",
    "toning, swedish gymnastics, stretching, pilates",
    428
  ),
  createData(
    "board sports,scooter,urban sliding sports",
    "freestyle scooter, scooter",
    163
  ),
  createData(
    "paddling sports,stand up paddle",
    "wave stand up paddle, touring stand up paddle, race stand up paddle",
    319
  ),
  createData("paddling sports,dragon boat", "dragon boat", 513),
  createData(
    "paddling sports,canoeing kayaking",
    "wave kayaking, touring kayaking, race kayaking",
    318
  ),
  createData("sliding sports,surfing,water sports", "surfing", 322),
  createData("sliding sports,surfing,water sports", "skimboard", 320),
  createData("sliding sports,surfing,water sports", "bodysurf", 471),
  createData("sliding sports,surfing,water sports", "bodyboard", 321),
  createData("sliding sports,sledding,winter sports", "sledding", 253),
  createData(
    "sliding sports,skiing,winter sports",
    "freestyle skiing, freeride skiing, alpine skiing, resort touring, mountain touring, fast touring",
    66
  ),
  createData(
    "sliding sports,nordic skiing,winter sports",
    "cross country skating, cross country skiing, cross country roller skiing",
    156
  ),
  createData(
    "sliding sports,inline skating,urban sliding sports",
    "inline speed skating, roller freeride, roller fitness skating, roller derby, roller artistic skating",
    166
  ),
  createData("ice sports,ice skating", "figure skating, ice skating", 160),
  createData("cross training,strength athletics", "cross training", 425),
  createData(
    "strength training,strength athletics",
    "bodybuilding, bodybuilding",
    291
  ),
  createData(
    "cycling sports,urban cycling",
    "urban speed cycling, urban cycling, intermodal cycling",
    283
  ),
  createData(
    "cycling sports,road cycling",
    "gravel cycling, bicycle touring, road racing",
    282
  ),
  createData(
    "cycling sports,mountain bikes",
    "sport trail mtb, cross country mtb, all mountain mtb",
    285
  ),
  createData("cycling sports,hybrid bikes", "touring bikes, hybrid bikes", 284),
  createData("cycling sports,bmx", "bmx freestyle", 281),
  createData("stick and club sports,lacrosse,team sports", "lacrosse", 289),
  createData(
    "stick and club sports,inline hockey,team sports",
    "street hockey, rink hockey, ball hockey, inline hockey",
    404
  ),
  createData(
    "stick and club sports,ice hockey,team sports",
    "bandy, ice hockey",
    175
  ),
  createData("stick and club sports,golf", "golf", 178),
  createData(
    "stick and club sports,floorball,team sports",
    "floorball, field hockey",
    98
  ),
  createData("fight sports,wrestling", "wrestling", 303),
  createData("fight sports,self defense", "self defense", 501),
  createData("fight sports,fencing", "fencing", 304),
  createData(
    "fight sports,boxing",
    "muay thai, kick boxing, full contact, cardio boxing, savate, boxing",
    127
  ),
  createData("fight sports,aikido,martial arts sports", "aikido", 294),
  createData("target sports,petanque", "petanque, finish skittles", 182),
  createData("flying disc,throw and catch sports", "flying disc", 327),
  createData("target sports,darts", "soft tip darts, steel tip darts", 184),
  createData("boomerang,throw and catch sports", "boomerang", 326),
  createData(
    "target sports,billards",
    "snooker, english pool, carom billiards, american pool",
    315
  ),
  createData("target sports,archery", "archery", 180),
  createData("batt and racket sports,beach tennis", "beach tennis", 305),
  createData("batt and racket sports,tennis", "tennis", 134),
  createData("batt and racket sports,pickleball", "pickleball", 466),
  createData("batt and racket sports,table tennis", "table tennis", 139),
  createData("batt and racket sports,squash", "squash", 141),
  createData("batt and racket sports,speedball", "speedball", 307),
  createData("batt and racket sports,softball", "softball", 74),
  createData("batt and racket sports,racquetball", "racquetball", 312),
  createData("batt and racket sports,padel", "padel", 143),
  createData("batt and racket sports,frescoball", "frescoball", 310),
  createData("batt and racket sports,crossminton", "crossminton", 308),
  createData("batt and racket sports,cricket", "cricket", 76),
  createData("batt and racket sports,base ball", "baseball", 74),
  createData("batt and racket sports,badminton", "badminton", 132),
  createData("sports with animals,western riding", "western riding", 288),
  createData(
    "sports with animals,horse riding",
    "horse riding, showjumping, horseball, ethology, dressage horse riding, eventing horse riding",
    286
  ),
  createData(
    "sports with animals,horse riding",
    "trail riding, endurance riding, outdoor riding",
    287
  ),
  createData("athletic sports,running", "trail", 280),
  createData("athletic sports,running", "road running", 461),
  createData("athletic sports,running", "jogging", 389),
  createData("athletic sports,walking", "sport walking", 395),
  createData(
    "athletic sports,race walking",
    "distance race walking, speed race walking",
    487
  ),
  createData("athletic sports,athletics", "athletics", 12),
  createData("martial arts sports,taï chi chuan", "taï chi chuan", 296),
  createData("martial arts sports,taekwondo", "taekwondo", 300),
  createData("martial arts sports,sambo", "sambo", 299),
  createData("martial arts sports,kung fu", "kung fu", 297),
  createData("martial arts sports,kendo", "kendo", 295),
  createData("martial arts sports,karate", "karate", 301),
  createData("martial arts sports,judo", "judo", 302),
  createData("martial arts sports,jiu-jitsu", "jiu-jitsu", 293),
  createData("martial arts sports,grappling", "grappling", 499),
  createData("martial arts sports,capoeira", "capoeira", 298),
  createData("slacklining,artistic and gymnastic sports", "slacklining", 409),
  createData(
    "gymnastics,artistic and gymnastic sports",
    "trampolining, voluntary gymnastics",
    428
  ),
  createData(
    "gymnastics,artistic and gymnastic sports",
    "rhythmic gymnastics, artistic gymnastics",
    104
  ),
  createData(
    "gymnastics,artistic and gymnastic sports",
    "educational and sports gymnastics",
    428
  ),
  createData("water sports,water polo", "water polo", 405),
  createData(
    "water sports,swimming",
    "lifesaving, diving, artistic synchronised swimming, swimming, open water swimming, aqua learning",
    224
  ),
  createData(
    "water sports,aqua aerobics",
    "aquafitness, aquacycling, aqua cross training",
    219
  ),
  createData(
    "ball sports,volleyball,team sports",
    "beach volleyball, volleyball",
    93
  ),
  createData("flying disc,throw and catch sports", "ultimate", 325),
  createData("ball sports,sepak takraw,team sports", "sepak takraw", 512),
  createData(
    "ball sports,rugby,team sports",
    "touch rugby, rugby 7s, rugby 15s, rugby league, beach rugby",
    89
  ),
  createData("ball sports,netball,team sports", "netball", 290),
  createData("ball sports,handball,team sports", "handball", 96),
  createData(
    "ball sports,football,team sports",
    "futsal, 11 a side football, 5 a side football, beach soccer",
    81
  ),
  createData("ball sports,basketball,team sports", "basketball", 78),
  createData(
    "ball sports,american football,team sports",
    "american football, flag football",
    87
  ),
  createData("traditional sports games,peteca", "peteca", 551),
  createData("traditional sports games,palet game", "breton palets", 182),
  createData(
    "traditional sports games,pelota,batt and racket sports",
    "jokari, xare, rebot, bare handed pelota, pasaka, chistera",
    311
  ),
  createData(
    "traditional sports games,pelota,batt and racket sports",
    "hard rubber ball pelota",
    309
  ),
  createData(
    "traditional sports games,pelota,batt and racket sports",
    "frontenis",
    306
  ),
];

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxWidth: "90%",
    maxHeight: "75%",
    overflowY: "auto",
    textAlign: "left",
  },
}));

export default function PrestaApi(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //  get input states and on change func

  /* START PRESTA API STATES */
  const [country, setCountry] = useState("austria");
  const [otherCountryName, setOtherCountryName] = useState("");
  const [otherCountryApiKey, setOtherCountryApiKey] = useState("");
  const [activeApi, setActiveApi] = useState("none");
  const [activeApiDescription, setActiveApiDescription] = useState("");
  const [apiDataResultsSuggestedProducts, setApiDataResultsSuggestedProducts] =
    useState([]);
  const [
    apiDataResultsEcoDesignSuggestedProducts,
    setApiDataResultsEcoDesignSuggestedProducts,
  ] = useState([]);
  const [apiDataResultsSuggestedSprts, setApiDataResultsSuggestedSprts] =
    useState([]);
  const [
    apiDataResultsMostPopularProducts,
    setApiDataResultsMostPopularProducts,
  ] = useState([]);
  const [
    apiDataResultsMostPopularProductsSpecificSport,
    setApiDataResultsMostPopularProductsSpecificSport,
  ] = useState([]);
  const [mostPopularProductsSportId, setMostPopularProductsSportId] =
    useState("");
  const [mostPopularProductsLimit, setMostPopularProductsLimit] = useState("");
  const [toggleSportIdsList, setToggleSportIdsList] = useState(false);

  const setApiKeyFunc = () => {
    if (country === "austria") {
      setOtherCountryApiKey("b9d1001f-0cc4-4f00-acf7-e5d68377b570");
      setOtherCountryName("austria");
    } else {
      setOtherCountryApiKey("");
      setOtherCountryName("");
    }
  };
  useEffect(() => {
    setApiKeyFunc();
  }, [country]);

  const suggestedProductsFunc = () => {
    setActiveApi("suggested-products");
    setActiveApiDescription(
      "The suggested products endpoint provides you with the most popular products (at the country level) with consideration of stock availability and product diversity. A typical use case is the presentation of popular products on the homepage of your Website, or sending a “product of the week” publication on Decathlon app. Results are updated every 24h."
    );
    // setApiDataResultsSuggestedProducts(dataExa);
    const callApi = axios
      .get(
        `https://recommendation-api.decathlon.com/v1/${otherCountryName}/suggested-products/`,
        {
          headers: {
            Authorization: otherCountryApiKey,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setApiDataResultsSuggestedProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        alert("something went wrong");
      });
  };

  const ecoDesignSuggestedProductsFunc = () => {
    setActiveApi("suggested-eco-designed-products");
    setActiveApiDescription(
      "The most relevant eco-designed products of the day"
    );
    const callApi = axios
      .get(
        `https://recommendation-api.decathlon.com/v1/${otherCountryName}/suggested-products/?eco_designed=true`,
        {
          headers: {
            Authorization: otherCountryApiKey,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setApiDataResultsEcoDesignSuggestedProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        alert("something went wrong");
      });
  };

  const suggestedSportsFunc = () => {
    setActiveApi("suggested-sports");
    setActiveApiDescription(
      "The suggested sports endpoint provides you with the most popular sports, and can be provided at the country or at store level. Sport popularity is estimated based on the number of interactions between a user and a product belonging to that sport over the last 2 weeks. A typical use case is the presentation of popular sports on the homepage of your Website. Results are updated every 24h."
    );
    const callApi = axios
      .get(
        `https://recommendation-api.decathlon.com/v1/${otherCountryName}/suggested-sports/`,
        {
          headers: {
            Authorization: otherCountryApiKey,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setApiDataResultsSuggestedSprts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        alert("something went wrong");
      });
  };

  const mostPopularProductsFunc = () => {
    setActiveApi("most-popular-products");
    setActiveApiDescription(
      "The most popular products endpoint provides you with the most popular products for every sport, computed at the country level. A typical use case is the presentation of popular products below a sport banner or at the top of a sport page. Results are based on the turnover observed over the last week and are updated every 24h."
    );
    const callApi = axios
      .get(
        `https://recommendation-api.decathlon.com/v1/${otherCountryName}/most-popular-products/`,
        {
          headers: {
            Authorization: otherCountryApiKey,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setApiDataResultsMostPopularProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        alert("something went wrong");
      });
  };

  const mostPopularProductsSpecificSportFunc = () => {
    setActiveApi("most-popular-products-specific-sport");
    setActiveApiDescription(
      "The most popular products endpoint provides you with the most popular products for every sport, computed at the country level. A typical use case is the presentation of popular products below a sport banner or at the top of a sport page. Results are based on the turnover observed over the last week and are updated every 24h."
    );
    const callApi = axios
      .get(
        `https://recommendation-api.decathlon.com/v1/${otherCountryName}/most-popular-products/?sport-id=${mostPopularProductsSportId}&limit=${mostPopularProductsLimit}`,
        {
          headers: {
            Authorization: otherCountryApiKey,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setApiDataResultsMostPopularProductsSpecificSport(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        alert("something went wrong");
      });
  };

  /* END PRESTA API STATES */

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <img src={props.imgUrl} className="popupImg" />
            <h2 id="transition-modal-title">{props.title}</h2>
            <p id="transition-modal-description">{props.text}</p>
            <div className="popupInputsContainer">
              <div className="popupInputsContainer__wrapper">
                <p className="popupInputsContainer__titleOfInputsGroup">
                  please choose a country
                </p>
                <FormControl component="fieldset">
                  <FormLabel component="legend"></FormLabel>

                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <FormControlLabel
                      value="austria"
                      control={<Radio />}
                      label="Austria"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
                <div>
                  {country === "other" ? (
                    <div>
                      <TextField
                        id="standard-basic"
                        label="country name"
                        style={{ width: "80%" }}
                        value={otherCountryName}
                        onChange={(e) =>
                          setOtherCountryName(
                            e.target.value.toLocaleLowerCase()
                          )
                        }
                      />
                      <TextField
                        id="standard-basic"
                        label="country api key"
                        style={{ width: "80%" }}
                        value={otherCountryApiKey}
                        onChange={(e) => setOtherCountryApiKey(e.target.value)}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="popupInputsContainer__wrapper presta-api-options-menu">
                <Paper sx={{ width: 490 }}>
                  <MenuList>
                    <MenuItem onClick={suggestedProductsFunc}>
                      <ListItemIcon>
                        <AddchartIcon fontSize="small" />
                      </ListItemIcon>
                      <Typography variant="inherit">
                        Suggested products
                      </Typography>
                    </MenuItem>

                    <MenuItem onClick={ecoDesignSuggestedProductsFunc}>
                      <ListItemIcon>
                        <EmojiNatureIcon fontSize="small" />
                      </ListItemIcon>
                      <Typography variant="inherit">
                        Suggested eco-designed products
                      </Typography>
                    </MenuItem>

                    <MenuItem onClick={suggestedSportsFunc}>
                      <ListItemIcon>
                        <HikingIcon fontSize="small" />
                      </ListItemIcon>
                      <Typography variant="inherit">
                        Suggested sports
                      </Typography>
                    </MenuItem>

                    <MenuItem onClick={mostPopularProductsFunc}>
                      <ListItemIcon>
                        <CelebrationIcon fontSize="small" />
                      </ListItemIcon>
                      <Typography variant="inherit">
                        Most popular products
                      </Typography>
                    </MenuItem>

                    <MenuItem
                      onClick={() =>
                        setActiveApi("most-popular-products-specific-sport")
                      }
                    >
                      <ListItemIcon>
                        <FavoriteIcon fontSize="small" />
                      </ListItemIcon>
                      <Typography variant="inherit">
                        Most popular products for a specific sport
                      </Typography>
                    </MenuItem>
                  </MenuList>
                </Paper>
              </div>

              <div
                className="popupInputsContainer__sectionWrapper"
                style={{ borderBottom: "none" }}
              >
                {activeApi === "suggested-products" ? (
                  <div>
                    <span
                      style={{
                        marginBottom: "2px",
                        display: "block",
                        fontWeight: "bold",
                        fontSize: "26px",
                      }}
                    >
                      Suggested products
                    </span>
                    <p style={{ maxWidth: "90%", marginBottom: "12px" }}>
                      {activeApiDescription}
                    </p>
                    <span style={{ marginBottom: "5px", display: "block" }}>
                      Results:{" "}
                      {apiDataResultsSuggestedProducts &&
                        apiDataResultsSuggestedProducts.length}
                    </span>
                    {apiDataResultsSuggestedProducts.length > 0 &&
                      apiDataResultsSuggestedProducts.map((e, index) => (
                        <div
                          style={{
                            padding: "10px",
                            marginBottom: "6px",
                            border: "1px solid #eee",
                            color: "black",
                            fontWeight: "bold",
                          }}
                        >
                          <p style={{ color: "lightgray" }}>{index + 1}</p>
                          <p>mdl_num: {e.mdl_num}</p>
                          <p>cnt_margin: {e.cnt_margin}</p>
                          <p>cnt_qty: {e.cnt_qty}</p>
                          <p>cnt_turnover: {e.cnt_turnover}</p>
                          <p>number_clicks: {e.number_clicks}</p>
                          <p>product_nature_id: {e.product_nature_id}</p>
                          <p>qty_available_bu: {e.qty_available_bu}</p>
                          <p>qty_available_wh: {e.qty_available_wh}</p>
                          <p>sportgroup_id: {e.sportgroup_id}</p>
                        </div>
                      ))}
                  </div>
                ) : activeApi === "suggested-eco-designed-products" ? (
                  <div>
                    <span
                      style={{
                        marginBottom: "2px",
                        display: "block",
                        fontWeight: "bold",
                        fontSize: "26px",
                      }}
                    >
                      Suggested eco-designed products
                    </span>
                    <p style={{ maxWidth: "90%", marginBottom: "12px" }}>
                      {activeApiDescription}
                    </p>
                    <span style={{ marginBottom: "5px", display: "block" }}>
                      Results: {apiDataResultsEcoDesignSuggestedProducts.length}
                    </span>
                    {apiDataResultsEcoDesignSuggestedProducts.length > 0 &&
                      apiDataResultsEcoDesignSuggestedProducts.map(
                        (e, index) => (
                          <div
                            style={{
                              padding: "10px",
                              marginBottom: "6px",
                              border: "1px solid #eee",
                              color: "black",
                              fontWeight: "bold",
                            }}
                          >
                            <p style={{ color: "lightgray" }}>{index + 1}</p>
                            <p>mdl_num: {e.mdl_num}</p>
                            <p>cnt_margin: {e.cnt_margin}</p>
                            <p>cnt_qty: {e.cnt_qty}</p>
                            <p>cnt_turnover: {e.cnt_turnover}</p>
                            <p>number_clicks: {e.number_clicks}</p>
                            <p>product_nature_id: {e.product_nature_id}</p>
                            <p>qty_available_bu: {e.qty_available_bu}</p>
                            <p>qty_available_wh: {e.qty_available_wh}</p>
                            <p>sportgroup_id: {e.sportgroup_id}</p>
                          </div>
                        )
                      )}
                  </div>
                ) : activeApi === "suggested-sports" ? (
                  <div>
                    <span
                      style={{
                        marginBottom: "2px",
                        display: "block",
                        fontWeight: "bold",
                        fontSize: "26px",
                      }}
                    >
                      Suggested sports
                    </span>
                    <p style={{ maxWidth: "90%", marginBottom: "12px" }}>
                      {activeApiDescription}
                    </p>
                    <span style={{ marginBottom: "5px", display: "block" }}>
                      Results: {apiDataResultsSuggestedSprts.length}
                    </span>
                    {apiDataResultsSuggestedSprts.length > 0 &&
                      apiDataResultsSuggestedSprts.map((e, index) => (
                        <div
                          style={{
                            padding: "10px",
                            marginBottom: "6px",
                            border: "1px solid #eee",
                            color: "black",
                            fontWeight: "bold",
                          }}
                        >
                          <p style={{ color: "lightgray" }}>{index + 1}</p>
                          <img src={e.image_url} style={{ width: "100px" }} />
                          <p>sport name: {e.page_en}</p>
                          <p>decathlon sport id: {e.decathlon_id}</p>
                          <p>sumsports_clicks: {e.sumsports_clicks}</p>
                        </div>
                      ))}
                  </div>
                ) : activeApi === "most-popular-products" ? (
                  <div>
                    <span
                      style={{
                        marginBottom: "2px",
                        display: "block",
                        fontWeight: "bold",
                        fontSize: "26px",
                      }}
                    >
                      Most popular products
                    </span>
                    <p style={{ maxWidth: "90%", marginBottom: "12px" }}>
                      {activeApiDescription}
                    </p>
                    <span style={{ marginBottom: "5px", display: "block" }}>
                      Results: {apiDataResultsMostPopularProducts.length}
                    </span>
                    {apiDataResultsMostPopularProducts.length > 0 &&
                      apiDataResultsMostPopularProducts.map((e, index) => (
                        <div
                          style={{
                            padding: "10px",
                            marginBottom: "6px",
                            border: "1px solid #eee",
                            color: "black",
                            fontWeight: "bold",
                          }}
                        >
                          <p style={{ color: "lightgray" }}>{index + 1}</p>
                          <p>mdl_num: {e.mdl_num}</p>
                          <p>cnt_margin: {e.cnt_margin}</p>
                          <p>cnt_qty: {e.cnt_qty}</p>
                          <p>cnt_turnover: {e.cnt_turnover}</p>
                          <p>number_clicks: {e.number_clicks}</p>
                          <p>product_nature_id: {e.product_nature_id}</p>
                          <p>qty_available_bu: {e.qty_available_bu}</p>
                          <p>qty_available_wh: {e.qty_available_wh}</p>
                          <p>sportgroup_id: {e.sportgroup_id}</p>
                        </div>
                      ))}
                  </div>
                ) : activeApi === "most-popular-products-specific-sport" ? (
                  <div>
                    <span
                      style={{
                        marginBottom: "2px",
                        display: "block",
                        fontWeight: "bold",
                        fontSize: "26px",
                      }}
                    >
                      Most popular products for a specific sport
                    </span>
                    <p style={{ maxWidth: "90%", marginBottom: "12px" }}>
                      {activeApiDescription}
                    </p>
                    <p
                      style={{
                        color: "#0082C3",
                        textDecoration: "underline",
                        cursor: "pointer",
                        display: "inline-block",
                        margin: "20px 0",
                      }}
                      onClick={() => setToggleSportIdsList(!toggleSportIdsList)}
                    >
                      {toggleSportIdsList ? (
                        <span>Hide</span>
                      ) : (
                        <span>View list of sport ID numbers</span>
                      )}
                    </p>
                    {toggleSportIdsList && (
                      <div
                        style={{
                          margin: "12px 0 36px 0",
                          maxHeight: "380px",
                          overflow: "auto",
                          border: "1px solid #eee",
                        }}
                      >
                        <TableContainer component={Paper}>
                          <Table
                            sx={{ minWidth: 650 }}
                            aria-label="simple table"
                          >
                            <TableHead>
                              <TableRow>
                                <TableCell>Sport groups</TableCell>
                                <TableCell align="left">Label_en</TableCell>
                                <TableCell align="left">
                                  Decathlon id number
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rows.map((row) => (
                                <TableRow
                                  key={row.name}
                                  sx={{
                                    "&:last-child td, &:last-child th": {
                                      border: 0,
                                    },
                                  }}
                                >
                                  <TableCell component="th" scope="row">
                                    {row.groups}
                                  </TableCell>
                                  <TableCell
                                    align="left"
                                    style={{ color: "lightgray" }}
                                  >
                                    {row.labelEn}
                                  </TableCell>
                                  <TableCell align="left">
                                    <span
                                      style={{
                                        background: "#FFEA28",
                                        width: "50px",
                                        display: "inline-block",
                                        textAlign: "center",
                                      }}
                                    >
                                      {row.decathlonIdNum}
                                    </span>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </div>
                    )}

                    <div>
                      <TextField
                        id="standard-basic"
                        label="sport id"
                        type="number"
                        style={{ width: "80%" }}
                        value={mostPopularProductsSportId}
                        onChange={(e) =>
                          setMostPopularProductsSportId(e.target.value)
                        }
                      />
                      <TextField
                        id="standard-basic"
                        type="number"
                        label="products limit (number )"
                        style={{ width: "80%" }}
                        value={mostPopularProductsLimit}
                        onChange={(e) =>
                          setMostPopularProductsLimit(e.target.value)
                        }
                      />
                      <button
                        style={{
                          padding: "3px 6px",
                          display: "block",
                          cursor: "pointer",
                          margin: "8px 0 20px 0",
                        }}
                        onClick={mostPopularProductsSpecificSportFunc}
                      >
                        PULL DATA
                      </button>
                    </div>
                    {apiDataResultsMostPopularProductsSpecificSport.length >
                      0 && (
                      <div>
                        <span style={{ marginBottom: "5px", display: "block" }}>
                          Results:{" "}
                          {
                            apiDataResultsMostPopularProductsSpecificSport.length
                          }
                        </span>
                        {apiDataResultsMostPopularProductsSpecificSport.length >
                          0 &&
                          apiDataResultsMostPopularProductsSpecificSport.map(
                            (e, index) => (
                              <div
                                style={{
                                  padding: "10px",
                                  marginBottom: "6px",
                                  border: "1px solid #eee",
                                  color: "black",
                                  fontWeight: "bold",
                                }}
                              >
                                <p style={{ color: "lightgray" }}>
                                  {index + 1}
                                </p>
                                <p>mdl_num: {e.mdl_num}</p>
                                <p>cnt_margin: {e.cnt_margin}</p>
                                <p>cnt_qty: {e.cnt_qty}</p>
                                <p>cnt_turnover: {e.cnt_turnover}</p>
                                <p>number_clicks: {e.number_clicks}</p>
                                <p>product_nature_id: {e.product_nature_id}</p>
                                <p>qty_available_bu: {e.qty_available_bu}</p>
                                <p>qty_available_wh: {e.qty_available_wh}</p>
                                <p>sportgroup_id: {e.sportgroup_id}</p>
                              </div>
                            )
                          )}
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
