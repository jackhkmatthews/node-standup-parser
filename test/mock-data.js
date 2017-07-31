const weekAsString = `11/04/2016: ken > alex > fred > ryan > greg > ed > chris > radek > florence > vanda | alex > ed > florence > vanda > ryan > greg > ken > chris > radek > fred

12/04/2016: ken > fred > alex > chris > ryan > ed > radek > james > vanda > florence > greg | alex > james > ryan > florence >fred > chris > ken > ed > radek > greg > vanda

13/04/2016: ken > vanda > james > ed > radek > chris > ryan > greg | greg > ryan > chris > radek > ed > james > vanda > ken

14/04/2016: ken > fred > alex > ryan > chris > james > ed > radek > florence > vanda > greg | vanda > chris > florence > ryan > ed > fred > greg > ken > james > radek > alex

15/04/2016: ken > fred > ryan > vanda > ed > alex > chris > james > florence > greg > radek | alex > ed > vanda > ryan > fred > ken > radek > greg > florence > james > chris
`;

const dayStrings = [
  `11/04/2016: ken > alex > fred > ryan > greg > ed > chris > radek > florence > vanda | alex > ed > florence > vanda > ryan > greg > ken > chris > radek > fred`,
  `12/04/2016: ken > fred > alex > chris > ryan > ed > radek > james > vanda > florence > greg | alex > james > ryan > florence >fred > chris > ken > ed > radek > greg > vanda`,
  `13/04/2016: ken > vanda > james > ed > radek > chris > ryan > greg | greg > ryan > chris > radek > ed > james > vanda > ken`,
  `14/04/2016: ken > fred > alex > ryan > chris > james > ed > radek > florence > vanda > greg | vanda > chris > florence > ryan > ed > fred > greg > ken > james > radek > alex`,
  `15/04/2016: ken > fred > ryan > vanda > ed > alex > chris > james > florence > greg > radek | alex > ed > vanda > ryan > fred > ken > radek > greg > florence > james > chris`
];

const formationsAsStrings = [ ': ken > alex > fred > ryan > greg > ed > chris > radek > florence > vanda |',
  ': ken > fred > alex > chris > ryan > ed > radek > james > vanda > florence > greg |',
  ': ken > vanda > james > ed > radek > chris > ryan > greg |',
  ': ken > fred > alex > ryan > chris > james > ed > radek > florence > vanda > greg |',
  ': ken > fred > ryan > vanda > ed > alex > chris > james > florence > greg > radek |' ];

const ordersAsStrings = [ '| alex > ed > florence > vanda > ryan > greg > ken > chris > radek > fred',
  '| alex > james > ryan > florence >fred > chris > ken > ed > radek > greg > vanda',
  '| greg > ryan > chris > radek > ed > james > vanda > ken',
  '| vanda > chris > florence > ryan > ed > fred > greg > ken > james > radek > alex',
  '| alex > ed > vanda > ryan > fred > ken > radek > greg > florence > james > chris' ];

const namesArray = [
  ['ken', 'alex', 'fred', 'ryan', 'greg', 'ed', 'chris', 'radek', 'florence', 'vanda'],
  ['ken', 'fred', 'alex', 'chris', 'ryan', 'ed', 'radek', 'james', 'vanda', 'florence', 'greg'],
  ['ken', 'vanda', 'james', 'ed', 'radek', 'chris', 'ryan', 'greg'],
  ['ken', 'fred', 'alex', 'ryan', 'chris', 'james', 'ed', 'radek', 'florence', 'vanda', 'greg'],
  ['ken', 'fred', 'ryan', 'vanda', 'ed', 'alex', 'chris', 'james', 'florence', 'greg', 'radek']
];

const orderNamesArray = ['alex', 'ed', 'florence', 'vanda', 'ryan', 'greg', 'ken', 'chris', 'radek', 'fred'];

const passesArray = [
  { passIndex: 0, from: 'alex', to: 'ed' },
  { passIndex: 1, from: 'ed', to: 'florence' },
  { passIndex: 2, from: 'florence', to: 'vanda' },
  { passIndex: 3, from: 'vanda', to: 'ryan' },
  { passIndex: 4, from: 'ryan', to: 'greg' },
  { passIndex: 5, from: 'greg', to: 'ken' },
  { passIndex: 6, from: 'ken', to: 'chris' },
  { passIndex: 7, from: 'chris', to: 'radek' },
  { passIndex: 8, from: 'radek', to: 'fred' }
];

const datesArray = ['11/04/2016', '12/04/2016', '13/04/2016', '14/04/2016', '15/04/2016'];

const day = {
  date: '11/04/2016',
  formation: ['ken', 'alex', 'fred', 'ryan', 'greg', 'ed', 'chris', 'radek', 'florence', 'vanda'],
  passes: [
    { passIndex: 0, from: 'alex', to: 'ed' },
    { passIndex: 1, from: 'ed', to: 'florence' },
    { passIndex: 2, from: 'florence', to: 'vanda' },
    { passIndex: 3, from: 'vanda', to: 'ryan' },
    { passIndex: 4, from: 'ryan', to: 'greg' },
    { passIndex: 5, from: 'greg', to: 'ken' },
    { passIndex: 6, from: 'ken', to: 'chris' },
    { passIndex: 7, from: 'chris', to: 'radek' },
    { passIndex: 8, from: 'radek', to: 'fred' }
  ]
};

const dayObject = {
  date: '',
  positions: ['ken', 'alex', 'fred', 'ryan', 'greg', 'ed', 'chris', 'radek', 'florence', 'vanda'],
  summaries: ['alex', 'ed', 'florence', 'vanda', 'ryan', 'greg', 'ken', 'chris', 'radek', 'fred']
};

const weekObject = [
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
    },
    {
        "date": "2016-04-12T23:00:00.000Z",
        "positions": [
            "ken",
            "vanda",
            "james",
            "ed",
            "radek",
            "chris",
            "ryan",
            "greg"
        ],
        "summaries": [
            "greg",
            "ryan",
            "chris",
            "radek",
            "ed",
            "james",
            "vanda",
            "ken"
        ]
    },
    {
        "date": "2016-04-13T23:00:00.000Z",
        "positions": [
            "ken",
            "fred",
            "alex",
            "ryan",
            "chris",
            "james",
            "ed",
            "radek",
            "florence",
            "vanda",
            "greg"
        ],
        "summaries": [
            "vanda",
            "chris",
            "florence",
            "ryan",
            "ed",
            "fred",
            "greg",
            "ken",
            "james",
            "radek",
            "alex"
        ]
    },
    {
        "date": "2016-04-14T23:00:00.000Z",
        "positions": [
            "ken",
            "fred",
            "ryan",
            "vanda",
            "ed",
            "alex",
            "chris",
            "james",
            "florence",
            "greg",
            "radek"
        ],
        "summaries": [
            "alex",
            "ed",
            "vanda",
            "ryan",
            "fred",
            "ken",
            "radek",
            "greg",
            "florence",
            "james",
            "chris"
        ]
    }
]

exports.weekAsString = weekAsString;
exports.dayStrings = dayStrings;
exports.formationsAsStrings = formationsAsStrings;
exports.ordersAsStrings = ordersAsStrings;
exports.namesArray = namesArray;
exports.orderNamesArray = orderNamesArray;
exports.passesArray = passesArray;
exports.datesArray = datesArray;
exports.day = day;
exports.dayObject = dayObject;
exports.weekObject = weekObject;