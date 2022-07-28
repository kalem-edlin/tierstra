
export const empty = {
    tiles: {},
    rows: {
        'tier-row-1': { id: 'tier-row-1', title: 'A', tileIds: []},
        'tier-row-2': { id: 'tier-row-2', title: 'B', tileIds: [] },
        'tier-row-3': { id: 'tier-row-3', title: 'C', tileIds: [] },
        'palette':    { id: 'palette', tileIds: []},
    },
    tierRowOrder: ['tier-row-1', 'tier-row-2', 'tier-row-3'],
}

// A preloaded initial data that defines the format of a tierlist object
export const exampleStarWars = {
        "tiles":{
           "1658926174730":{
              "width":1254,
              "height":1254,
              "x":396,
              "y":29,
              "content":"https://bgr.com/wp-content/uploads/2015/08/darth-vader.jpg?quality=82&strip=all",
              "id":"1658926174730",
              "alt":"added tile"
           },
           "1658926295401":{
              "width":467,
              "height":467,
              "x":296,
              "y":7,
              "content":"https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0NDU4NTkwMzE5MzU1MjQw/why-luke-skywalker-is-an-amazing-duelist.jpg",
              "id":"1658926295401",
              "alt":"added tile"
           },
           "1658926324524":{
              "width":672,
              "height":672,
              "x":222,
              "y":6,
              "content":"https://cdn.vox-cdn.com/thumbor/8Ha_WQBpQKqDum1YsQgJTCgdjQs=/0x0:786x393/1200x800/filters:focal(331x135:455x259)/cdn.vox-cdn.com/uploads/chorus_image/image/65101167/obi-wan.0.0.jpg",
              "id":"1658926324524",
              "alt":"added tile"
           },
           "1658926361002":{
              "width":746,
              "height":746,
              "x":130,
              "y":2,
              "content":"https://lumiere-a.akamaihd.net/v1/images/Qui-Gon-Jinn_d89416e8.jpeg?region=0%2C13%2C1536%2C769",
              "id":"1658926361002",
              "alt":"added tile"
           },
           "1658926410716":{
              "width":679,
              "height":679,
              "x":227,
              "y":30,
              "content":"https://images.saymedia-content.com/.image/t_share/MTc1MTEzODk5NTE4NjAxMDI4/top-terrible-things-about-watto-from-star-wars.jpg",
              "id":"1658926410716",
              "alt":"added tile"
           },
           "1658926434547":{
              "width":171,
              "height":171,
              "x":46,
              "y":1,
              "content":"data:image/jpeg;base64,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",
              "id":"1658926434547",
              "alt":"added tile"
           },
           "1658926493664":{
              "width":399,
              "height":399,
              "x":223,
              "y":13,
              "content":"https://lumiere-a.akamaihd.net/v1/images/Count-Dooku_4f552149.jpeg?region=0%2C0%2C1436%2C808&width=960",
              "id":"1658926493664",
              "alt":"added tile"
           },
           "1658926544802":{
              "width":195,
              "height":195,
              "x":4,
              "y":8,
              "content":"https://static.wikia.nocookie.net/starwars/images/5/50/Darth_Maul_profile.png",
              "id":"1658926544802",
              "alt":"added tile"
           },
           "1658926601897":{
              "width":240,
              "height":240,
              "x":111,
              "y":10,
              "content":"https://live.staticflickr.com/3923/15322000712_4954a6f978.jpg",
              "id":"1658926601897",
              "alt":"added tile"
           },
           "1658926633233":{
              "width":227,
              "height":227,
              "x":90,
              "y":7,
              "content":"https://upload.wikimedia.org/wikipedia/en/c/cb/Lando6-2.jpg",
              "id":"1658926633233",
              "alt":"added tile"
           },
           "1658926714426":{
              "width":458,
              "height":458,
              "x":224,
              "y":5,
              "content":"https://lumiere-a.akamaihd.net/v1/images/boba-fett-main_a8fade4d.jpeg?region=205%2C34%2C1064%2C598&width=960",
              "id":"1658926714426",
              "alt":"added tile"
           },
           "1658926753221":{
              "width":1374,
              "height":1374,
              "x":230,
              "y":-9,
              "content":"https://www.refinery29.com/images/9084590.jpg",
              "id":"1658926753221",
              "alt":"added tile"
           },
           "1658926778555":{
              "width":353,
              "height":353,
              "x":131,
              "y":17,
              "content":"https://images.immediate.co.uk/production/volatile/sites/3/2019/10/EP9-FF-001686-336e75b.jpg?quality=90&resize=620,413",
              "id":"1658926778555",
              "alt":"added tile"
           },
           "1658926810885":{
              "width":494,
              "height":494,
              "x":209,
              "y":41,
              "content":"https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=247%2C0%2C951%2C536",
              "id":"1658926810885",
              "alt":"added tile"
           },
           "1658926869359":{
              "width":530,
              "height":530,
              "x":216,
              "y":1,
              "content":"https://www.looper.com/img/gallery/the-untold-truth-of-emperor-palpatine/intro-1571941235.jpg",
              "id":"1658926869359",
              "alt":"added tile"
           },
           "1658926937790":{
              "width":198,
              "height":198,
              "x":1,
              "y":3,
              "content":"https://static.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
              "id":"1658926937790",
              "alt":"added tile"
           },
           "1658992274727":{
              "width":299,
              "height":299,
              "x":167,
              "y":14,
              "content":"https://i.guim.co.uk/img/media/7f461faef1a1f1601fca37eb6e865e248ca7f791/50_0_1133_680/master/1133.jpg?width=620&quality=85&fit=max&s=bbb8b9e5ff023d27e0ba1f6f3a876991",
              "id":"1658992274727",
              "alt":"added tile"
           }
        },
        "rows":{
           "tier-row-1":{
              "id":"tier-row-1",
              "title":"A",
              "tileIds":[]
           },
           "tier-row-2":{
              "id":"tier-row-2",
              "title":"B",
              "tileIds":[]
           },
           "tier-row-3":{
              "id":"tier-row-3",
              "title":"C",
              "tileIds":[]
           },
           "palette":{
              "id":"palette",
              "tileIds":[
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
                 "1658926434547",
                 "1658926295401",
                 "1658926324524",
                 "1658926753221",
                 "1658992274727",
                 "1658926778555"
              ]
           }
        },
        "tierRowOrder":[
           "tier-row-1",
           "tier-row-2",
           "tier-row-3"
        ]

}

export const exampleMusicGenres = {
    "tiles":{
       "1659012288551":{
          "width":132,
          "height":132,
          "x":-8,
          "y":-3,
          "content":"https://i.ibb.co/Wz9FWHY/Music-Genres-500x500-removebg-preview.png",
          "id":"1659012288551",
          "alt":"added tile"
       },
       "1659012295281":{
          "width":132,
          "height":132,
          "x":123,
          "y":-3,
          "content":"https://i.ibb.co/Wz9FWHY/Music-Genres-500x500-removebg-preview.png",
          "id":"1659012295281",
          "alt":"added tile"
       },
       "1659012304023":{
          "width":132,
          "height":132,
          "x":248,
          "y":-3,
          "content":"https://i.ibb.co/Wz9FWHY/Music-Genres-500x500-removebg-preview.png",
          "id":"1659012304023",
          "alt":"added tile"
       },
       "1659012309604":{
          "width":132,
          "height":132,
          "x":378,
          "y":-3,
          "content":"https://i.ibb.co/Wz9FWHY/Music-Genres-500x500-removebg-preview.png",
          "id":"1659012309604",
          "alt":"added tile"
       },
       "1659012317032":{
          "width":132,
          "height":132,
          "x":-6,
          "y":123,
          "content":"https://i.ibb.co/Wz9FWHY/Music-Genres-500x500-removebg-preview.png",
          "id":"1659012317032",
          "alt":"added tile"
       },
       "1659012321781":{
          "width":132,
          "height":132,
          "x":124,
          "y":123,
          "content":"https://i.ibb.co/Wz9FWHY/Music-Genres-500x500-removebg-preview.png",
          "id":"1659012321781",
          "alt":"added tile"
       },
       "1659012328647":{
          "width":132,
          "height":132,
          "x":248,
          "y":122,
          "content":"https://i.ibb.co/Wz9FWHY/Music-Genres-500x500-removebg-preview.png",
          "id":"1659012328647",
          "alt":"added tile"
       },
       "1659012334083":{
          "width":132,
          "height":132,
          "x":378,
          "y":122,
          "content":"https://i.ibb.co/Wz9FWHY/Music-Genres-500x500-removebg-preview.png",
          "id":"1659012334083",
          "alt":"added tile"
       },
       "1659012347056":{
          "width":132,
          "height":132,
          "x":-9,
          "y":248,
          "content":"https://i.ibb.co/Wz9FWHY/Music-Genres-500x500-removebg-preview.png",
          "id":"1659012347056",
          "alt":"added tile"
       },
       "1659012351863":{
          "width":132,
          "height":132,
          "x":123,
          "y":245,
          "content":"https://i.ibb.co/Wz9FWHY/Music-Genres-500x500-removebg-preview.png",
          "id":"1659012351863",
          "alt":"added tile"
       },
       "1659012359200":{
          "width":132,
          "height":132,
          "x":248,
          "y":246,
          "content":"https://i.ibb.co/Wz9FWHY/Music-Genres-500x500-removebg-preview.png",
          "id":"1659012359200",
          "alt":"added tile"
       },
       "1659012366968":{
          "width":132,
          "height":132,
          "x":378,
          "y":246,
          "content":"https://i.ibb.co/Wz9FWHY/Music-Genres-500x500-removebg-preview.png",
          "id":"1659012366968",
          "alt":"added tile"
       },
       "1659012374726":{
          "width":132,
          "height":132,
          "x":-8,
          "y":372,
          "content":"https://i.ibb.co/Wz9FWHY/Music-Genres-500x500-removebg-preview.png",
          "id":"1659012374726",
          "alt":"added tile"
       },
       "1659012379953":{
          "width":132,
          "height":132,
          "x":122,
          "y":372,
          "content":"https://i.ibb.co/Wz9FWHY/Music-Genres-500x500-removebg-preview.png",
          "id":"1659012379953",
          "alt":"added tile"
       },
       "1659012385938":{
          "width":132,
          "height":132,
          "x":246,
          "y":371,
          "content":"https://i.ibb.co/Wz9FWHY/Music-Genres-500x500-removebg-preview.png",
          "id":"1659012385938",
          "alt":"added tile"
       },
       "1659012393228":{
          "width":132,
          "height":132,
          "x":378,
          "y":371,
          "content":"https://i.ibb.co/Wz9FWHY/Music-Genres-500x500-removebg-preview.png",
          "id":"1659012393228",
          "alt":"added tile"
       }
    },
    "rows":{
       "tier-row-1":{
          "id":"tier-row-1",
          "title":"A",
          "tileIds":[
             
          ]
       },
       "tier-row-2":{
          "id":"tier-row-2",
          "title":"B",
          "tileIds":[
             
          ]
       },
       "tier-row-3":{
          "id":"tier-row-3",
          "title":"C",
          "tileIds":[
             
          ]
       },
       "palette":{
          "id":"palette",
          "tileIds":[
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
    "tierRowOrder":[
       "tier-row-1",
       "tier-row-2",
       "tier-row-3"
    ]
 }

export const exampleGifs = {
    "tiles":{
       "1659013055149":{
          "width":331,
          "height":331,
          "x":103,
          "y":22,
          "content":"https://educacion30.b-cdn.net/wp-content/uploads/2019/06/homer.gif",
          "id":"1659013055149",
          "alt":"added tile"
       },
       "1659013076499":{
          "width":263,
          "height":263,
          "x":85,
          "y":4,
          "content":"https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1",
          "id":"1659013076499",
          "alt":"added tile"
       },
       "1659013142686":{
          "width":245,
          "height":245,
          "x":105,
          "y":3,
          "content":"https://www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif",
          "id":"1659013142686",
          "alt":"added tile"
       },
       "1659013187953":{
          "width":370,
          "height":370,
          "x":49,
          "y":47,
          "content":"https://media3.giphy.com/media/j4fbBhYgu8mNEHkQ4w/giphy.gif",
          "id":"1659013187953",
          "alt":"added tile"
       },
       "1659013218953":{
          "width":377,
          "height":377,
          "x":82,
          "y":-2,
          "content":"https://learn.g2.com/hs-fs/hubfs/plan%20gif%20marketing%20strategy.gif?width=500&name=plan%20gif%20marketing%20strategy.gif",
          "id":"1659013218953",
          "alt":"added tile"
       },
       "1659014259837":{
          "width":586,
          "height":586,
          "x":42,
          "y":19,
          "content":"https://www.liveabout.com/thmb/9oyhVbEg1OHIPqxsUSe9Pif61U8=/640x640/filters:no_upscale():max_bytes(150000):strip_icc()/superdog-treadmill-5af44eb2eb97de003d8c771d.gif",
          "id":"1659014259837",
          "alt":"added tile"
       },
       "1659014286110":{
          "width":171,
          "height":171,
          "x":12,
          "y":16,
          "content":"https://media4.giphy.com/media/eiFHOrOrZkGEANiZLj/200w.gif?cid=82a1493bo2hym8tqncrdexky9ohcukqs1v2qukv8rai54szd&rid=200w.gif&ct=g",
          "id":"1659014286110",
          "alt":"added tile"
       },
       "1659014326511":{
          "width":218,
          "height":218,
          "x":69,
          "y":14,
          "content":"https://media1.giphy.com/media/QpfqKHA1fUXDi/giphy.gif",
          "id":"1659014326511",
          "alt":"added tile"
       },
       "1659014413159":{
          "width":190,
          "height":190,
          "x":1,
          "y":7,
          "content":"https://media3.giphy.com/media/l3HBbltOYjoNq/giphy.gif",
          "id":"1659014413159",
          "alt":"added tile"
       },
       "1659014611875":{
          "width":313,
          "height":313,
          "x":225,
          "y":-1,
          "content":"https://cdn.vox-cdn.com/thumbor/y6Ez78prHcwdeWtQaqnWvZEbX6U=/1200x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8689467/gatsby.gif",
          "id":"1659014611875",
          "alt":"added tile"
       },
       "1659014681731":{
          "width":327,
          "height":327,
          "x":115,
          "y":3,
          "content":"https://cdn.vox-cdn.com/thumbor/wtjj16tFNKgKJtcKGfhT18zBBtg=/1200x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8694215/mic.gif",
          "id":"1659014681731",
          "alt":"added tile"
       },
       "1659014711997":{
          "width":176,
          "height":176,
          "x":118,
          "y":7,
          "content":"https://cdn.vox-cdn.com/thumbor/lcxUhFW-IsDD7cCBEjof_quo7F8=/1200x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8689409/fellowkids.gif",
          "id":"1659014711997",
          "alt":"added tile"
       },
       "1659014739081":{
          "width":188,
          "height":188,
          "x":6,
          "y":20,
          "content":"https://cdn.vox-cdn.com/thumbor/Xv1hUbJfQgpzLTMQlPvuuYG2ZBw=/1200x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8689447/whiguyblink.gif",
          "id":"1659014739081",
          "alt":"added tile"
       },
       "1659014778248":{
          "width":239,
          "height":239,
          "x":38,
          "y":1,
          "content":"https://cdn.vox-cdn.com/thumbor/EGJqx-0aWa1stHlHuVJyTc9beIo=/1200x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8689071/My5Z2DO.gif",
          "id":"1659014778248",
          "alt":"added tile"
       },
       "1659014819565":{
          "width":305,
          "height":305,
          "x":26,
          "y":6,
          "content":"https://cdn.vox-cdn.com/thumbor/a-1Q8L6xzJ9g5lSIekdVdS2vPT4=/1200x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8687957/tenor.gif",
          "id":"1659014819565",
          "alt":"added tile"
       }
    },
    "rows":{
       "tier-row-1":{
          "id":"tier-row-1",
          "title":"A",
          "tileIds":[
             
          ]
       },
       "tier-row-2":{
          "id":"tier-row-2",
          "title":"B",
          "tileIds":[
             
          ]
       },
       "tier-row-3":{
          "id":"tier-row-3",
          "title":"C",
          "tileIds":[
             
          ]
       },
       "palette":{
          "id":"palette",
          "tileIds":[
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
             "1659013142686"
          ]
       }
    },
    "tierRowOrder":[
       "tier-row-1",
       "tier-row-2",
       "tier-row-3"
    ]
 }

