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

import copy from "copy-to-clipboard";

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
        `https://recommendation-api.decathlon.com/v1/${otherCountryName}/suggested-products`,
        {
          headers: {
            Authorization: otherCountryApiKey,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setApiDataResultsSuggestedProducts(res.data);
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
                  please choose your country
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
                <Paper sx={{ width: 230 }}>
                  <MenuList>
                    <MenuItem onClick={suggestedProductsFunc}>
                      <ListItemIcon>
                        <SendIcon fontSize="small" />
                      </ListItemIcon>
                      <Typography variant="inherit">
                        Suggested products
                      </Typography>
                    </MenuItem>

                    <MenuItem onClick={ecoDesignSuggestedProductsFunc}>
                      <ListItemIcon>
                        <SendIcon fontSize="small" />
                      </ListItemIcon>
                      <Typography variant="inherit">
                        Suggested eco-designed products
                      </Typography>
                    </MenuItem>

                    <MenuItem onClick={suggestedSportsFunc}>
                      <ListItemIcon>
                        <SendIcon fontSize="small" />
                      </ListItemIcon>
                      <Typography variant="inherit">
                        Suggested sports
                      </Typography>
                    </MenuItem>

                    <MenuItem onClick={mostPopularProductsFunc}>
                      <ListItemIcon>
                        <SendIcon fontSize="small" />
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
                        <SendIcon fontSize="small" />
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
                      }}
                    >
                      Suggested products
                    </span>
                    <p style={{ maxWidth: "90%", marginBottom: "12px" }}>
                      {activeApiDescription}
                    </p>
                    <span style={{ marginBottom: "5px", display: "block" }}>
                      count: {apiDataResultsSuggestedProducts.length}
                    </span>
                    {apiDataResultsSuggestedProducts.map((e, index) => (
                      <div
                        style={{
                          padding: "10px",
                          marginBottom: "6px",
                          border: "1px solid #eee",
                          color: "gray",
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
                      }}
                    >
                      Suggested eco-designed products
                    </span>
                    <p style={{ maxWidth: "90%", marginBottom: "12px" }}>
                      {activeApiDescription}
                    </p>
                    <span style={{ marginBottom: "5px", display: "block" }}>
                      count: {apiDataResultsEcoDesignSuggestedProducts.length}
                    </span>
                    {apiDataResultsEcoDesignSuggestedProducts.length > 0 &&
                      apiDataResultsEcoDesignSuggestedProducts.map(
                        (e, index) => (
                          <div
                            style={{
                              padding: "10px",
                              marginBottom: "6px",
                              border: "1px solid #eee",
                              color: "gray",
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
                      }}
                    >
                      Suggested sports
                    </span>
                    <p style={{ maxWidth: "90%", marginBottom: "12px" }}>
                      {activeApiDescription}
                    </p>
                    <span style={{ marginBottom: "5px", display: "block" }}>
                      count: {apiDataResultsSuggestedSprts.length}
                    </span>
                    {apiDataResultsSuggestedSprts.length > 0 &&
                      apiDataResultsSuggestedSprts.map((e, index) => (
                        <div
                          style={{
                            padding: "10px",
                            marginBottom: "6px",
                            border: "1px solid #eee",
                            color: "gray",
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
                      }}
                    >
                      Most popular products
                    </span>
                    <p style={{ maxWidth: "90%", marginBottom: "12px" }}>
                      {activeApiDescription}
                    </p>
                    <span style={{ marginBottom: "5px", display: "block" }}>
                      count: {apiDataResultsMostPopularProducts.length}
                    </span>
                    {apiDataResultsMostPopularProducts.length > 0 &&
                      apiDataResultsMostPopularProducts.map((e, index) => (
                        <div
                          style={{
                            padding: "10px",
                            marginBottom: "6px",
                            border: "1px solid #eee",
                            color: "gray",
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
                          margin: "8px 0 8px 0",
                        }}
                        onClick={mostPopularProductsSpecificSportFunc}
                      >
                        Call API
                      </button>
                    </div>
                    {apiDataResultsMostPopularProductsSpecificSport.length >
                      0 && (
                      <div>
                        <span
                          style={{
                            marginBottom: "2px",
                            display: "block",
                            fontWeight: "bold",
                          }}
                        >
                          Most popular products for the sport:{" "}
                          {mostPopularProductsSportId}
                        </span>
                        <p style={{ maxWidth: "90%", marginBottom: "12px" }}>
                          {activeApiDescription}
                        </p>
                        <span style={{ marginBottom: "5px", display: "block" }}>
                          count:{" "}
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
                                  color: "gray",
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
