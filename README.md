![soon_ logo](https://user-images.githubusercontent.com/20629455/28109490-27c0b602-66e7-11e7-9918-578beb7dfa9d.png)
![screen shot 2017-07-12 at 09 52 39](https://user-images.githubusercontent.com/20629455/28109776-2833e306-66e8-11e7-86d6-b285d08b3cb1.png)

___
<br>

# Node-standup-parser

A JavaScript class for parsing `standup.txt` files into JSON.

This project was used as a learning tool for logging and Behaviour Driven Development with Mocha, Chai and istanbul (tests can be ran with `npm test`).

This class is used within other projects where SOON_ standup data is required. For example projects which generate SVGs (as seen above) based on SOON_'s daily standups.

### Installation

`node-standup-parser` can be installed as a node-module by adding `"standup-parser": "git://github.com/jackhkmatthews/node-standup-parser#v[VERSION_NUMBER]"` to the dependencies in your `package.json` file and running `npm install`.

### Usage

Import the class in your code and instantiate it, call `.parse` with the `standup.txt` file's file path as an argument. This is the file which is to be parsed to JSON. `.parse` returns a promise and passes the complete JSON object to the `resolve` function. This object can then be used as desired:

```js
const StandupParser  = require('standup-parser').StandupParser;
const standupParser  = new StandupParser;
standupParser.parse(inputFilePath)
  .then(json => {
  	//do something with the JSON object
  	});

```

### Input File

The `standupParser.parse` method only works with the specific syntax and file type used by SOON_ to record standup formations (standing order) and passes (speaking order). The file type is `.txt` and the syntax is shown below.

```
01/03/2017: ken > florence > james > emma > fred > vanda > ryan > chris > ed > inga > alex | alex > ed > fred > ken > florence > emma > chris > ryan > vanda > inga > james

02/03/2017: vanda > ryan > emma > chris > greg > ed > florence > ken > inga > fred > alex | greg > ryan > florence > inga > vanda > chris > ken > alex > emma > ed > fred
```

### Output Object

Given the above file the output object will be:

```
[
    {
        "date": "2016-04-10T23:00:00.000Z",
        "positions": [
            "ken",
            "alex",
            "fred",
            "ryan",
            "greg",
            "ed",
            "chris",
            "radek",
            "florence",
            "vanda"
        ],
        "summaries": [
            "alex",
            "ed",
            "florence",
            "vanda",
            "ryan",
            "greg",
            "ken",
            "chris",
            "radek",
            "fred"
        ]
    },
    {
        "date": "2016-04-11T23:00:00.000Z",
        "positions": [
            "ken",
            "fred",
            "alex",
            "chris",
            "ryan",
            "ed",
            "radek",
            "james",
            "vanda",
            "florence",
            "greg"
        ],
        "summaries": [
            "alex",
            "james",
            "ryan",
            "florence",
            "fred",
            "chris",
            "ken",
            "ed",
            "radek",
            "greg",
            "vanda"
        ]
    }
]
```

### Task List

- [x] Add some console feedback to the passing process.
- [x] Add error logging for imperfect data.