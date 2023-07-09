var $9WItx$reactjsxruntime = require("react/jsx-runtime");
var $9WItx$react = require("react");
var $9WItx$reactdomclient = require("react-dom/client");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}






const $49b61417b640529d$var$IMG = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/132.png";
var $49b61417b640529d$export$2e2bcd8739ae039 = $49b61417b640529d$var$IMG;


const $3915f7c1053cb8b3$var$PokemonCard = (props)=>{
    const { pokeData: pokeData } = props;
    console.log(pokeData);
    if (pokeData === null) return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
        children: "Loading..."
    });
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
        className: "pokemon-container",
        children: [
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                className: "pokemon-img",
                children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("img", {
                    src: pokeData.sprites.other["official-artwork"].front_default,
                    alt: "pokemon image"
                })
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                className: "pokemon-info",
                children: [
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h2", {
                        className: "pokemon-name",
                        children: pokeData.name
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                        className: "pokemon-stats",
                        children: [
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                                className: "stat-item",
                                children: [
                                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("span", {
                                        className: "stat-label",
                                        children: "HP:"
                                    }),
                                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("span", {
                                        className: "stat-value",
                                        children: pokeData.stats[0].base_stat
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                                className: "stat-item",
                                children: [
                                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("span", {
                                        className: "stat-label",
                                        children: "Attack:"
                                    }),
                                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("span", {
                                        className: "stat-value",
                                        children: pokeData.stats[1].base_stat
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                                className: "stat-item",
                                children: [
                                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("span", {
                                        className: "stat-label",
                                        children: "Defense:"
                                    }),
                                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("span", {
                                        className: "stat-value",
                                        children: pokeData.stats[2].base_stat
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                                className: "stat-item",
                                children: [
                                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("span", {
                                        className: "stat-label",
                                        children: "Special Attack:"
                                    }),
                                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("span", {
                                        className: "stat-value",
                                        children: pokeData.stats[3].base_stat
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                                className: "stat-item",
                                children: [
                                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("span", {
                                        className: "stat-label",
                                        children: "Speed:"
                                    }),
                                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("span", {
                                        className: "stat-value",
                                        children: pokeData.stats[5].base_stat
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
var $3915f7c1053cb8b3$export$2e2bcd8739ae039 = $3915f7c1053cb8b3$var$PokemonCard;


const $889bfb1e3e9bfc80$var$Body = ()=>{
    const [jsonData, setjsonData] = (0, $9WItx$react.useState)(null);
    const [searchText, setSearchText] = (0, $9WItx$react.useState)("");
    const [pokemonName, setPokemonName] = (0, $9WItx$react.useState)("pikachu");
    const fetchData = async ()=>{
        const URL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
        // setjsonData(data.sprites.other["official-artwork"]);
        setjsonData(data);
    };
    (0, $9WItx$react.useEffect)(()=>{
        fetchData();
    }, [
        pokemonName
    ]);
    const searchPokemon = ()=>{
        if (searchText !== "") setPokemonName(searchText);
    };
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
        className: "main-container",
        children: [
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("h1", {
                children: "Search Your Pokemon"
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsxs)("div", {
                className: "search",
                children: [
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("input", {
                        className: "search-text",
                        type: "text",
                        value: searchText,
                        onChange: (e)=>{
                            setSearchText(e.target.value);
                        }
                    }),
                    /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("button", {
                        className: "search-btn",
                        type: "button",
                        onClick: searchPokemon,
                        children: "Search"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)("div", {
                className: "pokemon-card-container",
                children: /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $3915f7c1053cb8b3$export$2e2bcd8739ae039), {
                    pokeData: jsonData
                })
            })
        ]
    });
};
var $889bfb1e3e9bfc80$export$2e2bcd8739ae039 = $889bfb1e3e9bfc80$var$Body;


const $da11a1101b2a894a$var$App = ()=>{
    return /*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)((0, $889bfb1e3e9bfc80$export$2e2bcd8739ae039), {});
};
const $da11a1101b2a894a$var$root = (0, ($parcel$interopDefault($9WItx$reactdomclient))).createRoot(document.querySelector(".root"));
$da11a1101b2a894a$var$root.render(/*#__PURE__*/ (0, $9WItx$reactjsxruntime.jsx)($da11a1101b2a894a$var$App, {}));


//# sourceMappingURL=App.js.map
