import * as CreateTransactionService from "./CreateTransactionService"
// @ponicode
describe("execute", () => {
    let inst: any

    beforeEach(() => {
        inst = new CreateTransactionService.default()
    })

    test("0", async () => {
        await inst.execute({ title: "Dynamic Quality Specialist", value: 64, type: "income", category: "Home Loan Account" })
    })

    test("1", async () => {
        await inst.execute({ title: "Dynamic Quality Specialist", value: 10, type: "income", category: "Investment Account" })
    })

    test("2", async () => {
        await inst.execute({ title: "Future Interactions Representative", value: 0, type: "outcome", category: "Investment Account" })
    })

    test("3", async () => {
        await inst.execute({ title: "Dynamic Quality Specialist", value: 0, type: "income", category: "Investment Account" })
    })

    test("4", async () => {
        await inst.execute({ title: "Dynamic Quality Specialist", value: 0, type: "outcome", category: "Credit Card Account" })
    })

    test("5", async () => {
        await inst.execute({ title: "", value: NaN, type: "outcome", category: "" })
    })
})
