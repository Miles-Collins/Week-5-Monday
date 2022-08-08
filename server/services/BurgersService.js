import { FakeDb } from "../db/FakeDb.js"
import { BadRequest } from "../utils/Errors.js"

class BurgersService {

async editBurger(burgerId, burgerData){
  let burger = this.getBurgerById(burgerId)

  return burger
}

async getBurgers() {
  return FakeDb.burgers
}

async createBurger(burgerData) {
burgerData.id = await FakeDb.burgers.length
FakeDb.burgers.push(burgerData)
return burgerData
}

async getBurgerById(burgerId) {
  let burger = await FakeDb.burgers.find(b => b.id == burgerId)
  if (!burger) {
    throw new BadRequest("Invalid ID")
  }
  return burger
}

async deleteBurger(burgerId) {
let burger = await this.getBurgerById(burgerId)
let burgerIndex = FakeDb.burgers.indexOf(burger)
FakeDb.burgers.splice(burgerIndex, 1)
return burger
}
 }

export const burgersService = new BurgersService()