import { Tierlist } from 'data-types'

export const empty: Tierlist = {
    tiles: {},
    tiers: {
        "tier-1": { id: "tier-1", title: "A", tileIds: []},
        "tier-2": { id: "tier-2", title: "B", tileIds: [] },
        "tier-3": { id: "tier-3", title: "C", tileIds: [] },
        "palette": { id: "palette", title: "Palette", tileIds: []},
    },
    tierOrder: ["tier-1", "tier-2", "tier-3"],
}

// A preloaded initial data that defines the format of a tierlist object
export const exampleStarWars: Tierlist = {
    tiles: {
        "1658926174730": {
            content: "https://bgr.com/wp-content/uploads/2015/08/darth-vader.jpg?quality=82&strip=all",
            id: "1658926174730",
            alt: "added tile",
            crop: {
                width: 1254,
                height:1254,
                x: 396,
                y: 29,
            },
        },
        "1658926295401": {
            content: "https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0NDU4NTkwMzE5MzU1MjQw/why-luke-skywalker-is-an-amazing-duelist.jpg",
            id: "1658926295401",
            alt: "added tile",
            crop: {
            width: 467,
            height:467,
            x: 296,
            y: 7,
            },
        },
        "1658926324524": {
            content: "https://cdn.vox-cdn.com/thumbor/8Ha_WQBpQKqDum1YsQgJTCgdjQs=/0x0:786x393/1200x800/filters:focal(331x135:455x259)/cdn.vox-cdn.com/uploads/chorus_image/image/65101167/obi-wan.0.0.jpg",
            id: "1658926324524",
            alt: "added tile",
            crop: {
            width: 672,
            height:672,
            x: 120,
            y: 6,
            },
        },
        "1658926361002": {
            content: "https://lumiere-a.akamaihd.net/v1/images/Qui-Gon-Jinn_d89416e8.jpeg?region=0%2C13%2C1536%2C769",
            id: "1658926361002",
            alt: "added tile",
            crop: {
            width: 746,
            height:746,
            x: 130,
            y: 2,
            },
        },
        "1658926410716": {
            content: "https://images.saymedia-content.com/.image/t_share/MTc1MTEzODk5NTE4NjAxMDI4/top-terrible-things-about-watto-from-star-wars.jpg",
            id: "1658926410716",
            alt: "added tile",
            crop: {
            width: 679,
            height:679,
            x: 227,
            y: 30,
            },
        },
        "1658926493664": {
            content: "https://lumiere-a.akamaihd.net/v1/images/Count-Dooku_4f552149.jpeg?region=0%2C0%2C1436%2C808&width=960",
            id: "1658926493664",
            alt: "added tile",
            crop: {
            width: 399,
            height:399,
            x: 223,
            y: 13,
            },
        },
        "1658926544802": {
            content: "https://static.wikia.nocookie.net/starwars/images/5/50/Darth_Maul_profile.png",
            id: "1658926544802",
            alt: "added tile",
            crop: {
            width: 195,
            height:195,
            x: 4,
            y: 8,
            },
        },
        "1658926601897": {
            content: "https://live.staticflickr.com/3923/15322000712_4954a6f978.jpg",
            id: "1658926601897",
            alt: "added tile",
            crop: {
            width: 240,
            height:240,
            x: 111,
            y: 10,
            },
        },
        "1658926633233": {
            content: "https://upload.wikimedia.org/wikipedia/en/c/cb/Lando6-2.jpg",
            id: "1658926633233",
            alt: "added tile",
            crop: {
            width: 227,
            height:227,
            x: 90,
            y: 7,
            },
        },
        "1658926714426": {
            content: "https://lumiere-a.akamaihd.net/v1/images/boba-fett-main_a8fade4d.jpeg?region=205%2C34%2C1064%2C598&width=960",
            id: "1658926714426",
            alt: "added tile",
            crop: {
            width: 458,
            height:458,
            x: 224,
            y: 5,
            },
        },
        "1658926753221": {
            content: "https://www.refinery29.com/images/9084590.jpg",
            id: "1658926753221",
            alt: "added tile",
            crop: {
            width: 1374,
            height:1374,
            x: 230,
            y: -9,
            },
        },
        "1658926778555": {
            content: "https://images.immediate.co.uk/production/volatile/sites/3/2019/10/EP9-FF-001686-336e75b.jpg?quality=90&resize=620,413",
            id: "1658926778555",
            alt: "added tile",
            crop: {
            width: 353,
            height:353,
            x: 131,
            y: 17,
            },
        },
        "1658926810885": {
            content: "https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=247%2C0%2C951%2C536",
            id: "1658926810885",
            alt: "added tile",
            crop: {
            width: 494,
            height:494,
            x: 209,
            y: 41,
            },
        },
        "1658926869359": {
            content: "https://www.looper.com/img/gallery/the-untold-truth-of-emperor-palpatine/intro-1571941235.jpg",
            id: "1658926869359",
            alt: "added tile",
            crop: {
            width: 530,
            height:530,
            x: 216,
            y: 1,
            },
        },
        "1658926937790": {
            content: "https://static.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
            id: "1658926937790",
            alt: "added tile",
            crop: {
            width: 198,
            height:198,
            x: 1,
            y: 3,
            },
        },
        "1658992274727": {
            content: "https://i.guim.co.uk/img/media/7f461faef1a1f1601fca37eb6e865e248ca7f791/50_0_1133_680/master/1133.jpg?width=620&quality=85&fit=max&s=bbb8b9e5ff023d27e0ba1f6f3a876991",
            id: "1658992274727",
            alt: "added tile",
            crop: {
            width: 299,
            height:299,
            x: 167,
            y: 14,
            },
        }
    },
    tiers: {
        "tier-1": {
            id: "tier-1",
            title: "A",
            tileIds: []
        },
        "tier-2": {
            id: "tier-2",
            title: "B",
            tileIds: []
        },
        "tier-3": {
            id: "tier-3",
            title: "C",
            tileIds: []
        },
        "palette": {
            id: "palette",
            title: "Palette",
            tileIds: [
                "1658926493664",
                "1658926714426",
                "1658926869359",
                "1658926937790",
                "1658926174730",
                "1658926810885",
                "1658926410716",
                "1658926361002",
                "1658926601897",
                "1658926544802",
                "1658926633233",
                "1658926295401",
                "1658926324524",
                "1658926753221",
                "1658992274727",
                "1658926778555"
            ]
        }
    },
    "tierOrder": [
        "tier-1",
        "tier-2",
        "tier-3"
    ]

}

export const exampleMusicGenres = {
    tiles: {
       "1659012288551": {
          crop: {
            width: 132,
            height:132,
            x: -8,
            y: -3,
          },
            content: "https://i.ibb.co/Wz9FWHY/Music-Genres-500x500-removebg-preview.png",
          id: "1659012288551",
          alt: "added tile"
       },
       "1659012295281": {
          crop: {
            width: 132,
            height:132,
            x: 123,
            y: -3,
          },
            content: "https://i.ibb.co/Wz9FWHY/Music-Genres-500x500-removebg-preview.png",
          id: "1659012295281",
          alt: "added tile"
       },
       "1659012304023": {
          crop: {
            width: 132,
            height:132,
            x: 248,
            y: -3,
          },
            content: "https://i.ibb.co/Wz9FWHY/Music-Genres-500x500-removebg-preview.png",
          id: "1659012304023",
          alt: "added tile"
       },
       "1659012309604": {
          crop: {
            width: 132,
            height:132,
            x: 378,
            y: -3,
          },
            content: "https://i.ibb.co/Wz9FWHY/Music-Genres-500x500-removebg-preview.png",
          id: "1659012309604",
          alt: "added tile"
       },
       "1659012317032": {
          crop: {
            width: 132,
            height:132,
            x: -6,
            y: 123,
          },
            content: "https://i.ibb.co/Wz9FWHY/Music-Genres-500x500-removebg-preview.png",
          id: "1659012317032",
          alt: "added tile"
       },
       "1659012321781": {
          crop: {
            width: 132,
            height:132,
            x: 124,
            y: 123,
          },
            content: "https://i.ibb.co/Wz9FWHY/Music-Genres-500x500-removebg-preview.png",
          id: "1659012321781",
          alt: "added tile"
       },
       "1659012328647": {
          crop: {
            width: 132,
            height:132,
            x: 248,
            y: 122,
          },
            content: "https://i.ibb.co/Wz9FWHY/Music-Genres-500x500-removebg-preview.png",
          id: "1659012328647",
          alt: "added tile"
       },
       "1659012334083": {
          crop: {
            width: 132,
            height:132,
            x: 378,
            y: 122,
          },
            content: "https://i.ibb.co/Wz9FWHY/Music-Genres-500x500-removebg-preview.png",
          id: "1659012334083",
          alt: "added tile"
       },
       "1659012347056": {
          crop: {
            width: 132,
            height:132,
            x: -9,
            y: 248,
          },
            content: "https://i.ibb.co/Wz9FWHY/Music-Genres-500x500-removebg-preview.png",
          id: "1659012347056",
          alt: "added tile"
       },
       "1659012351863": {
          crop: {
            width: 132,
            height:132,
            x: 123,
            y: 245,
          },
            content: "https://i.ibb.co/Wz9FWHY/Music-Genres-500x500-removebg-preview.png",
          id: "1659012351863",
          alt: "added tile"
       },
       "1659012359200": {
          crop: {
            width: 132,
            height:132,
            x: 248,
            y: 246,
          },
            content: "https://i.ibb.co/Wz9FWHY/Music-Genres-500x500-removebg-preview.png",
          id: "1659012359200",
          alt: "added tile"
       },
       "1659012366968": {
          crop: {
            width: 132,
            height:132,
            x: 378,
            y: 246,
          },
            content: "https://i.ibb.co/Wz9FWHY/Music-Genres-500x500-removebg-preview.png",
          id: "1659012366968",
          alt: "added tile"
       },
       "1659012374726": {
          crop: {
            width: 132,
            height:132,
            x: -8,
            y: 372,
          },
            content: "https://i.ibb.co/Wz9FWHY/Music-Genres-500x500-removebg-preview.png",
          id: "1659012374726",
          alt: "added tile"
       },
       "1659012379953": {
          crop: {
            width: 132,
            height:132,
            x: 122,
            y: 372,
          },
            content: "https://i.ibb.co/Wz9FWHY/Music-Genres-500x500-removebg-preview.png",
          id: "1659012379953",
          alt: "added tile"
       },
       "1659012385938": {
          crop: {
            width: 132,
            height:132,
            x: 246,
            y: 371,
          },
            content: "https://i.ibb.co/Wz9FWHY/Music-Genres-500x500-removebg-preview.png",
          id: "1659012385938",
          alt: "added tile"
       },
       "1659012393228": {
          crop: {
            width: 132,
            height:132,
            x: 378,
            y: 371,
          },
            content: "https://i.ibb.co/Wz9FWHY/Music-Genres-500x500-removebg-preview.png",
          id: "1659012393228",
          alt: "added tile"
       }
    },
    tiers: {
       "tier-1": {
          id: "tier-1",
          title: "A",
          tileIds: [
             
          ]
       },
       "tier-2": {
          id: "tier-2",
          title: "B",
          tileIds: [
             
          ]
       },
       "tier-3": {
          id: "tier-3",
          title: "C",
          tileIds: [
             
          ]
       },
       "palette": {
          id: "palette",
          title: "Palette",
          tileIds: [
             "1659012366968",
             "1659012351863",
             "1659012295281",
             "1659012359200",
             "1659012309604",
             "1659012304023",
             "1659012347056",
             "1659012288551",
             "1659012334083",
             "1659012317032",
             "1659012321781",
             "1659012385938",
             "1659012379953",
             "1659012374726",
             "1659012328647",
             "1659012393228"
          ]
       }
    },
    "tierOrder":[
       "tier-1",
       "tier-2",
       "tier-3"
    ]
 }

export const exampleGifs = {
    tiles: {
        "1659013055149": {
            crop: {
            width: 331,
            height:331,
            x: 103,
            y: 22,
            },
            content: "https://educacion30.b-cdn.net/wp-content/uploads/2019/06/homer.gif",
            id: "1659013055149",
            alt: "added tile"
        },
        "1659013076499": {
            crop: {
            width: 263,
            height:263,
            x: 85,
            y: 4,
            },
            content: "https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1",
            id: "1659013076499",
            alt: "added tile"
        },
        "1659013142686": {
            crop: {
            width: 245,
            height:245,
            x: 105,
            y: 3,
            },
            content: "https://www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif",
            id: "1659013142686",
            alt: "added tile"
        },
        "1659013187953": {
            crop: {
            width: 370,
            height:370,
            x: 49,
            y: 47,
            },
            content: "https://media3.giphy.com/media/j4fbBhYgu8mNEHkQ4w/giphy.gif",
            id: "1659013187953",
            alt: "added tile"
        },
        "1659013218953": {
            crop: {
            width: 377,
            height:377,
            x: 82,
            y: -2,
            },
            content: "https://learn.g2.com/hs-fs/hubfs/plan%20gif%20marketing%20strategy.gif?width=500&name=plan%20gif%20marketing%20strategy.gif",
            id: "1659013218953",
            alt: "added tile"
        },
        "1659014259837": {
            crop: {
            width: 586,
            height:586,
            x: 42,
            y: 19,
            },
            content: "https://www.liveabout.com/thmb/9oyhVbEg1OHIPqxsUSe9Pif61U8=/640x640/filters:no_upscale():max_bytes(150000):strip_icc()/superdog-treadmill-5af44eb2eb97de003d8c771d.gif",
            id: "1659014259837",
            alt: "added tile"
        },
        "1659014286110": {
            crop: {
            width: 171,
            height:171,
            x: 12,
            y: 16,
            },
            content: "https://media4.giphy.com/media/eiFHOrOrZkGEANiZLj/200w.gif?cid=82a1493bo2hym8tqncrdexky9ohcukqs1v2qukv8rai54szd&rid=200w.gif&ct=g",
            id: "1659014286110",
            alt: "added tile"
        },
        "1659014326511": {
            crop: {
            width: 218,
            height:218,
            x: 69,
            y: 14,
            },
            content: "https://media1.giphy.com/media/QpfqKHA1fUXDi/giphy.gif",
            id: "1659014326511",
            alt: "added tile"
        },
        "1659014413159": {
            crop: {
            width: 190,
            height:190,
            x: 1,
            y: 7,
            },
            content: "https://media3.giphy.com/media/l3HBbltOYjoNq/giphy.gif",
            id: "1659014413159",
            alt: "added tile"
        },
        "1659014611875": {
            crop: {
            width: 313,
            height:313,
            x: 225,
            y: -1,
            },
            content: "https://cdn.vox-cdn.com/thumbor/y6Ez78prHcwdeWtQaqnWvZEbX6U=/1200x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8689467/gatsby.gif",
            id: "1659014611875",
            alt: "added tile"
        },
        "1659014681731": {
            crop: {
            width: 327,
            height:327,
            x: 115,
            y: 3,
            },
            content: "https://cdn.vox-cdn.com/thumbor/wtjj16tFNKgKJtcKGfhT18zBBtg=/1200x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8694215/mic.gif",
            id: "1659014681731",
            alt: "added tile"
        },
        "1659014711997": {
            crop: {
            width: 176,
            height:176,
            x: 118,
            y: 7,
            },
            content: "https://cdn.vox-cdn.com/thumbor/lcxUhFW-IsDD7cCBEjof_quo7F8=/1200x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8689409/fellowkids.gif",
            id: "1659014711997",
            alt: "added tile"
        },
        "1659014739081": {
            crop: {
            width: 188,
            height:188,
            x: 6,
            y: 20,
            },
            content: "https://cdn.vox-cdn.com/thumbor/Xv1hUbJfQgpzLTMQlPvuuYG2ZBw=/1200x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8689447/whiguyblink.gif",
            id: "1659014739081",
            alt: "added tile"
        },
        "1659014778248": {
            crop: {
            width: 239,
            height:239,
            x: 38,
            y: 1,
            },
            content: "https://cdn.vox-cdn.com/thumbor/EGJqx-0aWa1stHlHuVJyTc9beIo=/1200x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8689071/My5Z2DO.gif",
            id: "1659014778248",
            alt: "added tile"
        },
        "1659014819565": {
            crop: {
            width: 305,
            height:305,
            x: 26,
            y: 6,
            },
            content: "https://cdn.vox-cdn.com/thumbor/a-1Q8L6xzJ9g5lSIekdVdS2vPT4=/1200x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8687957/tenor.gif",
            id: "1659014819565",
            alt: "added tile"
        }
    },
    tiers: {
        "tier-1": {
            id: "tier-1",
            title: "A",
            tileIds: [
                
            ]
        },
        "tier-2": {
            id: "tier-2",
            title: "B",
            tileIds: [
                
            ]
        },
        "tier-3": {
            id: "tier-3",
            title: "C",
            tileIds: [
                
            ]
        },
        "palette": {
            id: "palette",
            title: "Palette",
            tileIds: [
                "1659014778248",
                "1659014711997",
                "1659013218953",
                "1659014286110",
                "1659014681731",
                "1659014413159",
                "1659013187953",
                "1659014611875",
                "1659014819565",
                "1659013055149",
                "1659013076499",
                "1659014739081",
                "1659014259837",
                "1659014326511",
                "1659013142686",
            ]
        }
    },
    "tierOrder":[
        "tier-1",
        "tier-2",
        "tier-3"
    ]
}

