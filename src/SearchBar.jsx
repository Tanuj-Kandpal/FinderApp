import React, { useState } from "react";

const mockData = [
  {
    id: 1,
    firstname: "Madlen",
    lastname: "McReedy",
    email: "mmcreedy0@google.nl",
    phonenumber: "Female",
  },
  {
    id: 2,
    firstname: "Page",
    lastname: "Gepp",
    email: "pgepp1@yandex.ru",
    phonenumber: "Male",
  },
  {
    id: 3,
    firstname: "Milly",
    lastname: "Farn",
    email: "mfarn2@fastcompany.com",
    phonenumber: "Female",
  },
  {
    id: 4,
    firstname: "Honoria",
    lastname: "Pockett",
    email: "hpockett3@webeden.co.uk",
    phonenumber: "Female",
  },
  {
    id: 5,
    firstname: "Johnna",
    lastname: "Matthiae",
    email: "jmatthiae4@abc.net.au",
    phonenumber: "Female",
  },
  {
    id: 6,
    firstname: "Konstance",
    lastname: "Sissland",
    email: "ksissland5@mail.ru",
    phonenumber: "Genderfluid",
  },
  {
    id: 7,
    firstname: "Fran",
    lastname: "Etherton",
    email: "fetherton6@nature.com",
    phonenumber: "Male",
  },
  {
    id: 8,
    firstname: "Sella",
    lastname: "Bernardeschi",
    email: "sbernardeschi7@trellian.com",
    phonenumber: "Female",
  },
  {
    id: 9,
    firstname: "Jemimah",
    lastname: "Maruska",
    email: "jmaruska8@youku.com",
    phonenumber: "Female",
  },
  {
    id: 10,
    firstname: "Millisent",
    lastname: "Terrett",
    email: "mterrett9@businessweek.com",
    phonenumber: "Female",
  },
  {
    id: 11,
    firstname: "Yuri",
    lastname: "Tilzey",
    email: "ytilzeya@newyorker.com",
    phonenumber: "Male",
  },
  {
    id: 12,
    firstname: "Nisse",
    lastname: "Upshall",
    email: "nupshallb@exblog.jp",
    phonenumber: "Female",
  },
  {
    id: 13,
    firstname: "Oates",
    lastname: "Sitwell",
    email: "ositwellc@oracle.com",
    phonenumber: "Male",
  },
  {
    id: 14,
    firstname: "Jasen",
    lastname: "Anstie",
    email: "janstied@ed.gov",
    phonenumber: "Male",
  },
  {
    id: 15,
    firstname: "Nicholas",
    lastname: "Chadburn",
    email: "nchadburne@oracle.com",
    phonenumber: "Male",
  },
  {
    id: 16,
    firstname: "Ginger",
    lastname: "Phinn",
    email: "gphinnf@mapquest.com",
    phonenumber: "Male",
  },
  {
    id: 17,
    firstname: "Pascale",
    lastname: "Shoebotham",
    email: "pshoebothamg@wsj.com",
    phonenumber: "Bigender",
  },
  {
    id: 18,
    firstname: "Shayna",
    lastname: "Vosper",
    email: "svosperh@umich.edu",
    phonenumber: "Female",
  },
  {
    id: 19,
    firstname: "Neill",
    lastname: "Foldes",
    email: "nfoldesi@comcast.net",
    phonenumber: "Male",
  },
  {
    id: 20,
    firstname: "Clarence",
    lastname: "Mabley",
    email: "cmableyj@w3.org",
    phonenumber: "Male",
  },
  {
    id: 21,
    firstname: "Alayne",
    lastname: "Hedman",
    email: "ahedmank@so-net.ne.jp",
    phonenumber: "Female",
  },
  {
    id: 22,
    firstname: "Lurline",
    lastname: "Waldrum",
    email: "lwaldruml@mit.edu",
    phonenumber: "Non-binary",
  },
  {
    id: 23,
    firstname: "Sigvard",
    lastname: "Klain",
    email: "sklainm@friendfeed.com",
    phonenumber: "Male",
  },
  {
    id: 24,
    firstname: "Fionnula",
    lastname: "Haldin",
    email: "fhaldinn@wp.com",
    phonenumber: "Female",
  },
  {
    id: 25,
    firstname: "Bruce",
    lastname: "Welfare",
    email: "bwelfareo@nydailynews.com",
    phonenumber: "Male",
  },
  {
    id: 26,
    firstname: "Averill",
    lastname: "McGeachie",
    email: "amcgeachiep@sitemeter.com",
    phonenumber: "Male",
  },
  {
    id: 27,
    firstname: "Reinhold",
    lastname: "Sofe",
    email: "rsofeq@washingtonpost.com",
    phonenumber: "Male",
  },
  {
    id: 28,
    firstname: "Cad",
    lastname: "Gotfrey",
    email: "cgotfreyr@shareasale.com",
    phonenumber: "Male",
  },
  {
    id: 29,
    firstname: "Livia",
    lastname: "Dumpleton",
    email: "ldumpletons@constantcontact.com",
    phonenumber: "Female",
  },
  {
    id: 30,
    firstname: "Ariel",
    lastname: "Fey",
    email: "afeyt@cloudflare.com",
    phonenumber: "Bigender",
  },
  {
    id: 31,
    firstname: "Edward",
    lastname: "Cocksedge",
    email: "ecocksedgeu@salon.com",
    phonenumber: "Male",
  },
  {
    id: 32,
    firstname: "Irina",
    lastname: "McKendry",
    email: "imckendryv@bloglovin.com",
    phonenumber: "Female",
  },
  {
    id: 33,
    firstname: "Karlee",
    lastname: "Metherell",
    email: "kmetherellw@liveinternet.ru",
    phonenumber: "Female",
  },
  {
    id: 34,
    firstname: "Thaddeus",
    lastname: "Migheli",
    email: "tmighelix@gnu.org",
    phonenumber: "Male",
  },
  {
    id: 35,
    firstname: "Rhianon",
    lastname: "Bountiff",
    email: "rbountiffy@163.com",
    phonenumber: "Female",
  },
  {
    id: 36,
    firstname: "Alvina",
    lastname: "Bront",
    email: "abrontz@aol.com",
    phonenumber: "Female",
  },
  {
    id: 37,
    firstname: "Ashbey",
    lastname: "Jobe",
    email: "ajobe10@skype.com",
    phonenumber: "Male",
  },
  {
    id: 38,
    firstname: "Danell",
    lastname: "Goodier",
    email: "dgoodier11@wired.com",
    phonenumber: "Female",
  },
  {
    id: 39,
    firstname: "Berkly",
    lastname: "Lythgoe",
    email: "blythgoe12@furl.net",
    phonenumber: "Male",
  },
  {
    id: 40,
    firstname: "Rey",
    lastname: "Goldthorpe",
    email: "rgoldthorpe13@multiply.com",
    phonenumber: "Female",
  },
  {
    id: 41,
    firstname: "Ruddie",
    lastname: "Hallbird",
    email: "rhallbird14@livejournal.com",
    phonenumber: "Male",
  },
  {
    id: 42,
    firstname: "Hal",
    lastname: "Jumont",
    email: "hjumont15@ustream.tv",
    phonenumber: "Male",
  },
  {
    id: 43,
    firstname: "Cody",
    lastname: "Youde",
    email: "cyoude16@booking.com",
    phonenumber: "Male",
  },
  {
    id: 44,
    firstname: "Calypso",
    lastname: "McAster",
    email: "cmcaster17@smugmug.com",
    phonenumber: "Female",
  },
  {
    id: 45,
    firstname: "Tandy",
    lastname: "Duthie",
    email: "tduthie18@w3.org",
    phonenumber: "Female",
  },
  {
    id: 46,
    firstname: "Anastasie",
    lastname: "Launchbury",
    email: "alaunchbury19@miibeian.gov.cn",
    phonenumber: "Genderfluid",
  },
  {
    id: 47,
    firstname: "Rolland",
    lastname: "Mullaly",
    email: "rmullaly1a@techcrunch.com",
    phonenumber: "Male",
  },
  {
    id: 48,
    firstname: "Berkley",
    lastname: "MacIlhargy",
    email: "bmacilhargy1b@bloglines.com",
    phonenumber: "Male",
  },
  {
    id: 49,
    firstname: "Bevin",
    lastname: "Faunt",
    email: "bfaunt1c@army.mil",
    phonenumber: "Male",
  },
  {
    id: 50,
    firstname: "Peyter",
    lastname: "Cussons",
    email: "pcussons1d@seattletimes.com",
    phonenumber: "Male",
  },
  {
    id: 51,
    firstname: "Addie",
    lastname: "Witson",
    email: "awitson1e@parallels.com",
    phonenumber: "Non-binary",
  },
  {
    id: 52,
    firstname: "Glendon",
    lastname: "Waddie",
    email: "gwaddie1f@nytimes.com",
    phonenumber: "Male",
  },
  {
    id: 53,
    firstname: "Reidar",
    lastname: "Fogt",
    email: "rfogt1g@usa.gov",
    phonenumber: "Male",
  },
  {
    id: 54,
    firstname: "Clareta",
    lastname: "Giovannardi",
    email: "cgiovannardi1h@flavors.me",
    phonenumber: "Female",
  },
  {
    id: 55,
    firstname: "Morley",
    lastname: "Gillingwater",
    email: "mgillingwater1i@mozilla.org",
    phonenumber: "Non-binary",
  },
  {
    id: 56,
    firstname: "Ragnar",
    lastname: "Ladbury",
    email: "rladbury1j@paypal.com",
    phonenumber: "Male",
  },
  {
    id: 57,
    firstname: "Rowena",
    lastname: "Sankey",
    email: "rsankey1k@ustream.tv",
    phonenumber: "Female",
  },
  {
    id: 58,
    firstname: "Geri",
    lastname: "Koop",
    email: "gkoop1l@nyu.edu",
    phonenumber: "Female",
  },
  {
    id: 59,
    firstname: "Paddie",
    lastname: "Hellmore",
    email: "phellmore1m@ovh.net",
    phonenumber: "Male",
  },
  {
    id: 60,
    firstname: "Barclay",
    lastname: "Jaume",
    email: "bjaume1n@scientificamerican.com",
    phonenumber: "Male",
  },
  {
    id: 61,
    firstname: "Decca",
    lastname: "Tuckwood",
    email: "dtuckwood1o@g.co",
    phonenumber: "Non-binary",
  },
  {
    id: 62,
    firstname: "Marius",
    lastname: "Geistbeck",
    email: "mgeistbeck1p@nbcnews.com",
    phonenumber: "Male",
  },
  {
    id: 63,
    firstname: "Lavina",
    lastname: "Sybe",
    email: "lsybe1q@theatlantic.com",
    phonenumber: "Female",
  },
  {
    id: 64,
    firstname: "Egbert",
    lastname: "de Quesne",
    email: "edequesne1r@netvibes.com",
    phonenumber: "Male",
  },
  {
    id: 65,
    firstname: "Petronia",
    lastname: "Geaveny",
    email: "pgeaveny1s@digg.com",
    phonenumber: "Female",
  },
  {
    id: 66,
    firstname: "Elihu",
    lastname: "Keune",
    email: "ekeune1t@netlog.com",
    phonenumber: "Male",
  },
  {
    id: 67,
    firstname: "Albina",
    lastname: "McElvine",
    email: "amcelvine1u@last.fm",
    phonenumber: "Female",
  },
  {
    id: 68,
    firstname: "Bail",
    lastname: "Garstang",
    email: "bgarstang1v@godaddy.com",
    phonenumber: "Male",
  },
  {
    id: 69,
    firstname: "Wallie",
    lastname: "Khadir",
    email: "wkhadir1w@xing.com",
    phonenumber: "Male",
  },
  {
    id: 70,
    firstname: "Tove",
    lastname: "Jantzen",
    email: "tjantzen1x@blinklist.com",
    phonenumber: "Female",
  },
  {
    id: 71,
    firstname: "Desi",
    lastname: "Togher",
    email: "dtogher1y@xing.com",
    phonenumber: "Male",
  },
  {
    id: 72,
    firstname: "Brandais",
    lastname: "Sturges",
    email: "bsturges1z@ucoz.com",
    phonenumber: "Female",
  },
  {
    id: 73,
    firstname: "Dorey",
    lastname: "Kik",
    email: "dkik20@statcounter.com",
    phonenumber: "Female",
  },
  {
    id: 74,
    firstname: "Zachery",
    lastname: "Keyson",
    email: "zkeyson21@thetimes.co.uk",
    phonenumber: "Male",
  },
  {
    id: 75,
    firstname: "Cedric",
    lastname: "Dunstone",
    email: "cdunstone22@themeforest.net",
    phonenumber: "Bigender",
  },
  {
    id: 76,
    firstname: "Fleming",
    lastname: "Pettko",
    email: "fpettko23@ocn.ne.jp",
    phonenumber: "Male",
  },
  {
    id: 77,
    firstname: "Orella",
    lastname: "Greeveson",
    email: "ogreeveson24@china.com.cn",
    phonenumber: "Female",
  },
  {
    id: 78,
    firstname: "Roosevelt",
    lastname: "Measor",
    email: "rmeasor25@businesswire.com",
    phonenumber: "Male",
  },
  {
    id: 79,
    firstname: "Gustaf",
    lastname: "Killerby",
    email: "gkillerby26@alibaba.com",
    phonenumber: "Male",
  },
  {
    id: 80,
    firstname: "Paula",
    lastname: "McKellar",
    email: "pmckellar27@seattletimes.com",
    phonenumber: "Non-binary",
  },
  {
    id: 81,
    firstname: "Germaine",
    lastname: "Churcher",
    email: "gchurcher28@spotify.com",
    phonenumber: "Female",
  },
  {
    id: 82,
    firstname: "Margeaux",
    lastname: "Kelston",
    email: "mkelston29@dmoz.org",
    phonenumber: "Female",
  },
  {
    id: 83,
    firstname: "Orazio",
    lastname: "Slocum",
    email: "oslocum2a@youtu.be",
    phonenumber: "Male",
  },
  {
    id: 84,
    firstname: "Ettore",
    lastname: "Syce",
    email: "esyce2b@altervista.org",
    phonenumber: "Male",
  },
  {
    id: 85,
    firstname: "Astrid",
    lastname: "Jossum",
    email: "ajossum2c@clickbank.net",
    phonenumber: "Female",
  },
  {
    id: 86,
    firstname: "Joellen",
    lastname: "Arcase",
    email: "jarcase2d@nifty.com",
    phonenumber: "Female",
  },
  {
    id: 87,
    firstname: "Isadora",
    lastname: "Harower",
    email: "iharower2e@tinyurl.com",
    phonenumber: "Female",
  },
  {
    id: 88,
    firstname: "Elwood",
    lastname: "Glavis",
    email: "eglavis2f@yelp.com",
    phonenumber: "Male",
  },
  {
    id: 89,
    firstname: "Minette",
    lastname: "Bayley",
    email: "mbayley2g@deviantart.com",
    phonenumber: "Female",
  },
  {
    id: 90,
    firstname: "Dagmar",
    lastname: "Streight",
    email: "dstreight2h@shareasale.com",
    phonenumber: "Female",
  },
  {
    id: 91,
    firstname: "Cristionna",
    lastname: "Wallace",
    email: "cwallace2i@sitemeter.com",
    phonenumber: "Polygender",
  },
  {
    id: 92,
    firstname: "Bartholemy",
    lastname: "Stigell",
    email: "bstigell2j@vistaprint.com",
    phonenumber: "Male",
  },
  {
    id: 93,
    firstname: "Karel",
    lastname: "Dumberrill",
    email: "kdumberrill2k@nsw.gov.au",
    phonenumber: "Female",
  },
  {
    id: 94,
    firstname: "Jaimie",
    lastname: "Omond",
    email: "jomond2l@dell.com",
    phonenumber: "Female",
  },
  {
    id: 95,
    firstname: "Reinaldos",
    lastname: "Normanell",
    email: "rnormanell2m@miibeian.gov.cn",
    phonenumber: "Male",
  },
  {
    id: 96,
    firstname: "Lelah",
    lastname: "Paddick",
    email: "lpaddick2n@chicagotribune.com",
    phonenumber: "Genderqueer",
  },
  {
    id: 97,
    firstname: "Ericka",
    lastname: "Cathrall",
    email: "ecathrall2o@wunderground.com",
    phonenumber: "Female",
  },
  {
    id: 98,
    firstname: "Hazlett",
    lastname: "Tivnan",
    email: "htivnan2p@dagondesign.com",
    phonenumber: "Male",
  },
  {
    id: 99,
    firstname: "Lee",
    lastname: "Flintiff",
    email: "lflintiff2q@barnesandnoble.com",
    phonenumber: "Male",
  },
  {
    id: 100,
    firstname: "Tome",
    lastname: "Nockolds",
    email: "tnockolds2r@myspace.com",
    phonenumber: "Male",
  },
];
function SearchBar() {
  const [searchInput, setSearchInput] = useState(""); // To track the input
  const [filteredData, setFilteredData] = useState(mockData); // To store the filtered results

  // Function to handle search
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase(); // Normalize input for case-insensitive search
    setSearchInput(value);

    const results = mockData.filter(
      (item) =>
        item.firstname.toLowerCase().includes(value) || // Search by firstname
        item.lastname.toLowerCase().includes(value) || // Search by lastname
        item.email.toLowerCase().includes(value) || // Search by email
        item.phonenumber.includes(value) // Search by phone number
    );

    setFilteredData(results); // Update filtered results
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Search</h1>
      <input
        type="text"
        placeholder="Search by name, email, or phone"
        value={searchInput}
        onChange={handleSearch}
        style={{
          width: "300px",
          padding: "10px",
          marginBottom: "20px",
          fontSize: "16px",
        }}
      />
      <div>
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                margin: "10px 0",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <p>
                <strong>ID:</strong> {item.id}
              </p>
              <p>
                <strong>Name:</strong> {item.firstname} {item.lastname}
              </p>
              <p>
                <strong>Email:</strong> {item.email}
              </p>
              <p>
                <strong>Phone:</strong> {item.phonenumber}
              </p>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
