

export default actionStructures = [
    {
        role: "seer",
        actions: [
            {
                name: "vision"
                parameters: [
                    {
                        name: "target",
                        type: "player"
                    }
                ]
            }
        ]
    },{
        role: "witch",
        actions: [
            {
                name: "heal potion",
                parameters: [
                    {
                        name: "target",
                        type: "player"
                    }
                ]
            },
            {
                name: "dead potion",
                parameters: [
                    {
                        name: "target",
                        type: "player"
                    }
                ]
            }
        ]
    }
]