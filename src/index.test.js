const rewire = require("rewire")
const index = rewire("./index")
const Game = index.__get__("Game")

const calculateWinner = index.__get__("calculateWinner")
// @ponicode
describe("handleClick", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Pierre Edouard", "Michael", "George"], ["Jean-Philippe", "Pierre Edouard", "Anas"], ["Edmond", "George", "Edmond"]]
        inst = new Game(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleClick(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleClick(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleClick(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleClick(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.handleClick(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.handleClick(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("jumpTo", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Anas", "Edmond", "George"], ["Anas", "Michael", "Jean-Philippe"], ["Michael", "Michael", "Michael"]]
        inst = new Game(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.jumpTo(360)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.jumpTo(5.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.jumpTo(2.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.jumpTo(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.jumpTo(3)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.jumpTo(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("calculateWinner", () => {
    test("0", () => {
        let callFunction = () => {
            calculateWinner(["George", "Pierre Edouard", "Anas"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            calculateWinner(["Anas", "Edmond", "Pierre Edouard"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            calculateWinner(["Michael", "Michael", "Michael"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            calculateWinner(["George", "Anas", "Anas"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            calculateWinner(["Edmond", "Pierre Edouard", "Anas"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            calculateWinner(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
